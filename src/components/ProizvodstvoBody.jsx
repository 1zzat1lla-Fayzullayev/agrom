import { getText } from "../locales";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

const ProizvodstvoBody = () => {
  return (
    <div className="proiz-body">
      <div className="container">
        <h3 className="proiz-body__title">{getText("proiz_title1")}</h3>
        <p className="mb-5">{getText("proiz_desc1")}</p>
        <h3 className="proiz-body__title">{getText("production")}</h3>
        <p className="mb-5">{getText("proiz_desc2")}</p>
        <p className="mb-5">{getText("proiz_desc22")}</p>
        <p className="mb-5">{getText("proiz_desc23")}</p>
        <p className="mb-5">{getText("proiz_desc24")}</p>

        <div className="video">
          <iframe
          loading="lazy"
            className="w-100 h-100"
            src="https://www.youtube.com/embed/y3iBaXJM1Jw?si=IxYnsZX6AhEQqEiC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="proiz-body__title">{getText("proiz_title3")}</h3>
        <p className="mb-2">{getText("proiz_desc3")}</p>
        <ul className="mb-5">
          <li>{getText("proiz_desc3_li1")}</li>
          <li>{getText("proiz_desc3_li2")}</li>
          <li>{getText("proiz_desc3_li3")}</li>
          <li>{getText("proiz_desc3_li4")}</li>
        </ul>
        <div className="map">
          <iframe
          loading="lazy"
            className="w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12608.800363583508!2d67.56614800000001!3d37.808782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b55794464d0c33%3A0x7253dbd22cf82381!2sAgro%20Processing%20Group!5e0!3m2!1sru!2sus!4v1704112467668!5m2!1sru!2sus"
           
          ></iframe>
        </div>

        <h3 className="proiz-body__title">{getText("proiz_title4")}</h3>
        <p>{getText("proiz_desc4")}</p>

        <h3 className="proiz-body__title">{getText("proiz_title5")}</h3>
        <p>{getText("proiz_desc5")}</p>
        <p>{getText("proiz_desc51")}</p>
        <p>{getText("proiz_desc52")}</p>
        <p>{getText("proiz_desc53")}</p>
        <p>{getText("proiz_desc54")}</p>
        <p>{getText("proiz_desc55")}</p>
        <ul className="mb-5">
          <li>{getText("proiz_desc5_li1")}</li>
          <li>{getText("proiz_desc5_li2")}</li>
        </ul>
        <p>{getText("proiz_desc56")}</p>

        <div className="video">
          <iframe
          loading="lazy"
            className="w-100 h-100"
            src="https://www.youtube.com/embed/r80fGEd1f7U?si=Uzd0OXFydH0DCzfa"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <h3 className="proiz-body__title">{getText("proiz_title6")}</h3>
        <p>{getText("proiz_desc61")}</p>
        <p>{getText("proiz_desc62")}</p>
      </div>

      <div className="slider-pics">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz1.webp" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz2.webp" />
          </SwiperSlide> */}
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz3.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz4.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz5.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz6.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz7.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz8.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz9.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz10.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz11.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz12.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz13.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz14.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz15.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz16.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz17.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz18.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz19.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz20.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz21.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz22.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz23.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz24.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz25.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz26.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz27.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz28.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz29.webp" />
          </SwiperSlide>
          <SwiperSlide>
            <img loading="lazy" className="w-100 h-100" src="img/proiz30.webp" />
          </SwiperSlide>
        </Swiper>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz1.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz2.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz3.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz4.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz5.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz6.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz7.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz8.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz9.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz10.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz11.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz12.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz13.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz14.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz15.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz16.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz17.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz18.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz19.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz20.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz21.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz22.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz23.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz24.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz25.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz26.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz27.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz28.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz29.webp" />
            </div>
            <div className="col-md-2 col-4 mb-4">
              <img loading="lazy" className="w-100 h-100" src="img/proiz30.webp" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProizvodstvoBody;
