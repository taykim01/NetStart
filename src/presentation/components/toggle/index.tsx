import { useState } from "react"
import "./toggle.css"

export default function Toggle(props: any) {
    const [status, setStatus] = useState(true)

    const handleClick = () => {
        setStatus(!status)
        props.takeInput(status)
    }

    return (
        <label className="toggle-switch-label">
            <div className="toggle-switch">
                <input className="toggle-state" type="checkbox" name="check" value="check" onClick={handleClick} />
                <div className="indicator"></div>
            </div>
        </label>
    )
}