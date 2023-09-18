import {useState} from "react";
import {json, useNavigate} from "react-router";

const Signup = ()=>{
    const roles = [
        'YJ',
        'KS',
        'JS',
        'JK',
        'KH',
        'JH',
        'TEST'
    ]
    const [user,setUser] = useState({
        email:"", password:"",username:"", role:""

    })
    const nav = useNavigate()
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        login()
    }
    const login= ()=>{
        // 192.168.0.184
        fetch("http://localhost:8080/api/v1/auth/signup",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(user)
            })
            .then(res=> {
                    if (res.status === 200) nav(`/login`)
                }
            )
            .catch(e=>
                console.log(e)
            )

    }
    const onChangeHandler = (e)=> {
        const {name, value} =e.target
        setUser({...user, [name]: value})
    }
    return <form onSubmit={onSubmitHandler}>
        <input type={"email"} name={"email"} onChange={onChangeHandler}/>
        <input type={"text"} name={"username"} onChange={onChangeHandler}/>
        <input type={"password"} name={"password"} onChange={onChangeHandler}/>
        <select onChange={onChangeHandler} name={'role'}>
            <option></option>
            {roles.map(role=>
                <option key={role} value={role}>{role}</option>
            )}
        </select>
        <input type={"submit"} value={"login"} onChange={onChangeHandler}/>
    </form>
}
export default Signup