import {useState} from "react";
import axios from "axios";
import '../../../styles/pages/layout/AddAuth.css';
import {useNavigate} from "react-router";

const AddAuthSerivce = () => {
    const [number, setNumber]  =useState(null);
    const wallet = 200000;
    const nav = useNavigate();
    // 토큰에 있는 id, email, name 을 가져오고
    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }
    const customerInfo = useState({
        customerId:"",
        email:"",
        name:"",
        phoneNumber:number,
        wallet:wallet
    })
    const onSaveInfo = () => {
        axios.post(`http://localhost:9002/api/v1/customer/save`, customerInfo)
        console.log(number)
        alert("환영합니다")
        nav('/roomdetail')
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
                                <input id="numberInput" onChange={onChangeNumber} type="text" placeholder="전화번호를 입력해주세요."/>
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