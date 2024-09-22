import Title from "../../Components/Titles/Title";
import "./section2.scss";
import pic from "../../assets/icons/Coder.svg";
function Section2() {
  return (
    <div className="section2">
      <div className="container">
        <img src={pic} alt="" />
        <p>
          <Title title="تعرف اكثر علينا" />
          نحن فريق من المبدعين والمطورين المتخصصين في تصميم وتطوير المواقع
          الإلكترونية الحديثة. نلتزم بتقديم حلول مبتكرة وفعالة تتوافق مع أحدث
          التقنيات لتلبية احتياجات عملائنا. نركز على فهم رؤيتك وأهدافك لتحويلها
          إلى تجربة رقمية متكاملة تعزز حضورك الإلكتروني وتساعدك على تحقيق
          النجاح. سواء كنت تحتاج إلى تصميم واجهات مستخدم جذابة أو تطوير أنظمة
          متقدمة، نحن هنا لنبني لك منصات قوية ومستدامة.
        </p>
      </div>
    </div>
  );
}

export default Section2;
