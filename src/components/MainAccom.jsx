import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/MainAccom.css';

// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { useEffect, useState } from 'react';

const MainAccom = ()=>{
    const [accoms,setAccoms] =useState([]);
    const [rooms,setRooms] = useState([]);
    const url = new URL(window.location.href); // AddAuth에서 path에 던져준 정보를 받는다
    const customerId = url.searchParams.get('customerId');

    const getAccomsData=()=>{
        axios.get('http://192.168.0.249:8000/api/v1/find/accom')
        .then((resp)=>{
            setAccoms(resp.data.content);
        })
    }

    const getRoomsData=()=>{
        axios.get('http://192.168.0.249:8000/api/v1/find/room')
        .then((resp)=>{
            setRooms(resp.data);
        })
    }

    useEffect(()=>{
        getAccomsData();
        getRoomsData();
    },[]);



    return(<>
    <br></br>
    <br></br>
        <h2 className='title'>요즘 핫한 숙박 시설</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
            spaceBetween={20}
            slidesPerView={3}
        >
        {accoms.map((el,index)=>( 
            <SwiperSlide key={index}>
            <div>
                <a href={`/roomdetail?roomId=${el.room.length==0 ? null:`${el.room[0].id}`}&customerId=${customerId}&accomId=${el.id}`}>
            <img src={el.ImageLink}
            style={{width:"100%",height:"autho"}}
            />
                </a>
            <div>
                {el.accomdationName}
            </div>
            <div>
                별점 : {el.accomdationGrade}
            </div>
            <div className='price'>
            {/* {el.room.length==0 ? '준비중입니다':`${el.room[0].roomPrice}원`} */}
                {el.room.length==0 ? '준비중입니다':`${rooms[index]}원`}
            </div>
            </div>
        </SwiperSlide>
        ))}

      </Swiper>
    </>)
}

export default MainAccom;