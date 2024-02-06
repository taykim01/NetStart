"use client"

import { useContext, useEffect, useState } from "react";
import TitleUi from "./title/title_ui";
import TitleContent from "./title/title_content";
import FormsUI from "./forms/forms_ui";
import FormDonePage from "./form_done_page";
import SubmitInquiryUseCase from "@/domain/usecases/submit_inquiry_use_case";
import { useSelector } from "react-redux";
import MyResponse, { Result } from "@/domain/MyResponse";
import { ScrollContext } from "@/presentation/states/scroll_context";
import Loading from "@/presentation/components/loading";
import FormManual from "./forms/form_manual";

export default function FormPage() {
    const [steps, setSteps] = useState(0)
    const inputContents = useSelector((state: any) => state.input.value)
    const [file, setFile] = useState();
    const { scrollTo, refS1 } = useContext(ScrollContext);
    const [error, setError] = useState([])
    const responsive = useSelector((state: any) => state.responsive.responsive)
    const [isLoading, setIsLoading] = useState(false)

    const increaseStep = async () => {
        let response;
        if (steps === TitleContent.length) {
            const submit_inquiry_use_case = new SubmitInquiryUseCase()
            const validation = submit_inquiry_use_case.validateInquiry(inputContents)
            if (validation.result === Result.Success) {
                setIsLoading(true)
                response = await submit_inquiry_use_case.enrollInquiry(inputContents, file)
                console.log(response)
                if (response.result === Result.Success) {
                    setSteps(steps + 1)
                    setIsLoading(false)
                } else {
                    alert(response.message)
                    console.log(response.payload)
                    setIsLoading(false)
                }
            } else {
                setError(validation.payload)
            }
        } else {
            setSteps(steps + 1)
        }
    }

    const decreaseStep = () => {
        if (steps === 0) {
            scrollTo(refS1)
        } else {
            setSteps(steps - 1)
        }
    }

    switch (true) {
        case (steps === 0):
            return <FormManual onClick={increaseStep} />
        case (steps > 0 && steps <= TitleContent.length):
            switch (responsive) {
                case "desktop":
                    return (
                        <div className={`main sbj`}>
                            <TitleUi
                                pageStep={TitleContent[steps - 1].step}
                                totalLength={TitleContent.length}
                                title={TitleContent[steps - 1].title}
                                subtitle={TitleContent[steps - 1].subtitle}
                                buttonText={TitleContent[steps - 1].buttonText}
                                backButtonText={TitleContent[steps - 1].backButtonText}
                                onClick={increaseStep}
                                backClick={decreaseStep}
                            />
                            <div className={`slide-basic`}>
                                <FormsUI
                                    takeInput={setFile}
                                    steps={steps}
                                    error={error}
                                />
                            </div>
                            {isLoading && <Loading />}
                        </div>
                    )

                case "mobile":
                    return (
                        <div className="main-mobile">
                            <TitleUi
                                pageStep={TitleContent[steps - 1].step}
                                totalLength={TitleContent.length}
                                title={TitleContent[steps - 1].title}
                                subtitle={TitleContent[steps - 1].subtitle}
                                buttonText={TitleContent[steps - 1].buttonText}
                                backButtonText={TitleContent[steps - 1].backButtonText}
                                onClick={increaseStep}
                                backClick={decreaseStep}
                                contents={<div className={`slide-basic`}>
                                    <FormsUI
                                        takeInput={setFile}
                                        steps={steps}
                                        error={error}
                                    />
                                </div>}
                            />
                            {isLoading && <Loading />}
                        </div>
                    )
            }

        case (steps > TitleContent.length):
            return <FormDonePage back={() => setSteps(0)} />
    }


}