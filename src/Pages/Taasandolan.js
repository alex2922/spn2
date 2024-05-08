import React from "react";
import "../Styles/taasandolan.scss";
import img1 from "../photos/72_taas_andolan/044A7463.webp";
import img2 from "../photos/72_taas_andolan/044A7344.webp";
import img3 from "../photos/72_taas_andolan/044A7347.webp";
import img4 from "../photos/72_taas_andolan/044A7349.webp";
import img5 from "../photos/72_taas_andolan/044A7351.webp";
import img6 from "../photos/72_taas_andolan/044A7363.webp";
import img7 from "../photos/72_taas_andolan/044A7368.webp";
import img8 from "../photos/72_taas_andolan/044A7379.webp";
import img from "../photos/drushti/72_Taas_Andolan.webp";
import Imageswiper from "../components/Imageswiper";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Para from "../components/Para";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Helmet } from "react-helmet";
import { ImClock2 } from "react-icons/im";
import Video_Section from "../components/Video_Section";

function Taasandolan(props) {
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
              <h2 className="jal-headding1">72 Taas Andolan</h2>
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
                textnum2=""
                plus2=""
                text2={data.Taas_countup2}
                textnum3=""
                plus3=""
                text3={data.Taas_countup3}
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
              subheading={data.Taas_heading2}
              subdescription={data.Taas_para2}
              btn=""
            /> */}
            <Video_Section />

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
