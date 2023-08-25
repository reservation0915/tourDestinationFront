import {useEffect, useState} from "react";
import axios from "axios";
import myImg from "../img/122416681.jpg";
import "../css/MentorDetail.css"

const MentorDetail = () => {
    const [mentor, setMentor] = useState({});


    useEffect(() => {
        // 페이지가 처음 들어올 때 시작 되는 코드
        const url = new URL(window.location.href); // Get the current URL
        const mentorId = url.searchParams.get('mentorId'); // Extract the mentorId parameter

        // 1. url 끝에 param (montoerId)를 가져와서 서버로 요청을 한다. (axios)
        axios.get(`http://localhost:8080/api/v1/mentors/${mentorId}`).then((res) => {
            console.log(res.data)
            setMentor(res.data)
            // setMentor(res.data.username)

        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return <>
        <div className="App">
            <div className="detail_box">
                <div className="mentor-container">
                    <div>
                        <div className="profile-image">
                            <img style={{width: '150px', height: '150px'}}
                                 src={myImg}/>
                        </div>
                        <div>{mentor.company}</div>
                        <div>{mentor.department}</div>
                        <div>{mentor.introduction}</div>
                        <div>{mentor.majorCareer}</div>
                        <div className="name">{mentor.username}</div>
                    </div>

                </div>
            </div>
        </div>
    </>

}
export default MentorDetail;