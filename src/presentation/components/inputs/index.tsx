import "./input.css"
import { useState } from "react"

export default function Input(props: any) {
    const [inputColor, setInputColor] = useState("")
    let idCounter = 0;
    const id = `wave-group-${idCounter++}`; // assign a unique id to each ColorPicker
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
                <div className="wave-group" id={id}>
                    <style>
                        {`#${id} .bar:before, #${id} .bar:after {
                                background: ${variableColor};
                            }
                            #${id} .input {
                                border-bottom: 2px solid ${variableColor};
                            }
                            #${id} .input:focus ~ label .label-char,
                            #${id} .input:valid ~ label .label-char {
                                color: ${inputColor || 'var(--grey-900)'}
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
                    <span className="bar" />
                    <label className="label">
                        {props.label?.split('').map((char: string, idx: number) => (
                            <span key={idx} className="label-char">{char}</span>
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
                        {`.bar:before, .bar:after {
                        background: white;
                    }
                    .input {
                        border-bottom: 1.5px solid var(--grey-900);
                    }
                    .input:focus ~ label .label-char,
                    .input:valid ~ label .label-char {
                        color: 'var(--grey-900)'
                    }
                `}
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