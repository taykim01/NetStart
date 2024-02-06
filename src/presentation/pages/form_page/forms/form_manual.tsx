import TargetIcon from "@/presentation/assets/images/target_icon";
import Button from "@/presentation/components/buttons";

export default function FormManual(props: any) {

    return (
        <div className="pages_form_manual-page" ref={props.reference}>
            <div className="pages_manual-impact vf ca">
                <TargetIcon size={160} />
                <div className="vf ca gap16">
                    <div className="h4 grey-900">3분만에 웹 제작 완료하기!</div>
                    <div className="p3 grey-700">
                        웹 제작, 비싸고 어려울 필요 없어요.<br />
                        NetStart에게 어떤 웹사이트를 원하는지 설명해주세요.<br />
                        나머지는 NetStart에서 <span className="h5 grey-900">모두</span> 해결해드려요.
                    </div>
                </div>
                <div style={{ width: 320 }}><Button text="내 웹사이트 제작하기" onClick={props.onClick} /></div>
            </div>
        </div>
    )
}