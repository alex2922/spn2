import React from 'react';
import "../Styles/samplepage.scss"
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// images
import slide_image_1 from '../photos/coach_factory/img_1.webp';
import slide_image_2 from '../photos/coach_factory/img_2.webp';
import slide_image_3 from '../photos/coach_factory/img_3.webp';
import slide_image_4 from '../photos/coach_factory/img_4.jpeg';
import slide_image_5 from '../photos/coach_factory/img_5.webp';
import slide_image_6 from '../photos/coach_factory/img_6.webp';
import slide_image_7 from '../photos/coach_factory/img_7.webp';

function SamplePage(props) {
    return (
        <>

            {props.data.map((data) => {
                return (
                    <>
                    <div className="sample-page-parent bg-img-cover parent">
                       
                            <div className="sample-page-cont ">
                                <div className="sample-page-right  ">

                                <h2>
                                        {data. Marathwada_coach_factory_heading}
                                    </h2>
                                   
                                </div> 
                              <div className="sample-page-left bg-img-contain">

                              </div>
                                
                          
                               
                            </div>
                       
                    </div>
                    <div className="sample-counters parent">
                        <div className="sample-logo bg-img-contain">
                              <div className="counter-overlay">
                              <div className="counters-content cont">
                              <div className="counter-tag">
                              <h3>SCOPE OF THE PROJECT</h3>
                              </div>
                              <div className="counters-numbers">
                                <div className="counter-list">
                                    <div className="counting">
                                    <h1> <CountUp end={600} /> <span> + </span> </h1>
                                    </div>
                                    <p>Crore Investment Exceeding</p>
                                </div>
                                <div className="counter-list">
                               <div className="counting">
                               <h1> <CountUp end={300} /> <span> + </span> </h1>
                               </div>
                                    <p>Acres</p>
                                </div>
                                <div className="counter-list">
                               <div className="counting">
                               <h1> <CountUp end={45000} /> </h1>
                               </div>
                                    <p>Direct And Indirect Jobs</p>
                                </div>
                              </div>
                              </div>
                              </div>
                        </div>
                    </div>
<div className="sample-page-parent bg-img-cover parent">
                       
                            <div className="sample-page-cont second-sample ">
                                <div className="sample-page-right second-sample-page  ">

                                <h2>
                                        {data.Marathwada_heading2}
                                    </h2>
                                   
                                </div> 
                              <div className="sample-page-left bg-img-contain">

                              </div>
                                
                          
                               
                            </div>
                       
                    </div>
                    <div className="container parent">
      <h1 className="heading">SNAPSHOTS</h1>
     <div className="container">
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
        <Tilt> <div className="slider1  bg-img-cover" ></div></Tilt>
        </SwiperSlide>
        <SwiperSlide>
        <Tilt>
        <div className="slider1 slide2  bg-img-cover" ></div>
        </Tilt>
        </SwiperSlide>
        <SwiperSlide>
        <Tilt>
        <div className="slider1 slide3 bg-img-cover" ></div>
        </Tilt>
        
        </SwiperSlide>
        <SwiperSlide>
        <Tilt>
        <div className="slider1 slide4 bg-img-cover" ></div>
        </Tilt>
        </SwiperSlide>
        <SwiperSlide>
       <Tilt>
       <div className="slider1 slide5  bg-img-cover" ></div>
       </Tilt>
        </SwiperSlide>
        <SwiperSlide>
       <Tilt>
       <div className="slider1 slide6 bg-img-cover" ></div>
       </Tilt>
        </SwiperSlide>
        <SwiperSlide>
       <Tilt>
       <div className="slider1 slide7 bg-img-cover" ></div>
       </Tilt>
        </SwiperSlide>

        
      </Swiper>
     </div>
    </div>
                  </>
                )
            })}

        </>
    )
}

export default SamplePage
