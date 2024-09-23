import Title from "../../Components/Titles/Title";
import "./section7.scss";
import svg from "../../assets/icons/section7.svg";
import {
  FormButtonRest,
  FormButtonSend,
} from "../../Components/Buttons/Button";

function Section7() {
  return (
    <div className="section7">
      <div className="container">
        <Title title="اطلب باقتك الان" />
        <div className="section7-wrapper">
          <img src={svg} alt="svg" />

          <form
            action="https://formsubmit.co/codeup-yem@outlook.com"
            method="POST"
          >
            <input type="hidden" name="_template" value="table" />

            <input type="text" name="name" placeholder="الاسم" required />
            <input
              type="email"
              name="email"
              placeholder="البريد الالكتروني"
              required
            />
            <input type="tel" placeholder="الرقم" required />
            <div className="options-wrapper">
              <select name="الباقات" id="plans">
                <option hidden value="الباقات">
                  الباقات
                </option>
                <option value="الباقه الأساسية">الباقه الأساسية</option>
                <option value="الباقة المميزة">الباقة المميزة</option>
                <option value=" الباقه المؤسسات">الباقه المؤسسات</option>
              </select>
              <select name="إضافات" id="adds">
                <option hidden value="إضافات">
                  إضافات
                </option>
                <option value="دومين واستضافة">دومين واستضافة</option>
                <option value=" تصميم الشعار/العلامة التجارية  احترافي 	 ">
                  {" "}
                  تصميم الشعار/العلامة التجارية احترافي{" "}
                </option>
                <option value="تصميم الشعار/العلامة التجارية  بيسط	 ">
                  تصميم الشعار/العلامة التجارية بيسط{" "}
                </option>
                <option value="الصيانة المستمرة	 ">الصيانة المستمرة </option>
              </select>
            </div>
            <textarea
              rows={7}
              name="رساله"
              id="message"
              placeholder="الرساله"
            ></textarea>
            <div className="buttons-wrapper">
              <FormButtonSend type="submit" text="ارسل" />
              <FormButtonRest type="reset" text="حذف" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Section7;
