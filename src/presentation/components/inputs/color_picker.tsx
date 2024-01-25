import { useState } from "react"

let idCounter = 0;

export default function ColorPicker(props: any) {
    const [inputColor, setInputColor] = useState("")
    const id = `wave-group-${idCounter++}`; // assign a unique id to each ColorPicker

    const applyInput = (e: any) => {
        let value = e.target.value
        if (value.includes("#")) {
            value = value.replace(/#/g, "")
        }
        if (value.length > 6) {
            value = value.slice(0, 6);
        }
        setInputColor(`#${value}`)
    }

    const variableColor = inputColor.length > 6 ? inputColor : 'var(--dark)'
    
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
                        color: ${inputColor || 'var(--dark)'}
                    }
                `}
            </style>
            <input
                required
                type="text"
                className="input"
                onChange={applyInput}
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
}