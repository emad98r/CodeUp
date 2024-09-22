import "./poster.scss";
import Title from "../../Components/Titles/Title";
import { Link } from "react-router-dom";
import poster1 from "../../assets/imgs/Posters/poster1.jpg";
import poster2 from "../../assets/imgs/Posters/poster2.jpg";
import poster3 from "../../assets/imgs/Posters/poster3.png";
import poster4 from "../../assets/imgs/Posters/poster4.png";
function Poster() {
  return (
    <div className="posters">
      <div className="container">
        <Title title="منشورات" />
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
        <div className="poster-wrapper">
          <img src={poster1} alt="" />
          <img src={poster2} alt="" />
          <img src={poster3} alt="" />
          <img src={poster4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Poster;
