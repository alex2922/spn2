import React from 'react'
import '../Styles/paragraph.scss';

function Para(props) {
    return (


        <div className="para-parent parent" style={{ background: `${props.background}` }}>
            <div className="para-container cont">
                <h2>{props.paraheadding}</h2>
                <p>{props.para}</p>



            </div>
        </div>



    )
}

export default Para