import {useEffect, useState} from "react";
import {Api} from "../network/Api";
import "../css/buttons.css"
import {useNavigate} from "react-router";
const TourDestinationDetail =() =>{
    const nav = useNavigate();
    const [detail, setDetail] = useState({});
    const url = new URL(window.location.href); // Get the current URL
    const detailId = url.searchParams.get('id');
    useEffect(() => {
        const fetchTourDetail = async () => {
            const getData = await Api(`api/v1/tourdestination/${detailId}`, "GET");
            setDetail(getData.data);
        };
        fetchTourDetail();

    }, []);

    const tourReservation= ()=>{
        nav(`/tourdestinationreservation?id=${detailId}`)
    }

    return <div className="App">
            <div className="tour_detail">
                <div className="tour_detail_title">
                    <p>{detail.tourDestinationName}</p>
                </div>
                <div className="tour_detail_picture">
                    <img style={{width: '600px', height: '500px'}}
                         src={detail.tourDestinationPicture}/>
                </div>
            </div>
            <div className="button-div">
                <button onClick={tourReservation} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                    예약하기
                </button>
            </div>
            <div style={{ margin: '48px' }} className="inform-box">{detail.tourDestinationContentDetail}</div>

            <div className="content-div">
                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">전화번호 : {detail.tourDestinationNumber}</div>

                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">상세주소 : {detail.tourDestinationLocation}</div>

                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">이용시간 : {detail.tourDestinationTime}</div>

                    </div>
                </div>

            </div>
    </div>

}
export default TourDestinationDetail;