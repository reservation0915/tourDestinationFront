
import {useEffect, useState} from "react";
import {Api} from "../network/Api";
import "../css/tourdestination.css"
import {useNavigate} from "react-router";

const TourDestination =() =>{
    const nav = useNavigate();
    const [tourDestination, settourDestination] = useState([]);
    const [tourDestinationByDetail,setTourDestinationByDetail] = useState([]);
    const [name,setName] = useState([]);
    const [searchBoolean, setSearchBoolean] = useState(false);
    const [type, setType] = useState([]);
    const getByType1 = async () => {
        const str = "축제&행사";
        setType(str);
        const getData = await Api(`/api/v1/tourdestination/searchby/${type}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);
    }
    const getByType2 = async () => {
        const str = "명소";
        setType(str);
        const getData = await Api(`/api/v1/tourdestination/searchby/${type}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);

    }
    const getByType3 = async () => {
        const str = "음식";
        setType(str);
        const getData = await Api(`/api/v1/tourdestination/searchby/${type}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);

    }
    const getByType4 = async () => {
        const str = "쇼핑";
        setType(str);
        const getData = await Api(`/api/v1/tourdestination/searchby/${type}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);

    }
    const getByType5 = async () => {
        const str = "자연&관광";
        setType(str);
        const getData = await Api(`/api/v1/tourdestination/searchby/${type}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);

    }
    const getByType6 = async () => {
        const str = "엔터테인먼트";
        setType(str);
        const getData = await Api(`/api/v1/tourdestination/searchby/${type}`,"GET")
        setTourDestinationByDetail(getData.data);
        setSearchBoolean(true);

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
    useEffect(() => {
        const fetchTour = async () => {
                const getData = await Api(`api/v1/tourdestination`, "GET");
                console.log(getData.data);
                settourDestination(getData.data);
        };
        fetchTour();

    }, []);
    const tourDestinationDetail= (mentor)=>{
        nav(`/tourdestinationdetail?id=${mentor.id}`)
    }

    return <div className="App">
        <div id="header">
            <div id="header_wrap">
                <div id="header_content">
                    <button onClick={getByType1} className="header_menu">
                    </button>
                </div>

                <div id="header_content">
                    <button onClick={getByType2} className="header_menu">전체</button>
                </div>

                <div id="header_content">
                    <button onClick={getByType1} className="header_menu">축제&행사</button>

                </div>

                <div id="header_content">
                    <button onClick={getByType2} className="header_menu">명소</button>

                </div>

                <div id="header_content">
                    <button onClick={getByType3} className="header_menu">음식</button>

                </div>
                <div id="header_content">
                    <button onClick={getByType4} className="header_menu_login">쇼핑</button>

                </div>
                <div id="header_content">
                    <button onClick={getByType5} className="header_menu">자연&관광</button>
                </div>
                <div id="header_content">
                    <button onClick={getByType6} className="header_menu_login">엔터테인먼트</button>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <input className="input-button" name="name" placeholder="search" onChange={onChangeHandler} />
                        <input type="submit" value="관광지 검색" />
                    </div>
                </form>


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


                        {/*<div>{mentor.majorCareer}</div>*/}
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


                        {/*<div>{mentor.majorCareer}</div>*/}
                    </div>
                </div>


            )}
        </div>}


    </div>

}
export default TourDestination;