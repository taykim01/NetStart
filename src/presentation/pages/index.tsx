import { useContext } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { ScrollContext } from "../states/scroll_context";
import FormPage from "./form_page";
import MainPage from "./main_page";
import ManualPage from "./manual_page";
import StrengthsPage from "./strengths_page";

export default function Pages() {
    const { refS1, refS2, refS3, refS4 } = useContext(ScrollContext);

    return (
        <div>
            <Header />
            <div ref={refS1}><MainPage /></div>
            <div ref={refS4}><ManualPage /></div>
            <div ref={refS3}><StrengthsPage/></div>
            <div ref={refS2}><FormPage /></div>
            <Footer />
        </div>
    )
}