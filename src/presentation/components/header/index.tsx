import { ScrollContext } from "@/presentation/states/scroll_context";
import { useContext, useEffect } from "react";
import Button from "../buttons"
import "./header.css"
import { useSelector } from "react-redux";
import Hamburger from "../hamburger";

export default function Header() {
    const { scrollTo, refS1, refS2 } = useContext(ScrollContext);
    const responsive = useSelector((state: any) => state.responsive.responsive)

    useEffect(() => {
        console.log(responsive)
    }, [responsive])

    switch (responsive) {
        case "desktop":
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
        case "mobile":
            return (
                <div className="mobile-header">
                    <div className="h3 grey-900" onClick={() => scrollTo(refS1)}>NetStart</div>
                    <Hamburger />
                </div>
            )
    }

}