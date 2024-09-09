import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { getText } from "../locales";

const Certificates = () => {
  return (
    <div className="certificates mt-5">
      <div className="container">
      <div className="main__title">
            <h2>{getText("certificates")}</h2>
        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-md-4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser1-1.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser1-2.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser1-3.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser1-4.webp" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser2-1.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser2-2.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser2-3.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser2-4.webp" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-md-4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser3-1.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser3-2.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser3-3.webp" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-4">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser4-1.webp" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img loading="lazy" className="w-100" src="img/ser4-2.webp" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Certificates;
