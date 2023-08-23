

import ReactCarousel from "../../bootstrap/ReactCarousel";
import Company from "./Company";

import ReactButtons from "../../bootstrap/ReactButtons";
const Home = () => {

    // const getAll = async () => {
    // }
    // //     setMessage("")
    // //     setLoading(true)
    // //     try {
    // //         const body = {"id": 1}
    // //         const data = await api(`/api/v1/company` +
    // //             `?page=${page}&size=${size}`, "GET")
    // //         const data2 = await apiNoToken(`/userData`, "POST",body)
    // //         setLoading(false)
    // //         console.log(data);
    // //         setLoading(false)
    // //         dispatch(setAll(data))
    // //         console.log(data2);
    // //         // setTotalPages(data.totalPages)
    // //     } catch (error) {
    // //         setMessage(error.response.data)
    // //     }
    // // }
    // // useEffect(() => {
    // //     getAll();
    // // }, [page, size])

    return <div>
        <ReactCarousel/>
        <ReactButtons></ReactButtons>
        <Company></Company>
    </div>
}

export default Home;