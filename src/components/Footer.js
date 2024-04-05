import React from "react";
import { Link } from "react-router-dom";
import "../Styles/footer.scss";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

function Footer(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
   
    <>
    {props.data.map((data) =>{
   return(
    <>
      <div className="footer-parent parent">
        <div className="footer-container cont">
          <div className="footer-content-box">
            <div className="footer-pages">
              <p>{data.Footer_quick}</p>
              <Link  to="/"  onClick={scrollToTop}>{data. Footer_home}</Link>
              <Link  to="/about"  onClick={scrollToTop}>{data. Footer_about}</Link>
              <Link  to="/gallery"  onClick={scrollToTop}>{data.Header_Gallery}</Link>
              <Link  to="/blog"  onClick={scrollToTop}>{data.Footer_blog}</Link>
              <Link  to="/contact"  onClick={scrollToTop}>{data. Footer_contact}</Link>
              <span className=".span"></span>
            </div>
            <div className="footer-services">
              <p>{data.Footer_story}</p>
              <Link to="/Marathwada_Coach_Factory" onClick={scrollToTop}>{data.Header_marathwada}</Link>
              <Link to="/Jal_Saksharta_Rally" onClick={scrollToTop}>{data.Header_Jal}</Link>
              <Link to="/72_Taas_Andolan" onClick={scrollToTop}>{data.Header_Taas}</Link>
              <Link to="/Jan_Jagar_Sanvad" onClick={scrollToTop}>{data.Header_Latur}</Link>
              <Link to="/Atal_Maharogya_Shibir" onClick={scrollToTop}>{data.Header_Atal}</Link>
              <Link to="/Namo_Maharojgar_Melava" onClick={scrollToTop}>{data.Header_Namo_maharojgar}</Link>
              <Link to="/Indraprasth_Jalbhumi_Abhiyan" onClick={scrollToTop}>{data.Header_indraprashtha}</Link>
              <Link to="/Akka_Foundation" onClick={scrollToTop}>{data.Header_akka}</Link>
              <span className=".span"></span>
            </div>
            <div className="footer-legal">
              <p>{data.Footer_Legal}</p>
              <Link to="/privacy_policy"  onClick={scrollToTop}>{data.Footer_privacy}</Link>
              <Link to="/cookies"  onClick={scrollToTop}>{data.Footer_cookies}</Link>
              <span className=".span"></span>
            </div>

            <div className="footer-contact">
              <div className="footer-phone">
                <span className="footer-icon-glass">
                  <FaPhone />
                </span>
                <span className="footer-icon">
                  <a href="tel:+918379832555" target="_blank">
                    (+91)8379832555
                  </a>
                </span>
              </div>

              <div className="footer-mail">
                <span className="footer-icon-glass">
                  <IoMdMail />
                </span>
                <span className="footer-icon">
                  <a href="mailto:contact@sambhajipatilnilangekar.com" target="_blank">
                  contact@sambhajipatilnilangekar.com
                  </a>
                </span>
              </div>

              <div className="footer-add">
                
                <span className="footer-icon-glass">
                  <FaLocationDot />
                </span>
                <span className="footer-icon">
                  <a
                    href="https://maps.app.goo.gl/rVCV74nxzLH3QawaA"
                    target="_blank"
                  >
                   {data.Footer_address}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom-content-box parent">
        <div className="footer-bottom-content-box-container cont">
          <div className="footer-social-icons ">
            <span>
              <a href="https://www.facebook.com/SambhajiPatilBJP" target="_blank">
                <FaFacebookF />
              </a>
            </span>

            <span>
              <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fsambhajipatil77" target="_blank">
                <FaXTwitter />
              </a>
            </span>
            <span>
              <a
                href="https://www.youtube.com/SambhajiPatilNilangekar77"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/sambhajipatil77/-" target="_blank">
                <FaInstagram />
              </a>
            </span>
          </div>
          <div className="footer-copyright">
          <p className="bottom-text">
            
              Copyright©2024.All Rights Reserved | <a href="/">Sambhaji Patil Nilangekar</a> | Designed &
              Developed by{" "}
              <Link to="https://diwise.uk/" target="_blank">
                Diwise
              </Link>
            </p>
          </div>
        </div>
      </div>
      </>
              );
            })}
    </>
  );
}

export default Footer;
