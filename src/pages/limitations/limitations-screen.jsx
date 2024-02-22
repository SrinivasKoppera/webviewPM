
import { limitations } from "../../utils/strings";
import CustomPage from "../../molecule/custompage";

const LimitationsScreen = () => {
  const limitationsArray = [
    limitations.limitation1,
    limitations.limitation2,
    limitations.limitation3,
    limitations.limitation4,
    limitations.limitation5,
  ];
  return (
  <CustomPage limitationsArray={limitationsArray} link={"Rules"} heading={"Limitations"}/>
  );
};

export default LimitationsScreen;
