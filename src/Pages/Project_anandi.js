import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Styles/projectanandi.scss";
import Imageswiper from "../components/Imageswiper";
import eight from "../photos/anandi/g1img.webp";
import nine from "../photos/anandi/g2img.webp";
import ten from "../photos/anandi/g3img.webp";
import eleven from "../photos/anandi/g4img.webp";
import twelve from "../photos/anandi/g5img.webp";
import thirteen from "../photos/anandi/g6img.webp";
import fourteen from "../photos/anandi/g7img.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import anandi from "../photos/anandi/g1img.webp";
import TwoColSec from "../components/TwoColSec";
import Card_section from "../components/Card_section";
import List from "../components/List";
import img1 from "../photos/anandi/g2img.webp";
import img2 from "../photos/anandi/g3img.webp";
import img3 from "../photos/anandi/g4img.webp";

function Project_anandi(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <TwoColSec
              padding="100px 0px 50px 0px"
              background=""
              row=""
              bg={anandi}
              subheading={data.Project_anandi_heading}
              subdescription={data.Project_anandi_para1}
              btn=""
            />

            {/* ================================================================== */}
            <div className="anandi parent">
              <div className="anandi-container cont">
                <h2>{data.Project_anandi_h2}</h2>
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
                    <div className="anandi_twobox_cont">
                      <div className="anandi_content">
                        <List
                          title={data.Project_anandi_slider1}
                          para={data.Project_anandi_slider1_para}
                        />
                      </div>
                      <div className="anandi_img bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="anandi_twobox_cont">
                      <div className="anandi_content">
                        <List
                          title={data.Project_anandi_slider2}
                          li1={data.Project_anandi_slider2_li1}
                          li2={data.Project_anandi_slider2_li2}
                          li3={data.Project_anandi_slider2_li3}
                          li4={data.Project_anandi_slider2_li4}
                          li5={data.Project_anandi_slider2_li5}
                          li6={data.Project_anandi_slider2_li6}
                          li7={data.Project_anandi_slider2_li7}
                          li8={data.Project_anandi_slider2_li8}
                        />
                      </div>
                      <div className="anandi_img1 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <Card_section
              mainbg="#ffffff"
              heading={data.Project_anan}
              bg="#efefef"
              height="600px"
              btntext=""
              img={img1}
              card1={data.Project_anandi_card1}
              card1para={data.Project_anandi_card1_para}
              img1={img2}
              card2={data.Project_anandi_card2}
              card2para={data.Project_anandi_card2_para}
              img2={img3}
              card3={data.Project_anandi_card3}
              card3para={data.Project_anandi_card3_para}
            />
            <Imageswiper
              titlegallery={data.anandi_gallery_title}
              img1={eight}
              img2={nine}
              img3={ten}
              img4={eleven}
              img5={twelve}
              img6={thirteen}
              img7={fourteen}
            />
          </>
        );
      })}
    </>
  );
}

export default Project_anandi;
