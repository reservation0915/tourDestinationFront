import "../css/MainPage.css"
import MainAccom from "./MainAccom";
import RankAccoms from "./RankAccoms";

const MainPage = ()=>{

    return(<>
    <div className="container">

        <MainAccom></MainAccom>
        <RankAccoms></RankAccoms>
      
    </div>
    </>)
}

export default MainPage;