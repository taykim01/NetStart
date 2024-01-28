import Checkboxes from "@/presentation/components/checkboxes";
import Input from "@/presentation/components/inputs";
import { applyFile } from "@/presentation/states/features/fileSlice";
import { applyColor, applyInput } from "@/presentation/states/features/inputSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function FormMood(props: any) {
    const dispatch = useDispatch()
    const inputContents = useSelector((state: any) => state.input.value)

    const moods: string[] = [
        "부드러운",
        "자신있는",
        "창의적인",
        "행복한",
        "친근한",
        "차가운",
        "트렌디한",
        "고급진",
        "세련된",
        "열정적인",
        "에너제틱한",
        "따듯한",
        "자연 친화적인",
        "신뢰성 있는",
        "귀여운",
        "심플한",
        "포멀한",
        "안전한",
        "깔끔한"
    ]

    const [selectedMoods, setSelectedMoods] = useState(inputContents.mood)
    const toggleMood = (mood: string) => {
        let updatedMoods;
        if (selectedMoods.includes(mood)) {
            updatedMoods = selectedMoods.filter((selectedMood: string) => selectedMood !== mood);
        } else {
            updatedMoods = [...selectedMoods, mood];
        }

        setSelectedMoods(updatedMoods);
        dispatch(applyInput({
            ...inputContents,
            mood: updatedMoods
        }));
    }

    const handleColor = (hex: string, type: string) => {
        dispatch(
            applyColor({
                ...inputContents.color,
                [type]: hex
            })
        )
    }

    const handleUpload = (pic: any) => {
        props.takeInput(pic)
        dispatch(applyInput({
            ...inputContents,
            logoUrl: pic.name
        }));
    }

    return (
        <div className="vf gap60 grey-900" style={{ width: 400 }}>
            <div className="vf gap20">
                <div className="h4 grey-900">컬러를 선택해주세요.</div>
                <div className="colors-box w100">
                    <Input key={1} type="color_picker" label="메인컬러" takeInput={(e: any) => handleColor(e, "main")} value={inputContents.color.main} />
                    <Input key={2} type="color_picker" label="서브컬러" takeInput={(e: any) => handleColor(e, "sub")} value={inputContents.color.sub} />
                </div>
            </div>

            <div className="vf gap16">
                <div className="h4 grey-900">로고가 있다면, 업로드해주세요.</div>
                <Input type="upload" takeInput={handleUpload} filename={inputContents.logoUrl} />
            </div>

            <div className="vf gap16">
                <div className="h4 grey-900">무드를 선택해주세요.</div>
                <div className="vf gap12">
                    <div className="p2 mood-description">{selectedMoods.length > 0 ? null : '~한'}{selectedMoods.join(", ")} 웹사이트</div>
                    <div className="mood-box">
                        {
                            moods.map(
                                mood => <Checkboxes
                                    key={mood}
                                    type="toggle"
                                    text={mood}
                                    takeInput={() => toggleMood(mood)}
                                    isTrue={selectedMoods.includes(mood)}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}