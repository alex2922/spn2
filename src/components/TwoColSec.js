import React from 'react'
import "../Styles/twoColSec.scss";

import { Link } from 'react-router-dom'
// import SecIndicator from './SecIndicator'

function twoColSec(props) {
  return (
    <div className='parent twoColSec' style={{background:`${props.background}` ,padding: `${props.padding}`}}>
        <div className="twoColSec-cont cont"  style={{flexDirection:`${props.row}`}}>

            <div className="sec-left">
                <div className="img-box bg-img-cover" style={{background:`url(${props.bg})`}}></div>
            </div>
            <div className="sec-right">
               {/* {props.secind && <SecIndicator text={props.secind} />} */}

            <h2>{props.subheading}</h2>
            <p>
                {props.subdescription}
            </p>

            {props.children}

            {props.btn && <Link to="/about" className='btn'> {props.btn
            } </Link>}

            </div>

        </div>
      
    </div>
  )
}

export default twoColSec
