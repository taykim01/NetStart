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
            props.takeInput(`#${value}`)
        }
    }
    const variableColor = inputColor.length > 6 ? inputColor : 'var(--grey-600)'

    const handleInput = (e: any) => {
        const value = e.target.value;
        props.takeInput(value)
    }

    const [fileName, setFileName] = useState("")
    const handleUpload = (e: any) => {
        const file = e.target.files[0]
        setFileName(file.name)
        props.takeInput(file)
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
                <textarea
                    onChange={(e: any) => handleInput(e)}
                    placeholder={props.placeholder}
                />
            )
        case "text_input":
            return (
                <input className="text-input-container"
                    placeholder="입력하기..."
                    onChange={handleInput}
                />
            )
        case "upload":
            return (
                <label htmlFor="upload" className="text-input-container hf ca">
                    <input
                        id="upload"
                        name="upload"
                        type="file"
                        style={{ display: "none"}}
                        onChange={handleUpload}
                    />
                    <span className="p3 grey-700">{fileName || "업로드하기..."}</span>
                </label>
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
                        onBlur={(e: any) => handleInput(e)}
                        onFocus={props.focusFunction}
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