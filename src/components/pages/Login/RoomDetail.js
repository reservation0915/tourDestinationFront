import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // DatePicker 스타일 파일
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { differenceInDays } from 'date-fns';

const RoomDetail = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [guests, setGuests] = useState(1);
    const [reservationResult, setReservationResult] = useState("");

    const handleMakeReservation = () => {
        if (startDate && endDate) {
            const nightCount = differenceInDays(endDate, startDate);
            setReservationResult(`Reservation for ${nightCount} nights from ${startDate.toDateString()} to ${endDate.toDateString()} - Guests: ${guests}`);
        } else {
            alert("입실 날짜와 퇴실 날짜를 선택해주세요.");
        }
    };

    return (
        <div style={{ backgroundColor: "rgb(242, 242, 242)", height: "100%", display: "flex", justifyContent: "center"}}>
            <article style={{ backgroundColor: "aqua", height: "100%", width: "600px", margin: "0", padding: "0", display: "flex", justifyContent: "center", flexDirection: "column", gap: "20px" }}>
                <section style={{ backgroundColor: "red", width: "100%", display: "flex", justifyContent: "center", flexDirection:"column" }}>
                    <div>
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
                    </div>
                    <div style={{padding: "10px", display: "flex", justifyContent: "center"}}>
                        방 이름 및 옵션 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </section>                
                <section style={{ backgroundColor: "white", padding: "10px", display: "flex", justifyContent: "center" }}>
                    <div>
                        <label htmlFor="startDatePicker">입실 :</label>
                        <DatePicker
                            id="startDatePicker"
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                            minDate={new Date()}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="endDatePicker">퇴실 :</label>
                        <DatePicker
                            id="endDatePicker"
                            selected={endDate}
                            onChange={date => setEndDate(date)}
                            minDate={startDate}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="guests">Number of Guests:</label>
                        <input type="number" id="guests" min="1" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
                    </div>
                    <button onClick={handleMakeReservation}>예약하기</button>
                    <div id="reservationResult">{console.log(reservationResult)}</div>
                </section>
                <section style={{ backgroundColor: "orange", padding: "10px", display: "flex", justifyContent: "center" }}>
                    <div>
                        방 상세 설명 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </section>
                <section style={{ backgroundColor: "beige", padding: "10px", display: "flex", justifyContent: "center" }}>
                    <div>
                        예약 공지사항 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </section>
                <section style={{ backgroundColor: "gray", padding: "10px", display: "flex", justifyContent: "center" }}>
                    <div>
                        객실 후기 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </section>

            </article>
        </div>
    );
};

export default RoomDetail;
