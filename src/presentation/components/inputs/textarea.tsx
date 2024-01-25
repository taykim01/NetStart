export default function Textarea (props:any) {
    
    const handleInput = (e: any) => {
        const value = e.target.value;
        props.takeInput(value)
    }

    return (
        <textarea onChange={handleInput} />
    )
}