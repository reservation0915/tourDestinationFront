import {Link, Route, Routes} from "react-router-dom";
import Template from "../components/Template";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Auth from "../components/Auth";
import MySignup from "../components/MySignup";
import HOME from "../components/Home";
import TourDestination from "../components/TourDestination";
import TourDestinationDetail from "../components/TourDestinationDetail";
import TourDestinationReservation from "../components/TourDestinationReservation";
import RoomDetail from "../Infomation/RoomDetail";
import Payment from "../Infomation/Payment";
import AddAuthSerivce from "../Infomation/AddAuthSerivce";
import MainPage from "../components/MainPage";


const CustomRouter = ()=>{
    const myRoutes = [
        {
            path:"/login", component:<Login/>
        },{
            path:"/register", component:<Signup />
        },{
            path:"/my/register", component:<MySignup/>
        },{
            path:"/auth", component:<Auth/>
        },{
            path: "/home", component: <HOME/>
        },{
            path : "/roomdetail",
            component : <RoomDetail />,
        },{
            path : "/payment",
            component : <Payment />,
        },{
            path : '/addauth',
            component : <AddAuthSerivce />,
        },{
            path : '/main',
            component : <MainPage />,
        }
    ]
    return <Routes>
        <Route path={"/"} element={<h1><Link to={"/login"}>go to login</Link></h1>}></Route>
        <Route element={<Template />}>
            {myRoutes.map(el=>
                <Route key={el.path} path={el.path} element={el.component}></Route>
            )}
            <Route path='/tourdestination' element={<TourDestination />}></Route>
            <Route path='/tourdestinationdetail' element={<TourDestinationDetail />}></Route>
            <Route path='/tourdestinationreservation' element={<TourDestinationReservation />}></Route>


            {/*<Route path='/payment' element={<Payment />}></Route>*/}
            {/*<Route path='/add' element={<AddAuthSerivce />}></Route>*/}
        </Route>
    </Routes>
}
export default CustomRouter