import Adds from "../../../Components/Adds/Adds";
import BasicPlan, {
  CompaniesPlan,
  SpecialPlan,
} from "../../../Components/PricePlans/PricePlans";
import Title from "../../../Components/Titles/Title";
import "./section6.scss";

function Section6() {
  return (
    <div className="section6">
      <div className="container">
        <Title title="الباقات و الخدمات الاضافية" />
        <div className="plans-wrapper">
          <BasicPlan />
          <SpecialPlan />
          <CompaniesPlan />
        </div>
        <hr />
        <Adds />
      </div>
    </div>
  );
}

export default Section6;
