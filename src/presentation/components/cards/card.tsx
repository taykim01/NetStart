import "./cards.css"

export default function Card(props: any) {

    return (
        <div className="card">
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
            <div className="card-container">
                <div className="grey-900 h5">{props.title}</div>
                {props.contents}
            </div>
        </div>
    )
}