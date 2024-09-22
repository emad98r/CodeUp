import "./section4.scss";
import Section4Data from "../../Data/Section4Data";
import Title from "../../Components/Titles/Title";
function Section4() {
  return (
    <div className="section4">
      <div className="container">
        <Title title="كيف نُحوّل أفكارك إلى واقع رقمي " />
        <div className="steps">
          {Section4Data.map((item) => (
            <div className="step" key={item.id}>
              <div className="img-wrapper" data-id={item.id}>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section4;
