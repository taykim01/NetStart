'use client'

import "../pages.css"
import Lottie from "lottie-react"
import web from "@/presentation/assets/images/lottie-web.json"
import Button from "@/presentation/components/buttons"

export default function MainPage() {
    return (
        <div className="main">
            <div className="vf gap48">
                <div className="vf gap32">
                    <div className="emph dark">
                        세상에서 가장 쉽게<br />
                        웹사이트 만들기
                    </div>
                    <div className="p1 dark">
                        다른 일도 바쁘니까, 이제 웹사이트 제작은 <span className="h4">NetStart</span>에게.
                    </div>
                </div>
                <div>
                    <Button type="learn_more" text="더 알아보기" />
                </div>
            </div>
            <Lottie
                animationData={web}
                style={{ width: 600, height: 300 }}
            />
        </div>
    )
}