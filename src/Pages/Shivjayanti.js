import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import shiv from "../assets/shivjayanti/image14.webp";
import eight from "../assets/shivjayanti/2018.webp";
import nine from "../assets/shivjayanti/2019.webp";
import ten from "../assets/shivjayanti/2020.webp";
import eleven from "../assets/shivjayanti/2021.webp";
import twelve from "../assets/shivjayanti/2022.webp";
import thirteen from "../assets/shivjayanti/2023.webp";
import fourteen from "../assets/shivjayanti/2024.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../assets/s1.jpg";
import TwoColSec from "../components/TwoColSec";
import List from "../components/List";
import "../Styles/shivjayanti.scss";
import Imageswiper from "../components/Imageswiper";

function Shivjayanti(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <TwoColSec
              padding="100px 0px 50px 0px"
              background=""
              row=""
              bg={shiv}
              subheading={data.Shivjayanti_heading}
              subdescription={data.Shivjayanti_para1}
              btn=""
            />

            {/* ...........//Personality Section//............. */}

            <div className="Shivjayanti parent">
              <div className="Shivjayanti-container cont">
                {/* <h2>{data.About_personality}</h2>
                <p>{data.About_personality_para}</p> */}

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 65000000,
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
                    <div className="Shivjayanti_twobox_cont">
                      <div className="Shivjayanti_content">
                        <List
                          title={data.Shivjayanti_slide1}
                          li1={data.Shivjayanti_slide1_li1}
                          li2={data.Shivjayanti_slide1_li2}
                          li3={data.Shivjayanti_slide1_li3}
                        />
                      </div>
                      <div className="Shivjayanti_img img1 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Shivjayanti_twobox_cont">
                      <div className="Shivjayanti_content">
                        <List
                          title={data.Shivjayanti_slide2}
                          li1={data.Shivjayanti_slide2_li1}
                          li2={data.Shivjayanti_slide2_li2}
                          li3={data.Shivjayanti_slide2_li3}
                        />
                      </div>
                      <div className="Shivjayanti_img img2 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Shivjayanti_twobox_cont">
                      <div className="Shivjayanti_content">
                        <List
                          title={data.Shivjayanti_slide3}
                          para={data.Shivjayanti_slide3_para}
                        />
                      </div>
                      <div className="Shivjayanti_img img3 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Shivjayanti_twobox_cont">
                      <div className="Shivjayanti_content">
                        <List
                          title={data.Shivjayanti_slide4}
                          li1={data.Shivjayanti_slide4_li1}
                          li2={data.Shivjayanti_slide4_li2}
                          li3={data.Shivjayanti_slide4_li3}
                          li4={data.Shivjayanti_slide4_li4}
                          li5={data.Shivjayanti_slide4_li5}
                          li6={data.Shivjayanti_slide4_li6}
                        />
                      </div>
                      <div className="Shivjayanti_img img4 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Shivjayanti_twobox_cont">
                      <div className="Shivjayanti_content">
                        <List
                          title={data.Shivjayanti_slide5}
                          li1={data.Shivjayanti_slide5_li1}
                          li2={data.Shivjayanti_slide5_li2}
                          li3={data.Shivjayanti_slide5_li3}
                          li4={data.Shivjayanti_slide5_li4}
                          li5={data.Shivjayanti_slide5_li5}
                          li6={data.Shivjayanti_slide5_li6}
                          li7={data.Shivjayanti_slide5_li7}
                          li8={data.Shivjayanti_slide5_li8}
                        />
                      </div>
                      <div className="Shivjayanti_img img5 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Shivjayanti_twobox_cont">
                      <div className="Shivjayanti_content">
                        <List
                          title={data.Shivjayanti_slide6}
                          li1={data.Shivjayanti_slide6_li1}
                          li2={data.Shivjayanti_slide6_li2}
                          li3={data.Shivjayanti_slide6_li3}
                        />
                      </div>
                      <div className="Shivjayanti_img img6 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="Shivjayanti_twobox_cont">
                      <div className="Shivjayanti_content">
                        <List
                          title={data.Shivjayanti_slide7}
                          li1={data.Shivjayanti_slide7_li1}
                          li2={data.Shivjayanti_slide7_li2}
                          li3={data.Shivjayanti_slide7_li3}
                        />
                      </div>
                      <div className="Shivjayanti_img img7 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <Imageswiper
              titlegallery={data.shivjayanti_gallery_title}
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

export default Shivjayanti;
