import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import img from "../photos/success/imgS.jpg";
import img1 from "../photos/success/g1img.webp";
import img2 from "../photos/success/g2img.webp";
import img3 from "../photos/success/g3img.webp";
import img4 from "../photos/success/g4img.webp";
import img5 from "../photos/success/g5img.webp";
import img6 from "../photos/success/g6img.webp";
import img7 from "../photos/success/g7img.webp";
import img8 from "../photos/success/g8img.webp";
import img9 from "../photos/success/g9img.webp";
import TwoColSec from "../components/TwoColSec";
import List from "../components/List";

import Imageswiper from "../components/Imageswiper";
import "../Styles/success.scss";
import According from "../components/Accordian";

function Success(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <div className="test123">
              <TwoColSec
                padding="100px 0px 50px 0px"
                background=""
                row=""
                bg={img}
                subheading={data.Success_story_heading}
                subdescription={data.Success_story_heading_para}
                btn=""
              />
            </div>
            {/* ...........//Personality Section//............. */}

            <div className="success parent">
              <div className="success-container cont">
                <h2>{data.About_personality}</h2>
                {/* <p>{data.About_personality_para}</p> */}
                <div className="gap"></div>

                
                <According que={data.Success_story_card1} ans={data.Success_story_card1_para} />
                <According que={data.Success_story_card2} ans={data.Success_story_card2_para} />
                <According que={data.Success_story_card3} ans={data.Success_story_card3_para} />
                <According que={data.Success_story_card4} ans={data.Success_story_card4_para} />
                <According que={data.Success_story_card5} ans={data.Success_story_card5_para} />
                <According que={data.Success_story_card6} ans={data.Success_story_card6_para} />
                <According que={data.Success_story_card7} ans={data.Success_story_card7_para} />
                <According que={data.Success_story_card8} ans={data.Success_story_card8_para} />
       
     
           
              </div>
            </div>

            <Imageswiper
              titlegallery={data.success_page_title}
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              img5={img5}
              img6={img6}
              img7={img7}
              img8={img8}
              img9={img9}
            />
          </>
        );
      })}
    </>
  );
}

export default Success;
