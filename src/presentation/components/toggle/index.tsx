import { useEffect, useState } from "react"
import "./toggle.css"

export default function Toggle(props: any) {
    const [status, setStatus] = useState(props.isTrue)

    const handleClick = () => {
        props.takeInput(!status)
        setStatus(!status)
    }

    return (
        <label className="toggle-switch-label">
            <div className="toggle-switch">
                <input className={`toggle-state ${status ? "is-checked" : null}`} type="checkbox" name="check" onClick={handleClick} />
                <div className={`indicator ${status ? "is-checked" : null}`}></div>
            </div>
        </label>
    )
}