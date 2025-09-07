/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/caroussel.css';

const logoContext = require.context('../assets/svg', false, /\.svg$/);
const logos = logoContext.keys().map(logoContext);

function Caroussel() {
  useEffect(() => {
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';
    s.type = 'module';
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);
  return (
    <>
      <div className="containerCaroussel">
        <div className="carousselTitle">
          <p> What I work with</p>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={25}
          slidesPerGroup={1}
          centeredSlides={false}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} className="caroussel-elementor" alt="Stack logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container-loop-animation">
        <dotlottie-player
          src="https://lottie.host/1b4a9b91-0103-4744-8a55-dd28c84016de/9Yw19vrVN2.lottie"
          background="transparent"
          speed="1.5"
          style={{ width: 50, height: 50 }}
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </>
  );
}
export default Caroussel;
