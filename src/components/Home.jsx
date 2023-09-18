import {useNavigate} from "react-router";
import {useEffect} from "react";

const HOME = ()=>{
    const nav = useNavigate();
    useEffect(() => {
        const tourDestinationDetail= ()=>{
            nav(`/main`)
        }
        tourDestinationDetail();

    }, []);
    return <div>
        <h1>HOME</h1>
    </div>
}
export default HOME