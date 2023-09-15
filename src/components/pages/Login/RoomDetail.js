import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // DatePicker 스타일 파일
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { differenceInDays } from 'date-fns';
import {useNavigate} from "react-router";
import '../../../styles/pages/layout/roomDetail.css';

const RoomDetail = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [guests, setGuests] = useState(1);
    const [reservationResult, setReservationResult] = useState("");
    const startDateString = startDate ? `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}` : "";
    const endDateString = endDate ? `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}` : "";
    const nav = useNavigate();

    const handleMakeReservation = () => {
        if (startDate && endDate) {
            const nightCount = differenceInDays(endDate, startDate);
            setReservationResult(`Reservation for ${nightCount} nights from ${startDateString} to ${endDateString} - Guests: ${guests}`);
            nav(`/payment?startDate=${startDateString}&endDate=${endDateString}`)
            console.log(reservationResult)
        } else {
            alert("입실 날짜와 퇴실 날짜를 선택 해주세요.");
        }
    };

    return (
        <div style={{ backgroundColor: "rgb(242, 242, 242)", height: "100%", display: "flex", justifyContent: "center"}}>
            <article style={{ backgroundColor: "#ffffff", height: "100%", width: "600px", margin: "0", padding: "0", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <section id="firstSection" style={{flexDirection:"column" }}>
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

                <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                <section id="firstSection">
                    <span id="datePickerExplain">입실 날짜와 퇴실 날짜를 선택 해주세요.</span>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{justifyContent:"center", display:"flex", alignItems: "center" }}>
                            <div style={{margin:"0 20px 0 20px"}}>
                                <label htmlFor="startDatePicker"><span id="span">입실 날짜 : </span></label>
                                <DatePicker
                                    id="startDatePicker"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    minDate={new Date()}
                                    required
                                />
                            </div>
                            <div style={{margin:"0 20px 0 20px"}}>
                                <label htmlFor="endDatePicker"><span id="span">퇴실 날짜 : </span></label>
                                <DatePicker
                                    id="endDatePicker"
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    minDate={startDate}
                                    required
                                />
                            </div>
                        </div>
                        <div style={{justifyContent:"center", display:"flex", alignItems: "center" }}>
                            <div style={{margin:"0 15px 0 20px"}}>
                                <label htmlFor="guests"><span id="span">인원 수 : </span></label>
                                <input type="number" id="guests" min="1" value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
                            </div>
                            <button id="resBtn" onClick={handleMakeReservation}>예약하기</button>
                        </div>
                    </div>
                </section>

                <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                <section id="firstSection">
                    <div>
                        방 상세 설명 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </section>

                <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                <section id="firstSection">
                    <div>
                        예약 공지사항 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </section>

                <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                <section id="firstSection">
                    <div>
                        객실 후기 : There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </div>
                </section>
            </article>
        </div>
    );
};

export default RoomDetail;
