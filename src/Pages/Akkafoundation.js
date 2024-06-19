import React,{useState,useEffect} from "react";
import "../Styles/akkafoundation.scss";
import img1 from "../photos/Akka_foundation/_MG_0997.webp";
import img2 from "../photos/Akka_foundation/_MG_1752.webp";
import img3 from "../photos/Akka_foundation/_MG_8510.webp";
import img4 from "../photos/Akka_foundation/Sambhaji_Patil_Nilanhekar.webp";
import img5 from "../photos/Akka_foundation/Sambhaji_bhaiyya_with_kids.webp";
import img from "../photos/drushti/Akka_foundation.webp";
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
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
// icons
import { FaSchool } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { FaBed } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { GrInspect } from "react-icons/gr";
import akka from "../assets/Akka_Foundation.webm";

function Akkafoundation(props) {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);



  const [responsive, setResponsive] = useState(false);
  const [func2, setfunc2] = useState(false);

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
            <div className="akka-parent parent bg-img-cover">
              <div className="akka-overlay"></div>
              <h2 className="akka-headding1">
                {data.akka12_saksharta_heading}
              </h2>
            </div>

            <Counter data={props.data} background="#efefef" />

            <div className="counter-parent-main ">
            <div className="counter-parent1 ">
              <h3>{data.project_anandi}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                icon1={<FaSchool />}
                textnum1="321"
                // plus="+"
                icon2={<IoCalendarNumber />}
                text1={data.school}
                textnum2="168"
                // plus2="+"
                icon3={<PiStudentFill />}
                text2={data.anandi_days}
                textnum3="26150"
                plus3=""
                text3={data.anandi_students}
                textnum4=""
              />
            </div>

            <div className="counter-parent1 counter-akka counter-akka-11 ">
              <h3  className="akka-head">{data.drishti_abhiyan}</h3>
              <Tooltip id="my-tooltip" />
              <Counter 
              className="hg"
                data={props.data}
                background=""
                icon4={<FaBed />}
                text4={data.drishti_total_pateints}
                textnum4="24648"
                // plus="+"
                icon5={<FaUserDoctor />}
                text5={data.drishti_total_ooperations}
                textnum5="1617"
                // plus2="+"
                icon6={<GrInspect />}
                text6={data.drishti_specs_distructed}
                textnum6="10721"
                plus3=""
              />
            </div>
            </div>


           

            <div className="akka-found-parent parent ">
              <Swiper
                spaceBetween={30}
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


            {/* <div className="jal2-parent parent bg-img-cover">
              <div className="jal2-overlay"></div>
              <video
                autoPlay
                loop
                muted
                className="bg-vid"
                style={{ position: "absolute", objectFit: "cover" }}
                height="100%"
                width="100%"
              >
                <source src={akka} type="video/webm" />
              </video>
              <div className="jal2-content">
              
                <h2 className="jal-headding">{data.akka12_heading2}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.akka12_para2.slice(0, 300)}{" "}
                      {func2 && (
                        <p>{data.akka12_para2.slice(300, 1000)}</p>
                      )}
                      {!func2 ? (
                        <span
                          onClick={() => {
                            setfunc2(!func2);
                          }}
                          className="read-more"
                        >
                          {data.Home_btn}
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            setfunc2(!func2);
                          }}
                          className="read-more"
                        >
                          {data.Read_less}
                        </span>
                      )}
                    </>
                  </p>
                ) : (
                  <p>{data.akka12_para2}</p>
                )}
              </div>
         
            </div> */}

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
