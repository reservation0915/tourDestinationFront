import '../../../styles/pages/layout/payment.css';
import {useState} from "react";
import {reservationInfo} from "../../../common/api/ApiPostService";
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

    return (
        <>
            <div id="platform">
                <body id="platform-body">
                    <div id="section">
                        <section style={{backgroundColor:"red", padding:"0 10px 0 10px"}}>
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
                                    <h2>숙소 이름</h2>
                                    <h3>방이름</h3>
                                </div>
                                <div>
                                    <div>날짜 및 체크인 시간</div>
                                    <div>날짜 및 체크아웃 시간</div>
                                </div>    
                                <span>가격 원</span>
                            </div>
                        </section>
                        
                        <div style={{height:"15px", color:"#f2f2f2"}}/>

                        <section style={{backgroundColor:"green", padding:"0 10px 0 10px"}}>
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

                        <div style={{height:"15px", color:"#f2f2f2"}}/>

                        <section style={{backgroundColor:"blue"}}>
                            <div>
                                이용자 정보
                            </div>
                            <div style={{flexDirection:"row"}}>
                                <input style={{display:"flex"}} type="checkbox"/>
                                <span style={{display:"flex"}}>예약자 정보와 동일합니다.</span>
                            </div>
                        </section>

                        <div style={{height:"15px", color:"#f2f2f2"}}/>

                        <section style={{backgroundColor:"gray"}}>
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

                        <div style={{height:"15px", color:"#f2f2f2"}}/>

                        <section style={{ backgroundColor: "yellow", display: "flex", flexDirection: "column" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                    <button style={{backgroundColor:"yellow", width:"200px"}}><img style={{width:"100px"}} src="https://image6.yanolja.com/payment/KQS5BVf5P2vhdQe0"/></button>
                                    <input style={{borderRadius:"solid 20px black"}} type="submit" value={"네이버페이"} />
                                    <input type="submit" value={"카카오페이"} />
                                    <input type="submit" value={"토스페이"} />
                                </div>
                                <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                    <input type="submit" value={"페이코"} />
                                    <input type="submit" value={"휴대폰"} />
                                    <input type="submit" value={"실시간계좌이체"} />
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
