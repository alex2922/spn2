import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../Styles/jalsaksharta.scss";
import img1 from "../photos/Jal_saksharta_rally/01.JPG.webp";
import img2 from "../photos/Jal_saksharta_rally/06.webp";
import img3 from "../photos/Jal_saksharta_rally/08.webp";
import img4 from "../photos/Jal_saksharta_rally/09.webp";
import img5 from "../photos/Jal_saksharta_rally/10.webp";
import img6 from "../photos/Jal_saksharta_rally/16.webp";
import img7 from "../photos/Jal_saksharta_rally/19.webp";
import img8 from "../photos/Jal_saksharta_rally/_MG_6713.webp";
import img from "../assets/home/Jal_Saksharta_Rally.webp";
import Imageswiper from "../components/Imageswiper";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from "react-helmet";
import BgVideo from "../assets/BgVideo.ogg";
import BgVideo1 from "../assets/BgVideo.webm";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { IoCalendarNumber } from "react-icons/io5";
import { GiHorizonRoad } from "react-icons/gi";
import { BsEnvelopePaperFill } from "react-icons/bs";
import mapIcon from "../assets/MAP.webp";

function Jalsaksharta(props) {
  const data2 = {
    text: "Learn about the Jal Saksharta Rally in Latur, championed by Sambhaji Patil Nilangekar, promoting water awareness and conservation. Explore how this initiative educates communities and emphasizes key water sources like the Godavari River and Bhandhardara Dam.",
  };

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const [responsive, setResponsive] = useState(false);
  const [func2, setfunc2] = useState(false);

  useEffect(() => {
    const togglePara = () => {
      setResponsive(window.innerWidth <= 700);
    };

    togglePara();

    window.addEventListener("resize", togglePara);

    return () => {
      window.removeEventListener("resize", togglePara);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Jal Saksharta Rally</title>
        <meta
          name="keywords"
          content="Jal Saksharta Rally, Jal Saksharta Rally in Latur, Sambhaji Patil, Sambhaji Patil Nilangekar, Godavari River, Bhandhardara Dam"
        />
        <meta
          name="description"
          content="Learn about the Jal Saksharta Rally in Latur, championed by Sambhaji Patil Nilangekar, promoting water awareness and conservation. Explore how this initiative educates communities and emphasizes key water sources like the Godavari River and Bhandhardara Dam. Join the effort for sustainable water management in the region."
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/Jal_Saksharta_Rally"
        />
      </Helmet>

      {props.data.map((data) => {
        return (
          <React.Fragment key={data.id}>
            <div className="jal-parent parent bg-img-cover">
              <div className="jal-overlay"></div>
              <h2 className="jal-headding1">{data.Jal_saksharta_heading}</h2>
            </div>

            <div className="counter-parent2">
              <h3>{data.Marathwada_counter}</h3>

              <div className="counter-parent parent">
                <div className="counter-cont cont">
                  <Swiper
                     slidesPerView={3}
                     spaceBetween={20}
                     autoplay={{
                       delay: 1000,
                       disableOnInteraction: false,
                     }}
                     pagination={{
                       clickable: true,
                     }}
                     centeredSlides={false}
                     breakpoints={{
                       320: {
                         slidesPerView: 1,
                         spaceBetween: 20,
                       },
                       640: {
                         slidesPerView: 2,
                         spaceBetween: 20,
                       },
                       768: {
                         slidesPerView: 2,
                         spaceBetween: 20,
                       },
                       1024: {
                         slidesPerView: 3,
                         spaceBetween: 30,
                       },
                       1200: {
                         slidesPerView: 3,
                         spaceBetween: 30,
                       },
                     }}
                     modules={[Autoplay, Pagination, Navigation]}
                     className="mySwiper"
                  >
                    <SwiperSlide>
                      <Counter
                        data={props.data}
                        background=""
                        icon1={<IoCalendarNumber />}
                        textnum1="8"
                        plus=""
                        icon2={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        text1={data.Jal_countup1}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Counter
                        data={props.data}
                        background=""
                        icon1={<GiHorizonRoad />}
                        textnum1="10"
                        plus=""
                        icon2={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        text1={data.Jal_countup2}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Counter
                        data={props.data}
                        background=""
                        icon1={<GiHorizonRoad />}
                        textnum1="1287"
                        plus=""
                        icon2={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        text1={data.Jal_countup3}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Counter
                        data={props.data}
                        background=""
                        icon1={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        textnum1="354"
                        plus=""
                        icon2={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        text1={data.Jal_countup4}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Counter
                        data={props.data}
                        background=""
                        icon1={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        textnum1="482"
                        plus=""
                        icon2={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        text1={data.Jal_countup5}
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Counter
                        data={props.data}
                        background=""
                        icon1={<BsEnvelopePaperFill />}
                        textnum1="1025"
                        plus=""
                        icon2={
                          <img
                            src={mapIcon}
                            style={{ height: "40px", weight: "40px" }}
                          />
                        }
                        text1={data.Jal_countup6}
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

            <div className="jal2-parent parent bg-img-cover">
              <div className="jal2-overlay"></div>
              <video
                autoPlay
                loop
                muted
                className="bg-vid"
                style={{ position: "absolute", objectFit: "cover" }}
                height="100%"
                width="100%"
              >
                <source src={BgVideo1} type="video/webm" />
                <source src={BgVideo} type="video/ogg" />
              </video>
              <div className="jal2-content">
                <h2 className="jal-headding">{data.Jal_saksharta_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Jal_saksharta_para.slice(0, 300)}{" "}
                      {func2 && (
                        <p>{data.Jal_saksharta_para.slice(300, 1000)}</p>
                      )}
                      {!func2 ? (
                        <span
                          onClick={() => {
                            setfunc2(!func2);
                          }}
                          className="read-more"
                        >
                          {data.Home_btn}
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            setfunc2(!func2);
                          }}
                          className="read-more"
                        >
                          {data.Read_less}
                        </span>
                      )}
                    </>
                  </p>
                ) : (
                  <p>{data.Jal_saksharta_para}</p>
                )}
              </div>
            </div>

            <Imageswiper
              titlegallery={data.Marathwada_gallery}
              background=""
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              img5={img5}
              img6={img6}
              img7={img7}
              img8={img8}
            />
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Jalsaksharta;
