import Button from "@/presentation/components/buttons";
import Laundry from "@/presentation/components/laundry";
import LoadingAnimation from "@/presentation/components/loading_animation";
import LoadingScaleup from "@/presentation/components/loading_scaleup";
import { ScrollContext } from "@/presentation/states/scroll_context";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import LottieSale from "../../assets/images/lottie-sale.json"
import ItemsCarousel from "react-items-carousel"

export default function StrengthsPage(props: any) {
    const { scrollTo, refS2 } = useContext(ScrollContext);

    const returnThreeDaysLater = () => {
        const date = new Date();
        let day = date.getDay();
        let businessDaysFromNow = 3;
        let daysToAdd = 0;

        while (businessDaysFromNow > 0) {
            date.setDate(date.getDate() + 1);
            day = date.getDay();
            if (day !== 0 && day !== 6) {
                businessDaysFromNow--;
            }
            daysToAdd++;
        }

        const dayNames = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
        let dayOfWeek = dayNames[date.getDay()];

        if (daysToAdd > 7) {
            dayOfWeek = "다음 주 " + dayOfWeek;
        } else {
            dayOfWeek = "이번 주 " + dayOfWeek;
        }

        return dayOfWeek;
    }

    const services = [
        "서비스 정책서 작성",
        "웹 기획",
        "UI/UX 디자인",
        "디자인 시스템 정리",
        "Frontend 개발",
        "Backend 개발",
        "QA",
        "웹 호스팅",
        "SEO 최적화",
    ]
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;

    return (
        <div style={{ width: "100%" }} ref={props.reference}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                leftChevron={<div style={{ transform: "scale(0.8)" }}><Button type="arrow_button" direction="left" /></div>}
                rightChevron={<div style={{ transform: "scale(0.8)" }}><Button type="arrow_button" direction="right" /></div>}
                outsideChevron={false}
                infiniteLoop={false}
                firstAndLastGutter={false}
                chevronWidth={chevronWidth}
            >

                {/* section 1 */}
                <div className="pages_full-page" style={{ gap: "15vw" }}>
                    <div className="pages_block">
                        <div className="h3 grey-900">
                            처음부터 끝까지,
                            <br />신경 쓸 일 없는 웹 제작
                        </div>
                        <div className="p4 grey-700">복잡한 웹 제작, 이제 한번에 해결하세요!</div>
                        <Button text="제작하러 가기" onClick={() => scrollTo(refS2)} />
                    </div>
                    <div className="vf gap12" style={{ width: "42vw" }}>
                        <div className="h6 grey-900">NetStart에서 제공하는 과정</div>
                        {/* 자동 슬라이드 구현 필요 */}
                        <div className="pages_continuous-slider-track">
                            {
                                services.map(
                                    service => <div className="pages_animation h5">{service}</div>
                                )
                            }
                        </div>
                    </div>
                </div>


                {/* section 2 */}
                <div className="pages_full-page">
                    <div style={{ transform: "scale(1.2)" }}><LoadingAnimation /></div>
                    <div className="pages_block">
                        <div className="h3 grey-900">
                            지금 신청하고,
                            <br /><span className="grey-700">{returnThreeDaysLater()}</span>까지 받아보세요!
                        </div>
                        <div className="p4 grey-700">웹 제작, 오래 걸리지 않아요.<br />빠르게 서비스를 시작해보세요.</div>
                        <Button text="제작하러 가기" onClick={() => scrollTo(refS2)} />
                    </div>
                </div>


                {/* section 3 */}
                <div className="pages_full-page">
                    <div className="pages_block">
                        <div className="h3 grey-900">꾸준한 유지보수</div>
                        <div className="p4 grey-700">
                            모든 웹사이트는 유지보수가 필요해요.<br /><br />
                            꾸준한 유지보수로,<br />
                            어떤 상황에도 웹사이트가 문제 없이 작동하도록 대비해요.
                        </div>
                        <Button text="제작하러 가기" onClick={() => scrollTo(refS2)} />
                    </div>
                    <div style={{ margin: "0 auto", paddingLeft: "13vw", transform: "scale(1.2)" }}>
                        <Laundry />
                    </div>
                </div>


                <div className="pages_full-page">
                    <div style={{ margin: "0 auto", paddingRight: "6vw", transform: "scale(2)" }}>
                        <LoadingScaleup />
                    </div>
                    <div className="pages_block">
                        <div className="h3 grey-900">
                            빠른 업데이트,<br />
                            손 쉬운 서비스 확장
                        </div>
                        <div className="p4 grey-700">
                            스타트업은 잦은 업데이트가 필요해요.<br /><br />
                            NetStart의 업데이트 전담팀과 함께<br />
                            웹사이트를 빠르게 업데이트해보세요!
                        </div>
                        <Button text="제작하러 가기" onClick={() => scrollTo(refS2)} />
                    </div>

                </div>



                <div className="pages_full-page">
                    <div className="pages_block">
                        <div className="h3 grey-900">
                            지금 50% 할인 중!
                        </div>
                        <div className="p4 grey-700">
                            ₩1,990,000원의 웹 개발 비용,<br />
                            이제 단 ₩990,000원에 해결해보세요!<br />
                            2월 28일까지
                        </div>
                        <Button text="제작하러 가기" onClick={() => scrollTo(refS2)} />
                    </div>

                    <Lottie
                        animationData={LottieSale}
                        style={{ width: 250, height: 250 }}
                    />
                </div>
            </ItemsCarousel>
        </div>
    )
}