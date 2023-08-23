import React from 'react';
import { Route, Routes } from 'react-router';
// import Main from '../components/Main';
import Template from '../template/Template';
import KakaoCallBack from '../components/KakaoCallBack';
import LoginInfo from '../components/LoginInfo';
import Review from "../template/Review";
import Detail from "../template/Detail";
import ReviewInsert from "../template/ReviewInsert";
import JobRec from "../template/MBTI";
import MBTI from "../template/MBTI";

const MyRouter = () => {

    return <Routes>
        <Route element={<Template />}>
            <Route path="/" />
            <Route path="logininfo" element={<LoginInfo />} />
            <Route path="/login/kakao/callback" element={<KakaoCallBack />}></Route>
            <Route path="/review" element={<Review />}></Route>
            <Route path="/reviewDetail" element={<Detail />}></Route>
            <Route path="/reviewInsert" element={<ReviewInsert />}></Route>
            <Route path="/mbti" element={<MBTI />}></Route>
        </Route>
    </Routes>

};

export default MyRouter;