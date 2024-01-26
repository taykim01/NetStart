import Checkboxes from "@/presentation/components/checkboxes";
import Input from "@/presentation/components/inputs";
import { useState } from "react";

export default function FormMood(props: any) {
    const [selectedMoods, setSelectedMoods] = useState<string[]>([])

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

    const toggleMood = (mood: string) => {
        if (selectedMoods.includes(mood)) {
            setSelectedMoods(selectedMoods.filter(selectedMood => selectedMood !== mood));
        } else {
            setSelectedMoods([...selectedMoods, mood]);
        }
    }


    return (
        <div className="vf gap80 grey-900" style={{ width: 400 }}>
            <div className="vf gap24">
                <div className="h4 grey-900">컬러를 선택해주세요.</div>
                <div className="colors-box w100">
                    <Input key={1} type="color_picker" label="메인컬러" />
                    <Input key={2} type="color_picker" label="서브컬러" />
                </div>
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
                                    onClick={() => toggleMood(mood)}
                                />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}