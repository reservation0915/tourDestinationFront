import Calendar from "react-calendar";
import {useState} from "react";
import 'react-calendar/dist/Calendar.css';
import '../css/buttons.css'
import '../css/tourdestination.css'
import {Api} from "../network/Api";
import {useNavigate} from "react-router";
const TourDestinationReservation =() =>{
    const [dateState,setDateState] = useState(false);
    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState([]);
    const [value3, onChange3] = useState([]);
    const [value4, onChange4] = useState([]);
    const [date, setDate] = useState([]);
    const token = localStorage.getItem("token");

    //토큰에서 값가져올 필요 있음

    const [user,setUser] = useState({
        tourDestinationId:"", userId:"",userName:"",userPhoneNumber:"",payment:"",reservationTime:"",reservationNumberOfPeople:""

    })
    const nav = useNavigate()
    const onSubmitHandler = (e)=>{
        e.preventDefault();
        reservation()
    }
    const reservation= ()=>{
        // 192.168.0.184
        fetch("http://localhost:8000/api/v1/tourdestinationreservation",
            {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(user)
            })
            .then(res=> {
                    if (res.status === 200) nav(`/tourdestination`)
                }
            )
            .catch(e=>
                console.log(e)
            )

    }
    const onChangeHandler = (e)=> {
        const {name, value} =e.target
        setUser({...user, [name]: value})
    }
    const tourReservation =() =>{
        setDateState(true);
    }
    return<>
        <form onSubmit={onSubmitHandler}>
            {dateState === false && <Calendar
                onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
                value={value}
                minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
                navigationLabel={null}
                showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
                className="mx-auto w-full text-sm border-b"
                tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
                    // 추가할 html 태그를 변수 초기화
                    let html = [];
                    // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가

                    // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
                    return (
                        <>
                            <div className="flex justify-center items-center absoluteDiv">
                                {html}
                            </div>
                        </>
                    );
                }}

            />
            }
            {dateState === false && <div className="button-div">
                <button onClick={tourReservation} className="w-btn-outline w-btn-gray-outline select-buttons-each" type="button">
                    완료
                </button>
            </div>
            }
            <div className="content-div">
                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">예약시간 :<select className="select-css"
                                                                         value={"reservationTime"}
                                                                         onChange={onChangeHandler}>
                            <option value="9">9:00</option>
                            <option value="10">10:00</option>
                            <option value="11">11:00</option>
                            <option value="12">12:00</option>
                            <option value="13">13:00</option>
                            <option value="14">14:00</option>
                            <option value="15">15:00</option>
                            <option value="16">16:00</option>
                            <option value="17">17:00</option>
                            <option value="18">18:00</option>
                            <option value="19">19:00</option>
                        </select></div>

                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">예약인원 : <select className="select-css"
                                                                          value={"reservationNumberOfPeolple"}
                                                                          onChange={onChangeHandler}>
                            <option value="1">1명</option>
                            <option value="2">2명</option>
                            <option value="3">3명</option>
                            <option value="4">4명</option>
                            <option value="5">5명</option>
                            <option value="6">6명</option>
                        </select></div>

                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">성명 : 이태웅</div>

                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">전화번호 : 010-0000-1111</div>

                    </div>
                </div>

                <div className="contentLine">
                    <div className="description_container">
                        <div className="description_title">이메일 : abcd@gmail.com</div>

                    </div>
                </div>

            </div>
            <input type={"submit"} value={"login"} onChange={onChangeHandler}/>

        </form>

    </>
}
export default TourDestinationReservation;