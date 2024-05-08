import React from "react";
import TwoColSec from "../components/TwoColSec";
import latur1_img from "../photos/about/latur1.webp";
import latur2_img from "../photos/about/latur2.webp";
import "../Styles/about.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import List from "../components/List";
import { Helmet } from 'react-helmet';


function About(props) {
  return (
    <>
    <Helmet>
        <title>Get to Know Sambhaji Patil Nilangekar: Dive Deeper into Our Political Leadership - About Us</title>
        <meta name="keywords" content="Sambhaji Patil Nilangekar,Zilla Parishad,Municipal Corporation,Indraprastha Jalbhumi Abhiyan, Water Literacy Rally, Janjagar Samvad, Maharojgar Melawa, and Health Camps" />
        <meta name="description" content="Sambhaji Patil Nilangekar leads Zilla Parishad and Municipal Corporation projects, along with initiatives like Indraprastha Jalbhumi Abhiyan. Join us for Water Literacy Rally, Janjagar Samvad, Maharojgar Melawa, and Health Camps." />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/about"/>
      </Helmet>
      {props.data.map((data) => {
        return (
          <>
            <div className="about parent">
              <TwoColSec
                padding="50px 0px 2px 0px"
                background=""
                row=""
                bg={latur1_img}
                subheading="शब्द तुमच्या शंभूचा.."
                subdescription="प्रिय मतदार बंधू आणि भगिनींनो,"
                subdescription1="नमस्कार!"
                subdescription2="
                गेल्या दोन दशकांपासून मी सक्रिय राजकारणामध्ये कार्यरत आहे. यादरम्यान राज्याचे माजी मुख्यमंत्री कर्मवीर डॉ. शिवाजीराव पाटील निलंगेकर साहेब, माजी आमदार स्व. दिलीपरावजी पाटील निलंगेकर साहेब आणि आपल्या लातूरच्या माजी खासदार श्रीमती रूपाताई (अक्का) पाटील निलंगेकर यांचे जनसेवेचे व्रत हाती घेऊन कार्य करण्याचा प्रयत्न मी प्रत्येक क्षणी करत आहे. आपल्या निलंग्यासह लातूर जिल्ह्यातील प्रत्येक नागरिकांचा विकास झाला पाहिजे, हे ध्येय मनाशी घेऊन अनेक विकासाभिमुख कामे आपण केली आहेत, तसेच अजूनही विविध भागांमध्ये ही कामे अविरत सुरु आहेत. त्यात आपले भरभरून प्रेम मिळत गेले आणि एक सामान्य कार्यकर्ता म्हणून सुरु झालेला माझा प्रवास राज्याच्या कॅबिनेट मंत्रिपदापर्यंत पोहोचला. अन् महाराष्ट्राच्या विकासासाठी मला माझे होईल तितके योगदान देता आले. हे सर्व काही शक्य झाले ते फक्त आणि फक्त आपल्या सर्वांच्या प्रेमा आणि आशीर्वादामुळेच!
                
या आशीर्वादाची जाणीव आणि तुमच्या भक्कम आधारामुळेच मला आपल्या लातूर जिल्ह्यासाठी देखील खूप काही करता आले. मग त्यामध्ये देशातला पहिल्या मेट्रो कोच व चौथ्या रेल्वे कोच कारखान्याचे काम असेल,  लातूर व धाराशिव जिल्ह्यांतील दुष्काळ कायमचा संपविणारा वॉटर ग्रीड प्रकल्प असेल, जिल्ह्यामधील रस्त्यांचा विकास असो किंवा लातूरमध्ये सुपर स्पेशॅलिटी हॉस्पिटल मंजूर करण्याचे काम असेल या सारखी काही ठळक मोठी कामे आपल्या जिल्ह्यासाठी करता आली. आपल्या आशीर्वादाने लातूर जिल्ह्याच्या इतिहासामध्ये पहिल्यांदाच जिल्हा परिषद आणि महापालिकेवर आपली सत्ता आली. जनसेवेची संधी आपण दिलीत आणि त्या संधीचे सोने करण्याचे प्रयत्न माझ्यासह भाजपाच्या प्रत्येक कार्यकर्त्याने केले. त्यावेळी लातूर जि.प. ने घेतलेल्या निर्णयांचे संपूर्ण देशभरात कौतुक झाले. एक आदर्श जि.प. म्हणून देशात आपल्या लातूर जि.प. नाव झाले. हे सर्व आपल्या सहकार्यामुळेच झाले..

                 

                "
                btn=""
              />
              <TwoColSec
                padding="0px 0px 50px 0px"
                background=""
                row="row-reverse"
                bg={latur2_img}
                subheading=""
                subdescription="आज आपला जिल्हा विकासाच्या मार्गावर अत्यंत वेगाने पुढे जाऊ लागला आहे. अशावेळी आपल्या सर्वांच्या सहकार्याने हा विकासाचा वेग आपल्याला कायम ठेवायचा आहे. जिल्ह्यातील पाणी, उद्योग, रोजगार, आरोग्य, तरुणांचे विस्थापन असे अनेक प्रश्न आपल्या समोर आहेत. ते सोडविण्यासाठी आपण इंद्रप्रस्थ जलभूमी अभियान, जल साक्षरता रॅली, जनजागर संवाद, महारोजगार मेळावा, आरोग्य शिबिरे अशी अनेक सेवाकार्य राबवली आहेत. शासन दरबारी देखील वारंवार प्रयत्न करून जिल्ह्यासाठी विविध विकास कामे मंजूर करून घेत आहोत. परंतु या कार्याला गती देण्यासाठी आपल्या आशीर्वादाची गरज आहे. निलंगा असेल, लातूर शहर असेल वा लातूर जिल्हा असेल, सर्वांनी मला सुरुवातीपासूनच पोटच्या लेकरासारखं सांभाळलं आहे. त्यामुळे मी आपल्या सर्वांना वचन देतो की, आता हा संभाजी या जिल्ह्यातील जनतेच्या डोळ्यांमध्ये कधीही अश्रू येऊ देणार नाही. तुम्ही मला आजपर्यंत सांभाळले आहे. यापुढे तुमची काळजी घेणे ही माझी जबाबदारी! तुमच्या सुखदु:खांत मी तुमच्यासोबत असेन. मी निळकंठेश्वराच्या साक्षीनं वचन देतो, जोपर्यंत माझ्या शरीरात प्राण आहे, तोपर्यंत तुमची सेवा करीत राहीन. शिक्षण, रोजगार, आरोग्य व पाण्यासह सर्वच पातळ्यांवर लातूरच्या विकासाला नवी दिशा देणार आहे. यासाठी मला आपली खंबीर साथ व भरभरून आशीर्वाद हवे आहेत. मला खात्री आहे की, तुम्ही माझ्या सोबत आहात आणि आपल्या सर्वांच्या साथीने एक विकसित लातूर आपण घडवू…! "

                subdescription1="धन्यवाद!"
                heading4="आपला"
                heading5="मा. संभाजीराव पाटील निलंगेकर "
                heading6="माजी पालकमंत्री, लातूर"
                btn=""
              />
            </div>

            {/* ...........//Personality Section//............. */}

            <div className="personality parent">
              <div className="personality-container cont">
                <h2 data-aos="fade-up" data-aos-delay="0" data-aos-duration="900">{data.About_personality}</h2>
                <p data-aos="fade-up" data-aos-delay="0" data-aos-duration="1000">{data.About_personality_para}</p>

                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 6500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-1 bg-img-cover" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card1}
                          para={data.About_card1_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-2 bg-img-cover" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1700"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card2}
                          para={data.About_card2_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-3 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card3}
                          para={data.About_card3_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-4 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card4}
                          para={data.About_card4_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-5 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card5}
                          para={data.About_card5_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-6 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card6}
                          para={data.About_card6_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-7 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card7}
                          para={data.About_card7_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-8 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card8}
                          para={data.About_card8_para}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="personality_twobox_cont">
                      <div className="personality_img personality_img-9 bg-img-cover" data-aos="fade-up" data-aos-delay="0" data-aos-duration="1200"></div>
                      <div className="personality_content">
                        <List
                          title={data.About_card9}
                          para={data.About_card9_para}
                        />
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

export default About;
