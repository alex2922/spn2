import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../Styles/scrolltop.scss";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    // When the user scrolls down 100 pixels, show the button
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`scroll-top-btn ${isVisible ? 'show' : 'hide'}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollTop;