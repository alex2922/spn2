import React from "react";
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
import posterImage from "../photos/Jal_saksharta_rally/09.webp"

function Jalsaksharta(props) {

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
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

            <div className="counter-parent2">
              <h3>{data.Marathwada_counter}</h3>
              <Counter
                data={props.data}
                background=""
                textnum1="8"
                plus=""
                text1={data.Jal_countup1}
                textnum2="10"
                plus2=""
                text2={data.Jal_countup2}
                textnum3="1287"
                plus3=""
                text3={data.Jal_countup3}
                textnum4="354"
                plus4=""
                text4={data.Jal_countup4}
                textnum5="482"
                plus5=""
                text5={data.Jal_countup5}
                textnum6="1025"
                plus6=""
                text6={data.Jal_countup6}
              />
            </div>

            <div className="jal2-parent parent bg-img-cover">
              {/* <div className="jal2-overlay"></div> */}
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
                <h2 className="jal-headding">
                  FAIR WATER – THIS IS OUR DEMAND!
                </h2>
                <p className="jal2-text">
                  During this 'Jal Saksharta Rally', the state government was
                  demanded to urgently take three immediate, medium-term, and
                  long-term solutions to permanently solve the problem of water
                  scarcity in Latur. In which, three measures were suggested -
                  maintenance of retention ponds in the district, increasing the
                  storage capacity of the dams that supply water to the
                  districts by removing the silt and out of the 167 TMC of water
                  supplied to Marathwada, Latur's share of water should be
                  distributed to the source and not brought through the
                  diverting water from the Godavari River to the Manjra valley
                  via the Bhandardara route. So that everyone will get water in
                  a fair and healthy manner without any water dispute in any
                  district.
                </p>
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
