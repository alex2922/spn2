import React from 'react'
import CountUp from 'react-countup';
import "../Styles/counter.scss";

function Counter(props) {
  return (
    <>
    <div className="counter-parent parent" style={{background:`${props.background}`}}>
        <div className="conter-container cont">
            <h2>lorem ipsum</h2>
            <div className="count-box">

                    <div className="counter-box">
                        <span className='counter-number'><CountUp end={8000} />+</span>
                        <span className='counter-text'>Completed Cases</span>
                    </div>
                    <div className="counter-box">
                        <span className='counter-number'><CountUp end={4000} />+</span>
                        <span className='counter-text'>Completed Cases</span>
                    </div>
                    <div className="counter-box">
                        <span className='counter-number'><CountUp end={6000} />+</span>
                        <span className='counter-text'>Completed Cases</span>
                    </div>
                </div>
                </div>
                </div>
    
    
    
    
    </>
  )
}

export default Counter