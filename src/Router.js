import {createBrowserRouter} from 'react-router-dom';
import RoomDetail from "./components/pages/Login/RoomDetail";

const router = createBrowserRouter([
  {
    path : '/',
    element : <RoomDetail />,
  }
]);

export default router;