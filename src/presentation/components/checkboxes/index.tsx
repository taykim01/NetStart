import { useState } from "react";
import "./checkboxes.css"

export default function Checkboxes(props: any) {
    const [toggleStatus, setToggleStatus] = useState(false)

    const handleClick = () => {
        setToggleStatus(!toggleStatus)
        props.onClick()
    }

    switch (props.type) {
        case "toggle":
            return (
                <div
                    className={`${toggleStatus ? 'toggle-on' : 'toggle-off'} toggle p4`}
                    onClick={handleClick}
                >{props.text}</div>
            )
        case "checkTitle":
            return (
                <label onClick={handleClick} className="cyberpunk-checkbox-label">
                    <input onClick={handleClick} type="checkbox" className="cyberpunk-checkbox" />
                    {props.title}
                </label>
            )

        default:
            break;
    }
}