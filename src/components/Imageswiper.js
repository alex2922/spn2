import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../Styles/imageswiper.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Imageswiper(props) {
    return (

        <>
            <div className="imageswiper-parent parent">
                <div className="imageswiper-conatiner cont">
                    <h2 className='titles'>{props.titlegallery}</h2>

                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        centeredSlides={false}
                        breakpoints={{

                            350: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },

                            640: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 0,
                            },
                            910: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            1200: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {props.img1 && <SwiperSlide>
                            <div className="img-card-parent">
                                <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img1})`}}></div>
                            </div>

                        </SwiperSlide>}
                        {props.img2 && <SwiperSlide>
                            <div className="img-card-parent">
                                <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img2})`}}></div>
                            </div>
                        </SwiperSlide>}
                        {props.img3 && <SwiperSlide>
                            <div className="img-card-parent">
                                <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img3})`}}></div>
                            </div>

                        </SwiperSlide>}
                        {props.img4 && <SwiperSlide>
                            <div className="img-card-parent">
                                <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img4})`}}></div>
                            </div>


                        </SwiperSlide>}
                        {props.img5 && <SwiperSlide>
                            <div className="img-card-parent">
                                <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img5})`}}></div>
                            </div>

                        </SwiperSlide>

                        }
                        {props.img6 && <SwiperSlide>  <div className="img-card-parent">
                            <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img6})`}}></div>
                        </div>
                        </SwiperSlide>}
                        {props.img7 && <SwiperSlide>  <div className="img-card-parent">
                            <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img7})`}}></div>
                        </div>
                        </SwiperSlide>}
                        {props.img8 && <SwiperSlide>  <div className="img-card-parent">
                            <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img8})`}}></div>
                        </div>
                        </SwiperSlide>}
                        {props.img9 && <SwiperSlide>  <div className="img-card-parent">
                            <div className="card-img bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000" style={{background:`url(${props.img9})`}}></div>
                        </div>
                        </SwiperSlide>}
                    </Swiper>

                </div>
            </div>
        </>

    )
}

export default Imageswiper