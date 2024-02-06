import CalendarIcon from "@/presentation/assets/images/calendar_icon"
import FileIcon from "@/presentation/assets/images/file_icon"
import MailIcon from "@/presentation/assets/images/mail_icon"
import SettingIcon from "@/presentation/assets/images/setting_icon"
import { useSelector } from "react-redux"


export default function ManualPage(props: any) {
    const responsive = useSelector((state: any) => state.responsive.responsive)
    const iconSize = responsive === "desktop" ? "10vw" : "20vw"
    const manualContents = [
        {
            name: "신청하기",
            image: <FileIcon key="file" size={iconSize} />,
            main: <div>웹 제작을 신청해주세요.</div>,
            sub: <div>신청서에서 제시하는 가이드라인에 맞춰,<br />서비스를 설명해주세요.</div>
        },
        {
            name: "기다리기",
            image: <CalendarIcon key="calendar" size={iconSize} />,
            main: <div>서비스 설명 후,<br />하루만 기다려주세요.</div>,
            sub: <div>웹사이트 제작이 완료되면<br />연락처로 안내드려요. 잠시만 기다려주세요.</div>
        },
        {
            name: "웹사이트 받기",
            image: <MailIcon key="mail" size={iconSize} />,
            main: <div>제작된 웹사이트를 받아보세요.</div>,
            sub: <div>웹사이트를 보고,<br />이용을 원하시면 결제해주세요.<br /><br />가격은 부가세 포함 990,000원,<br />서버 비용은 별도에요.</div>
        },
        {
            name: "업데이트 받기",
            image: <SettingIcon key="settings" size={iconSize} />,
            main: <div>업데이트는 언제든지 말씀주세요.</div>,
            sub: <div>서비스가 필요한 만큼<br />웹사이트를 커스터마이징 해보세요.</div>
        },
    ]

    switch (responsive) {
        case "desktop":
            return (
                <div className="pages_manual-page" ref={props.reference}>
                    <div className="h2 grey-800 w100" style={{ boxSizing: "border-box", padding: "0 40px 40px 20px" }}>NetStart로 아이디어 실현하는 방법</div>
                    <div className="cards_selection">
                        {
                            manualContents.map(
                                (contents, id) =>
                                    <div key={id} className="card" style={{ alignItems: "flex-start" }} id="card">
                                        <div className="overline grey-600">Step {id + 1}: {contents.name}</div>
                                        <div style={{ margin: "0 auto" }}>{contents.image}</div>
                                        <div className="vf gap12">
                                            <div className="h6 grey-900">{contents.main}</div>
                                            <div className="p4 grey-700">{contents.sub}</div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            )
        case "mobile":
            return (
                <div className="mobile_pages_manual-page" ref={props.reference}>
                    <div className="h3 grey-800 w100"
                        style={{ boxSizing: "border-box", padding: "0 20px 20px 8px" }}>
                        NetStart로<br />아이디어 실현하는 방법
                    </div>
                    <div className="mobile_cards_selection">
                        {
                            manualContents.map(
                                (contents, id) =>
                                    <div key={id} className="card" style={{ alignItems: "flex-start" }} id="mobile_card">
                                        <div className="overline grey-600">Step {id + 1}: {contents.name}</div>
                                        <div style={{ margin: "0 auto" }}>{contents.image}</div>
                                        <div className="vf gap12">
                                            <div className="h6 grey-900">{contents.main}</div>
                                            <div className="p4 grey-700">{contents.sub}</div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                </div>
            )
    }
}