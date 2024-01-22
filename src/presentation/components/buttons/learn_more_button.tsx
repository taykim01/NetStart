export default function LearnMoreButton(props: any) {
    return (
        <button className="learn-more">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">{props.text}</span>
        </button>
    )
}