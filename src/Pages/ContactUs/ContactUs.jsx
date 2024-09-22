import "./contact-us.scss";
import Title from "../../Components/Titles/Title";
import gif from "../../assets/icons/contact us page.gif";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import {
  FormButtonRest,
  FormButtonSend,
} from "../../Components/Buttons/Button";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <Title title="نحن هنا لخدمتك، تواصل معنا" />
        <div className="info-wrapper">
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
            <input type="text" placeholder="الرقم" />
            <div className="options-wrapper"></div>
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
          <div className="img-wrapper">
            <img src={gif} alt="" />
            <ul>
              <li>
                <BsFillPhoneVibrateFill />
                782881372 967+
              </li>
              <li>
                <MdEmail />
                codeup-yem@outlook.com
              </li>
              <li>
                <MdLocationPin />
                خلف كلية المجتمع - صنعاء
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
