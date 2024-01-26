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
                <Card pageName="랜딩 페이지" title="랜딩 페이지에 필요한 정보를 적어주세요." contents={<TextareaCard />} />
                <Card pageName="신청 폼 페이지" title="신청 시 필요한 정보를 적어주세요." contents={<FormCard />} />
                <Card pageName="커뮤니티 페이지" title="커뮤니티에 필요한 정보를 적어주세요" contents={<TextareaCard />} />
                <Card pageName="게시판 페이지" title="블로그에 필요한 정보를 적어주세요" contents={<TextareaCard />} />
                <Card pageName="회원가입 페이지" title="회원가입 시 필요한 정보를 적어주세요." contents={<SignUpCard />} />
                <Card pageName="포트폴리오 페이지" title="포트폴리오에 필요한 정보를 적어주세요." contents={<TextareaCard />} />
            </ItemsCarousel>
        </div>
    );
}