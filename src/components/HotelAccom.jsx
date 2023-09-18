import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/MainAccom.css';

// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { useEffect, useState } from 'react';

const HotelAccom = ()=>{
    const [accoms,setAccoms] =useState([]);
    
    const getAccomsData=()=>{
        axios.get('http://localhost:8000/api/v1/find/accom/hotel')
        .then((resp)=>{
            setAccoms(resp.data);
            console.log(resp.data);
        })
    }

    useEffect(()=>{
        getAccomsData();
    },[]);



    return(<>
    <br></br>
    <br></br>
        <h2 className='title'>요즘 핫한 호텔 시설</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
            spaceBetween={20}
            slidesPerView={3}
        >
        {/* <SwiperSlide>
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
        </SwiperSlide> */}
        {accoms.map((el,index)=>( 
            <SwiperSlide key={index}>
            <div>
            <img src={el.ImageLink}
            style={{width:"100%",height:"auto"}}
            />
            <div>
                {el.accomdationName}
            </div>
            <div>
                별점 : {el.accomdationGrade}
            </div>
            <div className='price'>
                {el.room.length==0 ? '준비중입니다':`${el.room[0].roomPrice}원`}
            </div>
            </div>
        </SwiperSlide>
        ))}
    
      </Swiper>
    </>)
}

export default HotelAccom;