import HeroSection from "../components/Herosection";
import TwoColSec from "../components/TwoColSec";
import brief from "../assets/home/hero-about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../assets/home/s6.png";

import "../Styles/home.scss";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import s1 from "../assets/home/s1.png";
import s2 from "../assets/home/s2.png";
import s3 from "../assets/home/s3.png";
import s4 from "../assets/home/s4.png";
import s5 from "../assets/home/s5.png";
// import s6 from "../assets/home/s7.png";
import s7 from "../assets/home/s6.png";
import s8 from "../assets/home/s8.png";
import s9 from "../assets/home/s9.png";
import Accr from "./Accr";

function Home(props) {
  const swiperSlidesData = [
    { heading: "Marathwada Coach Factory", link: "#", bgImage: s1 },
    { heading: "Jal Saksharta Rally", link: "#", bgImage: s2 },
    { heading: "72 Taas Andolan", link: "#", bgImage: s3 },
    { heading: "Latur Vachava Andolan", link: "#", bgImage: s4 },
    { heading: "Atal Maharogya Shibir", link: "#", bgImage: s5 },
    // { heading: "Maharojgar Melava Nilanga", link: "#", bgImage: s6 },
    { heading: "NaMo Maharojgar Melava, Latur 2023", link: "#", bgImage: s7 },
    { heading: "Indraprasth Jalbhumi Abhiyan", link: "#", bgImage: s8 },
    { heading: "Akka Foundation", link: "#", bgImage: s9 },
  ];

  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <HeroSection data={props.data} />
            <div className="hero-2col">
              <TwoColSec
                background=""
                row=""
                bg={brief}
                subheading={data.Home_subheading}
                subdescription={data.Home_subdescription}
                btn={data.Home_btn}
              />
            </div>

            <div className="success-superparent">

            <h2 className="head" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Success Stories</h2>

           <div className="success-swipe parent" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
              >
                {swiperSlidesData.map((slide, index) => (
                  <SwiperSlide
                    key={index}
                    style={{ backgroundImage: `url(${slide.bgImage})` }}
                  >
                    <div className="overlay">
                      <h2>{slide.heading}</h2>
                      <Link to={slide.link} className="btn2">
                        Read More
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
           </div>

            <div className="blog-parent1">
              <div className="blog-container cont">
                <div className="blog-headding">
                  <h2>Blogs</h2>
                </div>
                <Link to="/blog" className="blog-card">
                  <div className="blog-card-img ">
                    <img
                      src={img1}
                      alt="blog-img"
                      className="bg-img-cover blog-img"
                    />
                    <h4 className="blogdate">4/03/2024</h4>
                  </div>

                  <div className="blog-card-bottom">
                    <h3 className="blog-title">
                      Pride of Modern India: “Atal Setu”
                    </h3>
                  </div>
                </Link>
                <Link to="/blog" v className="blog-card">
                  <div className="blog-card-img ">
                    <img
                      src={img1}
                      alt="blog-img"
                      className="bg-img-cover blog-img"
                    />
                    <h4 className="blogdate">4/03/2024</h4>
                  </div>
                  <div className="blog-card-bottom">
                    <h3 className="blog-title">
                      Pride of Modern India: “Atal Setu”
                    </h3>
                  </div>
                </Link>

                <Link to="/blog" className="blog-card">
                  <div className="blog-card-img ">
                    <img
                      src={img1}
                      alt="blog-img"
                      className="bg-img-cover blog-img"
                    />
                    <h4 className="blogdate">4/03/2024</h4>
                  </div>
                  <div className="blog-card-bottom">
                    <h3 className="blog-title">
                      Pride of Modern India: “Atal Setu”
                    </h3>
                  </div>
                </Link>
              </div>
              <div className="loadmore-btn">
                <Link to="/blog" className="loadmore btn">
                  Load More
                </Link>
              </div>
            </div>

           
          </>
        );
      })}
    </>
  );
}

export default Home;
