import React from 'react';
import {useState} from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import {useParams} from 'react-router';
import {Client} from '@stomp/stompjs';
import SockJS from 'sockjs-client';
// import '../css/MentorChat.css';
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
        <div>
            <div
                className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
                <div className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
                        {saveMessages.map((save, index) => (
                            <div key={index}
                                 className={`${save.sender === localStorage.getItem('username') ?
                                     'flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end' :
                                     'flex w-full mt-2 space-x-3 max-w-xs'}`}>
                                {/*<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>*/}
                                <div className={`${save.sender === localStorage.getItem('username') ?
                                    'bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg' :
                                    'bg-gray-300 p-3 rounded-r-lg rounded-bl-lg'}`}>
                                    <div>
                                        <p className="text-sm">{save.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {chatMessages.map((save, index) => (
                            <div key={index}
                                 className={`${save.sender === localStorage.getItem('username') ?
                                     'flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end' :
                                     'flex w-full mt-2 space-x-3 max-w-xs'}`}>
                                {/*<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>*/}
                                <div className={`${save.sender === localStorage.getItem('username') ?
                                    'bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg' :
                                    'bg-gray-300 p-3 rounded-r-lg rounded-bl-lg'}`}>
                                    <div>
                                        <p className="text-sm">{save.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef}/>
                    </div>
                    <div className="bg-gray-300 p-4 flex items-center">
                        <input className="flex-grow h-10 rounded px-3 text-sm border border-gray-400" type="text"
                               value={inputValue} onChange={handleMessage} />
                        <button type="button" className="bg-blue-600 text-white py-2 px-4 rounded ml-2"
                                onClick={sendValue}>전송</button>
                    </div>

                    <div ref={roomEndRef}/>
                </div>

            </div>
        </div>
    );
};

export default MentorChat;