import Button from "../buttons"
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="hf ca" style={{ gap: "8vw" }}>
                <div className="h2 dark">NetStart</div>
                <div className="p2 dark hf ca" style={{ gap: "2vw" }}>
                    <Button type="text_button" text="이용 방법" />
                    <Button type="text_button" text="장점" />
                    <Button type="text_button" text="가격" />
                    <Button type="text_button" text="클라이언트" />
                </div>
            </div>
            <Button text="무료로 신청하기" />
        </div>
    )
}