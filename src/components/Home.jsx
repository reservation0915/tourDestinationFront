import {useNavigate} from "react-router";
import {useEffect} from "react";
import {Api} from "../network/Api";

const HOME = ()=>{
    const nav = useNavigate();
    useEffect(() => {
        const tourDestinationDetail= ()=>{
            nav(`/tourdestination`)
        }
        tourDestinationDetail();

    }, []);
    return <div>
        <h1>HOME</h1>
    </div>
}
export default HOME