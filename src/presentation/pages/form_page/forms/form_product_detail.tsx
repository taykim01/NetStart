import Input from "@/presentation/components/inputs"
import "../../pages.css"
import { useDispatch, useSelector } from "react-redux"
import { applyInput } from "@/presentation/states/features/inputSlice"

export default function FormProductDetail(props: any) {
    const dispatch = useDispatch()
    const inputContents = useSelector((state: any) => state.input.value)

    const handleInput = (input: string, key: string) => {
        dispatch(
            applyInput({
                ...inputContents,
                [key]: input
            })
        )
    }

    return (
        <div className="vf gap40" style={{ width: "30vw" }}>
            <div className="hf ca gap12">
                <Questions title="성함을 적어주세요." takeInput={(input: string) => handleInput(input, "picName")} />
                <Questions title="서비스명을 적어주세요." takeInput={(input: string) => handleInput(input, "productName")} />
            </div>
            <Questions title="전화번호나 이메일을 적어주세요." takeInput={(input: string) => handleInput(input, "contact")} />
            <Questions title="서비스를 설명해주세요." takeInput={(input: string) => handleInput(input, "productDetail")} />
            <Questions title="서비스의 주 고객에 대해 설명해주세요." takeInput={(input: string) => handleInput(input, "productConsumer")} />
            <Questions title="웹사이트를 통해 달성하고자 하는 주 목적은 무엇인가요?" takeInput={(input: string) => handleInput(input, "productAims")} />
            <div className="vf gap8 w100">
                <div className="hf gap4">
                    <div className="overline grey-700">기타 요청사항이 있으면 적어주세요.</div>
                    <div className="overline indicator-danger">*</div>
                </div>
                <Input type="textarea" takeInput={(input: string) => handleInput(input, "otherInquiry")} />
            </div>
        </div>
    )
}

function Questions(props: any) {

    const handleInput = (input: string) => {
        props.takeInput(input)
        console.log(input)
    }

    return (
        <div className="vf gap4 w100">
            <div className="hf gap4">
                <div className="overline grey-700">{props.title}</div>
                <div className="overline indicator-danger">*</div>
            </div>
            <Input takeInput={handleInput} />
        </div>
    )
}