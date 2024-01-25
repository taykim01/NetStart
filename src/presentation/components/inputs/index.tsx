import "./input.css"
import ColorPicker from "./color_picker"
import Textarea from "./textarea"
import DefaultInput from "./default_input"

export default function Input(props: any) {

    const handleInput = (input: string) => {
        props.takeInput(input)
    }

    switch (props.type) {
        case "color_picker":
            return (
                <ColorPicker key={props.label} label={props.label} takeInput={handleInput} />
            )
        case "textarea":
            return (
                <Textarea key={props.label} label={props.label} takeInput={handleInput} />
            )
        default:
            return (
                <DefaultInput key={props.label} label={props.label} takeInput={handleInput} />
            )
    }
}