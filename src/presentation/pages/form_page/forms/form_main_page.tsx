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

    const placeholder = "홈 화면은 유저가 가장 먼저 보는 페이지입니다.\n유저에게 소개, 홍보하고자 하는 중요한 정보를 적어주세요.\n\n예시:\n• 브랜드 로고 및 이름\n• 핵심 메시지나 서비스의 가장 중요한 특징\n• 제품 또는 서비스의 이미지\n• 제품 또는 서비스의 설명\n• 행동 유도문구(Call-To-Action, CTA)\n• 고객 후기 및 프로모션 정보\n• 연락처 정보"

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
                    placeholder={placeholder}
                    takeInput={handleInput}
                    resize={"none"}
                />
            </div>

        </div>
    )
}