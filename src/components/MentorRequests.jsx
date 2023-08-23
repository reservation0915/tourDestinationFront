import {useEffect, useState} from "react";

const MentorRequests = () => {
    const [user, setUser] =  useState({})

    useEffect(() => {

    localStorage.getItem('userId')

    }, [])





    return <div>
        <h1>멘토지원페이지</h1>
    </div>
}
export default MentorRequests;