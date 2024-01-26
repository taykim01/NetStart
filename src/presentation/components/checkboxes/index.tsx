import { useState } from "react";
import "./checkboxes.css"

export default function Checkboxes(props: any) {
    const [toggleStatus, setToggleStatus] = useState(false)

    const handleClick = () => {
        props.takeInput(props.title)
    }

    const handleToggle = () => {
        setToggleStatus(!toggleStatus)
        props.takeInput(props.text)
    }

    switch (props.type) {
        case "toggle":
            return (
                <div
                    className={`${toggleStatus ? 'toggle-on' : 'toggle-off'} toggle`}
                    onClick={handleToggle}
                >{props.text}</div>
            )
        case "checkTitle":
            return (
                <label className="cyberpunk-checkbox-label">
                    <input onClick={handleClick} type="checkbox" className="cyberpunk-checkbox" />
                    {props.title}
                </label>
            )

        default:
            break;
    }
}