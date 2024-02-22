import { perks } from "../../utils/strings";
import CustomPage from "../../molecule/custompage";
const Perks = () => {
  const perksArray = [
    perks.perk1,
    perks.perk2,
    perks.perk3,
    perks.perk4,
    perks.perk5,
  ];
  return (
    <CustomPage
      limitationsArray={perksArray}
      link={"attempts"}
      heading={"Perks"}
    />
  );
};

export default Perks;
