import ReactCard from "../bootstrap/ReactCard";
import ReactSlider from "../bootstrap/ReactSlider";
import {setGradeData} from "../feature/companydata/companydata";
import { useDispatch, useSelector } from 'react-redux'
import {apiNoToken} from "../network/api";

const GradeButtons =()=> {
    const { gradeData } = useSelector(state => state.companyData)
    const dispatch = useDispatch();

    const cancel = () =>{
        dispatch(setGradeData());
        //취소버튼
    }
    const setGrade = () =>{

    }
    // const onChangeHandler = (e) => {
    //     const getLocation = e.target.value
    //     const getSiteName =e.target.value
    //     setLocation({ ...location, getLocation });
    //     setSiteName({...siteName,getSiteName});
    // }
    // const onSubmitHandler = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const values = Object.values(location);
    //         const values2 = Object.values(siteName);
    //         const locationValue = values.at(0);
    //         const siteNameValue = values2.at(0);
    //         const getData = await apiNoToken(`/api/v1/company` +
    //             `?page=${page}&size=${size}&siteName=${siteNameValue}`, "GET")
    //         console.log(getData);
    //         setData(getData.content);
    //     } catch (error) {
    //         setMessage(error.response.data);
    //     }
    // }

    return(
        <div className="button-div">

            <button className="w-btn-outline w-btn-gray-outline" type="button">
                설정
            </button>
            <button onClick={cancel} className="w-btn-outline w-btn-gray-outline" type="button">
                취소
            </button>

        </div>
    )
}
export default GradeButtons;