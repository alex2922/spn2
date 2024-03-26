import React, { useState, useEffect } from "react";
import "../Styles/Header.scss";
import { Link } from "react-router-dom";
import logo from "../assets/header/BJP_election_symbol.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Menu, Dropdown } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../Styles/accordian.scss"
import AOS from "aos";
import "aos/dist/aos.css";




function Header(props) {


  const [scrollClass, setScrollClass] = useState('');



  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      // You can adjust the scroll position as needed
      if (window.scrollY > 0) {
        setScrollClass(true);
      } else {
        setScrollClass(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])
  const [navopen, setNavOpen] = useState(false);

  const [accordian, setaccordian] = useState(false);

  const handleMenuClick = () => {
    setNavOpen(false);
  };

  const menu = (
    <>
      {props.data.map((data) => {
        return (
          <>
            <Menu className="dropdown" onClick={handleMenuClick}>
              <Menu.Item key="1">
                <Link to="/Marathwada_Coach_Factory">Marathwada Coach Factory</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/Jal_Saksharta_Rally">Jal Saksharta Rally</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/72_Taas_Andolan">72 Taas Andolan</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/Latur_Vachava_Andolan">Latur Vachava Andolan</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/Atal_Maharogya_Shibir">Atal Maharogya Shibir</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/Namo_Maharojgar_Melava">Namo Maharojgar Melava, Latur 2023</Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/Indraprasth_Jalbhumi_Abhiyan">Indraprasth Jalbhumi Abhiyan</Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/Akka_Foundation">Akka Foundation</Link>
              </Menu.Item>
            </Menu>
          </>
        );
      })}
    </>
  );

  return (
    <>
      {props.data.map((data) => {
        return (
          <>
            <div className={scrollClass ? " parent header scrolled" : "parent header"} data-aos-duration="1000" data-aos-easing="ease-out" data-aos="fade-down"   >
              <div className="header-cont cont">
                <Link to="/" className="logo">
                  <img src={logo} alt="logo" />
                  <h2>{data.Header_logo}</h2>
                </Link>

                <div className="links">
                  <Link to="/">{data.Header_home}</Link>
                  <Link to="/about">{data.Header_about}</Link>
                  <Dropdown overlay={menu} placement="bottomCenter">
                    <Link to="/success" className="ant-dropdown-link">
                      {data.Header_story}{" "}
                      <span className="header-arrow">
                        <RiArrowDropDownLine />
                      </span>
                    </Link>
                  </Dropdown>
                  <Link to="/gallery">{data.Header_Gallery}</Link>
                  <Link to="/blog">{data.Header_Blog}</Link>
                  <Link to="/contact" className="btn">
                    {data.Header_contact}
                  </Link>
                </div>

                <div className="menu" onClick={() => setNavOpen(true)}>
                  <HiMenuAlt3 />
                </div>
              </div>
              <div className="line"></div>
            </div>
            <div className={navopen ? "mob-nav navopen" : "mob-nav "}>
              <div
                className="close"
                onClick={() => {
                  setNavOpen(false);
                  setaccordian(false);
                }}
              >
                <IoCloseCircleOutline />
              </div>
              <div className="moblinks">
                <Link to="/" onClick={() => setNavOpen(false)}>
                  {data.Header_home}
                </Link>
                <Link to="/about" onClick={() => setNavOpen(false)}>
                  {data.Header_about}
                </Link>




                <div className="toprow" onClick={() => setaccordian(!accordian)}>
                  <Link to="/success"> {data.Header_story}+</Link>
                </div>
                {accordian &&
                  <div className="dropdown-mob">
                    < Link to="/success" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_story}</Link>
                    <Link to="/Marathwada" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_marathwada}</Link>
                    <Link to="/Jalsaksharta" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_Jal}</Link>
                    <Link to="/Taas" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_Taas}</Link>
                    <Link to="/Latur" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_Latur}</Link>
                    <Link to="/atal" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_Atal}</Link>
                    <Link to="/Namo" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_Namo_maharojgar}</Link>
                    <Link to="/indra" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_indraprashtha}</Link>
                    <Link to="/akka" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_Namo_maharojgar}</Link>
                  </div>

                }



                <Link to="/gallery" onClick={() => setNavOpen(false)}>
                  {data.Header_Gallery}
                </Link>
                <Link to="/blog" onClick={() => setNavOpen(false)}>
                  {data.Header_Blog}
                </Link>
                <Link to="/contact" onClick={() => setNavOpen(false)}>
                  {data.Header_contact}
                </Link>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Header;