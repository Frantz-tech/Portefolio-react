/* eslint-disable no-unused-vars */
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
function Caroussel() {
  return (
    <div className="containerCaroussel">
      <div className="carousselTitle">
        <p> What I work with</p>
      </div>
      <div>
        <Swiper
          spaceBetween={5}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
export default Caroussel;
