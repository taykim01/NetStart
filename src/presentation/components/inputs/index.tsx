import "./input.css"
import { useState } from "react"

export default function Input(props: any) {
    const [inputColor, setInputColor] = useState("")
    let idCounter = 0;
    const applyColor = (e: any) => {
        let value = e.target.value
        if (value.includes("#")) {
            value = value.replace(/#/g, "")
        }
        if (value.length > 6) {
            value = value.slice(0, 6);
        }
        setInputColor(`#${value}`)
    }
    const variableColor = inputColor.length > 6 ? inputColor : 'var(--grey-900)'



    const handleInput = (input: string) => {
        props.takeInput(input)
    }

    switch (props.type) {
        case "color_picker":
            return (
                <div className="wave-group" id={props.label} style={{ padding: "10px 10px 10px 0px" }} >
                    <style>
                        {`

                            #${props.label} .input {
                                border-bottom: 2px solid ${variableColor};
                            }

                        `}
                    </style>
                    <input
                        id={props.label}
                        type="text"
                        className="input"
                        onChange={applyColor}
                        value={inputColor}
                        style={{ color: variableColor }}
                    />
                    <span className="bar" id={props.label} style={{ backgroundColor: variableColor }} />
                    <label className="label">
                        {props.label?.split('').map((char: string, idx: number) => (
                            <span key={idx} style={{ color: variableColor }} className="label-char">{char}</span>
                        ))}
                    </label>
                </div>
            )
        case "textarea":
            return (
                <textarea onChange={() => handleInput} />
            )
        default:
            return (
                <div className="wave-group">
                    <style>
                        {`.bar:before,
                        .bar:after {
                        background: var(--main-500);
                        }`}
                    </style>
                    <input
                        required
                        type="text"
                        className="input"
                        onChange={() => handleInput}
                    />
                    <span className="bar" />
                    <label className="label">
                        {props.label?.split('').map((char: string, idx: number) => (
                            <span key={idx} className="label-char">{char}</span>
                        ))}
                    </label>
                </div>
            )
    }
}