import { useEffect, useState } from "react";
import Loading from "../tools/Loading";
import Toast from "../tools/Toast";
import HomePageButtons from "./HomePageButtons";
import HomeSizeSelect from "./HomeSizeSelect";
import HomeTable from "./HomeTable";
import { useDispatch, useSelector } from 'react-redux'
import { setAll } from "../../feature/all/allSlice";
import ReactCarousel from "../../bootstrap/ReactCarousel";
import Company from "./Company";
import ReactCard from "../../bootstrap/ReactCard";
import {Offcanvas} from "reactstrap";
import ReactButtons from "../../bootstrap/ReactButtons";
import ReactSlider from "../../bootstrap/ReactSlider";
const Home = () => {
    const dispatch = useDispatch()
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const { size, page } = useSelector(state => state.all)
    const getAll = async () => {
    }
    //     setMessage("")
    //     setLoading(true)
    //     try {
    //         const body = {"id": 1}
    //         const data = await api(`/api/v1/company` +
    //             `?page=${page}&size=${size}`, "GET")
    //         const data2 = await apiNoToken(`/userData`, "POST",body)
    //         setLoading(false)
    //         console.log(data);
    //         setLoading(false)
    //         dispatch(setAll(data))
    //         console.log(data2);
    //         // setTotalPages(data.totalPages)
    //     } catch (error) {
    //         setMessage(error.response.data)
    //     }
    // }
    // useEffect(() => {
    //     getAll();
    // }, [page, size])

    return <div>
        <ReactCarousel></ReactCarousel>
        <ReactButtons></ReactButtons>
        <Company></Company>
    </div>
}

export default Home;