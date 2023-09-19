import {useEffect, useState} from "react";
import axios from "axios";
import '../css/layout/AddAuth.css';
import {useLocation, useNavigate} from "react-router";

const AddAuthSerivce = () => {
    const [number, setNumber]  =useState("");
    const wallet = 200000;
    const nav = useNavigate();
    // 토큰에 있는 id, email, name 을 가져오고
    const location = useLocation()
    const [customerInfo,setCustomerInfo] = useState({
        id:"",email:"", username:""
    })
    useEffect(()=>{
        if(location.state.me){
            setCustomerInfo({...customerInfo,...location.state.me})
        }
    },[location])
    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }
    const saveUser = {
        customerId:customerInfo.id,
        email:customerInfo.email,
        name:customerInfo.username,
        phoneNumber:number,
        wallet:wallet
    }
    const onSaveInfo = () => {
        axios.post(`http://192.168.0.249:8000/api/v1/customer/save`,saveUser)
        console.log(saveUser)
        alert("환영합니다")
        nav(`/main?customerId=${saveUser.customerId}`)
    }


    return <>
        <div id="platform">
            <div id="bodyWrap">
                <div id="body">
                    <div style={{backgroundColor:"beige", justifyContent:"center", display:"flex", flexDirection:"column", borderRadius:"10px", width:"400px", height:"200px"}}>
                        <div style={{justifyContent:"center"}}>
                            <div style={{textAlign:"center"}}>
                                <p style={{fontWeight:"bold"}}>( - ) 를 제외한 전화번호 11자리를 입력해주세요</p>
                            </div>
                            <div>
                                <input id="numberInput" onChange={onChangeNumber} type="text" name="number" placeholder="전화번호를 입력해주세요."/>
                                <button id="numberSubmit" onClick={onSaveInfo}>등록</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default AddAuthSerivce;