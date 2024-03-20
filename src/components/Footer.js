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
              <Link  to="/gallery"  onClick={scrollToTop}>{data. Footer_gallery}</Link>
              <Link  to="/blog"  onClick={scrollToTop}>{data.Footer_blog}</Link>
              <Link  to="/contact"  onClick={scrollToTop}>{data. Footer_contact}</Link>
              <span className=".span"></span>
            </div>
            <div className="footer-services">
              <p>{data.Footer_story}</p>
              <Link to="/samrudha" onClick={scrollToTop}>{data.Footer_samrudha}</Link>
              <Link to="/indraprashtha" onClick={scrollToTop}>{data.Footer_indraprashtha}</Link>
              <Link to="/harit" onClick={scrollToTop}>{data. Footer_harit}</Link>
              <Link to="/shivjayanti" onClick={scrollToTop}>{data.Footer_shiv}</Link>
              <Link to="/anandi" onClick={scrollToTop}>{data.Footer_anandi}</Link>
              <Link to="drushti" onClick={scrollToTop}>{data. Footer_election_drushti}</Link>
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
            
              Copyright©2024.All Rights Reserved | Sambhaji Patil Nilangekar | Designed &
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
