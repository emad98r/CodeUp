import "./footer.scss";
import logo from "../../assets/icons/logo.svg";
import {
  FaInstagram,
  FaSquareFacebook,
  FaSquareWhatsapp,
} from "react-icons/fa6";
import { MdEmail, MdDesignServices } from "react-icons/md";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className="container">
        <img src={logo} alt="logo" />
        <h2>CodeUp Agency</h2>
        <div className="S-M">
          <a href="https://www.instagram.com/codeup_agency/">
            <FaInstagram />
          </a>
          <a href="#">
            <FaSquareFacebook />
          </a>
          <a href="https://api.whatsapp.com/send/?phone=967782881372&text&type=phone_number&app_absent=0">
            <FaSquareWhatsapp />
          </a>
          <a href="mailto:codeup-yem@outlook.com">
            <MdEmail />
          </a>
          <Link to="/LogoForm">
            <MdDesignServices />
          </Link>
        </div>
        <p>جميع الحقوق محفوظة 2024 @ CodeUp Agency</p>
      </div>
    </footer>
  );
}

export default Footer;
