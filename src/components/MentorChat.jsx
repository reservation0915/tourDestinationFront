import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const MentorChat = () => {

    const stompClientRef = useRef(null);
    const { id } = useParams();
    const [chat, setChat] = useState({
        roomId: id,
        chat: '',
        recipient: 'test'
    });

    useEffect(() => {
        connect();
    }, []);

    const connect = () => {
        let sock = new SockJS('http://localhost:8080/websocket');
        const stompClient = new Client();
        stompClient.webSocketFactory = () => sock;
        stompClient.onConnect = onConnected;
        stompClient.activate();
        stompClientRef.current = stompClient; // Set stompClient to stompClientRef.current
    }

    const onConnected = () => {
        stompClientRef.current.subscribe(`/queue/messages/${id}`, onMessageReceived);
        console.log('STOMP connected');
    }

    const onMessageReceived = (payload) => {
        const payloadData = JSON.parse(payload.body);
        console.log(payloadData.roomId);
        console.log(payloadData.chat);
        console.log(payloadData.recipient);
    }

    const handleMessage = (event) => {
        const { value } = event.target;
        setChat({ ...chat, "chat": value });
        console.log(chat)
    }

    const sendValue = () => {
        if (stompClientRef.current) {
            stompClientRef.current.publish({ destination: "/app/mentorChat", body: JSON.stringify(chat) });
            console.log("asd")
            console.log(chat)
        }
    }

    return (
        <div>
            ㅎㅇ

            <div className="send-message">
                <input type="text" className="input-message" placeholder="채팅입력" onChange={handleMessage} />
                <button type="button" className="send-button" onClick={sendValue}>보냄</button>
            </div>
        </div>
    );
};

export default MentorChat;