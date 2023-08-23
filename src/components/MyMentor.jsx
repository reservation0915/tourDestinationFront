import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Api } from '../network/Api';

const MyMentor = () => {

    const { id } = useParams();

    useEffect(() => {
        const addMentor = async () => {
            await Api(`/api/v1/mentorroom/${id}`, "POST");
        };

        addMentor()

    }, []);

};

export default MyMentor;