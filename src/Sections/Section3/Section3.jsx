import Title from "../../Components/Titles/Title";
import "./section3.scss";
import img from "../../assets/icons/secton 3.svg";

function Section3() {
  return (
    <div className="section3">
      <div className="container">
        <div className="services">
          <Title title="ماذا سنقدم لك ؟" />
          <ul>
            <li data-number="I">
              تصميم مواقع الكترونية
              <p>
                إنشاء مواقع ليست جذابة بصريًا فحسب ، ولكن ايضا فائقة السرعة تفتح
                بلمح البصر وفي نفس الوقت نوفر تجربة مستخدم سهلة
              </p>
            </li>
            <li data-number="II">
              تصميم سريع ومتجاوب
              <p>
                المواقع والمتاجر التي يتم تصميمها بواسطتنا متجاوبة مع مختلف
                الشاشات والأجهزة.
              </p>
            </li>
            <li data-number="III">
              اسعارنا تنافسية
              <p>
                الحصول على خدمات تصميم مواقع الويب/متاجر الكترونية متميزة بأسعار
                مقبولة في اليمن
              </p>
            </li>
            <li data-number="IV">
              سرعة التنفيذ
              <p>
                نقدم عملية تصميم سريعة وفعالة تضمن تحويل أفكارك إلى نموذج أولي
                لموقع الويب أو المتجر الإلكتروني أو تطبيق الجوال بأعلى مستويات
                الجودة
              </p>
            </li>
          </ul>
        </div>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Section3;
