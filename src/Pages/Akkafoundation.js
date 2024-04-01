import React from "react";
import "../Styles/akkafoundation.scss";
import img1 from "../photos/Akka_foundation/_MG_0997.webp";
import img2 from "../photos/Akka_foundation/_MG_1752.webp";
import img3 from "../photos/Akka_foundation/_MG_8510.webp";
import img4 from "../photos/Akka_foundation/Sambhaji_Patil_Nilanhekar.webp";
import img5 from "../photos/Akka_foundation/Sambhaji_bhaiyya_with_kids.webp";
import img from "../photos/drushti/g1img.webp";
import Imageswiper from "../components/Imageswiper";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Akkafoundation(props) {
  return (
    <>
      <Helmet>
        <title>Akka_Foundation</title>
        <meta
          name="keywords"
          content="
            Akka Foundation,Sambhaji bhaiyya,Rupatai Patil Nilangekar,Arvind Patil Nilangekar,
            Latur district,Drought relief initiatives,Community support organization,Women empowerment projects,Education initiatives,Healthcare services,Environmental conservation efforts,Water management programs,Support for farming communities,Art and culture preservation,Project Anand,Drashti Abhiyan,Underprivileged support,Charitable foundation,Social welfare organization,Crisis response initiatives."
        />
        <meta
          name="description"
          content="Discover Akka Foundation's work in Latur led by Sambhaji bhaiyya. They help with drought relief, women's empowerment, education, healthcare, and more. Join their initiatives like Project Anand and Drashti Abhiyan."
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/Akka_Foundation"
        />
      </Helmet>
      {props.data.map((data) => {
        return (
          <>
            <div className="header-bg-box"></div>
            <div className="ss parent  bg-img-contain">
              <div className="overlay bg-img-cover"></div>

              <div className="ss-cont cont">
                <div className="ss-left">
                  <div
                    className="img-box-akka bg-img-cover"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                  ></div>
                </div>
                <div className="ss-right">
                  <h2
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    {data.akka12_saksharta_heading}
                  </h2>
                  <div
                    className="line"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  ></div>

                  <p
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    {data.akka12_saksharta_para}
                  </p>
                </div>
              </div>
            </div>

            <Counter data={props.data} background="#efefef" />

            <TwoColSec
              padding="50px 0px 50px 0px"
              background=""
              row="row-reverse"
              bg={img}
              subheading={data.akka12_heading2}
              subdescription={data.akka12_para2}
              btn=""
            />

            <div className="akka-found-parent parent ">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 25000000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="slide-img slide-img1 bg-img-cover">
                  <div className="overlay-swiper"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">
                        {data.akka_swiper1_heading}
                      </h3>
                      <p className="swiper-para">{data.akka_swiper1_para}</p>
                      <Link
                        to="https://akkafoundation.in/empower"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        {data.akka_read_more}
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img2 bg-img-cover">
                  <div className="overlay-swiper"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">
                        {data.akka_swiper2_heading}
                      </h3>
                      <p className="swiper-para">{data.akka_swiper2_para}</p>
                      <Link
                        to="https://akkafoundation.in/education"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        {data.akka_read_more}
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img3 bg-img-cover">
                  <div className="overlay-swiper"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">
                        {data.akka_swiper3_heading}
                      </h3>
                      <p className="swiper-para">{data.akka_swiper3_para}</p>
                      <Link
                        to="https://akkafoundation.in/environment"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        {data.akka_read_more}
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img4 bg-img-cover">
                  <div className="overlay-swiper"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">
                        {data.akka_swiper4_heading}
                      </h3>
                      <p className="swiper-para">{data.akka_swiper4_para}</p>
                      <Link
                        to="https://akkafoundation.in/health"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        {data.akka_read_more}
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img5 bg-img-cover">
                  <div className="overlay-swiper"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">
                        {data.akka_swiper5_heading}
                      </h3>
                      <p className="swiper-para">{data.akka_swiper5_para}</p>
                      <Link
                        to="https://akkafoundation.in/art&culture"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        {data.akka_read_more}
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img6 bg-img-cover">
                  <div className="overlay-swiper"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">
                        {data.akka_swiper6_heading}
                      </h3>
                      <p className="swiper-para">{data.akka_swiper6_para}</p>
                      <Link
                        to="https://akkafoundation.in/project-Anandi"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        {data.akka_read_more}
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <Imageswiper
              titlegallery={data.Marathwada_gallery}
              background="#efefef"
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              img5={img5}
            />
          </>
        );
      })}
    </>
  );
}

export default Akkafoundation;
