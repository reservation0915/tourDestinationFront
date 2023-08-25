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


    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedCategory(selectedValue.replaceAll('/', ','));
    }

    const majorHandler = (e) => {
        setMajor(e.target.value);
    }
    const minorHandler = (e) => {
        setMinor(e.target.value);
    }
    const prevJobHandler = (e) => {
        setPrevJob(e.target.value);
    }
    const durationHandler = (e) => {
        setDuration(e.target.value);
    }
    const ageAtEmploymentHandler = (e) => {
        setAgeAtEmployment(e.target.value);
    }
    const storyTitleHandler = (e) => {
        setStoryTitle(e.target.value);
    }
    const satisfactionHandler = (e) => {
        setSatisfaction(e.target.value);
    }
    const jobResponsibilitiesHandler = (e) => {
        setJobResponsibilities(e.target.value);
    }
    const messageHandler = (e) => {
        setMessage(e.target.value);
    }
    const companyIdHandler = (e) => {
        setCompanyId(e.target.value);
    }

    const saveReview = () => {

        if (selectedCategory == "") {
            alert("취업 카테고리를 선택 하세요");
            return;
        }
        if (major == "") {
            alert("전공을 입력하세요");
            return;
        }
        if (minor == "") {
            alert("부전공을 입력하세요");
            return;
        }
        if (duration == "") {
            alert("취업기간을 입력하세요");
            return;
        }
        if (ageAtEmployment == "") {
            alert("취업나이를 입력하세요");
            return;
        }
        if (isNaN(parseInt(ageAtEmployment))) {
            alert("취업나이를 숫자로 입력하세요.");
            return;
        }
        if (storyTitle == "") {
            alert("취업처를 입력하세요");
            return;
        }
        if (satisfaction == "") {
            alert("취업만족도를 입력하세요");
            return;
        }
        if (isNaN(parseInt(satisfaction))) {
            alert("취업만족도를 숫자로 입력하세요.");
            return;
        }
        if (jobResponsibilities == "") {
            alert("업무내용을 입력하세요");
            return;
        }
        if (message == "") {
            alert("하고싶은 말을 입력하세요");
            return;
        }
        // const routeHistory = useHistory();
        // review 데이터를 서버로 전송
        axios
            .post(`http://localhost:8080/api/v1/review/insert/1`, {
                "categoryItem": selectedCategory,
                "major": major,
                "minor": minor,
                "previousOccupation": prevJob,
                "duration": duration,
                "ageAtEmployment": ageAtEmployment,
                "storyTitle" : storyTitle,
                "satisfaction": satisfaction,
                "jobResponsibilities": jobResponsibilities,
                "message": message,
                "companyId" : 1
            })
            .then((response) => {
                    console.log("리뷰가 성공적으로 저장되었습니다.", response);
                alert("리뷰가 성공적으로 저장되었습니다."); // 예시: 알림 메시지 표시
                // 리뷰 저장 성공 후 원하는 경로로 이동
                nav("/review");
            })
            .catch((error) => {
                console.error("리뷰 저장 중 오류가 발생했습니다.", error);
                alert("리뷰 저장에 실패했습니다. 다시 시도 해주세요."); // 예시: 알림 메시지 표시
            });

    }


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
                            <div className="new_field">전공</div>
                            <div className="contents">
                                <input onChange={majorHandler} className="review_input"/>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field">부전공</div>
                            <div className="contents">
                                <input onChange={minorHandler} className="review_input"/>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field">이전 직업</div>
                            <div className="contents">
                                <input onChange={prevJobHandler} className="review_input"/>
                            </div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field">취준기간</div>
                            <div  className="contents">
                                <input onChange={durationHandler} className="review_input"/></div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field">취업나이</div>
                            <div className="contents">
                                <input onChange={ageAtEmploymentHandler} className="review_input" placeholder="숫자만 입력해주세요."/></div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field">취업처</div>
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