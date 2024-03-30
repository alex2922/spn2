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
import img from "../photos/drushti/g1img.webp";
import Imageswiper from "../components/Imageswiper";
import Para from "../components/Para";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";

function Taasandolan(props) {
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
                    {data.Taas_saksharta_heading}
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
                    {data.Taas_saksharta_para}
                  </p>
                </div>
              </div>
            </div>

            <Counter data={props.data} background="#efefef" />

      <Counter data={props.data}
      background="#efefef"
      
      />

<div className="counter-parent4">
<h3>{data.Marathwada_counter}</h3>
<Counter data={props.data}
  background=""
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

      <TwoColSec
              padding="50px 0px 50px 0px"
              background="#efefef"
              row="row-reverse"
              bg={img}
              subheading={data.Taas_heading2}
              subdescription={data.Taas_para2}
              btn=""
            />




      

      <Imageswiper
            titlegallery={data.Marathwada_gallery}
            background= ""
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
