import React from "react";
import img from "../photos/haritLatur/g1img.webp";
import TwoColSec from "../components/TwoColSec";
import Imageswiper from "../components/Imageswiper";
import "../Styles/harit.scss";
import img1 from "../photos/haritLatur/s1img.webp";
import img2 from "../photos/haritLatur/s2img.webp";
import img3 from "../photos/haritLatur/s3img.webp";
import img4 from "../photos/haritLatur/s4img.webp";
import img5 from "../photos/haritLatur/s5img.webp";
import img6 from "../photos/haritLatur/s6img.webp";
import img7 from "../photos/haritLatur/s7img.webp";
import img8 from "../photos/haritLatur/s8img.webp";
import img9 from "../photos/haritLatur/s9img.webp";

function Harit_latur(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <TwoColSec
              padding="100px 0px 50px 0px"
              background=""
              row=""
              bg={img}
              subheading={data.Harit_heading}
              subdescription={data.Harit_para}
              btn=""
            />

            {/* -------------------------------------- */}
            <div className="harit parent">
              <div className="harit-container cont">
                <div className="harit-content">
                  <p>{data.Harit_para2}</p>
                  <h2>{data.Harit_title}</h2>
                </div>
                <div className="harit-img bg-img-cover"></div>
              </div>
            </div>

            <Imageswiper
             titlegallery={data.harit_gallery_title}
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

export default Harit_latur;
