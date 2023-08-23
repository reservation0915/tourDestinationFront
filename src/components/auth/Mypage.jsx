import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {api, apiNoToken} from "../../network/api";
import {setAll} from "../../feature/all/allSlice";
import ReactCarousel from "../../bootstrap/ReactCarousel";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";
import HomeTable from "../main/HomeTable";
import HomePageButtons from "../main/HomePageButtons";
import HomeSizeSelect from "../main/HomeSizeSelect";
import MypageTable from "./MypageTable";


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