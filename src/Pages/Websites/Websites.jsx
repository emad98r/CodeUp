import { useState } from "react";
import "./websites.scss";
import ProjectsData from "../../Data/ProjectsData";
import Title from "../../Components/Titles/Title";
import { Link } from "react-router-dom";

function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All"
      ? ProjectsData
      : ProjectsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="websites">
      <div className="container">
        <Title title="المواقع الالكترونية" />
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
        {/* Filter buttons */}
        <div className="filter-buttons">
          <button onClick={() => setSelectedCategory("All")}>الكل</button>
          <button onClick={() => setSelectedCategory("portfolio")}>
            سيرة ذاتية
          </button>
          <button onClick={() => setSelectedCategory("technology")}>
            تكنولوجيا
          </button>
          <button onClick={() => setSelectedCategory("food")}>مطعم</button>
          <button onClick={() => setSelectedCategory("shop")}>متجر</button>
          <button onClick={() => setSelectedCategory("company")}>شركة</button>
          <button onClick={() => setSelectedCategory("Design")}>تصميم</button>
        </div>

        <div className="projects-wrapper">
          {filteredProjects.map((item) => (
            <a href={item.webLink} key={item.id} className="project">
              <img src={item.img} alt={item.proName} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
