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
import "../Styles/samrudha.scss";
import img from "../photos/shetkari_abhiyan/img1.webp";
import Imageswiper from "../components/Imageswiper";
import List from "../components/List";
import img1 from "../photos/shetkari_abhiyan/img2.webp";
import img2 from "../photos/shetkari_abhiyan/img10.webp";
import img3 from "../photos/shetkari_abhiyan/img1.webp";
import img4 from "../photos/shetkari_abhiyan/img8.webp";
import img5 from "../photos/shetkari_abhiyan/img9.webp";
import img6 from "../photos/shetkari_abhiyan/img7.webp";
import img7 from "../photos/shetkari_abhiyan/img6.webp";
import img8 from "../photos/shetkari_abhiyan/img5.webp";
import img9 from "../photos/shetkari_abhiyan/img4.webp";

function Samruddha_setkari(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
           <div className="test1234">
           <TwoColSec
              padding="100px 0px 50px 0px"
              background=""
              row=""
              bg={img}
              subheading={data.Samruddha_heading}
              subdescription={data.Samruddha_para1}
              btn=""
            />
           </div>

            <div className="lists_sam parent">
              <div className="list_sam_container cont">
                <h2>{data.Samruddha_list_heading}</h2>

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
                    <div className="sam_twobox_cont">
                      <div className="sam_content">
                        <List
                          title={data.Samruddha_title1}
                          para={data.Samruddha_title1_para1}
                          li1={data.Samruddha_title1_li1}
                          li2={data.Samruddha_title1_li2}
                          li3={data.Samruddha_title1_li3}
                        />
                      </div>
                      <div className="sam_img sam_img1 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sam_twobox_cont">
                      <div className="sam_content">
                        <List
                          title={data.Samruddha_title2}
                          para={data.Samruddha_title2_para1}
                          li1={data.Samruddha_title2_li1}
                          li2={data.Samruddha_title2_li2}
                          li3={data.Samruddha_title2_li3}
                        />
                      </div>
                      <div className="sam_img sam_img2 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sam_twobox_cont">
                      <div className="sam_content">
                        <List
                          title={data.Samruddha_title3}
                          para={data.Samruddha_title3_para1}
                        />
                      </div>
                      <div className="sam_img sam_img3 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sam_twobox_cont">
                      <div className="sam_content">
                        <List
                          title={data.Samruddha_title4}
                          li1={data.Samruddha_title4_li1}
                          li2={data.Samruddha_title4_li2}
                          li3={data.Samruddha_title4_li3}
                        />
                      </div>
                      <div className="sam_img sam_img4 bg-img-cover"></div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <Imageswiper
            titlegallery={data.samruddha_gallery_title}
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

export default Samruddha_setkari;
