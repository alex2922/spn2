import React from 'react'
import CountUp from 'react-countup';
import "../Styles/counter.scss";


function Counter(props) {
  return (
    <>
    {props.data.map((data) => {
        return (
    <>
    <div className="counter-parent parent" style={{background:`${props.background}`}}>
        <div className="conter-container cont">
            
            <div className="count-box">

                    {props.textnum1 &&<div className="counter-box">
                        <span className='counter-number'><CountUp end={(props.textnum1)} />{props.plus}</span>
                        <span className='counter-text'>{props.text1}</span>
                    </div>}
                    {props.textnum2 &&<div className="counter-box">
                        <span className='counter-number'><CountUp end={(props.textnum2)} />{props.plus2}</span>
                        <span className='counter-text'>{props.text2}</span>
                    </div>}
                    {props.textnum3 &&<div className="counter-box">
                        <span className='counter-number'><CountUp end={(props.textnum3)} />{props.plus3}</span>
                        <span className='counter-text'>{props.text3}</span>
                    </div>}
                    </div>
                   
                    <div className="count-box2">

                    {props.textnum4 &&<div className="counter-box">
                        <span className='counter-number'><CountUp end={(props.textnum4)} />{props.plus4}</span>
                        <span className='counter-text'>{props.text4}</span>
                    </div>}
                    {props.textnum5 &&<div className="counter-box">
                        <span className='counter-number'><CountUp end={(props.textnum5)} />{props.plus5}</span>
                        <span className='counter-text'>{props.text5}</span>
                    </div>}
                    {props.textnum6 &&<div className="counter-box">
                        <span className='counter-number'><CountUp end={(props.textnum6)} />{props.plus6}</span>
                        <span className='counter-text'>{props.text6}</span>
                    </div>}
                
                </div>
                
                </div>
                </div>

                </>
        );
      })}
    
    
    
    
    </>
  )
}

export default Counter