import React, { useState } from 'react';
import RangeSlider from 'react-bootstrap-range-slider';

import {useDispatch, useSelector} from "react-redux";
import {setGradeData} from "../feature/companydata/companydata";
import {setGrade} from "../feature/companydata/companydata"
import {useNavigate} from "react-router";
const ReactSlider =() =>{
        const [ value, setValue ] = React.useState(50);
    const { gradeData } = useSelector(state => state.companyData)
    const dispatch = useDispatch();
    const nav = useNavigate();

    const cancel = () =>{
        dispatch(setGradeData());
        //취소버튼
    }
    const Grade = (e) =>{
        dispatch(setGrade(value));
        dispatch(setGradeData());
        console.log(value);
        nav('/');
    }
        return <div>
                <RangeSlider
                    value={value}
                    min={0}
                    max={5}
                    size='sm'
                    step={1}
                    onChange={e => setValue(e.target.value)}
                />
                <div className="button-div">

                    <button onClick={Grade} className="w-btn-outline w-btn-gray-outline" type="button">
                        설정
                    </button>
                    <button onClick={cancel} className="w-btn-outline w-btn-gray-outline" type="button">
                        취소
                    </button>
                </div>

        </div>


}
export default ReactSlider;