export default function CheckAndTitle(props:any) {

    const handleClick = () => {
        props.takeInput(props.title)
    }

    return (
        <label onClick={handleClick} className="cyberpunk-checkbox-label">
            <input onClick={handleClick} type="checkbox" className="cyberpunk-checkbox" />
            {props.title}
        </label>
    )
}