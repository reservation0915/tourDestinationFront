import React, { useEffect, useState } from 'react';
import { Api } from '../network/Api';

const GetMyMentor = () => {
    const [myMentor, setMyMentor] = useState([]);

    useEffect(() => {
        const getMentor = async () => {
            try {
                const response = await Api("/api/v1/mentorroom", "GET");
                const getMentorData = response.data;
                setMyMentor(getMentorData);
            } catch (error) {
                console.error('Error fetching mentor data:', error);
            }
        };

        getMentor();
    }, []);

    return (
        <div>
            <h1>내가 신청한 멘토</h1>
            <table>
                <thead>
                    <tr>
                        <th>회사명</th>
                    </tr>
                </thead>
                <tbody>
                    {myMentor.map(mentor => (
                        <tr key={mentor.id}>
                            <td>{mentor.mentor.company}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GetMyMentor;