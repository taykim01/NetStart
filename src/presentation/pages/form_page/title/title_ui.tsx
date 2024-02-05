import Button from "@/presentation/components/buttons";
import { useSelector } from "react-redux";

export default function TitleUi(props: any) {
    const responsive = useSelector((state: any) => state.responsive.responsive)

    switch (responsive) {
        case "desktop":
            return (
                <div className="vf gap20" style={{ minWidth: 320 }}>
                    <div className="hf gap20 ca overline grey-900">
                        <div>나만의 웹사이트 만들기</div>
                        <div>{props.pageStep} / {props.totalLength}</div>
                    </div>
                    <div className="vf gap36">
                        <div className="vf gap8">
                            <div className="h1">{props.title}</div>
                            <div className="p3 grey-700">{props.subtitle}</div>
                        </div>
                        <div className="vf gap8 w100">
                            <Button text={props.buttonText} onClick={props.onClick} />
                            <Button type="default_sub" text={props.backButtonText} onClick={props.backClick} />
                        </div>
                    </div>
                </div>
            )

        case "mobile":
            return (
                <div className="vf gap20" style={{ padding: "0 8vw", boxSizing: "border-box", width: 390 }}>
                    <div className="hf gap20 ca overline grey-900">
                        <div>나만의 웹사이트 만들기</div>
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