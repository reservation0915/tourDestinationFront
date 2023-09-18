import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/RankAccom.css';

// import required modules
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import { useEffect, useState } from 'react';

const  RankAccoms= ()=>{

    const [accoms,setAccoms] =useState([]);
    
    const getAccomsData=()=>{
        axios.get('http://192.168.0.249:8000/api/v1/find/accom/sale')
        .then((resp)=>{
            setAccoms(resp.data);
            console.log(resp.data);
        })
    }

    useEffect(()=>{
        getAccomsData();
    },[]);

    return(<>
        <h2 className='title'>숙소 구매 TOP</h2>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
            spaceBetween={40}
            slidesPerView={4}
    
        >

        {/* 데이터 맵 확인 */}
        
        {accoms.map((el,index)=>( 
            <SwiperSlide >
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
            {el.room.length==0 ? '준비중입니다':`${el.room[0].roomPrice}원`}
            </div>

            <div className='RankNumber'>
                {index+1}
            </div>
            </div>
            </SwiperSlide>
        ))}

      </Swiper>
    </>)
}

export default RankAccoms;