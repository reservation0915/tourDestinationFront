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
        axios.get('http://localhost:8000/api/v1/find/accom/sale')
        .then((resp)=>{
            setAccoms(resp.data.content);
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
            slidesPerView={1}
    
        >
        <SwiperSlide>
    
            <ul style={{gridAutoFlow :'row', gridTemplateColumns:'1fr 1fr 1fr 1fr',display:'grid', gap :20}}>
                
            
            <li>
            <div style={{width:'auto',height:'auto'}}>
            <img src='/images/sokcho.jpg'
            style={{width:"100%",height:"auto"}}
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

            <div className='RankNumber'>
                1
            </div>
            </div>
            </li>

            <li>
            <div style={{width:'auto',height:'auto'}}>
            <img src='/images/sokcho.jpg'
            style={{width:"100%",height:"auto"}}
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

            <div className='RankNumber'>
                2
            </div>
            </div>
            </li><li>
            <div style={{width:'auto',height:'auto'}}>
            <img src='/images/sokcho.jpg'
            style={{width:"100%",height:"auto"}}
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

            <div className='RankNumber'>
                3
            </div>
            </div>
            </li><li>
            <div style={{width:'auto',height:'auto'}}>
            <img src='/images/sokcho.jpg'
            style={{width:"100%",height:"auto"}}
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

            <div className='RankNumber'>
                4
            </div>
            </div>
            </li>
            

            

            </ul>
 
        </SwiperSlide>

        {/* 데이터 맵 확인 */}
        <SwiperSlide >
        {accoms.map((el,index)=>( 
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
                {el.room[0].roomPrice}원
            </div>
            </div>
       
        ))}

   

         </SwiperSlide>
        <SwiperSlide>
            <img src='/images/sokcho.jpg'
            style={{width:"100%",height:"autho"}}
            />
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>)
}

export default RankAccoms;