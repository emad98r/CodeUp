import "./section1.scss";
// import video from "../../assets/videos/My Video.mp4";

import Button from "../../Components/Buttons/Button";
import logo from "../../assets/icons/logo.svg";
function Section1() {
  return (
    <div className="section1">
      <div className="container">
        <div className="section1-info">
          <img className="logo" src={logo} alt="" />
          <h2>CodeUp Agency</h2>
          <h1>
            حيث الإبداع والتقنية يلتقيان لتصميم وتطوير مواقع إلكترونية مخصصة
            تعكس هويتك التجارية، وتفتح لك آفاقًا جديدة في العالم الرقمي.
          </h1>
          <Button text="بماذا نتميز" link="/Portfolio" />
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fill-opacity="1"
              d="M0,224L48,234.7C96,245,192,267,288,229.3C384,192,480,96,576,85.3C672,75,768,149,864,186.7C960,224,1056,224,1152,197.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg> */}
        </div>

        {/* <video src={video} loop muted preload="auto" autoPlay playsInline /> */}
      </div>
    </div>
  );
}

export default Section1;
