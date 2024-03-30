import React from "react";
import "../Styles/akkafoundation.scss";
import img1 from "../photos/Akka foundation/_MG_0997.webp";
import img2 from "../photos/Akka foundation/_MG_1752.webp";
import img3 from "../photos/Akka foundation/_MG_8510.webp";
import img4 from "../photos/Akka foundation/Sambhaji_Patil_Nilanhekar.webp";
import img5 from "../photos/Akka foundation/Sambhaji_bhaiyya_with_kids.webp";
import img from "../photos/drushti/g1img.webp";
import Imageswiper from "../components/Imageswiper";
import TwoColSec from "../components/TwoColSec";
import Counter from "../components/Counter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Akkafoundation(props) {
  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <div className="header-bg-box"></div>
            <div className="ss parent  bg-img-contain">
              <div className="overlay bg-img-cover"></div>

              <div className="ss-cont cont">
                <div className="ss-left">
                  <div
                    className="img-box bg-img-cover"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                  ></div>
                </div>
                <div className="ss-right">
                  <h2
                    data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                  >
                    Akka_Foundation sit amet consectetur adipisicing elit.
                  </h2>
                  <div
                    className="line"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                  ></div>

                  <p
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                  >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta porro molestiae id cupiditate sequi veritatis
                    doloremque vitae! Quo sapiente molestias iure rem ipsum cum
                    minus debitis maxime quas explicabo accusamus beatae, magni
                    nostrum tempora iusto. Officia, itaque asperiores distinctio
                    maxime aperiam rerum illo nesciunt saepe mollitia id. Iusto,
                    accusamus beatae!
                  </p>
                </div>
              </div>
            </div>

            <Counter data={props.data} background="#efefef" />

            <div className="akka-found-parent parent ">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 25000000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide className="slide-img slide-img1 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Heading</h3>
                      <p className="swiper-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                      </p>
                      <button className="btn swiper-btn">Read More</button>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img2 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Heading</h3>
                      <p className="swiper-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                      </p>
                      <button className="btn">Read More</button>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img3 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Heading</h3>
                      <p className="swiper-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                      </p>
                      <button className="btn">Read More</button>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img3 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Heading</h3>
                      <p className="swiper-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                      </p>
                      <button className="btn">Read More</button>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img3 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Heading</h3>
                      <p className="swiper-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                      </p>
                      <button className="btn">Read More</button>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img3 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Heading</h3>
                      <p className="swiper-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                      </p>
                      <button className="btn">Read More</button>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slide-img slide-img3 bg-img-cover">
                  <div className="overlay"></div>
                  <div className="swiper-section">
                    <div className="left-swiper">
                      <h3 className="swiper-heading">Heading</h3>
                      <p className="swiper-para">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Facilis odio quas sapiente ipsum explicabo minus
                        sit. Veritatis quis in quia iste earum blanditiis
                        debitis amet enim fugiat fugit, commodi magni.
                      </p>
                      <button className="btn">Read More</button>
                    </div>
                    <div className="right-swiper"></div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <TwoColSec
              padding="50px 0px 50px 0px"
              background=""
              row="row-reverse"
              bg={img}
              subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              subdescription="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              porro molestiae id cupiditate sequi veritatis doloremque vitae!
              Quo sapiente molestias iure rem ipsum cum minus debitis maxime
              quas explicabo accusamus beatae, magni nostrum tempora iusto.
              Officia, itaque asperiores distinctio maxime aperiam rerum illo
              nesciunt saepe mollitia id. Iusto, accusamus beatae!"
              btn=""
            />

            <Imageswiper
              titlegallery="gallery"
              background="#efefef"
              img1={img1}
              img2={img2}
              img3={img3}
              img4={img4}
              img5={img5}
            />
          </>
        );
      })}
    </>
  );
}

export default Akkafoundation;
