import React, {useEffect, useState} from 'react';
import Center from "../components/Center";
import TopBanner from "../components/TopBanner";
import "./MBTI.css"
import {mbtiResult} from "../common/api/ApiGetService";
import axios from "axios";

const MBTI = () => {
    const [questions, setQuetions] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:8080/questions/results').then((res) => {
            setQuetions(res.data.questions);
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })

    },[]);

    const handleChoiceSelect = (choice) => {

    }




    //
    // const [slidIndex, setSlidIndex] = useState(0); // 슬라이드 인덱스 상태 추가
    //
    // const StartButtonClick = () => {
    //     setSlidIndex(slidIndex+1); // 버튼 클릭 시 슬라이드 인덱스를 1로 설정
    // }

    return (
        <Center>
            <TopBanner></TopBanner>
            {/*<div className="mbti_slider">*/}
            {/*        {slidIndex === 0 ? ( // 슬라이드 0일 때의 JSX*/}
            {/*            <div className={`mbti_container slide-${slidIndex}`}>*/}
            {/*                <div className="mbti_title">[나]를 찾습니다</div>*/}
            {/*                <div className="mbti_description">*/}
            {/*                    많은 분들이 지원 직무를 고를 때 막막하다는 사실을 알고 있으며,<br/>*/}
            {/*                    이런 여러분들의 고민을 덜어드리기 위해 MBTI를 활용한<br/>*/}
            {/*                    직종추천 서비스를 준비했습니다.<br/><br/>*/}
            {/*                    여러분들의 모든 것을 파악할 수는 없다는 것을 기억하세요!<br/>*/}
            {/*                    자신 있고 꿈꾸는 직무가 있으시다면 추천 여부와 상관없이<br/>*/}
            {/*                    여러분에게 가장 적합한 직무입니다!*/}
            {/*                </div>*/}
            {/*                <div className="start_button_container">*/}
            {/*                    <button className="start_button" onClick={StartButtonClick}>*/}
            {/*                        직종추천서비스 시작하기*/}
            {/*                    </button>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        ): (*/}
            {/*            // 슬라이드 1일 때의 JSX*/}
            {/*            <div className={`mbti_container slide-${slidIndex}+1`}>*/}
            {/*                <div className="question_container">*/}
            {/*                    <div className="question-p">*/}
            {/*                        벌써 저녁 6시! 친목 도모를 위해 회식을 하자고 한다.*/}
            {/*                    </div>*/}
            {/*                    <p>※ 무료 검사로 성격유형에 맞는 직종 알아보세요 !</p>*/}
            {/*                    <p>※ 현재 감정상태를 기준으로 설문에 응해 주세요!</p>*/}
            {/*                    <p>※ 소요시간은 5분 내외 입니다.</p>*/}
            {/*                    <div className="option_container">*/}
            {/*                        <div className="options">*/}
            {/*                            <button onClick={StartButtonClick} className="option1">오늘 밤을 불태워야 한다. 아무도 집에 못 간다</button>*/}
            {/*                            <button onClick={StartButtonClick} className="option2">이제 슬슬 집에 가고 싶어서 눈치 보는 중</button>*/}
            {/*                        </div>*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        )}*/}
            {/*    </div>*/}
        </Center>
    );
};

export default MBTI;