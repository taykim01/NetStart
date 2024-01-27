import Button from "@/presentation/components/buttons";

export default function StepsUI(props: any) {
    return (
        <div className="vf gap20" style={{ width: 320 }}>
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
}