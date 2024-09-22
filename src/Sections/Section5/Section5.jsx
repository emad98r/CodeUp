import "./section5.scss";
import Title from "../../Components/Titles/Title";
import img from "../../assets/icons/why us.svg";

function Section5() {
  return (
    <div className="section5">
      <div className="container">
        <Title title="لماذا نحن الخيار الأمثل؟" />
        <div className="list-wrapper">
          <ul>
            <li>
              <b>تجربة واسعة: </b>نمتلك خبرة كبيرة في تصميم وتطوير مواقع
              إلكترونية متخصصة ومبتكرة.
            </li>
            <li>
              <b>التزام بالجودة: </b> نلتزم بأعلى معايير الجودة لضمان حصولك على
              موقع يعمل بكفاءة وأمان
            </li>
            <li>
              <b>تجربة مستخدم سلسة: </b> نركز على تصميم وتطوير مواقع سهلة
              الاستخدام ومتجاوبة على جميع الأجهزة.
            </li>
            <li>
              <b>دعم متواصل:</b> نقدم خدمات صيانة ودعم فني مستمر لضمان استمرار
              أداء موقعك بأفضل حال.
            </li>
            <li>
              <b>اختبارات شاملة:</b> نحرص على إجراء اختبارات شاملة قبل إطلاق
              الموقع لضمان خلوه من الأخطاء وتحقيق الأداء الأمثل.
            </li>
          </ul>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section5;
