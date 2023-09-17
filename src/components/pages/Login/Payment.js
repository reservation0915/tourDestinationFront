import '../../../styles/pages/layout/payment.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
const Payment = () => {
    useEffect(() => { // 서버에 해당 Room의 Id를 주고 정보를 요청
        axios.post(`http://localhost:9002/api/v1/room/info/${roomId}`)
            .then((response) => {
                setRoomInfo(response.data);
            }).catch((err) => {
            console.log(err)
        });
    }, [])

    const [roomInfo, setRoomInfo] = useState([]) // 선택된 Room의 정보 (useEffect를 사용해서 불러온 뒤 여기에 담는다.)

    const [resUserInfo, setResUserInfo]=useState({ // 예약자 정보 객체
        name:"",
        phone:""
    });
    const [useUserInfo, setUseUserInfo]=useState({ // 이용자 정보 객체
        name:"",
        phone:""
    });
    const url = new URL(window.location.href); // RoomDetail에서 path에 던져준 정보를 받는다
    const startDate = url.searchParams.get('startDate');
    const endDate = url.searchParams.get('endDate');
    const peopleNum = url.searchParams.get('peopleNum')
    const nav = useNavigate();

    const useName = useUserInfo.name;
    const usePhone = useUserInfo.phone;

    const roomId = 1; // todo roomId를 임시로 설정
    const customerId = `00000000-0000-3100-5555-000000000000`; // todo customerId을 임시로 설정
    const accName = "1번숙소"; // todo 숙소 이름을 임시로 설정

    const onChangeResUserInfo = (e) =>{ // 입력된 예약자 정보를 저장
        const {value, name} = e.target
        setResUserInfo({...resUserInfo, [name]:value})
    }

    const onChangeUseUserInfo = (e) =>{ // 입력된 이용자 정보를 저장
        const {value, name} = e.target
        setUseUserInfo({...useUserInfo, [name]:value})
    }

    const onClickSendResInfo = () => { // todo : 예약자 정보와 현재 로그인 되어있는 정보가 일치하는지 확인
        // 토큰에 있는 customerId를 통해 customer의 정보 (이름, 전화번호) 를 가져온다.
        // 입력받은 정보와 일치하면 확인되었다고 알림 아니면 일치하지 않다고 알림
        if ((resUserInfo.name == useUserInfo.name) && (resUserInfo.phone == useUserInfo.phone)) { // 작성된 예약자 정보랑 토큰에있는 이름과 전화번호를 가져와서 일치하는지 검사
            alert("확인 되었습니다.")
        } else{
            alert("정보가 일치하지 않습니다.")
        }
        console.log(resUserInfo.name)
        console.log(resUserInfo.phone)
    }

    const onClickSendUseInfo = () => { // todo : 예약자 정보가 입력되었는지 확인
        // 예약자 정보를 post로 서버에 보내서 데이터에 저장
        console.log(useUserInfo.name)
        console.log(useUserInfo.phone)
    }
    const reservation = {
        roomId:roomId,
        customerId:customerId,
        useName:useUserInfo.name,
        phone:useUserInfo.phone,
        price:roomInfo.roomPrice,
        peopleNum:peopleNum,
        checkIn:startDate,
        checkOut:endDate
    }

    const onClickPay = () => {
        axios.post(`http://localhost:9002/api/v1/reservation/save`, reservation)
        console.log(reservation)
        alert("결제가 되었습니다.")
        nav('/');
    }

    return (
        <>
            <div id="platform">
                <body id="platform-body">
                    <div id="section">
                        <section id="firstSection">
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
                                    <h2>{accName}</h2>
                                    <h3>{roomInfo.roomName}</h3>
                                </div>
                                <div>
                                    <div>{startDate}  체크인 : {roomInfo.checkIn}</div>
                                    <div>{endDate}  체크아웃 : {roomInfo.checkOut}</div>
                                </div>    
                                <span>인원 수 : {peopleNum}명</span>
                                <span>총 금액 : {roomInfo.roomPrice}원</span>
                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section id="firstSection">
                            <div>
                                <div>
                                    예약자 정보 입력
                                </div>
                                <div style={{flexDirection:"column"}}>
                                    <input id="userInfoInput" onChange={onChangeResUserInfo} name="name" type="text" placeholder="이름"/>
                                    <input id="userInfoInput" onChange={onChangeResUserInfo} name="phone" type="text" placeholder="전화번호"/>
                                    <button onClick={onClickSendResInfo}>확인</button>
                                </div>

                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section id="firstSection">
                            <div>
                                이용자 정보
                            </div>
                            <div style={{flexDirection:"row"}}>
                                <input id="userInfoInput" onChange={onChangeUseUserInfo} name="name" type="text" placeholder="이름"/>
                                <input id="userInfoInput" onChange={onChangeUseUserInfo} name="phone" type="text" placeholder="전화번호"/>
                                <div style={{flexDirection:"row", display:"flex"}}>
                                    {/*<input style={{display:"flex", margin:"0 10px 0 10px"}} type="submit"/>*/}
                                    {/*<span style={{display:"flex"}}>예약자 정보와 동일합니다.</span>*/}
                                </div>
                                <button style={{marginTop:"10px"}} onClick={onClickSendUseInfo}>등록하기</button>
                            </div>
                        </section>

                        <div style={{backgroundColor:"#f2f2f2", height:"20px"}}></div>

                        <section id="firstSection">
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
                            <div style={{margin:"5px"}}>결제 수단</div>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                                <div style={{flexDirection: "column", alignItems: "center" }}>
                                    <button onClick={onClickPay} id="pay-button"><img style={{ width: "80px", height: "30px" }} src="https://image6.yanolja.com/payment/gPPJqgqGn4lZg4KB" alt="네이버페이" className="platform-site-10klw3m ei3f0hk4" /></button>
                                    <button onClick={onClickPay} id="pay-button"><img style={{ width: "80px", height: "30px" }} src="https://image6.yanolja.com/payment/KQS5BVf5P2vhdQe0" /></button>
                                    <button onClick={onClickPay} id="pay-button"><img style={{ width: "100px", height: "30px" }} src="https://image6.yanolja.com/payment/0pioMlyR7FIuNFFD" alt="토스페이" className="platform-site-10klw3m ei3f0hk4" /></button>
                                </div>
                                <div style={{flexDirection: "column", alignItems: "center" }}>
                                    <button onClick={onClickPay} id="pay-button"><img style={{ width: "80px", height: "30px" }} src="https://image6.yanolja.com/payment/cjDMzWuYxWQ6uqK2" alt="페이코" class="platform-site-10klw3m ei3f0hk4" /></button>
                                    <button onClick={onClickPay} id="pay-button"><span style={{ fontWeight: "bold" }}>휴대폰</span></button>
                                    <button onClick={onClickPay} id="pay-button"><span style={{ fontWeight: "bold" }}>실시간 계좌이체</span></button>
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
                                    <div style={{height:"8px"}}></div>
                                    <div>
                                        최소불가 및 수수료<br/>
                                        <span>취소 및 환불규정에 따라 취소불가, 수수료가 발생 할 수 있습니다.</span>
                                    </div>
                                    <div style={{height:"8px"}}></div>
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
