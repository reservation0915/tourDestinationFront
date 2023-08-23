import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import MypageTable from "./MypageTable";
import {apiNoToken} from "../../network/Api";


const Mypage=() =>{
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const [data, setData] = useState("");
    const getAll = async () => {

        try {
            const id = localStorage.getItem("id");
            //id int로 변환?
            const body = {"id": 1}
            const data = await apiNoToken(`/userData`, "POST",body)
            console.log(data);
            setData(data);
            // setTotalPages(data.totalPages)
        } catch (error) {
            setMessage(error.response.data)
        }
    }
    useEffect(() => {
        getAll();
    }, [])

    return <div>
        <MypageTable data={data}>

        </MypageTable>

    </div>


}
export default Mypage;