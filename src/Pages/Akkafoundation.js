import React from "react";
import "../Styles/akkafoundation.scss";
import img1 from "../photos/Akka foundation/_MG_0997.webp";
import img2 from "../photos/Akka foundation/_MG_1752.webp";
import img3 from "../photos/Akka foundation/_MG_8510.webp";
import img4 from "../photos/Akka foundation/Sambhaji_Patil_Nilanhekar.webp";
import img5 from "../photos/Akka foundation/Sambhaji_bhaiyya_with_kids.webp";
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
                    className="img-box bg-img-cover"
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
                    Akka_Foundation sit amet consectetur adipisicing elit.
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta porro molestiae id cupiditate sequi veritatis
                    doloremque vitae! Quo sapiente molestias iure rem ipsum cum
                    minus debitis maxime quas explicabo accusamus beatae, magni
                    nostrum tempora iusto. Officia, itaque asperiores distinctio
                    maxime aperiam rerum illo nesciunt saepe mollitia id. Iusto,
                    accusamus beatae!
                  </p>
                </div>
              </div>
            </div>

            <Counter data={props.data} background="#efefef" />

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
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Empowerment</h3>
                      <p className="swiper-para">
                        Empowering the underprivileged lies at the core of Akka
                        Foundation's mission for sustainable development. It
                        entails providing sustainable opportunities, motivation,
                        and resources to those facing economic and social
                        challenges. By nurturing skills development and
                        providing financial support, the foundation aims to make
                        individuals self-reliant for a sustainable future.
                      </p>
                      <Link
                        to="https://akkafoundation.in/empower"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img2 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Education</h3>
                      <p className="swiper-para">
                        In a country with over a billion people, only one-third
                        can read due to challenges like a lack of basic
                        facilities, resources, and teachers, along with
                        insufficient public funds for education—creating a
                        significant barrier to achieving sustainable
                        development.
                      </p>
                      <Link
                        to="https://akkafoundation.in/education"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img3 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Environment</h3>
                      <p className="swiper-para">
                        In the intricate web of rural welfare, the environment
                        stands as a linchpin for Akka Foundation, playing a
                        pivotal role in fostering sustainable development.
                      </p>
                      <Link
                        to="https://akkafoundation.in/environment"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img4 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Health</h3>
                      <p className="swiper-para">
                        Prioritising health is a fundamental aspect of Akka
                        Foundation's mission for sustainable development among
                        underprivileged communities. Health, being a cornerstone
                        of individual and societal well-being, is integral for
                        achieving long-term progress.
                      </p>
                      <Link
                        to="https://akkafoundation.in/health"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img5 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Art & Culture</h3>
                      <p className="swiper-para">
                        Art and culture form the vibrant tapestry of Akka
                        Foundation's holistic approach to rural welfare,
                        contributing profoundly to sustainable development.
                        Recognizing the transformative power of artistic
                        expression, the foundation integrates art and culture
                        into its initiatives, fostering a sense of identity,
                        pride, and unity within communities.
                      </p>
                      <Link
                        to="https://akkafoundation.in/art&culture"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img6 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Project Anandi</h3>
                      <p className="swiper-para">
                        An innovative initiative ‘Project Anandi’ was launched
                        as a sustainable solution to the menstrual health
                        problems of women and girls in rural areas.
                      </p>
                      <Link
                        to="https://akkafoundation.in/project-Anandi"
                        target="_blank"
                        className="btn swiper-btn"
                      >
                        Read More
                      </Link>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <TwoColSec
              padding="50px 0px 50px 0px"
              background=""
              row="row-reverse"
              bg={img}
              subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              subdescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              porro molestiae id cupiditate sequi veritatis doloremque vitae!
              Quo sapiente molestias iure rem ipsum cum minus debitis maxime
              quas explicabo accusamus beatae, magni nostrum tempora iusto.
              Officia, itaque asperiores distinctio maxime aperiam rerum illo
              nesciunt saepe mollitia id. Iusto, accusamus beatae!"
              btn=""
            />

            <Imageswiper
              titlegallery="gallery"
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
