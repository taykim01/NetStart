'use client'

import { useEffect, useState } from "react"
import Button from "../../buttons"
import DropDown from "../../dropdown"
import Input from "../../inputs"
import { useDispatch, useSelector } from "react-redux"
import { applyInput } from "@/presentation/states/features/inputSlice"

export default function FormCard(props: any) {
    const dispatch = useDispatch()
    const inputContents = useSelector((state: any) => state.input.value)

    type QuestionType = {
        index: number;
        question: string;
        type: string;
    };

    const [questionEntry, setQuestionEntry] = useState<QuestionType[]>([]);

    const [lastIndex, setLastIndex] = useState(0);

    const addQuestion = () => {
        const emptyQuestion: QuestionType = {
            index: lastIndex,
            question: "",
            type: ""
        };
        setQuestionEntry([
            ...questionEntry,
            emptyQuestion
        ]);
        setLastIndex(lastIndex + 1);
    };
    

    const editQuestion = (input: string, index: number) => {
        const updatedQuestionEntry = questionEntry.map((question, i) => {
            if (i === index) {
                return {
                    ...question,
                    question: input
                };
            }
            return question;
        });
        setQuestionEntry(updatedQuestionEntry);
    }

    const editQuestionType = (input: string, index: number) => {
        let updatedQuestionEntry;
        if (input === "삭제") {
            updatedQuestionEntry = questionEntry.filter(q => q.index !== index);
        } else {
            updatedQuestionEntry = questionEntry.map((question, i) => {
                if (i === index) {
                    return {
                        ...question,
                        type: input
                    };
                }
                return question;
            });
        }
        setQuestionEntry(updatedQuestionEntry);
    }

    useEffect(() => {
        dispatch(applyInput({
            ...inputContents,
            form: questionEntry
        }))
    }, [questionEntry])


    return (
        <div className="vf gap8 h100" style={{ overflowY: "scroll", height: 321 }} >
            {
                questionEntry.map(
                    (question, index) => <Questions
                        takeInput={(input: string) => editQuestion(input, index)}
                        sendSelection={(input: string) => editQuestionType(input, index)}
                    />
                )
            }
            <Button type="plus_button" onClick={addQuestion} />
            <div style={{ height: 100 }} />
        </div>
    )
}

function Questions(props: any) {

    const handleInput = (input: any) => {
        props.takeInput(input)
    }

    const handleTypeSelection = (input: string) => {
        props.sendSelection(input)
    }

    return (
        <div className="hf gap4">
            <Input type="text_input" takeInput={(input: string) => handleInput(input)} />
            <DropDown takeInput={(input: string) => handleTypeSelection(input)} />
        </div>
    )
}