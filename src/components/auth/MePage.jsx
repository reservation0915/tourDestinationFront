import Center from "../Center";
import TopBanner from "../TopBanner";
import {Api, apipost} from "../../network/Api";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import myProfile from "../../img/122416681.jpg";
import ReactCard from "../../bootstrap/ReactCard";
import ReactSlider from "../../bootstrap/ReactSlider";
import ReactRegionButtons from "../../bootstrap/ReactRegionButtons";
import '../../css/buttons.css'
import '../../template/Review.css'
import myImg from "../../img/122416681.jpg";
import {useDispatch, useSelector} from "react-redux";
import {setRegionData} from "../../feature/companydata/companydata";
import {setMyMentors, setReviewBoolean} from "../../feature/mypage/myPageSlice";

const MePage =()=>{
    const [nowUser, setUser] = useState([]);
    const reviewData=useSelector(state=>state.mypage.reviewBoolean);
    const mentoData=useSelector(state=>state.mypage.mentoBoolean);
    const companyData=useSelector(state=>state.mypage. companyBoolean);
    const nowMentoData=useSelector(state=>state.mypage.mentors);
    const dispatch = useDispatch();
    const [nowReviewList,setReviewList]=useState([]);
    const [nowMentors,setMentors]=useState([]);
    const [nowCompanyList,setComPanyList]=useState([]);
    useEffect(() => {
        const id = localStorage.getItem("userId");
        const body={
            id: 1
        }

        const GetDataById = async () => {
            const getData = await apipost(`/userData`, "POST",id);
            setUser(getData.body);
            console.log(getData)
            // const uReviews = uData.map((row)=>row.reviewList);
            // const uCompanys= uData.map((row)=>row.companyList);
            // console.log(uReviews);
            // console.log(uCompanys);
        };

        GetDataById()

    }, []);

    const reviewFun =() =>{
        dispatch(setReviewBoolean());
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
                        <div className="story_title">{nowUser.username}</div>
                        <div className="categoryItem" style={{background : "#f9f0ff", color : "#d3adf7"}}>{nowUser.password}</div>
                    </div>

                    <div className="flex-row">
                        <div className="field">이메일</div>
                        <div className="contents">{nowUser.email}</div>
                    </div>
                    <div className="flex-row">
                        {nowUser.companyList.map(c=><>
                            <div className="field">이메일</div>
                            <div className="contents">{c.siteName}</div>
                        </>)}

                    </div>
                </div>

                <div className="button-div">
                    <button  onClick={reviewFun} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                        내 멘토 확인
                    </button>
                    <button  className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                        작성 리뷰 확인
                    </button>
                    <button  className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                        관심 회사 확인
                    </button>
                    <button className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                        취소
                    </button>

                </div>








            </div>
        </Center>
    )

}
export default MePage;





