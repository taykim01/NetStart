'use client'

import { useState } from "react"
import "./dropdown.css"

export default function DropDown(props: any) {

    const questionTypes = ["단답형", "장문형", "숫자", "날짜", "단일 선택", "다중 선택", "기타"]

    const [selectedQuestion, setSelectedQuestion] = useState("" || props.defaultValue)
    const handleClick = (question: string) => {
        setSelectedQuestion(question)
        props.takeInput(question)
    }

    const deleteQuestion = () => {
        props.takeInput("삭제")
    }

    return (
        <div className="paste-button-drop">
            <button className="button-drop">{selectedQuestion || "선택"}</button>
            <div className="dropdown-content">
                {
                    questionTypes.map(
                        (question, index) => <a key={index} onClick={() => handleClick(question)}>{question}</a>
                    )
                }
                <a id="del" onClick={deleteQuestion}>삭제</a>
            </div>
        </div>

    )
}