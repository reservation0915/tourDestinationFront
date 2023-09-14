import Calendar from "react-calendar";
import {useState} from "react";
import 'react-calendar/dist/Calendar.css';
import '../css/buttons.css'
import '../css/tourdestination.css'
const TourDestinationReservation =() =>{
    const [dateState,setDateState] = useState(false);
    const [value, onChange] = useState(new Date());
    const [value2, onChange2] = useState([]);
    const [date, setDate] = useState([]);
    console.log(value2);

    // const setReservateDate =(value) =>{
    //     setDate(value.toLocaleDateString("ko", {
    //         year: "numeric",
    //         month: "short",
    //         day: "numeric",
    //     }))
    // }
    const tourReservation =() =>{
        setDateState(true);
    }
    return<>
        <select className="select-css"
        value={value2}
        onChange={(e) => onChange2((e.target.value))}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select>
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
    </>
}
export default TourDestinationReservation;