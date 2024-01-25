import Checkboxes from "../../checkboxes"

export default function SignUpCard(props: any) {
    const questionTypes = [
        {
            key: "name",
            text: "이름"
        },
        {
            key: "sex",
            text: "성별"
        },
        {
            key: "dob",
            text: "생년월일"
        },
        {
            key: "email",
            text: "이메일"
        },
        {
            key: "phoneNumber",
            text: "전화번호"
        },
        {
            key: "id",
            text: "ID"
        },
        {
            key: "password",
            text: "비밀번호"
        },
        {
            key: "terms",
            text: "약관 동의"
        },
    ]

    return (
        <div className="vf gap8">
            {
                questionTypes.map(
                    type => <Checkboxes type="checkTitle" title={type.text} />
                )
            }
        </div>
    )
}