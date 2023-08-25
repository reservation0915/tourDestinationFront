import { useDispatch, useSelector } from "react-redux"
import { changeSize } from "../../feature/all/allSlice"

const HomeSizeSelect = () => {
    const size = useSelector(state => state.all.size)
    const dispatch = useDispatch()
    return <select
        value={size}
        onChange={(e) => dispatch(changeSize(e.target.value))}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="50">50</option>
    </select>
}
export default HomeSizeSelect