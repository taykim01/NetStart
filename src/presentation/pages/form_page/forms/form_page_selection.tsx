'use client'

import Button from "@/presentation/components/buttons";
import Card from "@/presentation/components/cards";
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
        "예시:\n• 글 작성 및 수정\n• 댓글 및 대댓글\n• 키워드 검색 기능\n• 게시물 정렬 기능\n• 좋아요 및 싫어요\n• 신고하기\n• 프로필 기능\n• 파일 첨부",
        "예시:\n• 공지사항 작성 및 수정\n• 공지 검색\n• 공지글 카테고리 분류 \n• 공지글 정렬\n• 댓글 또는 문의\n• 공지사항 고정",
        "예시:\n• 작업물 소개\n• 카테고리 분류\n• 연락처 및 소셜 미디어 링크\n• 이력서 업로드\n• 피드백 또는 문의\n• 검색 기능"
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
                numberOfCards={responsive === "desktop" ? (innerWidth * 0.65) / 440 : 1}
                leftChevron={<div style={{ transform: "scale(0.8)" }}><Button type="arrow_button" direction="left" /></div>}
                rightChevron={<div style={{ transform: "scale(0.8)" }}><Button type="arrow_button" direction="right" /></div>}
                firstAndLastGutter={responsive === "desktop"}
                chevronWidth={responsive === "desktop" ? chevronWidth : (chevronWidth / 4)}
            >
                <Card
                    pageName="신청 폼 페이지"
                    title={<div>
                        유저가 <span className="fw8 grey-800">서비스를 신청</span>할 수 있는 페이지입니다.<br />
                        신청 시 유저에게 받아야 하는 정보를 적어주세요.
                    </div>}
                    contents={
                        <FormCard
                            takeInput={(input: any) => handleInput("form", input)}
                        />
                    }
                    isTrue={inputContents.form.length > 0}
                />
                <Card
                    pageName="커뮤니티 게시판 페이지"
                    title={<div>
                        <span className="fw8 grey-800">유저끼리 소통</span>할 수 있는 커뮤니티 게시판 페이지입니다.<br />
                        유저가 게시판을 생성하고, 댓글을 달고,<br />
                        좋아요를 누를 수 있습니다.
                    </div>}
                    contents={
                        <TextareaCard
                            takeInput={(input: any) => handleInput("board", input)}
                            placeholder={defaultValues[0]}
                            value={inputContents.board}
                        />
                    }
                    isTrue={inputContents.board !== ""}
                />
                <Card
                    pageName="정보 공지 페이지"
                    title={<div>
                        유저에게 <span className="fw8 grey-800">정보를 공지</span>할 수 있는 페이지입니다.<br />
                        블로그처럼 긴 글을 쓸 수도 있고,<br />
                        짧은 공지를 제공할 수도 있습니다.
                    </div>}
                    contents={
                        <TextareaCard
                            takeInput={(input: any) => handleInput("blog", input)}
                            placeholder={defaultValues[1]}
                            value={inputContents.blog}
                        />
                    }
                    isTrue={inputContents.blog !== ""}
                />
                <Card
                    pageName="회원가입 페이지"
                    title={<div>
                        유저가 <span className="fw8 grey-800">회원가입/로그인</span>할 수 있는 페이지입니다.<br />
                        유저가 가입할 때 필요한 정보들을 입력해주세요.
                    </div>}
                    contents={
                        <SignUpCard
                            takeInput={(input: any) => handleInput("auth", input)}
                            value={inputContents.auth}
                        />
                    }
                    isTrue={inputContents.auth !== ""}
                />
                <Card
                    pageName="포트폴리오 페이지"
                    title={<div>
                        내 <span className="fw8 grey-800">작품을 전시</span>할 수 있는 포트폴리오 페이지입니다.<br />
                        포트폴리오에 필요한 정보를 입력해주세요.
                    </div>}
                    contents={
                        <TextareaCard
                            takeInput={(input: any) => handleInput("portfolio", input)}
                            placeholder={defaultValues[2]}
                            value={inputContents.portfolio}
                        />
                    }
                    isTrue={inputContents.portfolio !== ""}
                />
            </ItemsCarousel>
        </div>
    );
}