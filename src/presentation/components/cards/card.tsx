import "./cards.css"

export default function Card(props: any) {

    return (
        <div className="card vf gap32 h100">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className="green box"></span>
                </div>
            </div>
            <div className="vf gap12 h100">
                <div className="grey-900 h4">{props.pageName}</div>
                <div className="card-container">
                    <div className="grey-500 h6">{props.title}</div>
                    {props.contents}
                </div>
            </div>
        </div>
    )
}