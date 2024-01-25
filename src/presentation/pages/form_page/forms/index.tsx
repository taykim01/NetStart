import FormMood from "./form_mood";
import FormPageSelection from "./form_page_selection";
import FormProductDetail from "./form_product_detail";

export default function FormsUI(props: any) {

    switch (props.steps) {
        case 0:
            return <FormMood />
        case 1:
            return <FormPageSelection />
        case 2:
            return <FormProductDetail />
        default:
            break;
    }

}