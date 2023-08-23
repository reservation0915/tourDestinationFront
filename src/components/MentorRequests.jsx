import {useEffect, useState} from "react";
import Center from "./Center";
import "../css/MentorRequests.css"
import axios from "axios";
import {useNavigate} from "react-router";

const MentorRequests = () => {
    const nav = useNavigate();
    const [user, setUser] = useState({
        company: "",
        department:"",
        introduction: "",
        majorCareer:""
    })

    const onChangeHandler = (e) => {
        const { value, name } = e.target
        setUser({ ...user, [name]: value })
    }

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        setUser((prevUser) =>({...prevUser, userId}));
    }, [])
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            axios.post(`http://localhost:8080/api/v1/mentors`, user,
                {withCredentials:true})
            nav("/mentors")
        }catch (error) {
            console.error("Error:", error);

        }
    }

    return <>
        <div className="App">
            <Center>
                <div className="mentor-requests-container">
                    <div className="header">
                        <h1>멘토지원</h1>
                    </div>
                    <div className="item-content">
                        <form onSubmit={onSubmitHandler}>
                            <div className="item-input">
                                <label htmlFor="company">회사명</label>
                                <input type="text"
                                       id="companyName"
                                       placeholder="예) play data"
                                       name="company"
                                       onChange={onChangeHandler}/>
                            </div>
                            <div className="item-input">
                                <label htmlFor="department">부서</label>
                                <input type="text"
                                       id="department"
                                       placeholder="예) 제품개발팀"
                                       name="department"
                                       onChange={onChangeHandler}/>
                            </div>
                            <div className="item-input">
                                <label htmlFor="majorCareer">주요 경력</label>
                                <input type="text"
                                       id="majorCareer"
                                       placeholder="내용을 입력해 주세요."
                                       name="majorCareer"
                                       onChange={onChangeHandler}/>
                            </div>
                            <div className="item-input-introduction">
                                <label htmlFor="introduction">멘토 소개</label>
                                <textarea type="text"
                                          id="introduction"
                                          placeholder="내용을 입력해 주세요."
                                          name="introduction"
                                          className="custom-textarea"
                                          nChange={onChangeHandler}/>
                            </div>
                                <input type="submit" value={"등록"}/>
                        </form>
                    </div>
                </div>
            </Center>
        </div>
    </>
}
export default MentorRequests;