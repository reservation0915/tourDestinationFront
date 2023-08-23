import Center from "../Center";
import TopBanner from "../TopBanner";
import {Api, apipost} from "../../network/Api";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import myProfile from "../../img/122416681.jpg";

const MePage =()=>{
    useEffect(() => {
        const id = localStorage.getItem("userId");
        const body={
            id: 1
        }
        const GetDataById = async () => {
            const getData = await apipost(`/userData`, "POST",id);
            const uData = getData.body;
            const keys = Object.keys(uData);
            const values = Object.values(uData);
            console.log(keys);
            console.log(values);
            // const uReviews = uData.map((row)=>row.reviewList);
            // const uCompanys= uData.map((row)=>row.companyList);
            // console.log(uReviews);
            // console.log(uCompanys);
        };

        GetDataById()

    }, []);

    return (
        <Center>
            <TopBanner></TopBanner>
            <div className="place-center">
                <div className="profile_container">
                    <div className="card_img2" style={{paddingRight : '0', margin : '0 auto'}}>
                        <img style={{width : '100%', height : '100%'}} src={myProfile}/>
                    </div>
                    <div className="story_user">
                        <div className="story_title">이태웅</div>
                        <div className="categoryItem" style={{background : "#f9f0ff", color : "#d3adf7"}}>이태웅</div>
                    </div>

                    <div className="flex-row">
                        <div className="field">이메일</div>
                        <div className="contents">X</div>
                    </div>
                    <div className="flex-row">
                        <div className="field">전화번호</div>
                        <div className="contents">1년</div>
                    </div>
                    <div className="flex-row">
                        <div className="field">멘토</div>
                        <div className="contents">27세</div>
                    </div>
                    <div className="flex-row">
                        <div className="field">작성글</div>
                        <div className="contents">MES를 제외한 SpringFramework를 주로 사용하는 기업</div>
                    </div>
                    <div className="flex-row">
                        <div className="field">정보수정</div>
                        <div className="contents">MES를 제외한 SpringFramework를 주로 사용하는 기업</div>
                    </div>
                </div>

                <div style={{ margin: '48px' }} className="inform-box">다른 취준생 분들께 도움을 드리기 위해 공유해 주셨습니다.정보와 용기를 얻는 용도로만 봐주세요🙂💕</div>


                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">💯 취업만족도</div>
                        <div className="description">
                            <p>ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                        </div>
                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">📚 업무내용</div>
                        <div className="description">
                            <p>ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                        </div>
                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">🤝 하고싶은 말</div>
                        <div className="description">
                            <p>ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                        </div>
                    </div>
                </div>




            </div>
        </Center>
    )

}
export default MePage;