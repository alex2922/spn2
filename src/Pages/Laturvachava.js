import React,{useState,useEffect} from "react";
import "../Styles/laturvachava.scss";
import img1 from "../photos/jan_jagar_sanwad/sanwad1.png";
import img2 from "../photos/jan_jagar_sanwad/sanwad2.png";
import img3 from "../photos/jan_jagar_sanwad/sanwad3.png";
import img4 from "../photos/jan_jagar_sanwad/img8.webp";
import img5 from "../photos/jan_jagar_sanwad/sanwad5.png";
import img6 from "../photos/jan_jagar_sanwad/img6.webp";
import img7 from "../photos/jan_jagar_sanwad/img7.webp";
import img8 from "../photos/jan_jagar_sanwad/sanwad4.png";
import img9 from "../photos/jan_jagar_sanwad/img9.webp";
import img from "../photos/drushti/jan_jagar_sanwad.webp";
import Imageswiper from "../components/Imageswiper";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from 'react-helmet';
import { FaPeopleRoof } from "react-icons/fa6";
import { BiSolidFileBlank } from "react-icons/bi";
import { HiLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import janJagar from "../assets/Jan_Jagar_Savad.webm"

function Laturvachava(props) {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const [responsive, setResponsive] = useState(false);
  const [func2, setfunc2] = useState(false);

  useEffect(() => {
    const togglePara = () => {
      setResponsive(window.innerWidth <= 700);
    };

    togglePara();

    window.addEventListener("resize", togglePara);

    return () => {
      window.addEventListener("resize", togglePara);
    };
  }, []);

  return (
    <>
    <Helmet>
        <title>Jan Jagar Sanvad</title>
        <meta name="keywords" content="Marathwada,Jan Jagar Manch,Dayanand Auditorium Hall,Jan Jagar Samvad" />
        <meta name="description" content="Explore the cultural heart of Marathwada at Jan Jagar Manch's vibrant events held in the iconic Dayanand Auditorium Hall. Join Jan Jagar Samvad for insightful discussions shaping the region's future." />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/Jan_Jagar_Sanvad" />
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
                    className="img-box-jan-jagar bg-img-cover"
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
                    {data.Latur_saksharta_heading}
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
                    {data.Latur_saksharta_para}
                  </p>
                </div>
              </div>
            </div>

            <div className="counter-parent1">
              <h3>{data.Marathwada_counter}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                icon1={<FaPeopleGroup />}
                textnum1="450"
                plus=""
                icon2={<BiSolidFileBlank />}
                text1={data.Latur_countup1}
                textnum2="9"
                plus2=""
                text2={data.Latur_countup2}
                textnum3="100"
                plus3="+"
                icon3={<HiLightBulb />}
                text3={data.Latur_countup3}
                textnum4=""
                plus4=""
                text4=""
              />
            </div>

            <div className="jal2-parent parent bg-img-cover">
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
                <source src={janJagar} type="video/webm" />
              </video>
              <div className="jal2-content">
                {/* <div className="jal2-left">  */}
                <h2 className="jal-headding">{data.Latur_saksharta_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Latur_saksharta_para.slice(0, 300)}{" "}
                      {func2 && (
                        <p>{data.Latur_saksharta_para.slice(300, 1000)}</p>
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
                  <p>{data.Latur_saksharta_para}</p>
                )}
              </div>
              {/* <div className="jal2-right"></div> */}
              {/* </div> */}
            </div>

            <Imageswiper
              titlegallery={data.Marathwada_gallery}
              background=""
              img1={img1}
              img2={img2}
            //   img3={img3}
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

export default Laturvachava;
