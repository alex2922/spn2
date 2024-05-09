import React, { useState } from "react";
import TwoColSec from "../components/TwoColSec";
import latur1_img from "../photos/about/latur1.webp";
import latur2_img from "../photos/about/latur2.webp";
import "../Styles/about.scss";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import List from "../components/List";
import { Helmet } from "react-helmet";

function About(props) {
  const [readmore, setReadMore] = useState(false);
  const [readmore1, setReadMore1] = useState(false);

  return (
    <>
      <Helmet>
        <title>
          Get to Know Sambhaji Patil Nilangekar: Dive Deeper into Our Political
          Leadership - About Us
        </title>
        <meta
          name="keywords"
          content="Sambhaji Patil Nilangekar,Zilla Parishad,Municipal Corporation,Indraprastha Jalbhumi Abhiyan, Water Literacy Rally, Janjagar Samvad, Maharojgar Melawa, and Health Camps"
        />
        <meta
          name="description"
          content="Sambhaji Patil Nilangekar leads Zilla Parishad and Municipal Corporation projects, along with initiatives like Indraprastha Jalbhumi Abhiyan. Join us for Water Literacy Rally, Janjagar Samvad, Maharojgar Melawa, and Health Camps."
        />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/about" />
      </Helmet>
      {props.data.map((data) => {
        return (
          <>
            <div className="about-parent parent">
              <div className="about-cont cont">
                <div className="about-left bg-img-cover"></div>
                <div
                  className={
                    readmore ? "about-right scroll-about" : "about-right"
                  }
                >
                  <h2>{data.About_subheading}</h2>
                  <h4>{data.About_subdescription}</h4>
                  <h4>{data.About_subdescription1}</h4>
                  <p>{data.About_subdescription2.slice(0, 471)}</p>
                  {readmore && (
                    <p>{data.About_subdescription2.slice(471, 100000000000)}</p>
                  )}
                  {!readmore ? (
                    <span onClick={() => setReadMore(true)}>Read More</span>
                  ) : (
                    <span onClick={() => setReadMore(false)}>Read Less</span>
                  )}
                </div>
              </div>

              <div
                className="about-cont cont"
                style={{ flexDirection: "row-reverse" }}
              >
                <div className="about-left about-right bg-img-cover"></div>
                <div
                  className={
                    readmore1 ? "about-right scroll-about" : "about-right"
                  }
                >
                  <p>{data.About_subdescription4.slice(0, 600)}</p>

                  {readmore1 && (
                    <p>{data.About_subdescription4.slice(600, 100000000000)}</p>
                  )}
                  {!readmore1 && (
                    <span
                      onClick={() => setReadMore1(true)} >
                      Read More
                    </span>
                  )}

                  {readmore1 && (
                    <div className="para-about">
                      <p>{data.About_subdescription5}</p>
                      <h4>{data.About_heading4}</h4>
                      <h4>{data.About_heading5}</h4>
                      <h4>{data.About_heading6}</h4>

                      <span onClick={() => setReadMore1(false)}>Read Less</span>
                    </div>
                  )}
                </div>
              </div>

              {/* <TwoColSec
                padding="50px 0px 2px 0px"
                background=""
                row=""
                bg={latur1_img}
                subheading={data.About_subheading}
                subdescription={data.About_subdescription}
                subdescription1={data.About_subdescription1}
                subdescription2={data.About_subdescription2}
                btn=""
              />
              <TwoColSec
                padding="0px 0px 50px 0px"
                background=""
                row="row-reverse"
                bg={latur2_img}
                subheading=""
                subdescription={data.About_subdescription4}
                subdescription1={data.About_subdescription5}
                heading4={data.About_heading4}
                heading5={data.About_heading5}
                heading6={data.About_heading6}
                btn=""
              /> */}
            </div>

            {/* ...........//Personality Section//............. */}

            <div className="personality parent">
              <div className="personality-container cont">
                <h2
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="900"
                >
                  {data.About_personality}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1000"
                >
                  {data.About_personality_para}
                </p>

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
                      <div
                        className="personality_img personality_img-1 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1200"
                      ></div>
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
                      <div
                        className="personality_img personality_img-2 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="1700"
                      ></div>
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
                      <div
                        className="personality_img personality_img-3 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                      ></div>
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
                      <div
                        className="personality_img personality_img-4 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                      ></div>
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
                      <div
                        className="personality_img personality_img-5 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                      ></div>
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
                      <div
                        className="personality_img personality_img-6 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                      ></div>
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
                      <div
                        className="personality_img personality_img-7 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                      ></div>
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
                      <div
                        className="personality_img personality_img-8 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                      ></div>
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
                      <div
                        className="personality_img personality_img-9 bg-img-cover"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1200"
                      ></div>
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
