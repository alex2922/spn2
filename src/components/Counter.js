import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoCalendarNumber } from "react-icons/io5";
import { GiVillage } from "react-icons/gi";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaHouse } from "react-icons/fa6";
import { BsEnvelopePaperFill } from "react-icons/bs";
import { ImOffice } from "react-icons/im";
import CountUp from "react-countup";
import "../Styles/counter.scss";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { PiRoadHorizonFill } from "react-icons/pi";

function Counter(props) {
 


  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            {/* <div className="counter-parent parent" style={{background:`${props.background}`}}>
        <div className="conter-container cont"> */}

            <div className="counter-box-container">
              <div className="count-box">
                {props.textnum1 && (
                  <div className="counter-box">
                    <div className="icon">
                     { props.icon1}
                    </div>

                    <div className="count-text">
                      <h2 className="counter-number">
                        <CountUp end={props.textnum1} />
                        {props.plus}
                      </h2>
                      {props.text1.length > 7 ? (
                        <p className="counter-text"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={props.text1}
                        data-tooltip-place="top"
                        >
                          {props.text1.slice(0, 7)}...
                        </p>
                      ) : (
                        <p>{props.text1}</p>
                      )}
                    </div>
                  </div>
                )}
                {props.textnum2 && (
                  <div className="counter-box">
                    <div className="icon">
                    { props.icon2}
                    </div>

                    <div className="count-text">
                      <h2 className="counter-number">
                        <CountUp end={props.textnum2} />
                        {props.plus2}
                      </h2>
                      {props.text2.length > 7 ? (
                        <p className="counter-text"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={props.text2}
                        data-tooltip-place="top"
                        >
                          {props.text2.slice(0, 7)}...
                        </p>
                      ) : (
                        <p>{props.text2}</p>
                      )}
                    </div>
                  </div>
                )}
                {props.textnum3 && (
                  <div className="counter-box">
                    <div className="icon">
                    { props.icon3}
                    </div>
                    <div className="count-text">
                      <h2 className="counter-number">
                        <CountUp end={props.textnum3} />
                        {props.plus3}
                      </h2>
                      {props.text3.length > 7 ? (
                        <p className="counter-text"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={props.text3}
                        data-tooltip-place="top"
                        >
                          {props.text3.slice(0, 7)}...
                        </p>
                      ) : (
                        <p>{props.text3}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="count-box">
                {props.textnum4 && (
                  <div className="counter-box">
                    <div className="icon">
                    { props.icon4}
                    </div>
                    <div className="count-text">
                      <h2 className="counter-number">
                        <CountUp end={props.textnum4} />
                        {props.plus4}
                      </h2>
                      {props.text4.length > 7 ? (
                        <p className="counter-text"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={props.text4}
                        data-tooltip-place="top"
                        >
                          {props.text4.slice(0, 7)}...
                        </p>
                      ) : (
                        <p>{props.text4}</p>
                      )}
                    </div>
                  </div>
                )}
                {props.textnum5 && (
                  <div className="counter-box">
                    <div className="icon">
                    { props.icon5}
                    </div>
                    <div className="count-text">
                      <h2 className="counter-number">
                        <CountUp end={props.textnum5} />
                        {props.plus5}
                      </h2>
                      <Tooltip id="my-tooltip" />
                      {props.text5.length > 7 ? (
                        <p className="counter-text"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={props.text5}
                        data-tooltip-place="top"
                        >
                          {props.text5.slice(0, 7)}...
                        </p>
                      ) : (
                        <p>{props.text5}</p>
                      )}
                    </div>
                  </div>
                )}
                {props.textnum6 && (
                  <div className="counter-box">
                    <div className="icon">
                    { props.icon6}
                    </div>
                    <div className="count-text">
                      <h2 className="counter-number">
                        <CountUp end={props.textnum6} />
                        {props.plus6}
                      </h2>
                      <Tooltip id="my-tooltip" />
                      {props.text6.length > 7 ? (
                        <p className="counter-text"
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={props.text6}
                        data-tooltip-place="top"
                        >
                          {props.text6.slice(0, 7)}...
                        </p>
                      ) : (
                        <p>{props.text6}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* </div>
                </div> */}
          </>
        );
      })}
    </>
  );
}

export default Counter;
