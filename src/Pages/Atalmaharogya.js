import React, { useState, useEffect } from "react";
import "../Styles/atalmaharogya.scss";
import img1 from "../photos/Atal_Mahaarogya_Shibir/359A2242.webp";
import img2 from "../photos/Atal_Mahaarogya_Shibir/359A7720.webp";
import img3 from "../photos/Atal_Mahaarogya_Shibir/359A7724.webp";
import img4 from "../photos/Atal_Mahaarogya_Shibir/359A7739.webp";
import img5 from "../photos/Atal_Mahaarogya_Shibir/IMG_7558.JPG";
import img6 from "../photos/Atal_Mahaarogya_Shibir/IMG_7717.JPG";
import img7 from "../photos/Atal_Mahaarogya_Shibir/IMG_7736.JPG";
import img8 from "../photos/Atal_Mahaarogya_Shibir/359A2174.webp";
import img from "../photos/drushti/Atal_Maharogya_Shibir.webp";
import Imageswiper from "../components/Imageswiper";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from "react-helmet";
import { FaBed } from "react-icons/fa6";
import { FaUserDoctor } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import atal from "../assets/Atal_Maharogya_Shibir.webm";

function Atalmaharogya(props) {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const [responsive, setResponsive] = useState(false);
  const [func2, setfunc2] = useState(false);

  return (
    <>
      <Helmet>
        <title>Atal Maharogya Shibir</title>
        <meta
          name="keywords"
          content="Atal Maharogya Shibira,health camp,Asha volunteers,"
        />
        <meta
          name="description"
          content="Discover quality healthcare at the Atal Maharogya Shibira health camp, where Asha volunteers extend their dedicated support. Benefit from essential medical services and compassionate care, prioritizing the well-being of every individual."
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/Atal_Maharogya_Shibir"
        />
      </Helmet>
      <Helmet>
        <title>Atal Maharogya Shibir</title>
        <meta
          name="keywords"
          content="MLA Sambhaji Patil Nilangekar,State government-sponsored health camp,Atal Maharogya Shibira,October 1st to 7th, 2018,Free surgeries,
                      Medical treatments,Community health initiative,Medical assistance,Asha volunteers"
        />
        <meta
          name="description"
          content="MLA Sambhaji Patil Nilangekar led a state-sponsored health camp, Atal Maharogya Shibira, from October 1st to 7th, 2018. Providing free surgeries and medical treatments, with support from Asha volunteers, it was a vital community health initiative."
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/Atal_Maharogya_Shibir"
        />
      </Helmet>
      {props.data.map((data) => {
        return (
          <>
            <div className="jal-parent atal-parent parent bg-img-cover">
              <div className="atal-overlay"></div>
              <h2 className="atal-headding1">{data.Atal_saksharta_heading}</h2>
            </div>

            <div className="counter-parent1">
              <h3>{data.Marathwada_counter}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                icon1={<FaBed />}
                textnum1="1"
                plus="+"
                text1={data.Atal_countup1}
                textnum2="7400"
                plus2="+"
                icon2={<FaBriefcaseMedical />}
                text2={data.Atal_countup2}
                textnum3="45000"
                plus3=""
                icon3={<FaUserDoctor />}
                text3={data.Atal_countup3}
                textnum4=""
                plus4=""
                text4=""
              />
            </div>

            {/* <TwoColSec
              padding="50px 0px 50px 0px"
              background="#efefef"
              row="row-reverse"
              bg={img}
              subheading={data.Atal_heading2}
              subdescription={data.Atal_para2}
              btn=""
            /> */}

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
                <source src={atal} type="video/webm" />
              </video>
              <div className="jal2-content">
                {/* <div className="jal2-left">  */}
                <h2 className="jal-headding">{data.Atal_saksharta_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Atal_saksharta_para.slice(0, 300)}{" "}
                      {func2 && (
                        <p>{data.Atal_saksharta_para.slice(300, 1000)}</p>
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
                  <p>{data.Atal_saksharta_para}</p>
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

export default Atalmaharogya;
