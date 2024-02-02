import FormMood from "./form_mood";
import FormPageSelection from "./form_page_selection";
import FormProductDetail from "./form_product_detail";

export default function FormsUI(props: any) {

    switch (props.steps) {
        case 1:
            return <FormMood takeInput={(pic:any) => props.takeInput(pic)} />
        case 2:
            return <FormProductDetail error={props.error} />
        case 3:
            return <FormPageSelection />
        default:
            break;
    }

}