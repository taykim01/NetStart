import { useState } from "react"
import Toggle from "../toggle"
import "./cards.css"
import { useDispatch, useSelector } from "react-redux"
import { applyInput } from "@/presentation/states/features/inputSlice"

export default function Card(props: any) {
    const [toggle, setToggle] = useState(props.isTrue)
    const dispatch = useDispatch()
    const inputContents = useSelector((state: any) => state.input.value)

    const getToggleValue = (e: boolean) => {
        setToggle(e)
        if (!e) {
            if (props.pageName === "랜딩 페이지") {
                dispatch(applyInput({
                    ...inputContents,
                    landing: null
                }))
            } else if (props.pageName === "신청 폼 페이지") {
                dispatch(applyInput({
                    ...inputContents,
                    form: ["empty"]
                }))
            } else if (props.pageName === "커뮤니티 페이지") {
                dispatch(applyInput({
                    ...inputContents,
                    board: null
                }))
            } else if (props.pageName === "정보 게시판 페이지") {
                dispatch(applyInput({
                    ...inputContents,
                    blog: null
                }))
            } else if (props.pageName === "회원가입 페이지") {
                dispatch(applyInput({
                    ...inputContents,
                    auth: []
                }))
            } else if (props.pageName === "포트폴리오 페이지") {
                dispatch(applyInput({
                    ...inputContents,
                    portfolio: null
                }))
            }
        }
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
                    <Toggle takeInput={getToggleValue} isTrue={props.isTrue} />
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