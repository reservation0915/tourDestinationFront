import Center from "../components/Center";
import "./ReviewInsert.css";
import TopBanner from "../components/TopBanner";
import myProfile from "../img/122416681.jpg";
import {menu} from "../common/menu";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const ReviewInsert = () => {
    const [review, setReview] = useState(null);
    const [userid, setUserid] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [major, setMajor] = useState("");
    const [minor, setMinor] = useState("");
    const [prevJob, setPrevJob] = useState("");
    const [duration, setDuration] = useState("");
    const [ageAtEmployment, setAgeAtEmployment] = useState("");
    const [satisfaction, setSatisfaction] = useState("");
    const [jobResponsibilities, setJobResponsibilities] = useState("");
    const [message, setMessage] = useState("");
    const [companyId, setCompanyId] = useState("");
    const [storyTitle, setStoryTitle] = useState(""); /*취업처*/
    const nav = useNavigate();


    return (
        <Center>
            <TopBanner></TopBanner>
            <div className="place-center">
                <div className="profile_container">
                    <div className="card_img2" style={{paddingRight : '0', margin : '0 auto'}}>
                        <img style={{width : '100%', height : '100%'}} src={myProfile}/>
                    </div>
                    <div className="story_user">
                        <div className="story_title">유저아이디</div>

                        <div className="category">
                            <select style={{padding : '6px', borderRadius : '8px', border: '1px solid #e5e7eb', overflowY: 'auto', cursor:"pointer",}} className="categoryItemSelect" onChange={handleCategoryChange} >
                                {menu.map((item, idx) => (
                                    <option
                                        key={idx}
                                        style={{ color: item.color }}
                                        value={item.name}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex-row-wrap">
                        <div className="flex-row">
                            <div className="field">전공</div>
                            <div className="contents">
                                <p className="review_input"/>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="field">부전공</div>
                            <div className="contents">
                                <input onChange={minorHandler} className="review_input"/>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="field">이전 직업</div>
                            <div className="contents">
                                <input onChange={prevJobHandler} className="review_input"/>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="field">취준기간</div>
                            <div  className="contents">
                                <input onChange={durationHandler} className="review_input"/></div>
                        </div>
                        <div className="flex-row">
                            <div className="field">취업나이</div>
                            <div className="contents">
                                <input onChange={ageAtEmploymentHandler} className="review_input" placeholder="숫자만 입력해주세요."/></div>
                        </div>
                        <div className="flex-row">
                            <div className="field">취업처</div>
                            <div className="contents">
                                <input onChange={storyTitleHandler} className="review_input"/></div>
                        </div>
                    </div>

                </div>

                <div style={{ margin: '48px' }} className="inform-box">다른 취준생 분들께 도움을 드리기 위해 공유해 주셨습니다.정보와 용기를 얻는 용도로만 봐주세요🙂💕</div>


                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">💯 취업만족도</div>
                            <div className="description">
                                <p><textarea  onChange={satisfactionHandler} rows="16" className="input_contents" placeholder={"숫자만 입력해주세요. (10점 만점)"}/></p>
                            </div>
                        </div>
                    </div>

                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">📚 업무내용</div>
                            <div className="description">
                                <p><textarea onChange={jobResponsibilitiesHandler} rows="16" className="input_contents"/></p>
                            </div>
                        </div>
                    </div>

                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">🤝 하고싶은 말</div>
                            <div className="description">
                                <p><textarea onChange={messageHandler} rows="16" className="input_contents"/></p>
                            </div>
                        </div>
                    </div>

                <div>
                    <button className="save_button" onClick={saveReview}>저장하기</button>
                </div>


            </div>
        </Center>
    )
}

export default ReviewInsert;