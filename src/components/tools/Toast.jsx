import { useEffect, useState } from "react"
import './Toast.css'
const Toast = ({ message }) => {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000)
    }, [message])
    return show && <div id="snackbar" className="show">{message}</div>
}
export default Toast