import { getText } from "../locales";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import 'swiper/css/navigation';

// import required modules
import { EffectCards, EffectCreative, Navigation } from "swiper/modules";

const Gallery = () => {
  return (
    <>
      <div className="gallery mt-5">
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-md-4">
              <div className="main__title">
                <h2>{getText("ourProduction")}</h2>
              </div>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod1.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod3.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod4.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod5.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod6.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod7.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod8.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod9.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod10.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod11.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/newprod12.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod1.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod3.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod4.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod5.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod6.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod7.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod8.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod9.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod10.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod11.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod12.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod13.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod14.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod15.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod16.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod17.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod18.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod19.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod20.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod21.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100" src="img/prod22.webp" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-12 mt-5">
              <div className="main__title">
                <h2>{getText("zavod")}</h2>
              </div>
              <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: true,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                navigation={true}
                modules={[EffectCreative, Navigation]}
                className="mySwiper"
              >
               <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod1.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod2.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod3.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod4.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod5.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod6.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod7.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod8.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod9.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod10.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod11.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod12.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod13.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod14.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod15.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod16.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod17.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod18.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod19.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod20.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod21.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod22.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod23.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod24.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod25.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod26.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod27.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod28.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod29.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod30.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod31.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod32.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod33.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod34.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod35.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod36.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod37.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod38.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod39.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod40.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod41.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod42.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod43.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod44.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod45.webp" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img loading="lazy" className="w-100 h-100" src="img/zavod46.webp" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
