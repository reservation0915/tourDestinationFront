import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

const Auth = ()=>{
    const nav= useNavigate();
    const queryParameters = new URLSearchParams(window.location.search)
    const auth = queryParameters.get("auth")
    const check = ()=>{
        // 192.168.0.184
        fetch("http://192.168.0.249:8000/api/v1/myuser/me",
            {
                headers:{
                    "Authorization": `Bearer ${auth}`
                }
            })
            .then(res=>
                res.json()
            )
            .then(body=> {
                localStorage.setItem("token", auth)
                nav("/home")
            })
            .catch(e=>
                getMe()
            )
    }
    const getMe = ()=> {
        return fetch(`http://192.168.0.249:8000/api/v1/auth/me`,
            {headers:{
                    "Authorization": `Bearer ${auth}`
                }}
        )
            .then(res=>
                res.json()
            )
            .then(body=> {
                nav("/addauth",{state: {me:body}})
            })
            .catch(()=>nav("/login"))
    }
    useEffect(()=>{
        check()
    },[])
    return <div>
        <h1>loading....</h1>
    </div>
}
export default Auth
