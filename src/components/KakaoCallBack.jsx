import React, { useEffect } from 'react';
import { useNavigate } from "react-router";
import { Api } from '../network/Api';
import { useDispatch } from 'react-redux';
import { login, logout } from '../store/loginSlice';

const KakaoCallBack = () => {

    const nav = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        let code = new URL(window.location.href).searchParams.get('code')

        const kakaoLogin = async () => {
            try {
                await Api(`/login/kakao/callback?code=${code}`, "GET")
                dispatch(login())
                localStorage.setItem('isLoggedIn', 'true')
                nav("/logininfo")
            } catch (error) {
                console.log(error.response)
            }
        }

        kakaoLogin()

    }, [])

};

export default KakaoCallBack;