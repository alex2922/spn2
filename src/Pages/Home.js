import HeroSection from "../components/Herosection";
import TwoColSec from "../components/TwoColSec";
import brief from "../assets/home/hero-about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
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
import { Helmet } from "react-helmet";

import axios from "axios";
function Home(props) {
  const swiperSlidesData = [


    {
      heading_marathi: "मराठवाडा रेल्वे कोच कारखाना",
      link: "/Marathwada_Coach_Factory",
      bgImage: s1,
    },
    { heading: "जल साक्षरता रॅली", link: "/Jal_Saksharta_Rally", bgImage: s2 },
    {
      heading: "७२ तास अन्नत्याग आंदोलन ",
      link: "/72_Taas_Andolan",
      bgImage: s3,
    },
    { heading: "जन जागर संवाद ", link: "/Jan_Jagar_Sanvad", bgImage: s4 },
    {
      heading: "अटल महारोग्य शिबिर",
      link: "/Atal_Maharogya_Shibir",
      bgImage: s5,
    },
    // { heading: "Maharojgar Melava Nilanga", link: "#", bgImage: s6 },
    {
      heading: "नमो महारोजगार मेळावा",
      link: "/Namo_Maharojgar_Melava",
      bgImage: s7,
    },
    {
      heading: "इंद्रप्रस्थ जलभूमी अभियान",
      link: "Indraprasth_Jalbhumi_Abhiyan",
      bgImage: s8,
    },
    { heading: "अक्का फाउंडेशन", link: "/Akka_Foundation", bgImage: s9 },
   
  ];

  const swiperSlidesDataMarathi = [
    {
      heading: "Marathwada Coach Factory",
      link: "/Marathwada_Coach_Factory",
      bgImage: s1,
    },
    {
      heading: "Jal Saksharta Rally",
      link: "/Jal_Saksharta_Rally",
      bgImage: s2,
    },
    {
      heading: "72 Taas Annatyag Andolan",
      link: "/72_Taas_Andolan",
      bgImage: s3,
    },
    {
      heading: "Latur Vachava Andolan",
      link: "/Jan_Jagar_Sanvad",
      bgImage: s4,
    },
    {
      heading: "Atal Maharogya Shibir",
      link: "/Atal_Maharogya_Shibir",
      bgImage: s5,
    },
    // { heading: "Maharojgar Melava Nilanga", link: "#", bgImage: s6 },
    {
      heading: "2023 NaMo Maharojgar Melava, Latur ",
      link: "/Namo_Maharojgar_Melava",
      bgImage: s7,
    },
    {
      heading: "Indraprasth Jalbhumi Abhiyan",
      link: "Indraprasth_Jalbhumi_Abhiyan",
      bgImage: s8,
    },
    { heading: "Akka Foundation", link: "/Akka_Foundation", bgImage: s9 },
  ];

  useEffect(() => {
    AOS.init();
    fetchData();
  }, [props.change]);

  const [blogdata, setdata] = useState([]);
  const fetchData = () => {
    axios
      .get(
        props.change
          ?"https://backend.sambhajipatilnilangekar.com/api/blogs/category/2/"
              :    "https://backend.sambhajipatilnilangekar.com/api/blogs/category/3/" 
      )
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  };
  console.log(blogdata);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear().toString();

    return `${day}/${month}/${year}`;
  }
  return (
    <>
      <Helmet>
        <title>
          Get to Know Sambhaji Patil Nilangekar: Your Dedicated Political Leader
        </title>
        <meta
          name="keywords"
          content="Bharatiya Janata Party,MLA in Nilangekar,MLA in Latur "
        />
        <meta
          name="description"
          content="Learn about the Jal Saksharta Rally in Latur, championed by Sambhaji Patil Nilangekar, promoting water awareness and conservation. Explore how this initiative educates communities and emphasizes key water sources like the Godavari River and Bhandhardara Dam. Join the effort for sustainable water management in the region."
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/Jal_Saksharta_Rally"
        />
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
              <h2
                className="head"
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
              >
                {data.Header_story}
              </h2>

              <div
                className="success-swipe parent"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
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
                  {props.change
                    ? swiperSlidesData.map((slide, index) => (
                        <SwiperSlide
                          key={index}
                          style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                          <div className="overlay">
                            <h2>{slide.heading}</h2>
                            <Link to={slide.link} className="btn2">
                            {data.akka_read_more}
                            </Link>
                          </div>
                        </SwiperSlide>
                      ))
                    : swiperSlidesDataMarathi.map((slide, index) => (
                        <SwiperSlide
                          key={index}
                          style={{ backgroundImage: `url(${slide.bgImage})` }}
                        >
                          <div className="overlay">
                            <h2>{slide.heading}</h2>
                            <Link to={slide.link} className="btn2">
                             {data.akka_read_more}
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
                  <h2>{data.Header_Blog}</h2>
                </div>
                {blogdata &&
                  blogdata
                    .slice(0, 3)
                    .reverse()
                    .map((data) => {
                      return (
                        <Link to={`/blogs/${data.id}`} className="blog-card">
                          <div className="blog-card-img ">
                            <div
                              style={{ background: `url(${data.image})` }}
                              alt="blog-img"
                              className="bg-img-cover blog-img"
                            ></div>
                            <h4 className="blogdate">
                              {formatDate(data.date)}
                            </h4>
                          </div>

                          <div className="blog-card-bottom">
                            <p className="blog-title">
                              {data.title.slice(0, 30)} ...
                            </p>
                          </div>
                        </Link>
                      );
                    })}
              </div>
              <div className="loadmore-btn">
                <Link to="/blog" className="loadmore btn">
                  {data.Home_btn}
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
