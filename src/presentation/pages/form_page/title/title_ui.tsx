import Button from "@/presentation/components/buttons";
import ProgressCircle from "@/presentation/components/progress_circle";
import { useSelector } from "react-redux";

export default function TitleUi(props: any) {
    const responsive = useSelector((state: any) => state.responsive.responsive)

    switch (responsive) {
        case "desktop":
            return (
                <div className="vf gap40" style={{ width: 320, minWidth: 320 }}>
                    <div className="hf ca gap24">
                        <ProgressCircle progress={props.pageStep} />
                        <div className="h3 grey-700">Step {props.pageStep}</div>
                    </div>

                    <div className="vf gap8">
                        <div className="h1">{props.title}</div>
                        <div className="p3 grey-700">{props.subtitle}</div>
                    </div>
                    <div className="vf gap8 w100">
                        <Button text={props.buttonText} onClick={props.onClick} />
                        <Button type="default_sub" text={props.backButtonText} onClick={props.backClick} />
                    </div>
                </div>
            )

        case "mobile":
            return (
                <div className="vf gap20">
                    <div className="hf gap20 ca overline grey-700">
                        <div>아이디어 실행하기</div>
                        <div>{props.pageStep} / {props.totalLength}</div>
                    </div>
                    <div className="vf gap24">
                        <div className="vf gap8">
                            <div className="emph2 grey-900">{props.title}</div>
                            <div className="p3 grey-700">{props.subtitle}</div>
                        </div>
                        {
                            props.contents
                        }
                        <div className="vf gap8 w100 pb60">
                            <Button text={props.buttonText} onClick={props.onClick} />
                            <Button type="default_sub" text={props.backButtonText} onClick={props.backClick} />
                        </div>
                    </div>
                </div>
            )
    }
}