"use client"

import { useContext, useState } from "react";
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
        const submit_inquiry_use_case = new SubmitInquiryUseCase()
        let response;
        let reply;
        try {
            if (steps === TitleContent.length) {
                const validation = submit_inquiry_use_case.validateInquiry(inputContents)
                if (validation.result === Result.Success) {
                    setIsLoading(true)
                    response = await submit_inquiry_use_case.enrollInquiry(inputContents, file)
                    if (response.result === Result.Success) {
                        setSteps(steps + 1);
                        setIsLoading(false)
                    }
                } else {
                    setError(validation.payload)
                }
            } else {
                setSteps(steps + 1)
            }
        } catch (error) {
            reply = new MyResponse(Result.Fail, "네트워크 오류입니다. 관리자게에 문의주세요.", error)
            alert(reply.message)
        }
        reply = new MyResponse(Result.Success, "성공적으로 다음 화면으로 넘어가거나 신청서 제출에 성공했습니다.", response)
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
                        <div className="main sbj">
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
                            <FormsUI
                                takeInput={setFile}
                                steps={steps}
                                error={error}
                            />
                            {
                                isLoading && <Loading />
                            }
                        </div>
                    )

                case "mobile":
                    return (
                        <div className="main-mobile">
                            <TitleUi
                                pageStep={TitleContent[steps].step}
                                totalLength={TitleContent.length}
                                title={TitleContent[steps].title}
                                subtitle={TitleContent[steps].subtitle}
                                buttonText={TitleContent[steps].buttonText}
                                backButtonText={TitleContent[steps].backButtonText}
                                onClick={increaseStep}
                                backClick={decreaseStep}
                                contents={
                                    <FormsUI
                                        takeInput={setFile}
                                        steps={steps}
                                        error={error}
                                    />
                                }
                            />
                        </div>
                    )
            }

        case (steps > TitleContent.length):
            return <FormDonePage back={() => setSteps(0)} />
    }


}