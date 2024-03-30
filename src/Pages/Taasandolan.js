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
import { Helmet } from 'react-helmet';


function Taasandolan(props) {
  return (
    <>
    <Helmet>
        <title>72 Taas Andolan</title>
        <meta name="keywords" content="Jal Saksharta Rally, Jal Saksharta Rally in Latur, Sambhaji Patil, Sambhaji Patil Nilangekar, Godavari River, Bhandhardara Dam" />
        <meta name="description" content="Learn about the Jal Saksharta Rally in Latur, championed by Sambhaji Patil Nilangekar, promoting water awareness and conservation. Explore how this initiative educates communities and emphasizes key water sources like the Godavari River and Bhandhardara Dam. Join the effort for sustainable water management in the region." />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/Jal_Saksharta_Rally" />
      </Helmet>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta porro molestiae id cupiditate sequi veritatis
                    doloremque vitae! Quo sapiente molestias iure rem ipsum cum
                    minus debitis maxime quas explicabo accusamus beatae, magni
                    nostrum tempora iusto. Officia, itaque asperiores distinctio
                    maxime aperiam rerum illo nesciunt saepe mollitia id. Iusto,
                    accusamus beatae!
                  </p>
                </div>
              </div>
            </div>

            <Counter data={props.data} background="#efefef" />

      <Counter data={props.data}
      background="#efefef"
      
      />

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
              subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              subdescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              porro molestiae id cupiditate sequi veritatis doloremque vitae!
              Quo sapiente molestias iure rem ipsum cum minus debitis maxime
              quas explicabo accusamus beatae, magni nostrum tempora iusto.
              Officia, itaque asperiores distinctio maxime aperiam rerum illo
              nesciunt saepe mollitia id. Iusto, accusamus beatae!"
              btn=""
            />




      

      <Imageswiper
            titlegallery="gallery"
            background= ""
              img1={img1}
              img2={img1}
              img3={img1}
              img4={img1}
              img5={img1}
              
            />

            <Imageswiper
              titlegallery="gallery"
              background="#efefef"
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
