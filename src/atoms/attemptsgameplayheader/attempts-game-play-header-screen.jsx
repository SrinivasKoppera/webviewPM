import { pmBookLogo } from "../../assets/images/attemptspageimage";
import RightCheckBoxSVGComponent from "../../assets/svg/rightcheckboxsvg/rightcheckboxsvg";
import { useTranslation } from "react-i18next";
import "./attempts-game-play-header-style.css";

const AttemptsAndGamePlayHeader = () => {
  const { t } = useTranslation();
  return (
    <div className="attempts-game-play-header-container">
      <img src={pmBookLogo} alt="companyLogo" className="pm-book-logo" />
      <div className="attempts-game-play-header-top-container">
        <div className="attempts-game-play-header-count">
          <RightCheckBoxSVGComponent className="right-mark-svg" />
          <p className="attempts-game-play-header-text">
            {t("Attempt")}: <span>1/3</span>
          </p>
        </div>
        <h4 className="attempts-game-play-header-gdp-heading">
          {t("GDP of 1946-1947")}
        </h4>
      </div>
    </div>
  );
};

export default AttemptsAndGamePlayHeader;
