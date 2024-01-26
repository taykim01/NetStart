import "./input.css"
import { useState } from "react"

export default function Input(props: any) {
    const [inputColor, setInputColor] = useState("")
    const id = props.label;
    const applyColor = (e: any) => {
        let value = e.target.value
        if (value.includes("#")) {
            value = value.replace(/#/g, "")
        }
        if (value.length > 6) {
            value = value.slice(0, 6);
        }
        if (value.length === 0) {
            setInputColor("")
        } else {
            setInputColor(`#${value}`)
        }
    }
    const variableColor = inputColor.length > 6 ? inputColor : 'var(--grey-600)'



    const handleInput = (input: string) => {
        props.takeInput(input)
    }

    switch (props.type) {
        case "color_picker":
            return (
                <div className="wave-group" id={id} style={{ padding: "10px 10px 10px 0px" }} >
                    <style>
                        {`#${id} .bar:before, #${id} .bar:after {
                                background: ${variableColor};
                            }
                            #${id} .input {
                                border-bottom: 2px solid ${variableColor};
                            }
                            #${id} .input:focus ~ label .label-char,
                            #${id} .input:valid ~ label .label-char {
                                color: ${variableColor}
                            }
                        `}
                    </style>
                    <input
                        required
                        type="text"
                        className="input"
                        onChange={applyColor}
                        value={inputColor}
                        style={{ color: variableColor }}
                    />
                    <span className="bar" id={id} style={{ backgroundColor: variableColor }} />
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