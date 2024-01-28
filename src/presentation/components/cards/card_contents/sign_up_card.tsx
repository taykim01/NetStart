import { useDispatch, useSelector } from "react-redux"
import Checkboxes from "../../checkboxes"
import { applyInput } from "@/presentation/states/features/inputSlice"
import { useEffect, useState } from "react"
import Input from "../../inputs"

export default function SignUpCard(props: any) {
    const dispatch = useDispatch()
    const inputContents = useSelector((state: any) => state.input.value)

    const questionTypes = ["이름", "성별", "생년월일", "이메일", "전화번호", "ID", "비밀번호", "약관 동의"]

    const [questions, setQuestions] = useState<string[]>([] || inputContents.auth)
    const handleInput = (input: any) => {
        let updatedQuestions;
        if (questions.includes(input)) {
            updatedQuestions = questions.filter(q => q !== input);
        } else {
            updatedQuestions = [...questions, input];
        }
        setQuestions(updatedQuestions);
        dispatch(applyInput({
            ...inputContents,
            auth: updatedQuestions
        }));
    }

    const othersItem = inputContents.auth
    ? inputContents.auth
        .find((element: string) => element.includes('기타'))
        ?.split(': ')[1]
    : null

    const [othersStatus, setOthersStatus] = useState(othersItem ? true : false)

    const handleOthersCheck = () => {
        setOthersStatus(!othersStatus)
        let updatedQuestions;
        updatedQuestions = questions.filter(q => !q.includes("기타"));
        setQuestions(updatedQuestions);
        dispatch(applyInput({
            ...inputContents,
            auth: updatedQuestions
        }));
    }

    const handleOthersInput = (input: any) => {
        let updatedQuestions;

        updatedQuestions = [...questions, `기타: ${input}`]
        setQuestions(updatedQuestions);

        dispatch(applyInput({
            ...inputContents,
            auth: updatedQuestions
        }));
    }

    const deleteRepetition = () => {
        let updatedQuestions;
        updatedQuestions = questions.filter(q => !q.includes("기타"));
        setQuestions(updatedQuestions);
        dispatch(applyInput({
            ...inputContents,
            auth: updatedQuestions
        }));
    }

    return (
        <div className="vf gap8">
            {
                questionTypes.map(
                    (name, index) => <Checkboxes
                        key={index}
                        type="checkTitle"
                        title={name}
                        takeInput={(arg: object) => handleInput(arg)}
                        isTrue={inputContents.auth.includes(name)}
                    />
                )
            }
            <div className="hf ca gap8">
                <Checkboxes
                    type="checkTitle"
                    title="기타"
                    takeInput={handleOthersCheck}
                    isTrue={othersItem}
                />
                {
                    othersStatus &&
                    <div style={{ marginBottom: -2 }}>
                        <Input
                            takeInput={handleOthersInput}
                            focusFunction={deleteRepetition}
                            value={othersItem}
                        />
                    </div>
                }
            </div>

        </div>
    )
}