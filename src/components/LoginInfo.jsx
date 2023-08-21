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

                localStorage.setItem('username', username)
                console.log(reponse)
                nav("/")
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