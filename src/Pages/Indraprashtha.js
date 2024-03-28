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
                    Indraprasth_Jalbhumi_Abhiyan sit amet consectetur
                    adipisicing elit.
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

            <TwoColSec
              padding="50px 0px 50px 0px"
              background=""
              row="row-reverse"
              bg={img}
              subheading=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. "
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

export default Indraprashtha;
