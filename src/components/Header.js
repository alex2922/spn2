import React, { useState , useEffect } from "react";
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


  
useEffect(()=>{
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
},[])
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
                <Link to="/Marathwada">{data.Header_marathwada}</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/indraprashtha">{data.Header_indraprashtha}</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/harit">{data.Header_harit}</Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/shivjayanti">{data.Header_shiv}</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/anandi">{data.Header_anandi}</Link>
              </Menu.Item>
              <Menu.Item key="6">
                <Link to="/drushti">{data.Header_drushti}</Link>
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
            <div className={scrollClass ? " parent header scrolled" :"parent header"} data-aos-duration="1000"  data-aos-easing="ease-out" data-aos="fade-down"   >
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

            


          <div className="toprow" onClick={()=>setaccordian(!accordian)}>
      <Link  to="/success"> {data.Header_story}+</Link>  
    </div>
{accordian &&
    <div className="dropdown-mob">
   < Link to="/success" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>{data.Header_story}</Link> 
        <Link to="/samrudha" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>Samrudha Shetkari Abhiyan</Link>
        <Link to="/indraprashtha" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>Indraprastha Jalbhumi Mission</Link>
        <Link to="/harit" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>Harit Latur</Link>
        <Link to="/shivjayanti" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>Shivjayanti</Link>
        <Link to="/anandi" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>Project Anandi</Link>
        <Link to="/drushti" onClick={() => {setNavOpen(false);{setaccordian(false)}}}>Drushti Abhiyan</Link>
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