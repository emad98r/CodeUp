import "./logo-form.scss";

import LogoStyle_1 from "../../assets/icons/logo-style-1.svg";
import LogoStyle_2 from "../../assets/icons/logo-style-2.svg";
import LogoStyle_3 from "../../assets/icons/logo-style-3.svg";
import LogoStyle_4 from "../../assets/icons/logo-style-4.svg";
import LogoStyle_5 from "../../assets/icons/logo-style-5.svg";
import LogoStyle_6 from "../../assets/icons/logo-style-6.svg";
import LogoStyle_7 from "../../assets/icons/logo-style-7.svg";
import LogoStyle_8 from "../../assets/icons/logo-style-8.svg";
import Title from "../../Components/Titles/Title";
import pic from "../../assets/imgs/logo-makeing-bg.jpeg";
import {
  FormButtonSend,
  FormButtonRest,
} from "../../Components/Buttons/Button";

function LogoForm() {
  return (
    <div className="logo-form">
      <img className="large-pic" src={pic} alt="" />
      <div className="container">
        <Title title="إستبيان تصميم شعار" />
        <form
          action="https://formsubmit.co/codeup-yem@outlook.com"
          method="POST"
        >
          <input type="text" name="name" placeholder="الاسم" required />
          <input type="tel" name="tel" placeholder="الجوال" required />
          <input type="email" name="email" placeholder="الايميل" required />
          <input
            type="text"
            name="logo-title"
            placeholder="ما هو اسم الشعار / المنشأة ؟"
            required
          />

          <input
            type="text"
            name="logo-idea"
            placeholder="ما هي الفكرة من وراء هذا الاسم؟"
          />
          <input
            type="text"
            name="logo-description"
            placeholder="كيف تصف الخدمات / المنتجات الخاصة بك؟"
            required
          />

          <div className="age-target">
            <p>ما هي الفئة العمرية المستهدفة؟</p>

            <label htmlFor="18-25">
              <div className="checkbox-wrapper-31">
                <input type="checkbox" name="18-25" id="18-25" />
                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              18-25
            </label>
            <label htmlFor="26-35">
              <div className="checkbox-wrapper-31">
                <input type="checkbox" name="26-35" id="26-35" />

                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              26-35
            </label>
            <label htmlFor="35-45">
              <div className="checkbox-wrapper-31">
                <input type="checkbox" name="35-45" id="35-45" />

                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              35-45
            </label>
            <label htmlFor="45+">
              <div className="checkbox-wrapper-31">
                <input type="checkbox" name="45+" id="45+" />

                <svg viewBox="0 0 35.6 35.6">
                  <circle
                    className="background"
                    cx="17.8"
                    cy="17.8"
                    r="17.8"
                  ></circle>
                  <circle
                    className="stroke"
                    cx="17.8"
                    cy="17.8"
                    r="14.37"
                  ></circle>
                  <polyline
                    className="check"
                    points="11.78 18.12 15.55 22.23 25.17 12.87"
                  ></polyline>
                </svg>
              </div>
              45+
            </label>
          </div>
          <input
            type="text"
            name="liked-color"
            placeholder="ما هي الألوان التي تفضلها لعلامتك التجارية "
            required
          />
          <input
            type="text"
            name="disliked-color"
            placeholder="ما هي الألوان التى لا ترغب في استخدامها؟ "
            required
          />
          <input
            type="text"
            name="message-to-people"
            placeholder="ما هي الرسالة أو الشعور الذي ترغب بنقله لمن يشاهد شعارك؟  "
            required
          />
          <div className="upload-liked-logo">
            <p>الرجاء رفع امثلة من شعارات تعجبكم ووصف جوانب الجمال بها</p>
            <section>
              <input type="file" name="upload-liked-logo" id="" />
              <input
                type="text"
                name="discrip-upload-liked-logo"
                id=""
                placeholder="الوصف"
              />
            </section>
          </div>
          <div className="logo-styles">
            <p>يرجى تحديد طريقة التصميم الذي تبحث عنه </p>
            {/* <div className="styles-wrapper">
              <label htmlFor="style-1">
                <img src={LogoStyle_1} alt="" />
                <section>
                  <input type="checkbox" name="style-1" id="" />
                  <h4>مونوغرام</h4>
                </section>
              </label>
              <label htmlFor="style-2">
                <img src={LogoStyle_2} alt="" />
                <section>
                  <input type="checkbox" name="style-2" id="" />
                  <h4>النص مع المعنى</h4>
                </section>
              </label>
              <label htmlFor="style-3">
                <img src={LogoStyle_3} alt="" />
                <section>
                  <input type="checkbox" name="style-3" id="" />
                  <h4>حرفين و الاسم</h4>
                </section>
              </label>

              <label htmlFor="style-4">
                <img src={LogoStyle_4} alt="" />
                <section>
                  <input type="checkbox" name="style-4" id="" />
                  <h4>الشعار على يسار الاسم</h4>
                </section>
              </label>

              <label htmlFor="style-5">
                <img src={LogoStyle_5} alt="" />
                <section>
                  <input type="checkbox" name="style-5" id="" />
                  <h4>الشعار فوق الاسم</h4>
                </section>
              </label>

              <label htmlFor="style-6">
                <img src={LogoStyle_6} alt="" />
                <section>
                  <input type="checkbox" name="style-6" id="" />
                  <h4>الاحرف الاولى</h4>
                </section>
              </label>

              <label htmlFor="style-7">
                <img src={LogoStyle_7} alt="" />
                <section>
                  <input type="checkbox" name="style-7" id="" />
                  <h4>عربي و انجليزي</h4>
                </section>
              </label>

              <label htmlFor="style-8">
                <img src={LogoStyle_8} alt="" />
                <section>
                  <input type="checkbox" name="style-8" id="" />
                  <h4>ليس لدي أي تفضيلات دع المصمم يختار أفضل نوع</h4>
                </section>
              </label>
            </div> */}
            <div className="styles-wrapper">
              <label htmlFor="style-1">
                <img src={LogoStyle_1} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-1" id="style-1" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4>مونوغرام</h4>
                </section>
              </label>

              <label htmlFor="style-2">
                <img src={LogoStyle_2} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-2" id="style-2" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4>النص مع المعنى</h4>
                </section>
              </label>

              <label htmlFor="style-3">
                <img src={LogoStyle_3} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-3" id="style-3" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4>حرفين و الاسم</h4>
                </section>
              </label>

              <label htmlFor="style-4">
                <img src={LogoStyle_4} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-4" id="style-4" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4>الشعار على يسار الاسم</h4>
                </section>
              </label>

              <label htmlFor="style-5">
                <img src={LogoStyle_5} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-5" id="style-5" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4>الشعار فوق الاسم</h4>
                </section>
              </label>

              <label htmlFor="style-6">
                <img src={LogoStyle_6} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-6" id="style-6" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4>الاحرف الاولى</h4>
                </section>
              </label>

              <label htmlFor="style-7">
                <img src={LogoStyle_7} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-7" id="style-7" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4>عربي و انجليزي</h4>
                </section>
              </label>

              <label htmlFor="style-8">
                <img src={LogoStyle_8} alt="" />
                <section>
                  <div className="checkbox-wrapper-31">
                    <input type="checkbox" name="style-8" id="style-8" />
                    <svg viewBox="0 0 35.6 35.6">
                      <circle
                        className="background"
                        cx="17.8"
                        cy="17.8"
                        r="17.8"
                      ></circle>
                      <circle
                        className="stroke"
                        cx="17.8"
                        cy="17.8"
                        r="14.37"
                      ></circle>
                      <polyline
                        className="check"
                        points="11.78 18.12 15.55 22.23 25.17 12.87"
                      ></polyline>
                    </svg>
                  </div>
                  <h4> دع المصمم يختار أفضل نوع</h4>
                </section>
              </label>
            </div>
          </div>
          <textarea
            rows={10}
            name="additional notes"
            id=""
            placeholder="ملاحظات اضافية"
          ></textarea>
          <div className="buttons">
            <FormButtonSend type="submit" text="ارسل" />
            <FormButtonRest type="reset" text="حذف" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogoForm;
