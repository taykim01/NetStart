"use client"

import { useEffect, useState } from "react";
import StepsUI from "./steps/steps_ui";
import StepsContent from "./steps/steps_content";
import FormsUI from "./forms";
import FormDonePage from "./form_done_page";
import SubmitInquiryUseCase from "@/domain/usecases/submit_inquiry_use_case";
import { useSelector } from "react-redux";
import MyResponse, { Result } from "@/domain/MyResponse";

export default function FormPage() {
    const [steps, setSteps] = useState(0)
    const inputContents = useSelector((state:any) => state.input.value)
    const [file, setFile] = useState<File | null>(null);

    const increaseStep = async () => {
        const submit_inquiry_use_case = new SubmitInquiryUseCase()
        let response;
        try {
            if (steps === StepsContent.length - 1 && file) {
                response = await submit_inquiry_use_case.enrollInquiry(inputContents, file)
            } else {
                setSteps(steps + 1)
            }
        } catch (error) {
            const reply = new MyResponse(Result.Fail, "네트워크 오류입니다. 관리자게에 문의주세요.", error)
            console.log(reply.payload)
        }
        const reply = new MyResponse(Result.Success, "성공적으로 다음 화면으로 넘어가거나 신청서 제출에 성공했습니다.", response)
        console.log(reply.payload)
    }

    switch (steps < StepsContent.length) {
        case true:
            return (
                <div className="main">
                    <StepsUI
                        pageStep={StepsContent[steps].step}
                        totalLength={StepsContent.length}
                        title={StepsContent[steps].title}
                        subtitle={StepsContent[steps].subtitle}
                        buttonText={StepsContent[steps].buttonText}
                        onClick={increaseStep}
                    />
                    <FormsUI
                        takeInput={setFile}
                        steps={steps}
                        onClick={increaseStep}
                    />
        
                </div>
        
            )
    
        case false:
            return <FormDonePage />
    }


}