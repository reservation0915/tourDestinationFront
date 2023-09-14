import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { differenceInDays } from 'date-fns';
import DatePicker from "react-date-picker"; // react-date-picker를 가져옵니다.

const RoomDetail = () => {
    const [startDate, setStartDate] = useState(null); // 체크인 날짜 상태
    const [endDate, setEndDate] = useState(null);     // 체크아웃 날짜 상태
    const [roomType, setRoomType] = useState("standard"); // 방 유형 상태
    const [guests, setGuests] = useState(1);             // 게스트 수 상태
    const [reservationResult, setReservationResult] = useState(""); // 예약 결과 상태

    const handleMakeReservation = () => {
        if (startDate && endDate) {
            // 여기서 서버로 선택한 날짜, 예약 정보, 박수 등을 전송하고 결과를 처리합니다.
            // 서버 통신 및 예약 결과 처리 로직을 구현하세요.

            // 날짜 간의 박수 계산
            const nightCount = differenceInDays(endDate, startDate);

            // 예약 결과를 표시합니다.
            setReservationResult(`Reservation for ${nightCount} nights from ${startDate.toDateString()} to ${endDate.toDateString()} - Room Type: ${roomType}, Guests: ${guests}`);
        } else {
            alert("Please select both check-in and check-out dates.");
        }
    }

    return (
        <>
            <body style={{
                backgroundColor: 'rgb(242, 242, 242)',
                height: "100%",
                display: 'flex',
                justifyContent: 'center',
                padding: '0 300px 0 300px'
            }}>
            <article style={{
                backgroundColor: 'aqua',
                height: '100%',
                width: "600px",
                margin: '0',
                padding: '0',
                display: 'flex',
                justifyContent: "center",
                flexDirection: "column",
                gap: "20px"
            }}>
                <section style={{backgroundColor: "red", width: "100%", display: "flex", justifyContent: "center"}}>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <img src="https://yaimg.yanolja.com/v5/2023/08/30/14/640/64ef4fad388ae2.21966794.jpg"
                                 alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://yaimg.yanolja.com/v5/2022/10/24/16/640/6356c33652ad80.43010058.jpg"
                                 alt=""/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://yaimg.yanolja.com/v5/2022/10/24/16/640/6356c3370d6d07.02010253.jpg"
                                 alt=""/>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section style={{backgroundColor: "white", padding: "10px", display: "flex", justifyContent: "center"}}>
                    <div>방 이름 및 설명 : Contrary to popular belief</div>
                </section>
                <section style={{backgroundColor: "white", padding: "10px", display: "flex", justifyContent: "center"}}>
                    <div>
                        <label htmlFor="startDatePicker">Check-in Date:</label>
                        <DatePicker
                            id="startDatePicker"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            minDate={new Date()}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="endDatePicker">Check-out Date:</label>
                        <DatePicker
                            id="endDatePicker"
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            minDate={startDate}
                            required
                        />
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
                        <input type="number" id="guests" min="1" value={guests}
                               onChange={(e) => setGuests(parseInt(e.target.value))}/>
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