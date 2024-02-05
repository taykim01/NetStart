'use client'

import Button from "@/presentation/components/buttons";
import Card from "@/presentation/components/cards/card";
import FormCard from "@/presentation/components/cards/card_contents/form_card";
import SignUpCard from "@/presentation/components/cards/card_contents/sign_up_card";
import TextareaCard from "@/presentation/components/cards/card_contents/textarea_card";
import { applyInput } from "@/presentation/states/features/inputSlice";
import { useEffect, useState } from "react";
import ItemsCarousel from "react-items-carousel"
import { useDispatch, useSelector } from "react-redux";

export default function FormPageSelection(props: any) {
    const dispatch = useDispatch()
    const inputContents = useSelector((state: any) => state.input.value)
    const responsive = useSelector((state: any) => state.responsive.responsive)

    const handleInput = (key: string, input: any) => {
        if (key !== "form" && key !== "auth") {
            dispatch(
                applyInput({
                    ...inputContents,
                    [key]: input
                })
            )
        }
    }

    const defaultValues = [
        "유저가 처음으로 보는 페이지입니다.\n\n유저에게 소개, 홍보하고자 하는\n정보를 담습니다.",
        "유저가 서비스를 신청할 수 있는 페이지입니다.\n\n신청 시, 주소 등 유저에게 받아야 하는\n정보를 적어주세요.",
        "유저끼리 소통할 수 있는 커뮤니티 기능입니다.\n\n유저가 게시판을 생성하고,\n댓글을 달고, 좋아요를 누를 수 있습니다.\n\n추가로 필요한 기능을 얘기해주세요.",
        "유저에게 정보를 공지할 수 있는\n정보 게시판입니다.\n\n 블로그처럼 긴 글을 쓸 수도 있고,\n짧은 공지를 제공할 수도 있습니다.",
        "유저가 회원가입/로그인할\n수 있는 페이지입니다.\n\n유저가 가입할 때 제공해야 하는\n정보들을 입력해주세요.",
        "내 작품을 전시할 수 있는\n포트폴리오 페이지입니다.\n\n 전시에 필요한 정보를 제공해주세요."
    ]

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setInnerWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;
    return (
        <div style={
            responsive === "desktop"
                ? { width: "50vw", marginRight: "-10vw" }
                : responsive === "mobile"
                    ? { width: "100%" }
                    : {}
        }>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={(innerWidth * 0.65) / 440}
                leftChevron={<div style={{ transform: "scale(0.8)" }}><Button type="arrow_button" direction="left" /></div>}
                rightChevron={<div style={{ transform: "scale(0.8)" }}><Button type="arrow_button" direction="right" /></div>}
                firstAndLastGutter={responsive === "desktop"}
                chevronWidth={responsive === "desktop" ? chevronWidth : (chevronWidth / 4)}
            >
                <Card
                    pageName="신청 폼 페이지"
                    title="신청 시 필요한 정보를 적어주세요. (예시: 이메일)"
                    contents={
                        <FormCard
                            takeInput={(input: any) => handleInput("form", input)}
                            placeholder={defaultValues[1]}
                        />
                    }
                    isTrue={inputContents.form.length > 0}
                />
                <Card
                    pageName="커뮤니티 페이지"
                    title="커뮤니티에 필요한 정보를 적어주세요"
                    contents={
                        <TextareaCard
                            takeInput={(input: any) => handleInput("board", input)}
                            placeholder={defaultValues[2]}
                            value={inputContents.board}
                        />
                    }
                    isTrue={inputContents.board !== ""}
                />
                <Card
                    pageName="정보 게시판 페이지"
                    title="정보 게시판에 필요한 정보를 적어주세요"
                    contents={
                        <TextareaCard
                            takeInput={(input: any) => handleInput("blog", input)}
                            placeholder={defaultValues[3]}
                            value={inputContents.blog}
                        />
                    }
                    isTrue={inputContents.blog !== ""}
                />
                <Card
                    pageName="회원가입 페이지"
                    title="회원가입 시 필요한 정보를 적어주세요."
                    contents={
                        <SignUpCard
                            takeInput={(input: any) => handleInput("auth", input)}
                            placeholder={defaultValues[4]}
                            value={inputContents.auth}
                        />
                    }
                    isTrue={inputContents.auth !== ""}
                />
                <Card
                    pageName="포트폴리오 페이지"
                    title="포트폴리오에 필요한 정보를 적어주세요."
                    contents={
                        <TextareaCard
                            takeInput={(input: any) => handleInput("portfolio", input)}
                            placeholder={defaultValues[5]}
                            value={inputContents.portfolio}
                        />
                    }
                    isTrue={inputContents.portfolio !== ""}
                />
            </ItemsCarousel>
        </div>
    );
}