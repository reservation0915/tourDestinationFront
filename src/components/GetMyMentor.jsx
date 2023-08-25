import React, { useEffect, useState } from 'react';
import { Api } from '../network/Api';
import '../css/ChatRoomList.css';
import { Link } from 'react-router-dom';

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
        <div className="chat-room-list-container">
            <h1 style={{ textAlign: 'center' }}>내가 신청한 멘토</h1>
            <div className="mentor-cards">
                {myMentor.map(mentor => (
                    <div className="mentor-card" key={mentor.id}>
                        <div className="mentor-info">
                            <h2>{mentor.mentor.company}</h2>
                            <p>{mentor.mentor.user.username} 멘토님</p>
                        </div>
                        <p>{mentor.mentor.department}</p>
                        <Link to={`/mentorroom/${mentor.id}`}>
                            <button className="question-button">질문하기</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default GetMyMentor;