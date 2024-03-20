import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/sucess_story.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Sucesstory() {
  return (
    <>
      <div className="sucess-story-parent parent">
        <div className="sucess-story-container container"></div>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="smySwiper"
        >
          <SwiperSlide>
            <div className="scard">
              <div className="scard-img"></div>
              <h3 className="scard-headding"></h3>
              <p className="scard-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!{" "}
              </p>
              <Link to="#" className="btn-active">
                Read More
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Sucesstory;
