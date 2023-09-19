import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // DatePicker 스타일 파일
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useNavigate} from "react-router";
import '../css/layout/roomDetail.css';
import axios from "axios";

const RoomDetail = () => {
    // todo 해당 room을 선택하면 roomId를 통해 정보를 가져온다
    const [roomInfo, setRoomInfo] = useState([]) // 선택된 Room의 정보 (useEffect를 사용해서 불러온 뒤 여기에 담는다.)
    const [accomInfo, setAccomInfo] = useState(null)
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [guests, setGuests] = useState(1);
    const [reservationResult, setReservationResult] = useState("");
    const startDateString = startDate ? `${startDate.getFullYear()}-${(startDate.getMonth() + 1).toString().padStart(2, '0')}-${startDate.getDate().toString().padStart(2, '0')}` : "";
    const endDateString = endDate ? `${endDate.getFullYear()}-${(endDate.getMonth() + 1).toString().padStart(2, '0')}-${endDate.getDate().toString().padStart(2, '0')}` : "";
    const nav = useNavigate();
    const url = new URL(window.location.href); // AccomMain path에 던져준 정보를 받는다
    const customerId = url.searchParams.get('customerId');
    const roomId = url.searchParams.get('roomId');
    const accomId = url.searchParams.get('accomId');
    const roomCheck = {
        roomId:roomId,
        checkIn:startDateString,
        checkOut:endDateString
    }
    const imageUrls = [
        roomInfo.roomImage1,
        roomInfo.roomImage2,
        roomInfo.roomImage3,
        roomInfo.roomImage4
    ];
    useEffect(() => { // 서버에 해당 Room의 Id를 주고 정보를 요청
        axios.get(`http://192.168.0.249:8000/api/v1/find/room/detail/${roomId}`)
            .then((response) => {
                setRoomInfo(response.data);
                console.log(response.data)
            }).catch((err) => {
            console.log(err)
        });
    }, [])
    useEffect(() => { // 서버에 해당 숙소의 Id를 주고 정보를 요청
        axios.get(`http://192.168.0.249:8000/api/v1/find/accom/${accomId}`)
            .then((response) => {
                setAccomInfo(response.data);
                console.log(response.data)
            }).catch((err) => {
            console.log(err)
        });
    }, [])

    const handleMakeReservation = () => { // 예약하기를 눌렀을때 체크인과 체크아웃을 조회해서 있으면 이미 예약됨으로 알림 없으면 payment로 이동
        if (startDate && endDate) {
                axios.post(`http://192.168.0.249:8000/api/v1/reservation/check`, roomCheck)
                    .then((response) => {
                        console.log(response.data)
                        if (response.data == false){
                            setReservationResult(`Reservation from ${startDateString} to ${endDateString} - Guests: ${guests}`);
                            nav(`/payment?startDate=${startDateString}&endDate=${endDateString}&peopleNum=${guests}&roomId=${roomId}&customerId=${customerId}&accomName=${accomInfo.accomdationName}`)
                            console.log(reservationResult)
                        }else {
                            alert("이미 예약된 방입니다. 다른 날짜를 선택해주세요")
                        }
                    })
                    .catch((err) => {

                        console.log(err);
                    });
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
                            {imageUrls.map((imageUrl, index) => imageUrl && (
                                <SwiperSlide key={index}>
                                    <img src={imageUrl} alt="" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div style={{padding: "10px", display: "flex", justifyContent: "center"}}>
                        <div>
                            <h3>{roomInfo.roomNumber}호 {roomInfo.roomName}</h3><br/>
                            <h3>최대 인원 : {roomInfo.roomMaxPerson}</h3>
                        </div>
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
                            <div style={{margin:"0 35px 0 20px"}}>
                                <label htmlFor="guests"><span id="span">최대 인원 수 : </span></label>
                                <input type="number" id="guests" min="1"  max={roomInfo.roomMaxPerson} value={guests} onChange={(e) => setGuests(parseInt(e.target.value))} />
                            </div>
                            <button id="resBtn" onClick={handleMakeReservation}>예약하기</button>
                        </div>
                    </div>
                </section>

                <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                <section id="firstSection">
                    <div>
                        <h3 style={{fontWeight:"bold"}}>기본정보</h3>
                        <span id="span">
                            [현대프리미엄아울렛PKG] 객실(파크뷰 업그레이드) + 1만원 현대백화점 상품권 + 커피교환권 2장 + 회전목마 이용권 (김포/송도 한정) <br/>
                            [현대 아울렛 바우처 유의사항] 조기소진시 사전안내 없이 제공이 불가할 수 있습니다.<br/>
                            상품권 제공기간 : 9/11~10/9 체크인건에 한해 제공<br/>
                            (10/9이 후 체크인 고객에게는 바우처 제공이 불가합니다.)<br/>
                            바우처 상세 : 커피 2잔+회전목마 이용권+상품권 1만원<br/>
                            커피 제공 브랜드는 지점별 상이 / 회전목마 이용권은 김포&송도점만 증정<br/>
                            관련 상품 구매 고객한정하여 호텔 체크인 시 프론트에서 바우처 제공(예약건당 1장, 박수 무관)<br/>
                            10월 9일 체크인까지만 바우처 제공<br/><br/>
                            ※ 호텔 내 부대시설 운영방안은 코로나 바이러스로 인한 정부지침에 따라 변경될 수 있으며 사전 안내없이 변경될 수 있습니다.<br/>
                            9평, 싱글 침대 2개<br/>
                        </span>
                    </div>
                </section>

                <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                <section id="firstSection">
                    <div>
                        <h3 style={{fontWeight:"bold"}}>예약공지</h3>
                        <span id="span">
                            · 체크인/체크아웃 시간 룸타입 공지, 연박불가상품 확인 필수<br/>
                            [레스토랑 안내]<br/>
                            · Level 19 / 상설뷔페<br/>
                            · 마스크를 필수 착용 부탁드립니다.<br/>
                            · 1) 이용 금액<br/>
                            · - 조식뷔페 이용 가격<br/>
                            · 성인 : 35,000원 / 소아(48개월~10세이하) : 17,500원<br/>
                            · - 런치뷔페 이용 가격<br/>
                            · 주중 성인 : 49,000원 / 소아(48개월~10세 이하) : 24,500원<br/>
                            · 주말 (토,일,공휴일) 성인 : 65,000원 / 소아 (48개월 ~10세 이하) : 32,500원<br/>
                            · - 디너뷔페 이용 가격<br/>
                            · 주중,주말,공휴일 95,000원 / 소아 (48개월 ~10세 이하) : 47,500원<br/>
                            · 디너뷔페 2023년 4월 1일 ~ 5월 31일 매주 토~일요일만 운영 (월~금요일 미운영) 18:00~21:00 / 1인 95,000원(성인), 47,500원(소아)<br/>
                            · 디너뷔페 2023년 5월 5일, 5월 8일, 5월 29일 정상운영 합니다<br/>
                            · 2) 이용안내<br/>
                            · - 소아 : 48개월 이상 ~ 10 세 이하 (성인요금 50%적용) / 48개월 미만 유아 무료<br/>
                            · - 음주류 무제한제공<br/>
                            · 런치 : 일~금: 음료 3종(콜라, 라이트콜라, 사이다) / 토,일: 음료 3종 + 하드리쿼 4종(위스키 2종, 보드카 1종, 진 1종) + 탄산수 3종<br/>
                            · 디너 : 음료 3종(콜라, 라이트콜라, 사이다), 와인 3종(레드, 화이트, 스파클링), 소주 2종, 맥주 2종, 하드리쿼 4종(위스키 2종, 보드카 1종, 진 1종), 탄산수 3종<br/>
                        </span>
                    </div>
                </section>

                <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                <section id="firstSection" style={{marginBottom:"40px"}}>
                    <div>
                        <h3 style={{fontWeight:"bold"}}>객실 후기</h3>
                        <div style={{textAlign:"center"}}>
                            <p>작성된 후기가 없습니다.</p>
                            <p>객실을 이용하고 후기를 작성해보세요!</p>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
};

export default RoomDetail;
