import { useState } from "react"
import Toggle from "../toggle"
import "./cards.css"

export default function Card(props: any) {
    const [toggle, setToggle] = useState(false)

    const getToggleValue = (e: boolean) => {
        setToggle(e)
    }

    return (
        <div className="card vf gap32 h100">
            <div className="hf ca sbj">
                <div className="tools">
                    <div className="circle">
                        <span className="red box"></span>
                    </div>
                    <div className="circle">
                        <span className="yellow box"></span>
                    </div>
                    <div className="circle">
                        <span className="green box"></span>
                    </div>
                </div>
                <div className="hf gap12 ca">
                    <div className="h6 grey-700">{toggle ? `${props.pageName} 사용` : "사용하지 않음"}</div>
                    <Toggle takeInput={getToggleValue} />
                </div>
            </div>

            <div className="vf gap12 h100">
                <div className="grey-900 h4">{props.pageName}</div>
                <div className={`card-container h100 ${toggle ? null : "disable-background"}`}>
                    <div className="grey-500 h6">{props.title}</div>
                    {props.contents}
                </div>
            </div>
        </div>
    )
}