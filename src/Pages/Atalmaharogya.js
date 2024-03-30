import React from "react";
import "../Styles/atalmaharogya.scss";
import img1 from "../photos/Atal_Mahaarogya_Shibir/359A2242.webp";
import img2 from "../photos/Atal_Mahaarogya_Shibir/359A7720.webp";
import img3 from "../photos/Atal_Mahaarogya_Shibir/359A7724.webp";
import img4 from "../photos/Atal_Mahaarogya_Shibir/359A7739.webp";
import img5 from "../photos/Atal_Mahaarogya_Shibir/IMG_7558.JPG";
import img6 from "../photos/Atal_Mahaarogya_Shibir/IMG_7717.JPG";
import img7 from "../photos/Atal_Mahaarogya_Shibir/IMG_7736.JPG";
import img8 from "../photos/Atal_Mahaarogya_Shibir/359A2174.webp";
import img from "../photos/drushti/g1img.webp";
import Imageswiper from "../components/Imageswiper";

import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from "react-helmet";

function Atalmaharogya(props) {
  return (
    <>
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
                    {data.Atal_saksharta_heading}
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
                    {data.Atal_saksharta_para}
                  </p>
                </div>
              </div>
            </div>

            <div className="counter-parent1">
              <h3>{data.Marathwada_counter}</h3>
              <Counter
                data={props.data}
                background=""
                textnum1="1"
                plus="+"
                text1={data.Atal_countup1}
                textnum2="7400"
                plus2="+"
                text2={data.Atal_countup2}
                textnum3="45000"
                plus3=""
                text3={data.Atal_countup3}
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
              subheading={data.Atal_heading2}
              subdescription={data.Atal_para2}
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
