import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../Styles/testimonial.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Testiamonial(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <div className="htestamonial-parent parent">
              <div className="htestamonial-container cont">
                <h2 className="testamonial-heading">Testimonial</h2>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={2}
                  centeredSlides={false}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    350: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },

                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                  }}
                  navigation={true}
                  modules={[Autoplay, Navigation]}
                  className="tmySwiper"
                >
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-1  bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading1}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title1}
                        </h5>
                        <p>{data.Testimonial_para1}</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-2 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading2}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title2}
                        </h5>
                        <p>{data.Testimonial_para2}</p>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left ">
                        <div className="tcard-img tcard-img-3 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading3}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title3}
                        </h5>
                        <p>{data.Testimonial_para3}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-4 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading4}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title4}
                        </h5>
                        <p>{data.Testimonial_para4}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-5 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading5}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title5}
                        </h5>
                        <p>{data.Testimonial_para5}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-6 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading6}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title6}
                        </h5>
                        <p>{data.Testimonial_para6}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-7 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading7}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title7}
                        </h5>
                        <p>{data.Testimonial_para7}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-8 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading8}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title8}
                        </h5>
                        <p>{data.Testimonial_para8}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-9 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading9}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title9}
                        </h5>
                        <p>{data.Testimonial_para9}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="tcard">
                      <div className="tcard-left">
                        <div className="tcard-img tcard-img-10 bg-img-cover"></div>
                      </div>
                      <div className="tcard-right">
                        <h3 className="theadding">
                          {data.Testimonial_heading10}
                        </h3>
                        <h5 className="tsubheadding">
                          {data.Testimonial_title10}
                        </h5>
                        <p>{data.Testimonial_para10}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Testiamonial;
