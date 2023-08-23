import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../components/Main';
import Template from '../template/Template';
import KakaoCallBack from '../components/KakaoCallBack';
import LoginInfo from '../components/LoginInfo';
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
            <Route path='/' element={<Home />}></Route>
            <Route path="logininfo" element={<LoginInfo />} />

            <Route path="/login/kakao/callback" element={<KakaoCallBack />}></Route>
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