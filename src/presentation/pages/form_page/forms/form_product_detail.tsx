import Input from "@/presentation/components/inputs"
import Textarea from "@/presentation/components/inputs/textarea"
import { useDispatch, useSelector } from "react-redux"

export default function FormProductDetail(props: any) {
    // const dispatch = useDispatch()
    // const inputContents = useSelector((state: any) => state.input.value)

    const handleInput = (input: string) => {

    }

    return (
        <div className="vf gap24">
            <div className="hf ca gap12">
                <Questions title="성함을 적어주세요." takeInput={handleInput} />
                <Questions title="회사명을 적어주세요." takeInput={handleInput} />
            </div>
            <Questions title="연락처를 적어주세요." takeInput={handleInput} />
            <Questions title="서비스를 설명해주세요." takeInput={handleInput} />
            <Questions title="서비스의 주 고객에 대해 설명해주세요." takeInput={handleInput} />
            <Questions title="웹사이트를 통해 달성하고자 하는 주 목적은 무엇인가요?" takeInput={handleInput} />
            <div className="vf gap8 w100">
                <div className="h5 dark">기타 요청사항이 있으면 적어주세요.</div>
                <Input type="textarea" takeInput={handleInput} />
            </div>
        </div>
    )
}

function Questions(props: any) {

    const handleInput = (input: string) => {
        props.takeInput(input)
    }

    return (
        <div className="vf gap4 w100">
            <div className="h5 dark">{props.title}</div>
            <Input takeInput={handleInput} />
        </div>
    )
}