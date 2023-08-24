import {useEffect, useState} from "react";
import Center from "./Center";
import "../css/MentorRequests.css"
import axios from "axios";
import {useNavigate} from "react-router";
import {Api} from "../network/Api";
import {menu} from "../common/menu";


const MentorRequests = () => {
    const nav = useNavigate();
    const [mentoringField, setMentoringField] = useState([]);
    const [profilePicture, setProfilePicture] = useState(null);
    const [user, setUser] = useState({
        company: "",
        department: "",
        introduction: "",
        majorCareer: "",
        picture: ""
    })

    useEffect(() => {
        const fetchField = async () => {
            try {
                setMentoringField([]);
                const mentoringField = await Api(`api/v1/mentoringField`, "GET");
                console.log(mentoringField.data)
                setMentoringField(mentoringField.data);
            } catch (e) {
                // console.error("Error:");
            }
        };
        fetchField();
    }, [])

    const onChangeHandler = (e) => {
        const {value, name} = e.target
        setUser({...user, [name]: value})
    }

    useEffect(() => {
        console.log(localStorage.getItem("username"))
        const userId = localStorage.getItem("userId");
        setUser((prevUser) => ({...prevUser, userId}));
    }, [])
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            axios.post(`http://localhost:8080/api/v1/mentors`, user,
                {withCredentials: true})
            nav("/mentors")
        } catch (error) {
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
                                <label htmlFor="majorCareer">멘토링 가능 분야</label>
                            <div className="mentoring_container">
                                <div className="mentor_field">
                                    {mentoringField.map((item, idx) =>
                                        <div className="field_detail">{item.fieldName}</div>
                                    )}
                                </div>
                            </div>
                            <div className="item-input-introduction">
                                <label htmlFor="introduction">멘토 소개</label>
                                <textarea type="text"
                                          id="introduction"
                                          placeholder="내용을 입력해 주세요."
                                          name="introduction"
                                          className="custom-textarea"
                                          onChange={onChangeHandler}/>
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