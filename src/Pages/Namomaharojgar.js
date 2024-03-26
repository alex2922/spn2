import React from 'react'
import "../Styles/namomaharojgar.scss";
import img1 from "../photos/drushti/g1img.webp"
import img2 from "../photos/drushti/g1img.webp"
import Imageswiper from "../components/Imageswiper";

function Namomaharojgar() {
  return (
    <>
    
    <div className="header-bg-box">

</div>
<div className="ss parent  bg-img-contain"   >
  <div className="overlay bg-img-cover"></div>

  <div className="ss-cont cont">
    <div className="ss-left">
      <div className="img-box bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" >

      </div>
    </div>
    <div className="ss-right">

      <h2 data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
      Namo_Maharojgar_Melava sit amet consectetur adipisicing elit.
      </h2>
      <div className="line" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"></div>

      <p data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
        porro molestiae id cupiditate sequi veritatis doloremque vitae!
        Quo sapiente molestias iure rem ipsum cum minus debitis maxime
        quas explicabo accusamus beatae, magni nostrum tempora iusto.
        Officia, itaque asperiores distinctio maxime aperiam rerum illo
        nesciunt saepe mollitia id. Iusto, accusamus beatae!
      </p>

    </div>
  </div>
</div>



<Imageswiper
  titlegallery="gallery"
  img1={img1}
  img2={img2}
  img3={img1}
  img4={img1}
  img5={img1}

/>

    
    
    </>
  )
}

export default Namomaharojgar