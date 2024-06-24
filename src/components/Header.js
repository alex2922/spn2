import React, { useState, useEffect } from "react";
import "../Styles/Header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/header/BJP_election_symbol.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Menu, Dropdown } from "antd";
import { RiArrowDropDownLine } from "react-icons/ri";
import "../Styles/accordian.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Hamburger from "hamburger-react";
import { FaChevronDown } from "react-icons/fa";

function Header(props) {
  const [scrollClass, setScrollClass] = useState("");

  const location = useLocation();

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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

            <Menu.Item key="3">
                <Link to="/Marathwada_coach_factory">
                  {" "}
                  {data.Header_marathwada}{" "}
                </Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link
                  to="/72_Taas_Andolan"
                  className={
                    location.pathname === "/72_Taas_Andolan" ? "active" : ""
                  }
                >
                  {" "}
                  {data.Header_Taas}{" "}
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/Jal_Saksharta_Rally" activeClassName="active">
                  {data.Header_Jal}
                </Link>
              </Menu.Item>
              
              <Menu.Item key="4">
                <Link to="/Jan_Jagar_Sanvad">{data.Header_Latur}</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/Atal_Maharogya_Shibir">{data.Header_Atal}</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/Namo_Maharojgar_Melava">
                  {data.Header_Namo_maharojgar}
                </Link>
              </Menu.Item>
              <Menu.Item key="7">
                <Link to="/Indraprasth_Jalbhumi_Abhiyan">
                  {data.Header_indraprashtha}
                </Link>
              </Menu.Item>
              <Menu.Item key="8">
                <Link to="/Akka_Foundation">{data.Header_akka}</Link>
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
            <div
              className={
                scrollClass ? " parent header scrolled" : "parent header"
              }
            >
              <div className="header-cont cont">
                <Link to="/" className="logo">
                  <img src={logo} alt="logo" />
                  <h2>{data.Header_logo}</h2>
                </Link>

                <div className="links">
                  <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                  >
                    {data.Header_home}
                  </Link>
                  <Link
                    to="/about"
                    className={location.pathname === "/about" ? "active" : ""}
                  >
                    {data.Header_about}
                  </Link>
                  <Dropdown overlay={menu} placement="bottomCenter">
                    <Link className="ant-dropdown-link">
                      {data.Header_story}{" "}
                      <span className="header-arrow">
                        <RiArrowDropDownLine />
                      </span>
                    </Link>
                  </Dropdown>
                  <Link
                    to="/gallery"
                    className={location.pathname === "/gallery" ? "active" : ""}
                  >
                    {data.Header_Gallery}
                  </Link>
                  <Link
                    to="/blog"
                    className={location.pathname === "/blog" ? "active" : ""}
                  >
                    {data.Header_Blog}
                  </Link>
                  <Link to="/contact" className="btn">
                    {data.Header_contact}
                  </Link>
                </div>

                <div className="menu" onClick={() => setNavOpen(!navopen)}>
                  <Hamburger toggled={navopen} toggle={handleMenuClick} />
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

                <div
                  className="toprow"
                  onClick={() => setaccordian(!accordian)}
                >
                  <Link to=""> {data.Header_story} </Link> <span className="icon"> <FaChevronDown /></span>
                </div>
                {accordian && (
                  <div className="dropdown-mob">
                    {/* < Link to="" onClick={() => { setNavOpen(false); { setaccordian(false) } }}>{data.Header_story}</Link> */}
                   
                   
                    <Link
                      to="/72_Taas_Andolan"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                       {data.Header_Taas}
                    </Link>
                    <Link
                      to="/Jal_Saksharta_Rally"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                      {data.Header_Jal}
                    </Link>
                    <Link
                      to="/Marathwada_Coach_Factory"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                      {data.Header_marathwada}
                    </Link>
                    <Link
                      to="/Jan_Jagar_Sanvad"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                      {data.Header_Latur}
                    </Link>
                    <Link
                      to="/Atal_Maharogya_Shibir"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                      {data.Header_Atal}
                    </Link>
                    <Link
                      to="/Namo_Maharojgar_Melava"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                      {data.Header_Namo_maharojgar}
                    </Link>
                    <Link
                      to="/Indraprasth_Jalbhumi_Abhiyan"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                      {data.Header_indraprashtha}
                    </Link>
                    <Link
                      to="/Akka_Foundation"
                      onClick={() => {
                        setNavOpen(false);
                        {
                          setaccordian(false);
                        }
                      }}
                    >
                      {data.Header_akka}
                    </Link>
                  </div>
                )}

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
