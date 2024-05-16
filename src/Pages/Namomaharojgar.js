import React, { useState, useEffect } from "react";
import "../Styles/namomaharojgar.scss";
import img1 from "../photos/Atal_Mahaarogya_Shibir/359A2242.webp";
import img2 from "../photos/Atal_Mahaarogya_Shibir/359A7720.webp";
import img3 from "../photos/Atal_Mahaarogya_Shibir/359A7724.webp";
import img4 from "../photos/Atal_Mahaarogya_Shibir/359A7739.webp";
import img5 from "../photos/Atal_Mahaarogya_Shibir/IMG_7558.JPG";
import img6 from "../photos/Atal_Mahaarogya_Shibir/IMG_7717.JPG";
import img from "../photos/drushti/Namo_maharojgar_melava.webp";
import Imageswiper from "../components/Imageswiper";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from "react-helmet";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { RiBuildingFill } from "react-icons/ri";
import { IoIosSchool } from "react-icons/io";
import { GiFactory } from "react-icons/gi";
import namo from "../assets/Namo_Maharojgar_Melava.webm";

function Namomaharojgar(props) {
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const [responsive, setResponsive] = useState(false);
  const [func2, setfunc2] = useState(false);

  return (
    <>
      <Helmet>
        <title>Namo Maharojgar Melava</title>
        <meta
          name="keywords"
          content="Namo Maharojgar,Career Guidance Melawa,Mahila Tannariketan Maidan,Latur,Mahamela,Marathwada"
        />
        <meta
          name="description"
          content="Attend the Namo Maharojgar Career Guidance Melawa in Latur, Marathwada, at Mahila Tannariketan Maidan. Discover career options and get support tailored for women. It's your chance to find opportunities and empower your future!"
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/Namo_Maharojgar_Melava"
        />
      </Helmet>
      {props.data.map((data) => {
        return (
          <>
            <div className="namo-parent parent bg-img-cover">
              <div className="namo-overlay"></div>
              <h2 className="namo-headding1">Namo Maharojgar Melava</h2>
            </div>
            <div className="counter-parent1">
              <h3>{data.Marathwada_counter}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                icon1={<GiFactory />}
                textnum1="240"
                plus="+"
                icon2={<IoIosSchool />}
                text1={data.Namo_countup1}
                textnum2="7000"
                plus2="+"
                text2={data.Namo_countup2}
                textnum3=""
                plus3=""
                text3={data.Namo_countup3}
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
              subheading={data.Namo_heading2}
              subdescription={data.Namo_para2}
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
                <source src={namo} type="video/webm" />
              </video>
              <div className="jal2-content">
                {/* <div className="jal2-left">  */}
                <h2 className="jal-headding">{data.Namo_saksharta_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Namo_saksharta_para.slice(0, 300)}{" "}
                      {func2 && (
                       
          
                       <p>{data.Namo_saksharta_para.slice(300, 1000)}</p>
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
                  <p>{data.Namo_saksharta_para}</p>
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
            />
          </>
        );
      })}
    </>
  );
}

export default Namomaharojgar;
