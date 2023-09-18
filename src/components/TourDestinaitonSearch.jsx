import {useEffect, useState} from "react";
import {Api} from "../network/Api";

const TourDestinaitonSearch =() =>{
    const [detail, setDetail] = useState({});
    const url = new URL(window.location.href); // Get the current URL
    const name = url.searchParams.get('name');
    useEffect(() => {
        const fetchTourByName = async () => {
            const getData = await Api(`api/v1/tourdestination/search/${name}`, "GET");
            console.log(getData.data);
            setDetail(getData.data);
        };
        fetchTourByName();

    }, []);
    return <div className="App">
        <div className="tour_detail_title">
            <p>{detail.tourDestinationName}</p>
        </div>
        <div>
            <img style={{width: '600px', height: '500px'}}
                 src={detail.tourDestinationPicture}/>
        </div>
        <div className="tour_detail_content">
            <p>{detail.tourDestinationContent}</p>
        </div>
    </div>
}
export default TourDestinaitonSearch;