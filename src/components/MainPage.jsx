import "../css/MainPage.css"
import HotelAccom from "./HotelAccom";
import MainAccom from "./MainAccom";
import PentionAccom from "./PensionAccom";
import RankAccoms from "./RankAccoms";

const MainPage = ()=>{

    return(<>
    <div className="container">

        <MainAccom></MainAccom>
        {/*<RankAccoms></RankAccoms>*/}
        <HotelAccom></HotelAccom>
        <PentionAccom></PentionAccom>
    </div>
    </>)
}

export default MainPage;