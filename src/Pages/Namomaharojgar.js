import React from "react";
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
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { RiBuildingFill } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { GiFactory } from "react-icons/gi";

function Namomaharojgar(props) {
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
            <div className="header-bg-box"></div>
            <div className="ss parent  bg-img-contain">
              <div className="overlay bg-img-cover"></div>

              <div className="ss-cont cont">
                <div className="ss-left">
                  <div
                    className="img-box-maharojgar bg-img-cover"
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
                    {data.Namo_saksharta_heading}
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
                    {data.Namo_saksharta_para}
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
                icon1={<GiFactory />}
                textnum1="240"
                plus="+"
                icon2={<FaComputer />}
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
            <TwoColSec
              padding="50px 0px 50px 0px"
              background="#efefef"
              row="row-reverse"
              bg={img}
              subheading={data.Namo_heading2}
              subdescription={data.Namo_para2}
              btn=""
            />

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
