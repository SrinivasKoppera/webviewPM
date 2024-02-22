import { useState } from "react";
import AttemptsAndGamePlayHeader from "../../atoms/attemptsgameplayheader/attempts-game-play-header-screen";
// import { gameReadInstructions } from "../../utils/strings";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./hintpage-style.css";

const HintPageScreen = () => {
  const { t } = useTranslation();

  const [isReadHighlighted, setIsReadHighlighted] = useState(true);
  const [isWatchHighlighted, setIsWatchHighlighted] = useState(false);

  const showTextContainer = () => {
    return (
      <div className="hint-text-container">
        <p className="hint-description">
          1.{" "}
          {t(
            "In economies of the levels of India of 1947 The general Defence spend hovers between 1.5% of GDP to 3.5% of GDP in peaceful times to years of escalating tensions/ actual wars. You may remember the periods of these escalations while Deciding your expenditures. For example, India had an ongoing war in Kashmir from November 1947 to December 1948. That covers a major part of 1948-49."
          )}
        </p>
        <p className="hint-description">
          2.{" "}
          {t(
            "You may also like to note that the total Central gocernment capacity / limit of money That can be allocated including revenues and debt spans from 4.5% in critical years to 14% in years of extreme taxation."
          )}
        </p>
        <p className="hint-description">
          3.{" "}
          {t(
            "Also remember that Indian economy is a gamble on monsoons for the period in question ( 1947-64). Thus, a good monsoon and stable social conditions will help buoy recenues and debt raising opportunities. On the other hand, a bad monsoon or social unrest like strikes depress the revenues as well as money market."
          )}
        </p>
        <p className="hint-description">
          4. {t("Cheers to glorious Leading the Nation")}
        </p>
        {/* {gameReadInstructions.map((eachInstruction, index) => {
          return (
            <p key={index} className="hint-description">{`${index + 1}. ${
              Object.values(eachInstruction)[0]
            }`}</p>
          );
        })} */}
      </div>
    );
  };

  const showVideoContainer = () => {
    return (
      <div className="hint-video-container">
        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/vjgnZtm-Km8?si=26sAo5yvv8O4cESU"
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/vjgnZtm-Km8?si=26sAo5yvv8O4cESU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <iframe
          className="video-iframe"
          src="https://www.youtube.com/embed/vjgnZtm-Km8?si=26sAo5yvv8O4cESU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  return (
    <div>
      <AttemptsAndGamePlayHeader />
      <div className="hint-page-btn-container">
        <button
          className={`hint-page-buttons ${
            isReadHighlighted ? "highlighted" : "unhighlighted"
          }`}
          onClick={() => {
            setIsReadHighlighted(true);
            setIsWatchHighlighted(false);
          }}
        >
          {t("Read")}
        </button>
        <button
          className={`hint-page-buttons ${
            isWatchHighlighted ? "highlighted" : "unhighlighted"
          }`}
          onClick={() => {
            setIsReadHighlighted(false);
            setIsWatchHighlighted(true);
          }}
        >
          {t("Watch")}
        </button>
      </div>
      <div>
        {isReadHighlighted ? showTextContainer() : showVideoContainer()}
      </div>
      <div className="hint-page-btn-container">
        <button className="hint-page-buttons go-to-back-btn">
          <Link to="/GameplayContainer" className="link-tag-styles">
            {t("Back to the Game")}
          </Link>
        </button>

        <button className="hint-page-buttons buy-book-btn">
          <Link
            to="https://notionpress.com/read/fantasy-prime-minister-volume-1"
            target="_blank"
            className="buy-book-link"
          >
            {t("Buy Fantasy PM Vol. 1")}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HintPageScreen;
