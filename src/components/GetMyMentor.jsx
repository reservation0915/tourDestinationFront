import React, {useEffect, useState} from 'react';
import {Api} from '../network/Api';
import '../css/ChatRoomList.css';
import {Link} from 'react-router-dom';

const GetMyMentor = () => {
    const [myMentor, setMyMentor] = useState([]);
    const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500"];
    useEffect(() => {
        const getMentor = async () => {
            try {
                const response = await Api("/api/v1/mentorroom", "GET");
                const getMentorData = response.data;
                setMyMentor(getMentorData);
                console.log(getMentorData)
            } catch (error) {
                console.error('Error', error);
            }
        };

        getMentor();
    }, []);

    return (
        <div>
            <div className="chat-room-list-container">
                <h1 style={{textAlign: 'center'}}>내가 신청한 멘토</h1>
                <div className="mentor-cards">
                    {myMentor.map(mentor => (
                        <div key={mentor.id}>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md border-t">
                                <div className="md:flex">
                                    <div className="w-full p-2 py-10">
                                        <div className="flex justify-center">
                                            <div className="relative">
                                                <img src={`${mentor.picture}`} className="rounded-full"
                                                     width="80"/>
                                                <span
                                                    className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-center mt-3 mb-4">
                                            <span className="text-2xl font-medium">{mentor.username} 멘토님</span>
                                        </div>
                                        <p className="px-16 text-center text-md text-gray-800">
                                            {mentor.majorCareer}
                                        </p>
                                        <div className="flex justify-center flex-wrap space-x-2">
                                            {mentor.mentoringFields && Array.isArray(mentor.mentoringFields) && mentor.mentoringFields.map((item, idx) => (
                                                <div key={idx} className={`${colors[idx % colors.length]} px-4 py-2 rounded-lg text-white text-sm mb-2`}>
                                                    #{item.fieldName}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="px-14 mt-5">
                                            <Link to={`/mentorroom/${mentor.id}`}>
                                                <button
                                                    className="h-12 bg-blue-700 w-full text-white text-md rounded hover:shadow hover:bg-blue-800">질문하기
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>

        </div>
    );

};

export default GetMyMentor;