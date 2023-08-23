import { useEffect, useState } from "react";
import {api, apiNoToken} from "../../network/api";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";
import HomePageButtons from "./HomePageButtons";
import HomeSizeSelect from "./HomeSizeSelect";
import HomeTable from "./HomeTable";
import { useDispatch, useSelector } from 'react-redux'
import { setAll } from "../../feature/all/allSlice";
import ReactCarousel from "../../bootstrap/ReactCrousel";
const Home = () => {
    const dispatch = useDispatch()
    // const [all, setAll] = useState([]);
    // const [totalPages, setTotalPages] = useState(0);

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    // const [page, setPage] = useState(0);
    // const [size, setSize] = useState(5);
    // const changePage = (i) => {
    //     setPage(i)
    // }
    // const changeSize = (e) => {
    //     setSize(e.target.value)
    //     setPage(0)
    // }
    const { size, page } = useSelector(state => state.all)
    const getAll = async () => {
        setMessage("")
        setLoading(true)
        try {
            const body = {"id": 1}
            const data = await api(`/api/v1/company` +
                `?page=${page}&size=${size}`, "GET")
            const data2 = await apiNoToken(`/userData`, "POST",body)
            setLoading(false)
            console.log(data);
            setLoading(false)
            dispatch(setAll(data))
            console.log(data2);
            // setTotalPages(data.totalPages)
        } catch (error) {
            setMessage(error.response.data)
        }
    }
    useEffect(() => {
        getAll();
    }, [page, size])

    return <div>
        <ReactCarousel></ReactCarousel>
        {loading && <Loading />}
        {message && <Toast message={message} />}
        {(loading || message) || <HomeTable />}
        <div style={{ display: "flex" }}>
            <HomePageButtons />
            <HomeSizeSelect />
        </div>
    </div>
}

export default Home;