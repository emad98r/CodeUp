import "./header.scss";
import video from "../../assets/videos/bg2.mp4";
import logo from "../../assets/icons/logo.svg";
import mouse from "../../assets/icons/mouse.gif";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setIsLoaded(true);
  }, []);

  const navigate = useNavigate();
  const handleClicked = (path) => {
    navigate(path);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 750) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <div
        className="large-header"
        style={{ visibility: isScrolled ? "hidden" : "visible" }}
      >
        <video
          className="header-vid"
          src={video}
          loop
          muted
          preload="auto"
          autoPlay
          playsInline
        />
        <div className="info">
          <img className={isLoaded ? "fade-in" : ""} src={logo} alt="logo" />
          <h1>CodeUp Agency </h1>
          <nav>
            <ul>
              <li onClick={() => handleClicked("/Home")}>الرئيسية</li>
              <li onClick={() => handleClicked("/Aboutus")}>من نحن </li>
              <li onClick={() => handleClicked("/Portfolio")}>اعمالنا</li>
              <li onClick={() => handleClicked("/ContactUs")}>تواصل معنا</li>
            </ul>
          </nav>
          <img src={mouse} className="mouse" alt="" />
        </div>
      </div>
      <div
        className="small-header"
        style={{ visibility: isScrolled ? "visible" : "hidden" }}
      >
        <video
          className="header-vid"
          src={video}
          loop
          muted
          preload="auto"
          autoPlay
          playsInline
        />
        <div className="info">
          <div className="container">
            <img src={logo} alt="logo" className={isLoaded ? "fade-in" : ""} />
            <nav>
              <ul>
                <li onClick={() => handleClicked("/Home")}>الرئيسية</li>
                <li onClick={() => handleClicked("/Aboutus")}>من نحن </li>
                <li onClick={() => handleClicked("/Portfolio")}>اعمالنا</li>
                <li onClick={() => handleClicked("/ContactUs")}>تواصل معنا</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
