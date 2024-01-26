import Input from "../../inputs";


export default function TextareaCard(props: any) {

    const handleInput = (e:any) => {
        const value = e.target.value;
        props.takeInput(value)
    }

    return (
        <Input
            type="textarea"
            placeholder="설명해주세요"
            onChange={handleInput}
            resize={"none"}
        />
    );
}