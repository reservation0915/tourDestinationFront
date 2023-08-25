import React, { useEffect } from 'react';
import { Api } from '../network/Api';
import { useNavigate } from 'react-router';

const LoginInfo = () => {

    const nav = useNavigate()

    useEffect(() => {

        const loginInfo = async () => {
            try {

                const reponse = await Api('/logininfo', "GET")
                const username = reponse.data.username
                const userId = reponse.data.id

                localStorage.setItem('username', username)
                localStorage.setItem('userId', userId)
                console.log(reponse)
                nav("/")
                window.location.reload()
            } catch (error) {
                console.log(error.response)
            }
        }

        loginInfo()

    }, [])


    return (
        <div>
            
        </div>
    );
};

export default LoginInfo;