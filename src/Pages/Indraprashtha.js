import React from "react";
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



function Indraprashtha(props) {
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
              <h2 className="indraprasta-headding1">Indraprasth Jalbhumi Abhiyan</h2>
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

            <TwoColSec
              padding="50px 0px 50px 0px"
              background="#efefef"
              row="row-reverse"
              bg={img}
              subheading={data.Indraprashtha11_heading2}
              subdescription={data.Indraprashtha11_para2}
              btn=""
            />

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
