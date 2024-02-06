import { useSelector } from "react-redux"
import "./loading_animation.css"

export default function LoadingAnimation(props: any) {
    const responsive = useSelector((state: any) => state.responsive.responsive)

    switch (responsive) {
        case "desktop":
            return (
                <div className="loading_animation_card">
                    <div className="loading_animation_loader">
                        <div className="loading_animation_words">
                            <span className="loading_animation_word">버튼</span>
                            <span className="loading_animation_word">신청서</span>
                            <span className="loading_animation_word">기능</span>
                            <span className="loading_animation_word">카드</span>
                            <span className="loading_animation_word">UI</span>
                        </div>
                        <div style={{ padding: "0 0 10px 16px" }}>제작 중...</div>
                    </div>
                </div>
            )
        case "mobile":
            return (
                <div className="mobile_loading_animation_card">
                    <div className="mobile_loading_animation_loader">
                        <div className="mobile_loading_animation_words">
                            <span className="mobile_loading_animation_word">버튼</span>
                            <span className="mobile_loading_animation_word">신청서</span>
                            <span className="mobile_loading_animation_word">기능</span>
                            <span className="mobile_loading_animation_word">카드</span>
                            <span className="mobile_loading_animation_word">UI</span>
                        </div>
                        <div style={{ padding: "0 0 10px 16px" }}>제작 중...</div>
                    </div>
                </div>
            )
    }
}