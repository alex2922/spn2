import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import TwoColSec from "../components/TwoColSec";
import List from "../components/List";
import img1 from "../photos/drushti/g1img.webp";
import img2 from "../photos/drushti/g2img.webp";
import img3 from "../photos/drushti/g3img.webp";
import img4 from "../photos/drushti/g4img.webp";
import img5 from "../photos/drushti/g5img.webp";
import img6 from "../photos/drushti/g6img.webp";
import img7 from "../photos/drushti/g7img.webp";
import img8 from "../photos/drushti/g8img.webp";
import img9 from "../photos/drushti/g9img.webp";
// import img9 from "../photos/drushti/";
import img from "../photos/drushti/g1img.webp";
import "../Styles/drushti.scss";
import Imageswiper from "../components/Imageswiper";

function Drushti(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <TwoColSec
              padding="100px 0px 50px 0px"
              background=""
              row=""
              bg={img}
              subheading={data.Drushti_abhiyan_heading}
              subdescription={data.Drushti_abhiyan_para}
              btn=""
            />

            {/* ===================================== */}
            <div className="drushti parent">
              <div className="drushti-container cont">
                {/* <h2>{data.Project_anandi_h2}</h2> */}
                {/* <p>{data.About_personality_para}</p> */}

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="drushti_twobox_cont">
                      <div className="drushti_content">
                        <List
                          title={data.Drushti_abhiyan_phase1}
                          para={data.Drushti_abhiyan_phase1_para}
                        />
                      </div>
                      <div className="drushti_img drushti_img1 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="drushti_twobox_cont">
                      <div className="drushti_content">
                        <List
                          title={data.Drushti_abhiyan_phase2}
                          para={data.Drushti_abhiyan_phase2_para}
                        />
                      </div>
                      <div className="drushti_img drushti_img2 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="drushti_twobox_cont">
                      <div className="drushti_content">
                        <List
                          title={data.Drushti_abhiyan_phase3}
                          para={data.Drushti_abhiyan_phase3_para}
                        />
                      </div>
                      <div className="drushti_img drushti_img3 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="drushti_twobox_cont">
                      <div className="drushti_content">
                        <List
                          title={data.Drushti_abhiyan_phase4}
                          para={data.Drushti_abhiyan_phase4_para}
                        />
                      </div>
                      <div className="drushti_img drushti_img4 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <Imageswiper
            titlegallery={data.drushti_gallery_title}
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              img5={img5}
              img6={img6}
              img7={img7}
              img8={img8}
              img9={img9}
            />
          </>
        );
      })}
    </>
  );
}

export default Drushti;
