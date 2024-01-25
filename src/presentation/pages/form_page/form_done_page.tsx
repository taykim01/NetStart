import Button from "@/presentation/components/buttons";
import Lottie from "lottie-react";
import website from "@/presentation/assets/images/website.json"

export default function FormDonePage(props: any) {
    return (
        <div className="form-done">
            <Lottie
                animationData={website}
                style={{ width: 600, height: 300 }}
            />
            <div className="vf gap28" style={{ width: 320 }}>
                <div className="h2 dark">모두 끝났어요!</div>
                <div className="vf gap8">
                    <div className="p1 dark">3영업일 내 웹 제작 완료 후,</div>
                    <div className="p1 dark"><span className="light">{props.phoneNum}010-7122-8287</span>로 연락을 드릴게요.</div>
                    <div className="p1 dark">잠시만 기다려주세요.</div>
                </div>

                <Button text="홈으로 돌아가기" />
            </div>
        </div>
    )
}