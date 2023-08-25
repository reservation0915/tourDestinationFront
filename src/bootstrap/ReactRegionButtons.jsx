import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useState} from "react";
import {setRegion, setRegionData} from "../feature/companydata/companydata";
import '../css/buttons.css'

const ReactRegionButtons =() =>{
    const [ nowRegionData, setRe ] = useState("");
    const { regionData } = useSelector(state => state.companyData)
    const dispatch = useDispatch();
    const nav = useNavigate();
    const region = useSelector(state => state.companyData.region)

    const cancel = () =>{
        dispatch(setRegionData());
        //취소버튼
    }

    const regionSubmit1 = (e) =>{
        const text="서울";
        dispatch(setRegion(nowRegionData));
        dispatch(setRegionData());


    }
    const regionSubmit2 = (e) =>{
        const text="경기";

        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit3= (e) =>{
        const text="인천";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit4 = (e) =>{
        const text="강원";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit5 = (e) =>{
        const text="충남";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit6 = (e) =>{
        const text="충북";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit7 = (e) =>{
        const text="전남";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit8 = (e) =>{
        const text="전북";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit9 = (e) =>{
        const text="경남";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit10 = (e) =>{
        const text="경북";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }
    const regionSubmit11 = (e) =>{
        const text="제주";
        dispatch(setRegion(text));
        dispatch(setRegionData());

    }









    return <div className="button-div">
            <button  onClick={regionSubmit1} className="w-btn-outline w-btn-gray-outline" type="button">
                서울
            </button>
            <button  onClick={regionSubmit2} className="w-btn-outline w-btn-gray-outline" type="button">
                경기
            </button>
            <button  onClick={regionSubmit3} className="w-btn-outline w-btn-gray-outline" type="button">
                인천
            </button>
            <button  onClick={regionSubmit4} className="w-btn-outline w-btn-gray-outline" type="button">
                강원
            </button>
            <button  onClick={regionSubmit5} className="w-btn-outline w-btn-gray-outline" type="button">
                충남
            </button>
            <button  onClick={regionSubmit6} className="w-btn-outline w-btn-gray-outline" type="button">
                충북
            </button>
            <button onClick={regionSubmit7} className="w-btn-outline w-btn-gray-outline" type="button">
                전남
            </button>
            <button onClick={regionSubmit8} className="w-btn-outline w-btn-gray-outline" type="button">
                전북
            </button>
            <button onClick={regionSubmit9} className="w-btn-outline w-btn-gray-outline" type="button">
                경남
            </button>
            <button onClick={regionSubmit10} className="w-btn-outline w-btn-gray-outline" type="button">
                경북
            </button>
            <button onClick={regionSubmit11} className="w-btn-outline w-btn-gray-outline" type="button">
                제주
            </button>
            <button onClick={cancel} className="w-btn-outline w-btn-gray-outline" type="button">
                취소
            </button>





    </div>
}
export default ReactRegionButtons;