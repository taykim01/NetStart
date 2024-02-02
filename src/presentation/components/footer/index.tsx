import "./footer.css"

export default function Footer(props: any) {
    return (
        <div className="footer_main vf gap12 p3 grey-700">
            <div className="hf ca gap12">
                <div>넷스타트</div>
                <div>|</div>
                <div>890-19-01118</div>
            </div>
            <div className="hf ca gap12">
                <div>대표</div>
                <div>|</div>
                <div>김태은</div>
            </div>
            <div className="hf ca gap12">
                <div>주소</div>
                <div>|</div>
                <div>서울특별시 성북구 지봉로24길 70-6</div>
            </div>
            <div className="hf ca gap12">
                <div>연락처</div>
                <div>|</div>
                <div>taykim01@gmail.com</div>
            </div>
        </div>
    )
}