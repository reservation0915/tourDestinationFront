import '../../../styles/pages/layout/payment.css';
import React, {useEffect, useState} from "react";
import {reservationInfo} from "../../../common/api/ApiPostService";
import axios from "axios";
const Payment = () => {
    const [userInfo, setUserInfo]=useState({
        name:"",
        phone:""
    });

    const onChangeUserInfo = (e) =>{
        const {value, name} = e.target
        setUserInfo({...userInfo, [name]:value})
    }

    const onClickSendInfo = () => {
        reservationInfo(userInfo);
        console.log(userInfo.name)
        console.log(userInfo.phone)
    }

    const [roomInfo, setRoomInfo] = useState([])


    useEffect(() => {
        axios.post('http://localhost:9002/api/v1/room/info/1')
            .then((response) => {
                setRoomInfo(response.data);
            }).catch((err) => {
            console.log(err)
        });
    }, [])

    return (
        <>
            <div id="platform">
                <body id="platform-body">
                    <div id="section">
                        <section style={{backgroundColor:"white", padding:"10px"}}>
                            <div id="firstInfo">
                                <h3>숙소</h3>
                                <div id="firstInfo-firstDiv">
                                    <div>
                                        예약 완료 후 무료취소 안내
                                    </div>
                                    <ul>
                                        <li>예약일시 기준 체크인 시각 이전일 경우 무료취소가 가능합니다</li>
                                        <li>숙소 정책에 따라 일부 상품은 무료취소가 불가능합니다.</li>
                                    </ul>
                                    <div>
                                        호텔/게하/펜션  :   10분 이내 무료 취소<br/>(단, 숙소 정책에 따라 취소수수료가 부가 예외 규정이 적용되지 않을 수 있습니다.)
                                    </div>
                                </div>
                                <div>
                                    <h2>숙소이름 받아와야함</h2>
                                    <h3>{roomInfo.roomName}</h3>
                                </div>
                                <div>
                                    <div>체크인 날짜 받아와야함, {roomInfo.checkIn}</div>
                                    <div>체크아웃 날짜 받아와야함 , {roomInfo.checkOut}</div>
                                </div>    
                                <span>총 금액 : {roomInfo.roomPrice}원</span>
                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section style={{backgroundColor:"white", padding:"10px"}}>
                            <div>
                                <div>
                                    예약자 정보 입력
                                </div>
                                <div style={{flexDirection:"column"}}>
                                    <input style={{display:"flex"}} onChange={onChangeUserInfo} name="name" type="text" placeholder="이름"/>
                                    <input style={{display:"flex"}} onChange={onChangeUserInfo} name="phone" type="text" placeholder="전화번호"/>
                                    <button onClick={onClickSendInfo}>등록하기</button>
                                </div>

                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section style={{backgroundColor:"white", padding:"10px"}}>
                            <div>
                                이용자 정보
                            </div>
                            <div style={{flexDirection:"row"}}>
                                <input style={{display:"flex"}} type="checkbox"/>
                                <span style={{display:"flex"}}>예약자 정보와 동일합니다.</span>
                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section style={{backgroundColor:"white", padding:"10px"}}>
                            <div>
                                혜택 정보
                                <div>
                                    NOL 카드로 첫 결제 시, 2만원 청구할인
                                </div>
                                <div>
                                    신규가입 시 최대 500C 적립예정
                                    <p>이용 완료 후 후기 작성하면 자동 적립</p>
                                </div>
                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section style={{ backgroundColor: "white", display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <div style={{flexDirection: "column", alignItems: "center" }}>
                                    <button style={{ backgroundColor: "white", width: "384px", height: "40px", justifyContent: "center" }}><img style={{ width: "80px", height: "30px" }} src="https://image6.yanolja.com/payment/gPPJqgqGn4lZg4KB" alt="네이버페이" className="platform-site-10klw3m ei3f0hk4" /></button>
                                    <button style={{ backgroundColor: "white", width: "384px", height: "40px" }}><img style={{ width: "80px", height: "30px" }} src="https://image6.yanolja.com/payment/KQS5BVf5P2vhdQe0" /></button>
                                    <button style={{ backgroundColor: "white", width: "384px", height: "40px" }}><img style={{ width: "100px", height: "30px" }} src="https://image6.yanolja.com/payment/0pioMlyR7FIuNFFD" alt="토스페이" className="platform-site-10klw3m ei3f0hk4" /></button>
                                </div>
                                <div style={{flexDirection: "column", alignItems: "center" }}>
                                    <button style={{ backgroundColor: "white", width: "384px", height: "40px" }}><img style={{ width: "80px", height: "30px" }} src="https://image6.yanolja.com/payment/cjDMzWuYxWQ6uqK2" alt="페이코" class="platform-site-10klw3m ei3f0hk4" /></button>
                                    <button style={{ backgroundColor: "white", width: "384px", height: "40px" }}><span style={{ fontWeight: "bold" }}>휴대폰</span></button>
                                    <button style={{ backgroundColor: "white", width: "384px", height: "40px" }}><span style={{ fontWeight: "bold" }}>실시간 계좌이체</span></button>
                                </div>
                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section style={{backgroundColor:"white", padding:"10px"}}>
                            <div>
                                <div style={{backgroundColor:"#fef8f2"}}>
                                    <div>
                                        현장결제<br/>
                                        <span>추가인원 비용등의 현장결제 발생 상품을 확인하세요.</span>
                                    </div>
                                    <div>
                                        최소불가 및 수수료<br/>
                                        <span>취소 및 환불규정에 따라 취소불가, 수수료가 발생 할 수 있습니다.</span>
                                    </div>
                                    <div>
                                        미성년자 및 법정대리인 필수<br/>
                                        <span>미성년자는 법정대리인 동행 없이 투숙이 불가능합니다.</span>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </div>
                </body>
            </div>
        </>
    );
};

export default Payment;
