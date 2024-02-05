import FormMainPage from "./form_main_page";
import FormMood from "./form_mood";
import FormPageSelection from "./form_page_selection";
import FormProductDetail from "./form_product_detail";

export default function FormsUI(props: any) {

    switch (props.steps) {
        case 1:
            return <FormMainPage />
        case 2:
            return <FormPageSelection />
        case 3:
            return <FormMood takeInput={(pic:any) => props.takeInput(pic)} />
        case 4:
            return <FormProductDetail error={props.error} />
        default:
            break;
    }

}