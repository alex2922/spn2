import React from 'react'
import "../Styles/jalsaksharta.scss";
import img1 from "../photos/drushti/g1img.webp"
import img from "../photos/drushti/g1img.webp"
import Imageswiper from "../components/Imageswiper";
import TwoColSec from "../components/TwoColSec";
import Counter from '../components/Counter';

function Jalsaksharta(props) {
  return (
    <>
    {props.data.map((data) => {
        return (

    <>

      <div className="header-bg-box">

      </div>
      <div className="ss parent  bg-img-contain"   >
        <div className="overlay bg-img-cover"></div>

        <div className="ss-cont cont">
          <div className="ss-left">
            <div className="img-box bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >

            </div>
          </div>
          <div className="ss-right">

            <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
             {data.Jal_saksharta_heading}
            </h2>
            <div className="line" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"></div>

            <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
              {data.Jal_saksharta_para}
            </p>

          </div>
        </div>
      </div>

  <div className="counter-parent2">    
  <Counter data={props.data}
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

      <TwoColSec
              padding="50px 0px 50px 0px"
              background="#efefef"
              row="row-reverse"
              bg={img}
              subheading={data.Jal_heading2}
              subdescription={data.Jal_para2}
              btn=""
            />




      <Imageswiper
        titlegallery={data.Marathwada_gallery}
        background= ""
        img1={img1}
        img2={img1}
        img3={img1}
        img4={img1}
        img5={img1}

      />

</>
        );
      })}



    </>
  )
}

export default Jalsaksharta