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

import s1 from "../assets/home/Marathwada_coach_factory.jpg";
import s2 from "../assets/home/Jal_saksharta_rally.jpg";
import s3 from "../assets/home/72_taas_andolan.jpg";
import s4 from "../assets/home/Latur_Vachva_Andolan.jpg";
import s5 from "../assets/home/Atal_Mahaarogya_Shibir.jpg";
// import s6 from "../assets/home/s7.png";
import s7 from "../assets/home/Employee_People.jpg";
import s8 from "../assets/home/Indraprastha_jalbhumi.jpg";
import s9 from "../assets/home/Akka_foundation.jpg";
import Accr from "./Accr";
import { Helmet } from 'react-helmet';

function Home(props) {



  const swiperSlidesData = [
    { heading: "Marathwada Coach Factory", link: "/Marathwada_Coach_Factory", bgImage: s1 },
    { heading: "Jal Saksharta Rally", link: "/Jal_Saksharta_Rally", bgImage: s2 },
    { heading: "72 Taas Annatyag Andolan", link: "/72_Taas_Andolan", bgImage: s3 },
    { heading: "Latur Vachava Andolan", link: "/Jan_Jagar_Sanvad", bgImage: s4 },
    { heading: "Atal Maharogya Shibir", link: "/Atal_Maharogya_Shibir", bgImage: s5 },
    // { heading: "Maharojgar Melava Nilanga", link: "#", bgImage: s6 },
    { heading: "2023 NaMo Maharojgar Melava, Latur ", link: "/Namo_Maharojgar_Melava", bgImage: s7 },
    { heading: "Indraprasth Jalbhumi Abhiyan", link: "Indraprasth_Jalbhumi_Abhiyan", bgImage: s8 },
    { heading: "Akka Foundation", link: "/Akka_Foundation", bgImage: s9 },

  ];
  const swiperSlidesDataMarathi = [
    { heading: "मराठवाडा रेल्वे कोच कारखाना", link: "/Marathwada_Coach_Factory", bgImage: s1 },
    { heading: "जल साक्षरता रॅली", link: "/Jal_Saksharta_Rally", bgImage: s2 },
    { heading: "७२ तास अन्नत्याग आंदोलन ", link: "/72_Taas_Andolan", bgImage: s3 },
    { heading: "जन जागर संवाद ", link: "/Jan_Jagar_Sanvad", bgImage: s4 },
    { heading: "अटल महारोग्य शिबिर", link: "/Atal_Maharogya_Shibir", bgImage: s5 },
    // { heading: "Maharojgar Melava Nilanga", link: "#", bgImage: s6 },
    { heading: "नमो महारोजगार मेळावा", link: "/Namo_Maharojgar_Melava", bgImage: s7 },
    { heading: "इंद्रप्रस्थ जलभूमी अभियान", link: "Indraprasth_Jalbhumi_Abhiyan", bgImage: s8 },
    { heading: "अक्का फाउंडेशन", link: "/Akka_Foundation", bgImage: s9 },

  ];


  useEffect(() => {
    AOS.init();
  }, []);



  return (
    <>
      <Helmet>
        <title>Get to Know Sambhaji Patil Nilangekar: Your Dedicated Political Leader</title>
        <meta name="keywords" content="Bharatiya Janata Party,MLA in Nilangekar,MLA in Latur " />
        <meta name="description" content="Learn about the Jal Saksharta Rally in Latur, championed by Sambhaji Patil Nilangekar, promoting water awareness and conservation. Explore how this initiative educates communities and emphasizes key water sources like the Godavari River and Bhandhardara Dam. Join the effort for sustainable water management in the region." />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/Jal_Saksharta_Rally" />
      </Helmet>

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
                    delay: 250000000000000000000000,
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
                  {
                    props.change ?

                      swiperSlidesData.map((slide, index) => (
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
                      )) :
                      swiperSlidesDataMarathi.map((slide, index) => (
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
