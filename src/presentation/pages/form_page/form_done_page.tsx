import Button from "@/presentation/components/buttons";
import Lottie from "lottie-react";
import website from "@/presentation/assets/images/website.json"
import { ScrollContext } from "@/presentation/states/scroll_context";
import { useContext } from "react";
import { useSelector } from "react-redux";

export default function FormDonePage(props: any) {
    const { scrollTo, refS1 } = useContext(ScrollContext);
    const inputContents = useSelector((state: any) => state.input.value)
    const responsive = useSelector((state: any) => state.responsive.responsive)

    switch (responsive) {
        case "desktop":
            return (
                <div className="form-done">
                    <Lottie
                        animationData={website}
                        style={{ width: 600, height: 300 }}
                    />
                    <div className="vf gap28" style={{ width: 320 }}>
                        <div className="h2 grey-900">모두 끝났어요!</div>
                        <div className="vf gap8">
                            <div className="p1 grey-900">3영업일 내 웹 제작 완료 후,</div>
                            <div className="p1 grey-900"><span className="light">{inputContents.contact}</span>로 연락을 드릴게요.</div>
                            <div className="p1 grey-900">잠시만 기다려주세요.</div>
                        </div>
                        <div className="vf gap8">
                            <Button text="홈으로 돌아가기" onClick={() => scrollTo(refS1)} />
                            <Button type="default_sub" text="다시 제출하기" onClick={props.back} />
                        </div>
                    </div>
                </div>
            )

        case "mobile":
            return (
                <div className="form-done-mobile">
                    <div className="emph2 grey-900">🎉 모두 끝났어요! 🎉</div>
                    <Lottie
                        animationData={website}
                        style={{ width: 500, height: 250 }}
                    />
                    <div className="vf gap4">
                        <div className="p3 grey-700">3영업일 내 웹 제작 완료 후,</div>
                        <div className="p3 grey-700"><span className="light">{inputContents.contact}</span>로 연락을 드릴게요.</div>
                        <div className="p3 grey-700">잠시만 기다려주세요.</div>
                    </div>
                    <div className="vf gap8 w100 pb60 pt20">
                        <Button text="홈으로 돌아가기" onClick={() => scrollTo(refS1)} />
                        <Button type="default_sub" text="다시 제출하기" onClick={props.back} />
                    </div>
                </div>
            )
    }
}