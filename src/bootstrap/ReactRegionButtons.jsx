import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {setRegion, setRegionData} from "../feature/companydata/companydata";
import {useEffect, useState} from "react";
import '../css/buttons.css'

const ReactRegionButtons =() =>{
    const [ value, setValue ] = useState("");
    const { regionData } = useSelector(state => state.companyData)
    const dispatch = useDispatch();
    const nav = useNavigate();

    const cancel = () =>{
        dispatch(setRegionData);
        //취소버튼
    }
    const onChangeHandler = (e) => {
        const name = e.target.value
        setValue({ ...value,name })
    }
    const regionSubmit = (e) =>{
        dispatch(setRegion(value));
        dispatch(setRegionData());
        nav('/');
    }
    return <div className="button-div">

        <form >
            <button  onClick={regionSubmit} onChange={onChangeHandler}  className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                서울
            </button>
            <button  onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                경기
            </button>
            <button  onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                인천
            </button>
            <button  onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                강원
            </button>
            <button  onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                충남
            </button>
            <button  onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline" type="button">
                충북
            </button>
            <button onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline" type="button">
                전남
            </button>
            <button onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline" type="button">
                전북
            </button>
            <button onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline" type="button">
                경남
            </button>
            <button onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline" type="button">
                경북
            </button>
            <button onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline" type="button">
                제주
            </button>
            <button onClick={regionSubmit} onChange={onChangeHandler} className="w-btn-outline w-btn-gray-outline" type="button">
                취소
            </button>

    </div>
}
export default ReactRegionButtons;