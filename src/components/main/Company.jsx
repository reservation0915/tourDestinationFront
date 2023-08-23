import { useEffect, useState } from "react";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";
import HomePageButtons from "./HomePageButtons";
import HomeSizeSelect from "./HomeSizeSelect";
import { useDispatch, useSelector } from 'react-redux'
import ReactCard from "../../bootstrap/ReactCard";
import {setCompany} from "../../feature/company/company";
import {api} from "../../network/Api";
const Company =() =>{
    const dispatch = useDispatch()
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const[data,setData]=useState([]);
    const { size, page } = useSelector(state => state.all)
    const getAll = async () => {
        setMessage("")
        setLoading(true)
        try {
            const condition ="";
            const getData = await api(`/api/v1/company` +
                `?page=${page}&size=${size}`, "GET")
            setLoading(false)
            dispatch(setCompany(getData));
            setData(getData.content);
            console.log(getData.content);
        } catch (error) {
            setMessage(error.response.data)
        }
    }
    useEffect(() => {
        getAll();
    }, [page, size])

    return <div>
        {loading && <Loading />}
        {message && <Toast message={message} />}
        {/*{(loading || message) || <HomeTable />}*/}
        {(loading || message) || <ReactCard nowData={data}/>}
        <div style={{ display: "flex" }}>
            <HomePageButtons />
            <HomeSizeSelect />
        </div>
    </div>

}
export default Company;