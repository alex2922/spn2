import React,{useState,useEffect} from "react";
import "../Styles/indraprashtha.scss";
import img1 from "../photos/indraprasta/img1.webp";
import img2 from "../photos/indraprasta/img10.webp";
import img3 from "../photos/indraprasta/img4.webp";
import img4 from "../photos/indraprasta/img5.webp";
import img5 from "../photos/indraprasta/img6.webp";
import img6 from "../photos/indraprasta/img7.webp";
import img7 from "../photos/indraprasta/img8.webp";
import img8 from "../photos/indraprasta/img9.webp";
import img from "../photos/drushti/Indraprasta_jalbhumi_abhiyan.webp";
import Imageswiper from "../components/Imageswiper";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from 'react-helmet';
import { GiVillage } from "react-icons/gi";
import { ImMeter2 } from "react-icons/im";
import { FaOilWell } from "react-icons/fa6";
import mapIcon from "../assets/MAP.webp"; 
import indraprasta from "../assets/Indraprasta.mp4";



function Indraprashtha(props) {




  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  const [responsive, setResponsive] = useState(false);
  const [func2, setfunc2] = useState(false);

  return (
    <>
    <Helmet>
        <title>Indraprasth Jalbhumi Abhiyan</title>
        <meta name="keywords" content="drought-free,water-abundant,Indraprastha Jalbhumi Mission,recharged 2800 borewells,Jala Yoddha" />
        <meta name="description" content="Explore the Indraprastha Jalbhumi Mission's initiative to combat drought with water abundance. Witness the success as 2800 borewells are recharged, transforming warriors into 'Jala Yoddha'. Join the movement towards a drought-free future." />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/Indraprasth_Jalbhumi_Abhiyan" />
      </Helmet>
      {props.data.map((data) => {
        return (
          <>
            <div className="indraprasta-parent parent bg-img-cover">
              <div className="indraprasta-overlay"></div>
              <h2 className="indraprasta-headding1">{data.Indraprashtha11_saksharta_heading}</h2>
            </div>

            <div className="counter-parent1">
              <h3>{data.Marathwada_counter}</h3>
              <Tooltip id="my-tooltip" />
              <Counter
                data={props.data}
                background=""
                // icon1={<GiVillage />}
                icon1={<img src={mapIcon} style={{height:"40px" ,weight:"40px"}} />}
                textnum1="945"
                plus="+"
                
                text1={data.Indraprashtha11_countup1}
                textnum2="2800"
                plus2="+"
                icon2={<FaOilWell />}
                text2={data.Indraprashtha11_countup2}
                textnum3="8"
                plus3=""
                icon3={<ImMeter2 />}
                text3={data.Indraprashtha11_countup3}
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
                <source src={indraprasta} type="video/webm" />
              </video>
              <div className="jal2-content">
                {/* <div className="jal2-left">  */}
                <h2 className="jal-headding">{data.Indraprashtha11_saksharta_heading}</h2>
                {responsive ? (
                  <p className="jal2-text">
                    <>
                      {data.Indraprashtha11_saksharta_para.slice(0, 300)}{" "}
                      {func2 && (
                        <p>{data.Indraprashtha11_saksharta_para.slice(300, 1000)}</p>
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
                  <p>{data.Indraprashtha11_saksharta_para}</p>
                )}
              </div>
              {/* <div className="jal2-right"></div> */}
              {/* </div> */}
            </div>

            <Imageswiper
              titlegallery="gallery"
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

export default Indraprashtha;
