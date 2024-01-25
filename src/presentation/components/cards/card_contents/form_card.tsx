import Checkboxes from "../../checkboxes"

export default function FormCard(props: any) {

    const questionTypes = [
        {
            key: "string",
            text: "단답형"
        },
        {
            key: "textarea",
            text: "장문형"
        },
        {
            key: "number",
            text: "숫자"
        },
        {
            key: "date",
            text: "날짜"
        },
        {
            key: "radio",
            text: "객관식 질문(단일 선택)"
        },
        {
            key: "checkbox",
            text: "객관식 질문(다중 선택)"
        },
        {
            key: "others",
            text: "기타"
        },
    ]

    return (
        <div className="vf gap8">
            {
                questionTypes.map(
                    (type, index) => <Checkboxes key={index} type="checkTitle" title={type.text} />
                )
            }
        </div>
    )
}