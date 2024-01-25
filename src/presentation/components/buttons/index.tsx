import ArrowButton from "./arrow_button";
import "./buttons.css"
import DefaultButton from "./default_button";
import LearnMoreButton from "./learn_more_button";
import TextButton from "./text_button";

export default function Button(props: any) {
    switch (props.type) {
        case "learn_more":
            return (
                <LearnMoreButton text={props.text} onClick={props.onClick} />
            )
        case "text_button":
            return (
                <TextButton text={props.text} onClick={props.onClick} />
            )
        case "arrow_button":
            return (
                <ArrowButton text={props.text} direction={props.direction} onClick={props.onClick} />
            )
        default:
            return (
                <DefaultButton text={props.text} onClick={props.onClick} />
            )
    }
}