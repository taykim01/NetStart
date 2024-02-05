import Input from "@/presentation/components/inputs";
import { applyInput } from "@/presentation/states/features/inputSlice";
import { useDispatch, useSelector } from "react-redux";

export default function FormMainPage(props: any) {
    const dispatch = useDispatch()
    const inputContents = useSelector((state: any) => state.input.value)

    const handleInput = (e: any) => {
        const value = e.target.value
        dispatch(
            applyInput({
                ...inputContents,
                main: value
            })
        )
    }

    return (
        <div className="form_page-home-card vf gap32 h100">
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
            </div>

            <div className="vf gap8 w100 h100">
                <div className="overline grey-700">홈 화면에는 무엇이 들어가야 하나요?</div>
                <Input
                    type="textarea"
                    placeholder={"유저가 처음으로 보는 페이지입니다.\n\n유저에게 소개, 홍보하고자 하는\n정보를 담습니다."}
                    takeInput={handleInput}
                    resize={"none"}
                />
            </div>

        </div>
    )
}