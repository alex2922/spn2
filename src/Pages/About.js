import React from "react";
import TwoColSec from "../components/TwoColSec";
import latur1_img from "../photos/about/latur1.webp";
import latur2_img from "../photos/about/latur2.webp";
import "../Styles/about.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import List from "../components/List";

function About(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <div className="about parent">
              <TwoColSec
                padding="50px 0px 2px 0px"
                background=""
                row=""
                bg={latur1_img}
                subheading={data.About_heading}
                subdescription={data.About_para1}
                btn=""
              />
              <TwoColSec
                padding="2px 0px 50px 0px"
                background=""
                row="row-reverse"
                bg={latur2_img}
                subheading=""
                subdescription={data.About_para2}
                btn=""
              />
            </div>

            {/* ...........//Personality Section//............. */}

            <div className="personality parent">
              <div className="personality-container cont">
                <h2 data-aos="fade-up" data-aos-delay="0" data-aos-duration="900">{data.About_personality}</h2>
                <p data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">{data.About_personality_para}</p>

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
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-1 bg-img-cover" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card1}
                          para={data.About_card1_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-2 bg-img-cover" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1700"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card2}
                          para={data.About_card2_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-3 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card3}
                          para={data.About_card3_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-4 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card4}
                          para={data.About_card4_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-5 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card5}
                          para={data.About_card5_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-6 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card6}
                          para={data.About_card6_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-7 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card7}
                          para={data.About_card7_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-8 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card8}
                          para={data.About_card8_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-9 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card9}
                          para={data.About_card9_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default About;
