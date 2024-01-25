export default function DefaultButton(props: any) {
    return (
        <button className="button type1" onClick={props.onClick}>
            <span className="btn-txt">{props.text}</span>
        </button>
    )
}