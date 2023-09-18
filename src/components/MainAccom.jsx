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

    const getAccomsData=()=>{
        axios.get('http://192.168.0.249:8000/api/v1/find/accom')
        .then((resp)=>{
            setAccoms(resp.data.content);
            console.log(resp.data.content);
        })
    }

    const getRoomsData=()=>{
        axios.get('http://192.168.0.249:8000/api/v1/find/room')
        .then((resp)=>{
            setRooms(resp.data);
            console.log(resp.data);
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
        <SwiperSlide>
            <div>
            <img src='/images/sokcho.jpg'
            style={{width:"100%",height:"autho"}}
            />
            <div>
                속초 아이파크스위트 호텔 앤 레지던스
            </div>
            <div>
                별점 : 4.5
            </div>
            <div className='price'>
                52000원
            </div>
            </div>
        </SwiperSlide>
        {accoms.map((el,index)=>( 
            <SwiperSlide key={index}>
            <div>
            <img src={el.ImageLink}
            style={{width:"100%",height:"autho"}}
            />
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