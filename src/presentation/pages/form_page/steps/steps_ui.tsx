import Button from "@/presentation/components/buttons";

export default function StepsUI(props: any) {
    return (
        <div className="vf gap20 grey-900" style={{ width: 400 }}>
            <div className="hf gap20 ca overline">
                <div>나만의 웹사이트 만들기</div>
                <div>{props.pageStep} / {props.totalLength}</div>
            </div>
            <div className="vf gap36">
                <div className="vf gap8">
                    <div className="h1">{props.title}</div>
                    <div className="p3">{props.subtitle}</div>
                </div>
                <Button text={props.buttonText} onClick={props.onClick} />
            </div>
        </div>
    )
}