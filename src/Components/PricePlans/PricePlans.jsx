import Button from "../Buttons/Button";
import "./price-plans.scss";

function BasicPlan() {
  return (
    <div className="BasicPlan plan">
      <h2>الباقه الأساسية </h2>
      <p>المدونات الشخصية، ومواقع الشركات الصغيرة، ومعرض الاعمال</p>
      {/* <h1>149$</h1> */}
      <ul>
        <li>ما يصل إلى 5 صفحات</li>
        <li>قالب تصميم أساسي</li>
        <li>تصميم متجاوب (مناسب للأجهزة المحمولة)</li>
        <li>دمج نموذج الاتصال</li>
        <li>إعداد أساسي لتحسين محركات البحث</li>
        <li>روابط الوسائط الاجتماعية</li>
        <li>نطاق مجاني واستضافة لمدة عام واحد</li>
      </ul>
      <Button text="اختيار" link="/OrderYourPlan" />
    </div>
  );
}

function SpecialPlan() {
  return (
    <div className="SpecialPlan plan">
      <h2>الباقة المميزة</h2>
      <p>الأعمال المتوسطة والصغيرة، الشركات التي تقدم خدمات </p>
      {/* <h1>349$</h1> */}
      <ul>
        <li>حتى 10 صفحات</li>
        <li>تصميم مخصص</li>
        <li>تصميم متجاوب</li>
        <li>نماذج اتصال متقدمة</li>
        <li>تحسين محركات البحث على الصفحة</li>
        <li>قسم مدونة أو أخبار</li>
        <li>دمج وسائل التواصل الاجتماعي</li>
        <li>إعداد أمان أساسي (SSL، جدار ناري)</li>
        <li>دعم لمدة شهر قابله للتمديد</li>
        <li>نطاق مجاني واستضافة لمدة عام واحد</li>
      </ul>
      <Button text="اختيار" link="/OrderYourPlan" />
    </div>
  );
}

function CompaniesPlan() {
  return (
    <div className="CompaniesPlan plan">
      <h2>باقه المؤسسات </h2>
      <p>الشركات الكبيرة، المواقع الحكومية، المواقع ذات الزيارات العالية </p>
      {/* <h1>999$</h1> */}
      <ul>
        <li>عدد صفحات غير محدود أو مخصص</li>
        <li>تصميم مخصص مع واجهة مستخدم متقدمة</li>
        <li>دمج التجارة الإلكترونية</li>
        <li>كتالوج المنتجات والتصفية</li>
        <li>دعم متعدد اللغات (العربية/الإنجليزية)</li>
        <li>إعداد تحسين محركات البحث المتقدم</li>
        <li>أمان عالي المستوى وتشفير</li>
        <li>تقارير أداء شهرية</li>
        <li>دعم لمدة 3 أشهر قابل للتمديد</li>
      </ul>
      <Button text="اختيار" link="/OrderYourPlan" />
    </div>
  );
}

export default BasicPlan;
export { SpecialPlan, CompaniesPlan };
