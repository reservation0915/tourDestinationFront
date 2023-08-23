import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router';
import {Client} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import '../css/MentorChat.css';
import {Api} from "../network/Api";

const MentorChat = () => {
    const messagesEndRef = useRef(null)
    const roomEndRef = useRef(null)
    const [inputValue, setInputValue] = useState();

    const [chatMessages, setChatMessages] = useState([]);

    const stompClientRef = useRef(null);
    const {id} = useParams();
    const [chat, setChat] = useState({
        roomId: id,
        chat: '',
        recipient: localStorage.getItem('username')
    });
    const scrollToBottom = () => {
        console.log("내려가냐?")
        roomEndRef.current.scrollIntoView({behavior: 'auto'});
        messagesEndRef.current.scrollIntoView({behavior: 'auto'});

    };

    useEffect(() => {
        connect();
        getSaveChat();

        // 데이터를 가져온 후에 스크롤링 작업을 실행
        const timeout = setTimeout(() => {
            scrollToBottom();
        }, 100);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [chatMessages]);

    const [saveMessages, setSaveMessages] = useState([
        {id: '', sender: '', message: ''}
    ]);

    const getSaveChat = async () => {
        try {
            const response = await Api(`/api/v1/mentorroom/${id}`, "GET");
            const responseData = response.data;
            const transformedData = responseData.map(item => ({
                id: item.roomId,
                sender: item.recipient,
                message: item.chat
            }));
            setSaveMessages(transformedData); // 변환된 데이터를 상태에 저장
        } catch (error) {
            console.error('Error', error);
        }
    }
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
        const newMessage = {
            id: chatMessages.length + 1,
            sender: payloadData.recipient,
            message: payloadData.chat
        };

        setChatMessages((prevMessages) => [...prevMessages, newMessage]);
    }

    const handleMessage = (event) => {
        const {value} = event.target;
        setInputValue(value);
        setChat({...chat, "chat": value});
    }

    const sendValue = () => {
        if (stompClientRef.current) {
            stompClientRef.current.publish({destination: "/app/mentorChat", body: JSON.stringify(chat)});
            console.log("asd");
            console.log(chat);
            setInputValue("");
        }
    }

    return (
        <div className="chat-container">
            <div className="chat-room">
                <div className="chat-header">
                    <h1>질문하기</h1>
                </div>
                <div className="chat-messages">
                    {saveMessages.map((save, index) => (
                        <div key={index}
                             className={`message ${save.sender === localStorage.getItem('username') ? 'sent' : 'received'}`}>
                            <span>{save.message}</span>
                        </div>
                    ))}
                    {chatMessages.map((chat, index) => (
                        <div key={index}
                             className={`message ${chat.sender === localStorage.getItem('username') ? 'sent' : 'received'}`}>
                            <span>{chat.message}</span>
                        </div>
                    ))}
                    <div ref={messagesEndRef}/>
                </div>

                <div className="chat-input">
                    <input type="text" value={inputValue} placeholder="메시지 입력" onChange={handleMessage}/>
                    <button type="button" className="send-button" onClick={sendValue}>전송</button>
                </div>
                <div ref={roomEndRef}/>
            </div>
        </div>

    );
};

export default MentorChat;