import '../css/layout/payment.css';
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router";
const Payment = () => {
    useEffect(() => { // 서버에 해당 Room의 Id를 주고 정보를 요청
        axios.get(`http://192.168.0.249:8000/api/v1/find/room/detail/${roomId}`)
            .then((response) => {
                setRoomInfo(response.data);
                console.log(response.data)
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
    const roomId = url.searchParams.get('roomId')
    const customerId = url.searchParams.get('customerId')
    const accName = url.searchParams.get('accomName')
    const nav = useNavigate();
    const [customerInfo, setCustomerInfo] = useState([])


    const onChangeResUserInfo = (e) =>{ // 입력된 예약자 정보를 저장
        const {value, name} = e.target
        setResUserInfo({...resUserInfo, [name]:value})
    }

    const onChangeUseUserInfo = (e) =>{ // 입력된 이용자 정보를 저장
        const {value, name} = e.target
        setUseUserInfo({...useUserInfo, [name]:value})
    }



    useEffect(() => {
        axios.post(`http://192.168.0.249:8000/api/v1/customer/info/${customerId}`)// 해당 유저의 정보를 가져옴
            .then((response) => {
                setCustomerInfo(response.data)

            }).catch((err) => {
            alert("오류발생! 유저의 정보를 확인하지 못하였습니다.")
            console.log(err)
        })
    }, [])

    const onClickSendResInfo = () => { // todo : 예약자 정보와 현재 로그인 되어있는 정보가 일치하는지 확인
        // 토큰에 있는 customerId를 통해 customer의 정보 (이름, 전화번호) 를 가져온다.
        // 입력받은 정보와 일치하면 확인되었다고 알림 아니면 일치하지 않다고 알림
        if ((resUserInfo.name == customerInfo.name) && (resUserInfo.phone == customerInfo.phoneNumber)) { // 작성된 예약자 정보랑 토큰에있는 이름과 전화번호를 가져와서 일치하는지 검사
            alert("확인 되었습니다.")
        } else{
            alert("정보가 일치하지 않습니다.")
        }
        console.log(resUserInfo.name)
        console.log(resUserInfo.phone)
    }

    const onClickSendUseInfo = () => { // todo : 이용자 정보가 입력되었는지 확인 *중복가능
        // 이용자 정보를 post로 서버에 보내서 데이터에 저장
        alert("이용자 정보가 등록되었습니다.")
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
        if (customerInfo.wallet >= roomInfo.roomPrice){
            const result = customerInfo.wallet - roomInfo.roomPrice;
            axios.put(`http://192.168.0.249:8000/api/v1/customer/update/${customerId}?result=${result}`)
            axios.post(`http://192.168.0.249:8000/api/v1/reservation/save`, reservation)
            alert("결제가 되었습니다.")
            nav('/');
        }else{
            alert("잔고가 부족합니다")
        }


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
                                    <div style={{fontWeight:"bold"}}>
                                        예약 완료 후 무료취소 안내
                                    </div>
                                    <ul>
                                        <li id="span">예약일시 기준 체크인 시각 이전일 경우 무료취소가 가능합니다</li>
                                        <li id="span">숙소 정책에 따라 일부 상품은 무료취소가 불가능합니다.</li>
                                    </ul>
                                    <div id="span">
                                        호텔/게하/펜션  :   10분 이내 무료 취소<br/>(단, 숙소 정책에 따라 취소수수료가 부가 예외 규정이 적용되지 않을 수 있습니다.)
                                    </div>
                                </div>
                                <div>
                                    <h2>{accName}</h2>
                                    <h3>{roomInfo.roomName}</h3>
                                </div>
                                <div id="infoCheck">
                                    <div style={{margin:"30px"}}>{startDate}  체크인 : 오후 {roomInfo.checkIn}시</div>
                                    <div style={{margin:"30px"}}>{endDate}  체크아웃 : 오전 {roomInfo.checkOut}시</div>
                                    <div style={{margin:"30px"}}>인원 수 : {peopleNum}명</div>
                                    <div style={{margin:"30px"}}>총 금액 : {roomInfo.roomPrice}원</div>
                                </div>    

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
