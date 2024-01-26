import { useState } from "react";
import Input from "../../inputs";


export default function TextareaCard(props: any) {

    const handleInput = (value: string) => {
        props.takeInput(value)
    }

    return (
        <Input
            type="textarea"
            placeholder={props.placeholder}
            takeInput={handleInput}
            resize={"none"}
        />
    );
}