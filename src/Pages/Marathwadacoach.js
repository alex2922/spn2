import React from "react";
import "../Styles/marathwadacoach.scss";
import Imageswiper from "../components/Imageswiper";
import img1 from "../photos/coach_factory/img_1.webp";
import img2 from "../photos/coach_factory/img_2.webp";
import img3 from "../photos/coach_factory/img_3.webp";
import img4 from "../photos/coach_factory/img_4.jpeg";
import img5 from "../photos/coach_factory/img_5.webp";
import img6 from "../photos/coach_factory/img_7.webp";
import img7 from "../photos/coach_factory/img_8.webp";
import img8 from "../photos/coach_factory/img_9.webp";
import img from "../photos/drushti/g1img.webp";
import TwoColSec from "../components/TwoColSec";

import Counter from "../components/Counter";

function Marathwadacoach(props) {
  return (
    <>
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
                    {data.Marathwada_coach_factory_heading}
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
                    {data.Marathwada_coach_factory_para}
                  </p>
                </div>
              </div>
            </div>

            



  <div className="counter-parent1">
<Counter data={props.data}
  background=""
  textnum1="600"
  plus="+"
  text1={data.Marathwada_countup1}
  textnum2="300"
  plus2="+"
  text2={data.Marathwada_countup2}
  textnum3="45000"
  plus3=""
  text3={data.Marathwada_countup3}
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
              subheading={data.Marathwada_heading2}
              subdescription={data.Marathwada_para2}
              btn=""
            />

            <Imageswiper
              titlegallery={data.Marathwada_gallery}
              background=""
              img1={img1}
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
