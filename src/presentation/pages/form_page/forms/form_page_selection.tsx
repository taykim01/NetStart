import Button from "@/presentation/components/buttons";
import Card from "@/presentation/components/cards/card";
import FormCard from "@/presentation/components/cards/card_contents/form_card";
import SignUpCard from "@/presentation/components/cards/card_contents/sign_up_card";
import TextareaCard from "@/presentation/components/cards/card_contents/textarea_card";
import { useState } from "react";
import ItemsCarousel from "react-items-carousel"

export default function FormPageSelection(props: any) {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 50;
    return (
        <div style={{ padding: `0 ${chevronWidth}px`, width: 720, marginRight: -140 }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={2}
                leftChevron={<Button type="arrow_button" direction="left" />}
                rightChevron={<Button type="arrow_button" direction="right" />}
                outsideChevron
                infiniteLoop={false}
                firstAndLastGutter={true}
                chevronWidth={chevronWidth}
            >
                <Card title="랜딩 페이지에 필요한 정보를 적어주세요." contents={<TextareaCard />} />
                <Card title="신청 시 필요한 정보를 적어주세요." contents={<FormCard />} />
                <Card title="게시판에 필요한 정보를 적어주세요" contents={<TextareaCard />} />
                <Card title="블로그에 필요한 정보를 적어주세요" contents={<TextareaCard />} />
                <Card title="회원가입 시 필요한 정보를 적어주세요." contents={<SignUpCard />} />
                <Card title="포트폴리오에 필요한 정보를 적어주세요." contents={<TextareaCard />} />
            </ItemsCarousel>
        </div>
    );
}