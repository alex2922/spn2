import React from 'react'
import "../Styles/togglebtn.scss"

const Togglebtn = (props) => {
    return (
        <div className='toolbox-wrapper'>
            <button onClick={props.toggle}>
                <div className='img bg-img-contain' > </div>
            </button>
        </div>
    )
}

export default Togglebtn