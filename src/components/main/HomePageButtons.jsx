import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../feature/all/allSlice";

const HomePageButtons = () => {
    const dispatch = useDispatch()
    const { totalPages } = useSelector((state) => state.all)
    return Array(totalPages >= 10 ? 10 : totalPages).fill(0).map((el, i) =>
        <button onClick={() => dispatch(changePage(i))} key={i}>{i + 1}</button>
    )
}
export default HomePageButtons;