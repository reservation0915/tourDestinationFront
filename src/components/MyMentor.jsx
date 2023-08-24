import React, { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { Api } from '../network/Api';

const MyMentor = () => {

    const { id } = useParams();
    const nav = useNavigate();
    useEffect(() => {
        const addMentor = async () => {
            await Api(`/api/v1/mentorroom/${id}`, "POST");
        };

        addMentor()
        nav('/mentorroom')
    }, []);

};

export default MyMentor;