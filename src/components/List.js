import React from 'react'
import '../Styles/List.scss'
import { CiCircleCheck } from "react-icons/ci";


function List({ li1, li2, li3, li4, li5, li6, li7, li8, li9, li10, title, title1, title2, title3, title4, para, para2 }) {
    return (
        <>
            <div className="lists">
                <div className="list-container cont">
                    <ul>
                        <div className="para">
                            {title && <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">{title}</h2>}
                            {title1 && <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">{title1}</h2>}
                            {title2 && <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">{title2}</h2>}
                            {title3 && <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">{title3}</h2>}
                            {title4 && <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">{title4}</h2>}
                            {para && <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">{para}</p>}
                            {para2 && <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">{para2}</p>}
                            <div className="list">
                            </div>
                            {li1 && <li><span className="icon"><CiCircleCheck /></span>{li1}</li>}
                            {li2 && <li><span className="icon"><CiCircleCheck /></span>{li2}</li>}
                            {li3 && <li><span className="icon"><CiCircleCheck /></span>{li3}</li>}
                            {li4 && <li><span className="icon"><CiCircleCheck /></span>{li4}</li>}
                            {li5 && <li><span className="icon"><CiCircleCheck /></span>{li5}</li>}
                            {li6 && <li><span className="icon"><CiCircleCheck /></span>{li6}</li>}
                            {li7 && <li><span className="icon"><CiCircleCheck /></span>{li7}</li>}
                            {li8 && <li><span className="icon"><CiCircleCheck /></span>{li8}</li>}
                            {li9 && <li><span className="icon"><CiCircleCheck /></span>{li9}</li>}
                            {li10 && <li><span className="icon"><CiCircleCheck /></span>{li10}</li>}

                        </div>

                    </ul>

                </div>


            </div>






        </>
    )
}

export default List