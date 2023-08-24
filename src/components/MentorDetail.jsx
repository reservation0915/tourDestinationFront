import {useEffect, useState} from "react";
import axios from "axios";
import myImg from "../img/122416681.jpg";
import {Link, useParams} from "react-router-dom";
// import "../css/MentorDetail.css"

const MentorDetail = () => {
    const [mentor, setMentor] = useState({});
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500"];
    // 페이지가 처음 들어올 때 시작 되는 코드
    const url = new URL(window.location.href); // Get the current URL
    const mentorId = url.searchParams.get('mentorId');

    useEffect(() => {


        // 1. url 끝에 param (montoerId)를 가져와서 서버로 요청을 한다. (axios)
        axios.get(`http://localhost:8080/api/v1/mentors/${mentorId}`).then((res) => {
            console.log(res.data)
            setMentor(res.data)
            // setMentor(res.data.username)

        }).catch((err) => {
            console.log(err)
        })
    }, []);

    return <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mt-10">
            {/* 왼쪽 카드 */}
            <div className="w-1/4 rounded overflow-hidden shadow-lg bg-white p-10">
                <img className="w-full h-auto mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMi19cT0JI7Ghldmzz5fJkJy0HFeBicKKug&usqp=CAU" alt="uikuik" />
                <div className="font-bold text-xl mb-2">{mentor.username} 멘토</div>
                <p className="font-bold text-gray-700 text-lg">
                    {mentor.company}
                </p>
                <p className="font-bold text-gray-700 text-base">
                    {mentor.department}
                </p>
                <Link to={`/mentoradd/${mentorId}`}>
                <button className="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-4">
                    멘토링 신청
                </button>
                </Link>
            </div>

            {/* 오른쪽 상세 정보 */}
            <div className="ml-8 w-3/5">
                <h2 className="text-2xl font-semibold mb-4">대표 멘토링 분야</h2>
                <div className="flex space-x-2">
                    {mentor.mentoringFields && Array.isArray(mentor.mentoringFields) && mentor.mentoringFields.map((item, idx) => (
                        <div key={idx} className={`${colors[idx % colors.length]} px-4 py-2 rounded-lg text-white text-sm`}>
                            #{item.fieldName}
                        </div>
                    ))}
                </div>
                <h2 className="text-2xl font-semibold mt-6 mb-4">멘토 소개</h2>
                <ul className="list-disc list-inside text-gray-700 pl-6 border-l-4 border-blue-500">
                    {mentor.introduction}
                </ul>
                <h2 className="text-2xl font-semibold mt-6 mb-4">주요 경력</h2>
                <ul className="list-disc list-inside text-gray-700 pl-6 border-l-4 border-blue-500">
                    {mentor.majorCareer}
                </ul>
            </div>
        </div>
    </div>

}
export default MentorDetail;