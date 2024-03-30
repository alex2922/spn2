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
import img from "../photos/drushti/g1img.webp";
import Imageswiper from "../components/Imageswiper";

import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";

function Indraprashtha(props) {
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
                    {data.Indraprashtha11_saksharta_heading}
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
                    {data.Indraprashtha11_saksharta_para}
                  </p>
                </div>
              </div>
            </div>

            <div className="counter-parent1">
    <h3>{data.Marathwada_counter}</h3>
<Counter data={props.data}
  background=""
  textnum1="945"
  plus="+"
  text1={data.Indraprashtha11_countup1}
  textnum2="2800"
  plus2="+"
  text2={data.Indraprashtha11_countup2}
  textnum3="8"
  plus3=""
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
