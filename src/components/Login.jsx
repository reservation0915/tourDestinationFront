import {useState} from "react";

const Login = ()=>{
    const [user,setUser] = useState({
        email:"", password:""
    })
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        login()
    }
    const login= ()=>{
        // 192.168.0.184
        fetch("http://192.168.0.249:8000/api/v1/auth/login",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(user)
            })
            .then((response) => {
                return response.json()
            })
            .then(body=>
                window.location.href=`${body.redirectUrl}?auth=${body.auth}`

            )
            .catch(e=>
                    console.log(e)
                // setMsg(e.response.messages)
            )

    }
    const onChangeHandler = (e)=> {
        const {name, value} =e.target
        setUser({...user, [name]: value})
    }
    return <form onSubmit={onSubmitHandler}>
        <input type={"email"} name={"email"} onChange={onChangeHandler}/>
        <input type={"password"} name={"password"} onChange={onChangeHandler}/>
        <input type={"submit"} value={"login"} onChange={onChangeHandler}/>
    </form>
}
export default Login