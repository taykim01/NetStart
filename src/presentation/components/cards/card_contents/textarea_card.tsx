import Textarea from "../../inputs/textarea";


export default function TextareaCard(props: any) {

    const handleInput = (e:any) => {
        const value = e.target.value;
        props.takeInput(value)
    }

    return (
        <Textarea
            placeholder="설명해주세요"
            onChange={handleInput}
            resize={"none"}
        />
    );
}