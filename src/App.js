import MyRouter from './routes/MyRouter';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import CustomRouter from "./routes/CustomRouter";
function App() {
  return (
    <>
        <CustomRouter/>
      <MyRouter></MyRouter>
     
    </>
  );
}

export default App;
