import React, { useEffect, useState } from "react";
import "../Styles/jalsaksharta.scss";
import img1 from "../photos/Jal_saksharta_rally/01.JPG.webp";
import img2 from "../photos/Jal_saksharta_rally/06.webp";
import img3 from "../photos/Jal_saksharta_rally/08.webp";
import img4 from "../photos/Jal_saksharta_rally/09.webp";
import img5 from "../photos/Jal_saksharta_rally/10.webp";
import img6 from "../photos/Jal_saksharta_rally/16.webp";
import img7 from "../photos/Jal_saksharta_rally/19.webp";
import img8 from "../photos/Jal_saksharta_rally/_MG_6713.webp";
import img from "../assets/home/Jal_Saksharta_Rally.webp";
import Imageswiper from "../components/Imageswiper";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from "react-helmet";
import BgVideo from "../assets/BgVideo.ogg";
import BgVideo1 from "../assets/BgVideo.webm";
import posterImage from "../photos/Jal_saksharta_rally/09.webp";
import { RiMotorbikeFill } from "react-icons/ri";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

import { IoCalendarNumber } from "react-icons/io5";
import { GiVillage } from "react-icons/gi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { ImOffice } from "react-icons/im";
import { BsEnvelopePaperFill } from "react-icons/bs";
function Jalsaksharta(props) {
  const data2 = {
    text: "arn about the Jal Saksharta Rally in Latur, championed by Sambhaji Patil Nilangekar, promoting water awareness and conservation. Explore how this initiative educates communities and emphasize",
  };

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
        <title>Jal Saksharta Rally</title>
        <meta
          name="keywords"
          content="Jal Saksharta Rally, Jal Saksharta Rally in Latur, Sambhaji Patil, Sambhaji Patil Nilangekar, Godavari River, Bhandhardara Dam"
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
            <div className="jal-parent parent bg-img-cover">
              <div className="jal-overlay"></div>
              <h2 className="jal-headding1">Jal Saksharta Rally!</h2>
            </div>
            {/* <div className="header-bg-box"></div> */}

            {/* 
            <div className="ss parent  bg-img-contain">
              <div className="overlay bg-img-cover"></div>

              <div className="ss-cont cont">
                <div className="ss-left">
                  <div
                    className="img-box-jal bg-img-cover"
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
                    {data.Jal_saksharta_heading}
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
                    {data.Jal_saksharta_para}
                  </p>
                </div>
              </div>
            </div> */}

            <div className="counter-parent2 ">
              <h3>{data.Marathwada_counter}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                icon1={<IoCalendarNumber />}
                textnum1="8"
                plus=""
                icon2={<GiVillage />}
                text1={data.Jal_countup1}
                textnum2="10"
                plus2=""
                icon3={<PiRoadHorizonFill />}
                text2={data.Jal_countup2}
                textnum3="1287"
                plus3=""
                icon4={<GiVillage />}
                text3={data.Jal_countup3}
                textnum4="354"
                plus4=""
                icon5={<ImOffice />}
                text4={data.Jal_countup4}
                textnum5="482"
                plus5=""
                icon6={<BsEnvelopePaperFill />}
                text5={data.Jal_countup5}
                textnum6="1025"
                plus6=""
                text6={data.Jal_countup6}
              />

              {/* <div className="box-counter">
                <div className="icon"><RiMotorbikeFill /></div>
                <div className="content">
                  <h2>heading</h2>
                  <Tooltip id="my-tooltip" />
                  {data2.text.length > 20 ? (
                    <p
                      data-tooltip-id="my-tooltip"
                      data-tooltip-content={data2.text}
                      data-tooltip-place="top"
                    >
                      {data2.text.slice(0, 20)}...{" "}
                    </p>
                  ) : (
                    <p>{data2.text}</p>
                  )}
                </div>
              </div> */}
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
                <source src={BgVideo1} type="video/webm" />
                <source src={BgVideo} type="video/ogg" />
              </video>
              <div className="jal2-content">
                {/* <div className="jal2-left">  */}
                <h2 className="jal-headding">{data.Jal_saksharta_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Jal_saksharta_para.slice(0, 300)}{" "}
                      {func2 && (
                        <span>{data.Jal_saksharta_para.slice(300, 1000)}</span>
                      )}
                      { !func2 ?  <span
                        onClick={() => {
                          setfunc2(!func2);
                         
                        }}
                        className="read-more"
                      >
                        {data.Home_btn}
                      </span>
                     :
                     
                     <span
                        onClick={() => {
                          setfunc2(!func2);
                      
                        }}
                        className="read-more"
                      >
                        {data.Read_less}
                      </span>
                    
                    }
                    </>
                  </p>
                ) : (
                  <p>{data.Jal_saksharta_para}</p>
                )}
              </div>
              {/* <div className="jal2-right"></div> */}
              {/* </div> */}
            </div>

            {/* <TwoColSec
              padding="50px 0px 50px 0px"
              background="#efefef"
              row="row-reverse"
              bg={img}
              subheading={data.Jal_heading2}
              subdescription={data.Jal_para2}
              btn=""
            /> */}

            <Imageswiper
              titlegallery={data.Marathwada_gallery}
              background=""
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              img5={img5}
              img6={img6}
              img7={img7}
              img8={img8}
            />
          </>
        );
      })}
    </>
  );
}

export default Jalsaksharta;
