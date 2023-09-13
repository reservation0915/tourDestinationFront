import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../../styles/pages/layout/roomDetail.css';
import { differenceInDays } from 'date-fns'; // date-fns에서 날짜 계산 함수를 가져옵니다.

const RoomDetail = () => {
    const [startDate, setStartDate] = useState(""); // 체크인 날짜 상태
    const [endDate, setEndDate] = useState("");     // 체크아웃 날짜 상태
    const [roomType, setRoomType] = useState("standard"); // 방 유형 상태
    const [guests, setGuests] = useState(1);             // 게스트 수 상태
    const [reservationResult, setReservationResult] = useState(""); // 예약 결과 상태

    const handleMakeReservation = () => {
        // 날짜를 Date 객체로 변환
        const startDateObj = new Date(startDate);
        const endDateObj = new Date(endDate);

        // 날짜 간의 박수 계산
        const nightCount = differenceInDays(endDateObj, startDateObj);

        // 여기서 서버로 선택한 날짜, 예약 정보, 박수 등을 전송하고 결과를 처리합니다.
        // 서버 통신 및 예약 결과 처리 로직을 구현하세요.

        // 예약 결과를 표시합니다.
        setReservationResult(`Reservation for ${nightCount} nights from ${startDate} to ${endDate} - Room Type: ${roomType}, Guests: ${guests}`);
    }

    return (
        <>
            <body style={{ backgroundColor: 'rgb(242, 242, 242)', height: "100%", display: 'flex', justifyContent: 'center', padding: '0 400px 0 400px' }}>
            <article style={{ backgroundColor: 'aqua', height: '100%', width: "500px", margin: '0', padding: '30px', display: 'flex', justifyContent: "center", flexDirection: "column", gap: "20px" }}>
                <section style={{ backgroundColor: "red", display: "flex", justifyContent: "center" }}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <img src="https://yaimg.yanolja.com/v5/2023/08/30/14/640/64ef4fad388ae2.21966794.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://yaimg.yanolja.com/v5/2022/10/24/16/640/6356c33652ad80.43010058.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://yaimg.yanolja.com/v5/2022/10/24/16/640/6356c3370d6d07.02010253.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section style={{ backgroundColor: "green", display: "flex", justifyContent: "center" }}>
                    <div>방 이름 및 설명 : Contrary to popular belief, ...</div>
                </section>
                <section style={{ backgroundColor: "blue", display: "flex", justifyContent: "center" }}>
                    <div>
                        <label htmlFor="startDatePicker">Check-in Date:</label>
                        <input type="date" id="startDatePicker" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="endDatePicker">Check-out Date:</label>
                        <input type="date" id="endDatePicker" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="roomType">Room Type:</label>
                        <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                            <option value="standard">Standard</option>
                            <option value="deluxe">Deluxe</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="guests">Number of Guests:</label>
                        <input type="number" id="guests" min="1" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
                    </div>
                    <button onClick={handleMakeReservation}>Make Reservation</button>
                    <div id="reservationResult">{reservationResult}</div>
                </section>
            </article>
            </body>
        </>
    );
}

export default RoomDetail;
