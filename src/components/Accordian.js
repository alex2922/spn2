import React, { useState , useEffect } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import "../Styles/accordian.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function According(props) {
  const [accd, setAccd] = useState(false);


  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div className="accordian">
      <div className="topbar" onClick={() => setAccd(!accd)}>
        <h3>
         {props.que}
        </h3>
        <span>
          <BiSolidDownArrow />
        </span>
      </div>

      {accd &&   (
        <div className="bottombar"  data-aos="fade-up"  >
          <p>
           {props.ans}
          </p>
        </div>
      )}
    </div>
  );
}

export default According;
