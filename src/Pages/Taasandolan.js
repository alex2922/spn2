import React, { useState, useEffect } from "react";
import "../Styles/taasandolan.scss";
import img1 from "../photos/72_taas_andolan/044A7463.webp";
import img2 from "../photos/72_taas_andolan/044A7344.webp";
import img3 from "../photos/72_taas_andolan/044A7347.webp";
import img4 from "../photos/72_taas_andolan/044A7349.webp";
import img5 from "../photos/72_taas_andolan/044A7351.webp";
import img6 from "../photos/72_taas_andolan/044A7363.webp";
import img7 from "../photos/72_taas_andolan/044A7368.webp";
import img8 from "../photos/72_taas_andolan/044A7379.webp";
import Imageswiper from "../components/Imageswiper";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Counter from "../components/Counter";
import { Helmet } from "react-helmet";
import { ImClock2 } from "react-icons/im";
import taas from "../assets/72_Taas_Andolan.webm";
import { MdCurrencyRupee } from "react-icons/md";

function Taasandolan(props) {
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
        <title>72 Taas Andolan</title>
        <meta
          name="keywords"
          content="Nagtirthwadi village,Ek Diwas Chulband,72 Hours Fasting,food boycott"
        />
        <meta
          name="description"
          content="Discover the resilience of Nagtirthwadi village through Ek Diwas Chulband, a 72-hour fasting challenge, and a compelling food boycott movement. Join their inspiring journey as they defy odds, showcasing unity and determination in the face of hardship."
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/72_Taas_Andolan"
        />
      </Helmet>
      {props.data.map((data) => {
        return (
          <>
            <div className="jal-parent taas-parent parent bg-img-cover">
              <div className="jal-overlay"></div>
              <h2 className="jal-headding1">{data.Taas_saksharta_heading}</h2>
            </div>

            <Counter data={props.data} background="#efefef" />

            <Counter data={props.data} background="#efefef" />

            <div className="counter-parent4">
              <h3>{data.Marathwada_counter}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                icon1={<ImClock2 />}
                textnum1="72"
                plus=""
                text1={data.Taas_countup1}
                textnum2="10000"
                icon2={<MdCurrencyRupee />}
                plus2=""
                text2={data.Taas_countup2}
                textnum3="1000"
                plus3="+"
                icon3={<MdCurrencyRupee />}
                text3={data.Taas_countup3}
                // textnum4=""
                // plus4=""
                // text4=""
              />
            </div>

            <div className="jal2-parent tass-mobile-img parent bg-img-cover">
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
                <source src={taas} type="video/webm" />
              </video>
              <div className="jal2-content">
                {/* <div className="jal2-left">  */}
                <h2 className="jal-headding">{data.Taas_saksharta_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Taas_saksharta_para.slice(0, 300)}{" "}
                      {func2 && (
                        <p>{data.Taas_saksharta_para.slice(300, 1000)}</p>
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
                  <p>{data.Taas_saksharta_para}</p>
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

export default Taasandolan;
