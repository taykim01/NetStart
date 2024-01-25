"use client"

import { useState } from "react";
import StepsUI from "./steps/steps_ui";
import StepsContent from "./steps/steps_content";
import FormsUI from "./forms";
import FormDonePage from "./form_done_page";

export default function FormPage() {
    const [steps, setSteps] = useState(0)

    const increaseStep = () => {
        if (steps < StepsContent.length) {
            setSteps(steps + 1)
        } else {
            
        }
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
                        steps={steps}
                        onClick={increaseStep}
                    />
        
                </div>
        
            )
    
        case false:
            return <FormDonePage />
    }


}