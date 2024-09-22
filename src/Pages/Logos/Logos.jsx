import "./logos.scss";
import Title from "../../Components/Titles/Title";
import { Link } from "react-router-dom";
import logo1 from "../../assets/imgs/logos mockups/1.png";
import logo2 from "../../assets/imgs/logos mockups/2.png";
import logo3 from "../../assets/imgs/logos mockups/3.png";
import logo4 from "../../assets/imgs/logos mockups/4.png";
function Logos() {
  return (
    <div className="logos">
      <div className="container">
        <Title title="شعارات" />
        <div className="types-wrapper">
          <Link className="types" to="/Websites">
            المواقع الالكترونية
          </Link>
          <Link className="types" to="/logos">
            شعارات
          </Link>
          <Link className="types" to="/Posters">
            منشورات
          </Link>
        </div>
        <hr />
        <div className="logos">
          <img src={logo1} alt="" />
          <hr />
          <img src={logo2} alt="" />
          <hr />
          <img src={logo3} alt="" />
          <hr />
          <img src={logo4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Logos;
