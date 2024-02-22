import { rules } from "../../utils/strings";
import CustomPage from "../../molecule/custompage";
const Rules = () => {
  const rulesArray = [
    rules.rule1,
    rules.rule2,
    rules.rule3,
    rules.rule4,
    rules.rule5,
  ];
  return (

    <CustomPage   limitationsArray={rulesArray}
       link={"Perks"}
      heading={"Rules"}/>
  );
};

export default Rules;
