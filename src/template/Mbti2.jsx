import React, {useEffect, useState} from 'react';
import Center from "../components/Center";
import TopBanner from "../components/TopBanner";
import "./Mbti2.css"
import axios from "axios";
import Layout from "./Layout";
import {menu} from "../common/menu";
import {useNavigate} from "react-router-dom";

const Mbti2 = () => {
    const [questions, setQuestions] = useState([]);
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedChoice, setSelectedChoice] = useState(null);
    const [mbti, setMbti] = useState('');
    const [mbtiType, setMbtiType] = useState({});
    const nav = useNavigate();

    useEffect(() => {

        axios.get('http://localhost:8080/api/v1/questions/results').then((res) => {
            setQuestions(res.data.questions);

        }).catch((err) => {

        })
    }, []);

    // user select method..
    const handleChoiceSelect = (choice) => {

        // 1번 골랐는지 2번 골랐는지
        setSelectedChoice(choice);

        // 선택한 카테고리
        const currentCategory = questions[currentCategoryIndex];

        // 선택한 카테고리의 질문
        const currentQuestion = currentCategory.questions[currentQuestionIndex];
        axios.post(`http://localhost:8080/api/v1/questions/${currentCategoryIndex}/${currentQuestionIndex}/${choice}`)
            .then((response) => {
                // 질문의 번호가 (카테고리의 개수 - 1)와 같다면 .. ?
                if (currentQuestionIndex === currentCategory.questions.length - 1) {

                    // 카테고리의 번호가 (질문의 개수 - 1)와 같다면 .. ? ( 마지막 질문이 마치고 난 후 )
                    if (currentCategoryIndex === questions.length - 1) {

                        // mbti 결과받기
                        fetchMbtiResult();

                        // 카테고리의 개수를 질문의 개수랑 같게 맞춰주면.. 결과값이 보여주게 해놨음..
                        setCurrentCategoryIndex(currentCategoryIndex + 1);
                    } else {
                        // 카테고리가 변경될 때.
                        axios.get('http://localhost:8080/api/v1/questions/results').then((res) => {
                            setQuestions(res.data.questions);
                            setCurrentCategoryIndex(currentCategoryIndex + 1);
                            setCurrentQuestionIndex(0);
                        }).catch((err) => {

                        });
                    }
                } else {
                    setCurrentQuestionIndex(currentQuestionIndex + 1);
                }
            })
            .catch((error) => {
                // Handle error
            });
    };

    const fetchMbtiResult = () => {

        axios.get('http://localhost:8080/api/v1/questions/results')
            .then((res) => {

                setMbti(res.data.type);
                axios.get(`http://localhost:8080/api/v1/mbti/${res.data.type}`)
                    .then((res) => {
                        console.log(res)
                        setMbtiType(res.data);
                    })
                    .catch((err) => {

                    });
            })
            .catch((err) => {

            });
    };


    const cleanQuestionHeader = (question) => {
        const headerEndIndex = question.indexOf("1.") !== -1 ? question.indexOf("1.") : question.indexOf("2.");
        return question.substring(0, headerEndIndex).trim();
    };

    const cleanQuestionText = (question, type) => {

        const headerEndIndex = question.indexOf("1.") !== -1 ? question.indexOf("1.") : question.indexOf("2.");

        const msg = question.substring(headerEndIndex).trim().split('//');

        if (type == 'left') {
            return msg[0];
        } else {
            return msg[1];
        }

        // return question.substring(headerEndIndex).trim().replaceAll('//', '　');
    };

    const reloadPage = async () => {

        const data = await axios.post('http://localhost:8080/api/v1/questions/clear');
        nav('/mbti');
        // window.location.reload();
    }

    {/*<div className={`mbti_container slide-${slidIndex}+1`}>*/}
    {/*    <div className="question_container">*/}
    {/*        <div className="question-p">*/}
    {/*            벌써 저녁 6시! 친목 도모를 위해 회식을 하자고 한다.*/}
    {/*        </div>*/}
    {/*        <p>※ 무료 검사로 성격유형에 맞는 직종 알아보세요 !</p>*/}
    {/*        <p>※ 현재 감정상태를 기준으로 설문에 응해 주세요!</p>*/}
    {/*        <p>※ 소요시간은 5분 내외 입니다.</p>*/}
    {/*        <div className="option_container">*/}
    {/*            <div className="options">*/}
    {/*                <button onClick={StartButtonClick} className="option1">오늘 밤을 불태워야 한다. 아무도 집에 못 간다</button>*/}
    {/*                <button onClick={StartButtonClick} className="option2">이제 슬슬 집에 가고 싶어서 눈치 보는 중</button>*/}
    {/*            </div>*/}

    {/*        </div>*/}
    {/*    </div>*/}
    {/*</div>*/}


    return (
        <>
            <Layout>
                {questions.length > 0 &&
                    questions.map((category, categoryIndex) => (
                        // 카테고리의 index 가  map 의 idx 와 같으면 "active" 를 줌으로써 css controling..
                        <div key={categoryIndex} className={`category_mbti ${currentCategoryIndex === categoryIndex ? "active" : ""}`}>
                            {category.questions.map((question, questionIndex) => (

                                // 질문의 index 가  map 의 idx 와 같으면 "active" 를 줌으로써 css controling..
                                <div key={questionIndex} className={`mbti_container question ${currentQuestionIndex === questionIndex ? "active" : ""}`}>
                                    <div className="question-p question-header">
                                        <p  style={{fontSize : '22px', textAlign : 'center', marginBottom : '20px', cursor : 'pointer'}}>{cleanQuestionHeader(question.question)}</p>
                                    </div>
                                    <div  className="question-p question-text" style={{display : 'flex', gap : '15px', justifyContent : 'center'}}>
                                        <p onClick={() => handleChoiceSelect(1)} className='choice-button' style={{fontSize : '22px', textAlign : 'center', marginBottom : '20px', cursor : 'pointer'}}>{cleanQuestionText(question.question, 'left')}</p>
                                        <p onClick={() => handleChoiceSelect(2)} className='choice-button' style={{fontSize : '22px', textAlign : 'center', marginBottom : '20px', cursor : 'pointer'}}>{cleanQuestionText(question.question, 'right')}</p>
                                    </div>
                                    {/*<div className="button-group">*/}
                                    {/*    <button className="option1 choice-button" onClick={() => handleChoiceSelect(1)}>*/}
                                    {/*        {text1}*/}
                                    {/*    </button>*/}
                                    {/*    <button className="option2 choice-button" onClick={() => handleChoiceSelect(2)}>*/}
                                    {/*        {text2}*/}
                                    {/*    </button>*/}
                                    {/*</div>*/}
                                </div>
                            ))}
                        </div>
                    ))}
                <div className='mbti_result_container' style={{ display: currentCategoryIndex === questions.length ? "block" : "none", position : 'relative' }}>
                    <div className={"mbti_result_container_2"} style={{position : 'absolute', top : '50%', left : '50%', transform :'translate(-50%, -50%)', marginBottom : '10px'}}>
                        <h1 className="mbti-result" style={{color: 'black', textAlign: 'center'}}>Your MBTI</h1>
                        <p style={{color: 'black', textAlign: 'center', fontWeight: '700', fontSize: '50px'}} className={"mbti-result_yourmbti"}>{mbti}</p>
                        <p style={{textAlign: 'center'}}>  {mbtiType.hashtag != undefined && mbtiType.hashtag.split(",").map((tag, index) => (
                                <span key={index}> #{tag}</span>
                            ))}</p>
                        <p style={{textAlign: 'center'}}><strong style={{ fontSize: '24px', fontWeight: 'normal' }}>{mbtiType.subTitle}</strong></p>
                        <img style={{width: '50%'}} src={"\thttps://spti.snackpot.kr/images/type/1_1.png\n"}/>
                        <p style={{ textAlign: 'justify' }}>{mbtiType.trait}</p>
                        {/*{mbtiType.jobRecommend == undefined || mbtiType.jobRecommend == null && <p>나와</p>}*/}

                        <div className={"result_jobTitle"}>
                            {mbtiType.jobRecommend != undefined && mbtiType.jobRecommend.map((item, idx) => (

                                <p key={idx} className={"p_jobTitle"}>{item.jobTitle}</p>
                            ))}
                        </div>


                        <div className="Compatibility" style={{ textAlign: 'center' }}>
                            <p className={"option_Compatibility"} style={{ marginBottom: '10px', fontWeight: '700' }}>
                                환상의 케미 <br />
                                <img style={{width: '50%'}} src={"https://spti.snackpot.kr/images/type/5_1.png"}/> <br />
                                {mbtiType.bestCompatibility}
                            </p>
                            <p className={"option_Compatibility"} style={{ marginBottom: '10px', fontWeight: '700' }}>
                                환장의 케미 <br />
                                <img style={{width: '50%'}} src={"https://spti.snackpot.kr/images/type/7_1.png"}/> <br />
                                {mbtiType.bestCompatibility}
                            </p>
                        </div>



                        {/*<div className="category">*/}
                        {/*    /!* ## 컴포넌트 화 ## *!/*/}
                        {/*    /!*자바스크립트에서 자바문법을 쓸 때는 {중괄호}해줘야 함*!/*/}
                        {/*    {menu.map((item, idx) => (*/}
                        {/*        // 글씨만 가지는 애 = span*/}
                        {/*        // 글씨와 영역을 동시에 가지는 애 = p*/}
                        {/*        <div key={idx} style={{background : item.background, color : item.color, cursor : 'pointer'}} onClick={() => {findCategory(item.name)}} className="categoryItem"><span>{item.name}</span></div>*/}
                        {/*    ))}*/}
                        {/*</div>*/}

                        <button style={{width : '100%', height: '50px'}} className='replay' onClick={reloadPage}>다시하기</button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Mbti2;