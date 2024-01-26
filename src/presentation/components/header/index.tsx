import { ScrollContext } from "@/presentation/states/scroll_context";
import { useContext } from "react";
import Button from "../buttons"
import "./header.css"

export default function Header() {
    const { scrollTo, refS1, refS2 } = useContext(ScrollContext);

    return (
        <div className="header">
            <div className="hf ca" style={{ gap: "6vw" }}>
                <div className="h2 grey-900" onClick={() => scrollTo(refS1)}>NetStart</div>
                <div className="hf ca" style={{ gap: "2vw" }}>
                    <Button type="text_button" text="이용 방법" />
                    <Button type="text_button" text="장점" />
                    <Button type="text_button" text="가격" />
                    <Button type="text_button" text="클라이언트" />
                </div>
            </div>
            <Button text="무료로 신청하기" onClick={() => scrollTo(refS2)} />
        </div>
    )
}