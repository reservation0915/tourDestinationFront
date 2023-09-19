
import {useEffect, useState} from "react";
import {Api} from "../network/Api";
import "../css/tourdestination.css"
import "../css/buttons.css"
import {useNavigate} from "react-router";


const TourDestination =() =>{
    const nav = useNavigate();
    const [tourDestination, settourDestination] = useState([]);
    const [tourDestinationByDetail,setTourDestinationByDetail] = useState([]);
    const [name,setName] = useState([]);
    const [searchBoolean, setSearchBoolean] = useState(false);
    // const [tokenData,setTokenData] = useState([]);
    // const tokenData = localStorage.getItem("token");


    const getByType = async (data) => {
        getDetailData(data);
    }



    const onChangeHandler = (e) => {
        const getName = e.target.value
        setName(getName);
        //nav("/siteRecommend")
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
            const getData = await Api(`/api/v1/tourdestination/search/${name}`,"GET")
            setSearchBoolean(true);
            setTourDestinationByDetail(getData.data);
    }
    const fetchTour = async () => {
        const getData = await Api(`http://192.168.0.249:8000/api/v1/tourdestination`, "GET");
        settourDestination(getData.data);
    };

    useEffect(() => {


        fetchTour()


    }, []);

    const tourDestinationDetail= (mentor)=>{
        nav(`/tourdestinationdetail?id=${mentor.id}`)
    }
    const getDetailData =async(data) =>{
        const getData = await Api(`/api/v1/tourdestination/searchby/${data}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);
    }
    const redirect =async () =>{
        setSearchBoolean(false);
    }
    const freeCount = async (data) =>{
        const getData = await Api(`/api/v1/tourdestination/searchbypay/${data}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);
    }

    return <div className="App">
        <div id="header">
            <div id="header_wrap">

                <div id="header_content">
                    <button onClick={redirect} className="header_menu">전체</button>
                </div>

                <div id="header_content">
                    <button onClick={()=>freeCount(0)} className="header_menu">무료</button>

                </div>

                <div id="header_content">
                    <button onClick={()=>freeCount(1)} className="header_menu">유료</button>

                </div>

                <div id="header_content">
                    <button onClick={()=>getByType("축제&행사")} className="header_menu">축제&행사</button>

                </div>

                <div id="header_content">
                    <button onClick={()=>getByType("명소")} className="header_menu">명소</button>

                </div>

                <div id="header_content">
                    <button onClick={()=>getByType("음식")} className="header_menu">음식</button>

                </div>
                <div id="header_content">
                    <button onClick={()=>getByType("쇼핑")} className="header_menu">쇼핑</button>

                </div>
                <div id="header_content">
                    <button onClick={()=>getByType("자연&관광")} className="header_menu">자연&관광</button>
                </div>
                <div id="header_content">
                    <button onClick={()=>getByType("엔터테인먼트")} className="header_menu">엔터테인먼트</button>
                </div>
                <div>
                    <form onSubmit={onSubmitHandler}>
                        <div id="header_menu_login">
                            <input className="header_menu_search" name="name" placeholder="search" onChange={onChangeHandler} />
                            <input className="header_menu_search" type="submit" value="관광지 검색" />
                        </div>
                    </form>

                </div>
            </div>
        </div>

        {searchBoolean === false && <div className="card_wrap">
                    {tourDestination.map((mentor, idx) =>
                        <div key={idx} onClick={() => {tourDestinationDetail(mentor)}}>
                            <div className="card_detail">
                                <div className="card_img">
                                    <img style={{width: '285px', height: '210px'}}
                                         src={mentor.tourDestinationPicture
                                         }/>
                                </div>
                                <div className="story">
                                    <div className="story_title">{mentor.tourDestinationName}</div>

                                </div>
                                <div className="story">
                                    <div className="story_text">{mentor.tourDestinationContent}</div>

                                </div>
                            </div>
                        </div>


                    )}
                </div>
                }
                    {searchBoolean === true && <div className="card_wrap">
                        {tourDestinationByDetail.map((mentor, idx) =>
                            <div key={idx} onClick={() => {tourDestinationDetail(mentor)}}>
                    <div className="card_detail">
                        <div className="card_img">
                            <img style={{width: '285px', height: '210px'}}
                                 src={mentor.tourDestinationPicture
                                 }/>
                        </div>
                        <div className="story">
                            <div className="story_title">{mentor.tourDestinationName}</div>

                        </div>
                        <div className="story">
                            <div className="story_text">{mentor.tourDestinationContent}</div>

                        </div>

                    </div>
                </div>


            )}
        </div>}
    </div>


}
export default TourDestination;