import "./adds.scss";
import Title from "../Titles/Title";
import Button from "../Buttons/Button";

function Adds() {
  const AddsData = [
    { id: 1, title: "دومين واستضافة", price: "100$ / السنة" },
    {
      id: 2,
      title: " تصميم الشعار/العلامة التجارية  احترافي 	 ",
      price: "100$",
    },
    { id: 3, title: "تصميم الشعار/العلامة التجارية  بيسط	 ", price: "50$" },
    { id: 4, title: "الصيانة المستمرة	", price: "50$/ شهر" },
  ];

  return (
    <div className="adds">
      <div className="container">
        <Title title="الخدمات الاضافية" />
        <div className="adds-wrapper">
          {AddsData.map((item) => (
            <div key={item.id} className="adds-item">
              <h3>{item.title}</h3>
              {/* <p>{item.price}</p> */}
              <Button text="اختيار" link="/OrderYourPlan" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adds;
