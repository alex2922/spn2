import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../photos/indraprasta/img1.webp";
import img1 from "../photos/indraprasta/s1img.webp";
import img2 from "../photos/indraprasta/s2img.webp";
import img3 from "../photos/indraprasta/s3img.webp";
import img4 from "../photos/indraprasta/img4.webp";
import img5 from "../photos/indraprasta/img5.webp";
import img6 from "../photos/indraprasta/img6.webp";
import img7 from "../photos/indraprasta/img7.webp";
import img8 from "../photos/indraprasta/img8.webp";
import img9 from "../photos/indraprasta/img10.webp";
import TwoColSec from "../components/TwoColSec";
import List from "../components/List";
import "../Styles/indraprashtha.scss";
import Imageswiper from "../components/Imageswiper";

function Indraprashtha(props) {
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
              subheading={data.Indraprashtha_heading}
              subdescription={data.Indraprashtha_heading_para}
              btn=""
            />

            {/* ...........//Personality Section//............. */}

            <div className="indraprashtha parent">
              <div className="indraprashtha-container cont">
                {/* <h2>{data.About_personality}</h2>
                <p>{data.About_personality_para}</p> */}

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
                    <div className="indraprashtha_twobox_cont">
                      <div className="indraprashtha_content">
                        <List
                          title={data.Indraprashtha_title1}
                          li1={data.Indraprashtha_title1_li1}
                          li2={data.Indraprashtha_title1_li2}
                          li3={data.Indraprashtha_title1_li3}
                          li4={data.Indraprashtha_title1_li4}
                          li5={data.Indraprashtha_title1_li5}
                        />
                      </div>
                      <div className="indraprashtha_img indraprashtha_img1 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="indraprashtha_twobox_cont">
                      <div className="indraprashtha_content">
                        <List
                          title={data.Indraprashtha_title2}
                          li1={data.Indraprashtha_title2_li1}
                          li2={data.Indraprashtha_title2_li2}
                          li3={data.Indraprashtha_title2_li3}
                          li4={data.Indraprashtha_title2_li4}
                          li5={data.Indraprashtha_title2_li5}
                        />
                      </div>
                      <div className="indraprashtha_img indraprashtha_img2 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="indraprashtha_twobox_cont">
                      <div className="indraprashtha_content">
                        <List
                          title={data.Indraprashtha_title3}
                          li1={data.Indraprashtha_title3_li1}
                          li2={data.Indraprashtha_title3_li2}
                          li3={data.Indraprashtha_title3_li3}
                          li4={data.Indraprashtha_title3_li4}
                          li5={data.Indraprashtha_title3_li5}
                          li6={data.Indraprashtha_title3_li6}
                          li7={data.Indraprashtha_title3_li7}
                        />
                      </div>
                      <div className="indraprashtha_img indraprashtha_img3 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <Imageswiper
            titlegallery={data.indraprashtha_gallery_title}
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

export default Indraprashtha;
