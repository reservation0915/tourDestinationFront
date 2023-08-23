import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../components/main/Home';
import Template from "../components/templates/Template";
import Mypage from "../components/auth/Mypage";
// import Main from '../components/Main';
import Template from '../template/Template';
import KakaoCallBack from '../components/KakaoCallBack';
import LoginInfo from '../components/LoginInfo';

import Review from "../template/Review";
import Detail from "../template/Detail";
import ReviewInsert from "../template/ReviewInsert";
import JobRec from "../template/JobRec";

import Mentors from "../components/Mentors";
import MentorRequests from "../components/MentorRequests";
import MentorDetail from "../components/MentorDetail";


import ReactCarousel from "../bootstrap/ReactCrousel";
import Home from "../components/main/Home";

import AddMentor from '../components/MyMentor';
import GetMyMentor from '../components/GetMyMentor';


const MyRouter = () => {

    return <Routes>
        <Route element={<Template />}>

            <Route path="/" />
            <Route path='/' element={<Home />}></Route>
            <Route path='/mypage' element={<Mypage/>}></Route>

            <Route path='/' element={<Home />}></Route>

            <Route path="logininfo" element={<LoginInfo />} />

            <Route path="/login/kakao/callback" element={<KakaoCallBack />}></Route>

            <Route path="/review" element={<Review />}></Route>
            <Route path="/reviewDetail" element={<Detail />}></Route>
            <Route path="/reviewInsert" element={<ReviewInsert />}></Route>
            <Route path="/jobRec" element={<JobRec />}></Route>

            <Route path='/mentors' element={<Mentors/>}/>
            <Route path='/mentorRequests' element={<MentorRequests/>}/> {/*  멘토 지원 페이지 */}
            <Route path="/mentorDetail" element={<MentorDetail/>}></Route>

            <Route path="/login/kakao/callback" element={<KakaoCallBack />} /> 
            <Route path="/mentorroom/:id" element={<AddMentor />} />
            <Route path="/mentorroom" element={<GetMyMentor />} />


        </Route>
    </Routes>

};

export default MyRouter;