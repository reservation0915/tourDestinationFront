import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/MainAccom.css';

// import required modules
import { Navigation } from 'swiper/modules';

const MainAccom = ()=>{

    return(<>
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
        <SwiperSlide>
            <img src='/images/sokcho.jpg'
            style={{width:"100%",height:"autho"}}
            />
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

export default MainAccom;