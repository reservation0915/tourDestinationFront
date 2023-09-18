import {createBrowserRouter} from 'react-router-dom';
import RoomDetail from "./components/pages/Login/RoomDetail";
import Payment from "./components/pages/Login/Payment";
import AddAuthSerivce from "./components/pages/Infomation/AddAuthSerivce";

const router = createBrowserRouter([
  {
    path : '/roomdetail',
    element : <RoomDetail />,
  },
  {
    path : '/payment',
    element : <Payment />,
  },
  {
    path : '/',
    element : <AddAuthSerivce />,
  }
]);

export default router;