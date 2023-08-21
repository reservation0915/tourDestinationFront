import React from 'react';
import { Route, Routes } from 'react-router';
import Main from '../components/Main';
import Template from '../template/Template';
import KakaoCallBack from '../components/KakaoCallBack';
import LoginInfo from '../components/LoginInfo';

const MyRouter = () => {

    return <Routes>
        <Route element={<Template />}>
            <Route path="/" element={<Main />} />
            <Route path="logininfo" element={<LoginInfo />} />
            <Route path="/login/kakao/callback" element={<KakaoCallBack />}></Route>
        </Route>
    </Routes>

};

export default MyRouter;