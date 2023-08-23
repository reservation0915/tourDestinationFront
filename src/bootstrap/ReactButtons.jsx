import '../css/buttons.css'
import ReactSlider from "./ReactSlider";
import {useState} from "react";
import {setGradeData, setLocation, setRegionData} from "../feature/companydata/companydata";
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router";
import ReactCard from "./ReactCard";
import {apiNoToken} from "../network/Api";
import ReactRegionButtons from "./ReactRegionButtons";

const ReactButtons=()=>{
    const nav = useNavigate();
    const [message, setMessage] = useState("");
    const dispatch = useDispatch()
    const { size, page } = useSelector(state => state.all)
    console.log(size);
    console.log(page);
    //const {location} = useSelector(state=>state.companyData)
    const [location,setLocation] =  useState("");
    const [siteName,setSiteName] = useState("");
    const[data,setData]=useState([]);
    const { grade,gradeData } = useSelector(state => state.companyData)
    const { region,regionData } = useSelector(state => state.companyData)
    // const[nowGrade,SetGrade] =useState(false);
    const regionFun =() =>{
        dispatch(setRegionData());
        console.log("옴")
    }
    const jobsFun = () =>{

    }
    const gradeFun = () =>{
        dispatch(setGradeData());
        //취소버튼
    }
    const reviewsFun = () =>{

    }
    const periodFun = () =>{

    }

    const onChangeHandler = (e) => {
        const getLocation = e.target.value
        const getSiteName =e.target.value
        setLocation({ ...location, getLocation });
        setSiteName({...siteName,getSiteName});
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const values = Object.values(location);
            const values2 = Object.values(siteName);
            const locationValue = values.at(0);
            const siteNameValue = values2.at(0);
            const getData = await apiNoToken(`/api/v1/company` +
                `?page=${page}&size=${size}&siteName=${siteNameValue}`, "GET")
            console.log(getData);
            setData(getData.content);
        } catch (error) {
            setMessage(error.response.data);
        }
    }

    return(
        <div className="button-div">
            <form onSubmit={onSubmitHandler}>
                <button onClick={regionFun} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                    지역
                </button>
                <button onClick={jobsFun} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                    직종
                </button>
                <button onClick={gradeFun} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                    평점
                </button>
                <button onClick={reviewsFun}className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                    리뷰수
                </button>
                <button onClick={periodFun}className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                    기간
                </button>
                <button className="w-btn-outline w-btn-gray-outline" type="button">
                    내 성향 추천
                </button>
                <input className="input-button" name="location" placeholder="search" onChange={onChangeHandler} />
                <input type="submit" value="검색하기" />
            </form>
            <ReactCard nowData={data}/>
            {
                gradeData === true && <ReactSlider></ReactSlider>
            }
            {
                regionData === true && <ReactRegionButtons></ReactRegionButtons>
            }

        </div>
    )
}
export default ReactButtons