import { ScrollContext } from "@/presentation/states/scroll_context";
import { useContext, useEffect, useState } from "react";
import Button from "../buttons"
import "./header.css"
import { useSelector } from "react-redux";
import Hamburger from "../hamburger";

export default function Header() {
    const { scrollTo, refS1, refS2, refS3, refS4 } = useContext(ScrollContext);
    const responsive = useSelector((state: any) => state.responsive.responsive)
    const [dropdown, setDropdown] = useState(false)

    const [scrollPosition, setScrollPosition] = useState(window.scrollY);
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scroll = (toWhere: any) => {
        setTimeout(() => {
            scrollTo(toWhere)
            setDropdown(false)
        }, 100);
    }

    switch (responsive) {
        case "desktop":
            return (
                <div className={`header ${scrollPosition > (window.innerHeight - 120) ? "header_scroll-up" : null}`}>
                    <div className="hf ca" style={{ gap: "6vw" }}>
                        <div className="h2 grey-900" onClick={() => scrollTo(refS1)}>NetStart</div>
                        <div className="hf ca" style={{ gap: "2vw" }}>
                            <Button type="text_button" text="이용 방법" onClick={() => scrollTo(refS4)} />
                            <Button type="text_button" text="장점" onClick={() => scrollTo(refS3)} />
                            <Button type="text_button" text="가격" onClick={() => scrollTo(refS4)} />
                        </div>
                    </div>
                    <div style={{ width: 200 }}><Button text="무료로 신청하기" onClick={() => scrollTo(refS2)} /></div>
                </div>
            )
        case "mobile":
            return (
                <div>
                    <div className="mobile_header">
                        <div className="h3 grey-900" onClick={() => scrollTo(refS1)}>NetStart</div>
                        <Hamburger onClick={() => setDropdown(!dropdown)} checked={dropdown} />
                    </div>
                    <div className={`mobile_header-dropdown ${dropdown ? null : "mobile_drop"}`}>
                        <Button type="text_button" text="이용 방법" onClick={() => scroll(refS4)} />
                        <Button type="text_button" text="장점" onClick={() => scroll(refS3)} />
                        <Button type="text_button" text="가격" onClick={() => scroll(refS4)} />
                        <Button text="무료로 신청하기" onClick={() => scroll(refS2)} />
                    </div>
                    <div className={`mobile_background ${dropdown ? null : "mobile_blur_drop"}`} />
                </div>
            )
    }

}