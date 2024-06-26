import React from "react";
import "../Styles/twoColSec.scss";

import { Link } from "react-router-dom";
// import SecIndicator from './SecIndicator'

function twoColSec(props) {
  return (
    <div
      className="parent twoColSec"
      style={{ background: `${props.background}`
      // , padding: `${props.padding}`
     }}
    >
      <div
        className="twoColSec-cont cont"
        style={{ flexDirection: `${props.row}` }}
      >
        <div className="sec-left">
          <div
            className="img-box bg-img-cover"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            style={{ background: `url(${props.bg})` }}
          ></div>
        </div>
        <div className="sec-right">
          {/* {props.secind && <SecIndicator text={props.secind} />} */}

          <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            {props.subheading}
          </h2>
          <h2 className="sub-heading"  data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
            {props.subheading1}
          </h2>
          <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            {props.subdescription}
          </p>
          <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            {props.subdescription1}
          </p>
          <p data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            {props.subdescription2}
          </p>

          <h4 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">{props.heading4}</h4>
          <h4 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">{props.heading5}</h4>
          <h4 data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">{props.heading6}</h4>
         

          {props.children}
                                        
          {props.btn && (
            <Link
              to="/about"
              className="btn"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
            >
              {" "}
              {props.btn}{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default twoColSec;
