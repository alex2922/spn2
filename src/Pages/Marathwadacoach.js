import React,{useState,useEffect} from "react";
import "../Styles/marathwadacoach.scss";
import Imageswiper from "../components/Imageswiper";
import img3 from "../photos/coach_factory/img_3.webp";
import img4 from "../photos/coach_factory/img_4.jpeg";
import img5 from "../photos/coach_factory/img_5.webp";
import img6 from "../photos/coach_factory/img_7.webp";
import img7 from "../photos/coach_factory/img_8.webp";
import img8 from "../photos/coach_factory/img_9.webp";
import { Helmet } from "react-helmet";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { HiCurrencyRupee } from "react-icons/hi2";
import Counter from "../components/Counter";
import { FaComputer } from "react-icons/fa6";
import { BsTabletLandscapeFill } from "react-icons/bs";
import factory from "../assets/Marathwada_Coach_Factory.webm"

function Marathwadacoach(props) {

  // const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

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
        <title>MARATHWADA RAILWAY COACH FACTORY</title>
        <meta
          name="keywords"
          content="Marathwada Railway Coach Factory,Marathwada,Railway,Indian Railway,Railway Bogie,Vande Bharat Express trains"
        />
        <meta
          name="description"
          content="Explore Marathwada Railway Coach Factory, a hub for Indian Railway innovation. Learn how it supports projects like Vande Bharat Express trains, shaping modern rail travel."
        />
        <link
          rel="canonical"
          href="https://sambhajipatilnilangekar.in/Marathwada_Coach_Factory"
        />
      </Helmet>

      {props.data.map((data) => {
        return (
          <>
             <div className="factory-parent parent bg-img-cover">
              <div className="factory-overlay"></div>
              <h2 className="factory-headding1">{data.Marathwada_coach_factory_heading}</h2>
            </div>

            <div className="counter-parent1">
              <h3>{data.Marathwada_counter}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                textnum1="600"
                plus="+"
                icon1={<HiCurrencyRupee />}
                text1={data.Marathwada_countup11}
                textnum2="300"
                plus2="+"
                icon2={<BsTabletLandscapeFill />}
                text2={data.Marathwada_countup12}
                textnum3="45000"
                plus3=""
                icon3={<FaComputer />}
                text3={data.Marathwada_countup13}
                textnum4=""
                plus4=""
                text4=""
              />
            </div>

            <div className="jal2-parent factory-mobile-img parent bg-img-cover">
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
                <source src={factory} type="video/webm" />
              </video>
              <div className="jal2-content">
                {/* <div className="jal2-left">  */}
                <h2 className="jal-headding">{data.Marathwada_coach_factory_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Marathwada_coach_factory_para.slice(0, 300)}{" "}
                      {func2 && (
                        <p>{data.Marathwada_coach_factory_para.slice(300, 1000)}</p>
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
                  <p>{data.Marathwada_coach_factory_para}</p>
                )}
              </div>
              {/* <div className="jal2-right"></div> */}
              {/* </div> */}
            </div>

            <Imageswiper
              titlegallery={data.Marathwada_gallery}
              background=""
              //   img1={img1}
              //   img2={img2}
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

export default Marathwadacoach;
