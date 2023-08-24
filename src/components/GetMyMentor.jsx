import React, {useEffect, useState} from 'react';
import {Api} from '../network/Api';
import '../css/ChatRoomList.css';
import {Link} from 'react-router-dom';

const GetMyMentor = () => {
    const [myMentor, setMyMentor] = useState([]);

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
            {/*    <div className="mentor-cards">*/}
            {/*        {myMentor.map(mentor => (*/}
            {/*            <div className="mentor-card" key={mentor.id}>*/}
            {/*                <div className="mentor-info">*/}
            {/*                    <h2>{mentor.mentor.company}</h2>*/}
            {/*                    <p>{mentor.mentor.user.username} 멘토님</p>*/}
            {/*                </div>*/}
            {/*                <p>{mentor.mentor.department}</p>*/}
            {/*                <Link to={`/mentorroom/${mentor.id}`}>*/}
            {/*                    <button className="question-button">질문하기</button>*/}
            {/*                </Link>*/}
            {/*            </div>*/}
            {/*        ))}*/}
            {/*    </div>*/}
                <div className="mentor-cards">
                    {myMentor.map(mentor => (
                        <div key={mentor.id}>
                            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md border-t">
                                <div className="md:flex">
                                    <div className="w-full p-2 py-10">
                                        <div className="flex justify-center">
                                            <div className="relative">
                                                <img src={`${mentor.mentor.picture}`} className="rounded-full"
                                                     width="80"/>
                                                <span
                                                    className="absolute border-white border-4 h-5 w-5 top-12 left-16 bg-green-700 rounded-full"></span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-center mt-3 mb-4">
                                            <span className="text-2xl font-medium">{mentor.mentor.user.username} 멘토님</span>
                                        </div>
                                        <p className="px-16 text-center text-md text-gray-800">
                                            {mentor.mentor.introduction}
                                        </p>
                                        <div className="px-16 mt-3 text-center">
                                        <span
                                            className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">#art</span>
                                            <span
                                                className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">#photography</span>
                                            <span
                                                className="bg-gray-100 h-5 p-1 px-3 rounded cursor-pointer hover:shadow hover:bg-gray-200">#music</span>
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