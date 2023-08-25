import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../components/main/Home';
import Template from '../template/Template';
import KakaoCallBack from '../components/KakaoCallBack';
import LoginInfo from '../components/LoginInfo';

import Review from "../template/Review";
import Detail from "../template/Detail";
import ReviewInsert from "../template/ReviewInsert";
import JobRec from "../template/MBTI";
import MBTI from "../template/MBTI";

import Mentors from "../components/Mentors";
import MentorRequests from "../components/MentorRequests";
import MentorDetail from "../components/MentorDetail";

import AddMentor from '../components/MyMentor';
import GetMyMentor from '../components/GetMyMentor';
import MentorChat from "../components/MentorChat";
import MePage from "../components/auth/MePage";

import "../App.css";
import Mbti2 from "../template/Mbti2";

import ReactButtons from "../bootstrap/ReactButtons";



const MyRouter = () => {

    return <Routes>
        <Route element={<Template />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/mypage' element={<MePage/>}></Route>
            <Route path="/siteRecommend" element={<ReactButtons/>}></Route>
            <Route path="logininfo" element={<LoginInfo />} />
            <Route path="/login/kakao/callback" element={<KakaoCallBack />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/reviewDetail" element={<Detail />}></Route>
            <Route path="/reviewInsert" element={<ReviewInsert />}></Route>
            <Route path="/mbti" element={<MBTI />}></Route>
            <Route path="/mbti2" element={<Mbti2 />}></Route>
            <Route path='/mentors' element={<Mentors/>}/>
            <Route path='/mentorRequests' element={<MentorRequests/>}/> {/*  멘토 지원 페이지 */}
            <Route path="/mentorDetail" element={<MentorDetail/>}></Route>
            <Route path="/login/kakao/callback" element={<KakaoCallBack />} />
            <Route path="/mentoradd/:id" element={<AddMentor />} />
            <Route path="/mentorroom/:id" element={<MentorChat />} />
            <Route path="/mentorroom" element={<GetMyMentor />} />
        </Route>
    </Routes>

};

export default MyRouter;