import React, { useEffect, useState } from "react";
import "../Styles/herosection.scss";
import { Swiper, SwiperSlide } from "swiper/react";



import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";


function HeroSection(props) {


  const [slide1 ,setslide1] = useState(true);
  const [slide2 ,setslide2] = useState(false);
  const [slide3 ,setslide3] = useState(false);
  const [slide4 ,setslide4] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slide1) {
        setslide1(false);
        setslide2(true);
      } else if (slide2) {
        setslide2(false);
        setslide3(true);
      } else {
        setslide3(false);
        setslide1(true);
      }
    }, 6000); 

    return () => clearInterval(interval); 
  }, [slide1, slide2, slide3]);





  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <div className="hero-parent">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <div className="swiper-parent">
                  {slide1  && 
                  <SwiperSlide>
                   
                    <div className="slide1 slide-img">
                    <h1>One Voice, One Purpose, Endless Progress</h1>
                    <div className="overlay"></div>
                      <div className="slide-main bg-img-contain"  >

                       

                      </div>
                     
                    </div>
                  </SwiperSlide>
}
                  {slide2 && 
                  <SwiperSlide>
                   
                    <div className="slide1 slide-img">
                    <h1>One Voice, One Purpose, Endless Progress</h1>
                    <div className="overlay"></div>
                      <div className="slide-main bg-img-contain"  >

                       

                      </div>
                     
                    </div>
                  </SwiperSlide>
}
                  {slide3 && 
                  <SwiperSlide>
                   
                    <div className="slide1 slide-img">
                    <h1>One Voice, One Purpose, Endless Progress</h1>
                    <div className="overlay"></div>
                      <div className="slide-main bg-img-contain"  >

                       

                      </div>
                     
                    </div>
                  </SwiperSlide>
}
                 
                </div>
              </Swiper>
            </div>

           
          </>
        );
      })}
    </>
  );
}

export default HeroSection;
