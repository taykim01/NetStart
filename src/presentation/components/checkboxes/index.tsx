import { useState } from "react";
import "./checkboxes.css"
import CheckAndTitle from "./check_title";

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
            return <CheckAndTitle takeInput={(e:any) => props.takeInput(e)} title={props.title} />

        default:
            break;
    }
}