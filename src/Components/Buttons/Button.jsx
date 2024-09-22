import "./button.scss";
import { useNavigate } from "react-router-dom";
import { RiMailSendLine } from "react-icons/ri";
import { GrPowerReset } from "react-icons/gr";

function Button(props) {
  const navigate = useNavigate();

  const handleClicked = (path) => {
    navigate(path);
  };

  return (
    <button
      class="cssbuttons-io-button"
      onClick={() => handleClicked(props.link)}
    >
      {props.text}
      <div class="icon">
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </button>
  );
}

// ------------
function FormButtonSend(props) {
  return (
    <button class="cssbuttons-io-button" type={props.type}>
      {props.text}
      <div class="icon">
        <RiMailSendLine />
      </div>
    </button>
  );
}
// ------------
function FormButtonRest(props) {
  return (
    <button class="cssbuttons-io-button" type={props.type}>
      {props.text}
      <div class="icon">
        <GrPowerReset />
      </div>
    </button>
  );
}

export default Button;
export { FormButtonSend, FormButtonRest };
