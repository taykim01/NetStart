'use client'

import "../pages.css"
import Lottie from "lottie-react"
import web from "@/presentation/assets/images/lottie-web.json"
import Button from "@/presentation/components/buttons"
import { ScrollContext } from "@/presentation/states/scroll_context"
import { useContext } from "react"
import { useViewportWidth } from "@/presentation/hooks/useResponsive"
import { useSelector } from "react-redux"

export default function MainPage() {
    const { scrollTo, refS2, refS3 } = useContext(ScrollContext);
    useViewportWidth()
    const responsive = useSelector((state: any) => state.responsive.responsive)

    switch (responsive) {
        case "desktop":
            return (
                <div className="main">
                    <div className="vf gap48">
                        <div className="vf gap32">
                            <div className="h1 grey-900">
                                세상에서 가장 쉽게<br />
                                웹사이트 만들기
                            </div>
                            <div className="p1 grey-900">
                                다른 일도 바쁘니까, 이제 웹사이트 제작은 <span className="h4">NetStart</span>에게.
                            </div>
                        </div>
                        <div>
                            <Button
                                type="learn_more"
                                text="더 알아보기"
                                onClick={() => scrollTo(refS3)}
                            />
                        </div>
                    </div>
                    <Lottie
                        animationData={web}
                        style={{ width: 600, height: 300 }}
                    />
                </div>
            )

        case "mobile":
            return (
                <div className="main-mobile">
                    <div className="vf gap20 w100">
                        <div className="emph grey-900 tca">
                            세상에서 가장 쉽게<br />
                            웹사이트 만들기
                        </div>
                        <Lottie
                            animationData={web}
                            style={{ width: 300, height: 200, transform: "translateX(5vw)" }}
                        />
                        <div className="p4 grey-700 tca">
                            다른 일도 바쁘니까,<br />이제 웹사이트 제작은 <span className="h6">NetStart</span>에게.
                        </div>
                    </div>
                    <Button
                        text="더 알아보기"
                        onClick={() => scrollTo(refS2)}
                    />
                </div>
            )
    }
}