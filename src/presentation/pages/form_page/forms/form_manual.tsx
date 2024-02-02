import TargetIcon from "@/presentation/assets/images/target_icon";
import Button from "@/presentation/components/buttons";

export default function FormManual(props: any) {

    return (
        <div className="pages_manual-page" ref={props.reference}>
            <div className="pages_manual-impact vf ca sbj">
                <TargetIcon size={120} />
                <div className="vf ca gap16">
                    <div className="h4 grey-900">3분만에 웹 제작 완료하기!</div>
                    <div className="p3 grey-700">
                        웹 제작, 비쌀 필요도 없고 어려울 필요도 없어요.<br />
                        개발자를 고용하느라, 직접 만드느라 신경 쓰지 마세요.<br /><br />
                        친구한테 얘기하듯,<br />
                        NetStart에게 어떤 웹사이트를 원하는지 설명해주세요.<br />
                        나머지는 NetStart에서 <span className="h5 grey-900">모두</span> 해결해드려요.
                    </div>
                </div>
                <Button text="내 웹사이트 제작하기" onClick={props.onClick} />
            </div>
        </div>
    )
}