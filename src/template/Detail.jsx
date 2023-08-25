import Center from "../components/Center";
import "./Detail.css";
import TopBanner from "../components/TopBanner";
import myProfile from "../img/122416681.jpg";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Detail = () => {
    const [reviewInfo, setReviewInfo] = useState({});

    // page 처음 로딩될 때..
    useEffect(() => {
        const params = window.location.href.split('userId=')[window.location.href.split('userId=').length-1];

        axios.get(`http://localhost:8080/api/v1/review/id/${params}`).then((res) => {
            setReviewInfo(res.data)
        }).catch((err) => {
            console.log(err)
        })

    }, [])



    return (
        <Center>
            <TopBanner></TopBanner>
            <div className="place-center">
                <div className="profile_container">
                    <div className="card_img2" style={{paddingRight : '0', margin : '0 auto'}}>
                        <img style={{width : '100%', height : '100%'}} src={myProfile}/>
                    </div>
                    <div className="story_user">
                        <div className="story_title">{reviewInfo.id}</div>
                        <div className="categoryItem" style={{background : "#f9f0ff", color : "#d3adf7"}}>백엔드</div>
                    </div>
                    <div className="flex-row-wrap">
                        <div className="flex-row">
                            {/*부전공도 함께 보여줘야함*/}
                            <div className="new_field_detail">전공<span>(부전공)</span></div>
                            <div className="contents">{reviewInfo.major}({reviewInfo.minor})</div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field_detail">이전 직업</div>
                            <div className="contents">{reviewInfo.previousOccupation}</div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field_detail">취준기간</div>
                            <div className="contents">{reviewInfo.duration}</div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field_detail">취업나이</div>
                            <div className="contents">{reviewInfo.ageAtEmployment}</div>
                        </div>
                        <div className="flex-row">
                            <div className="new_field_detail">취업처</div>
                            <div className="contents">{reviewInfo.storyTitle}</div>
                        </div>
                    </div>
                </div>

                <div style={{ margin: '48px' }} className="inform-box">다른 취준생 분들께 도움을 드리기 위해 공유해 주셨습니다.정보와 용기를 얻는 용도로만 봐주세요🙂💕</div>


                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">💯 취업만족도</div>
                            <div className="description">
                                <p>{reviewInfo.satisfaction}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">📚 업무내용</div>
                            <div className="description">
                                <p>{reviewInfo.jobResponsibilities}</p>
                            </div>
                        </div>
                    </div>

                    <div className="contentLine">
                        <div className="description_container">
                            <div className="description_title">🤝 하고싶은 말</div>
                            <div className="description">
                                <p>{reviewInfo.message}</p>
                            </div>
                        </div>
                    </div>




            </div>
        </Center>
    )
}

export default Detail;