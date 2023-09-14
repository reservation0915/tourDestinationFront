import {createBrowserRouter} from 'react-router-dom';
import RoomDetail from "./components/pages/Login/RoomDetail";
import Payment from "./components/pages/Login/Payment";

const router = createBrowserRouter([
  {
    path : '/',
    element : <RoomDetail />,
  },
  {
    path : '/payment',
    element : <Payment />,
  }
]);

export default router;