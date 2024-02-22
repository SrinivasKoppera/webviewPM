import { Link } from "react-router-dom";
import SignInScreen from "../../atoms/modal/modal";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ImageSlider from "../imageslider";
import { useState } from "react";
import SvgComponentclose from "../../assets/svg/crossmarksvg/close";
import MobileImageSlider from "../mobileimageslider/mobile-image-slider";
import { string } from "../../utils/strings";
import "./landingpage-style.css";

const LandingPageScreen = ({ cardDetails }) => {
  const { t } = useTranslation();

  const [onmodal, onSetModal] = useState(false);

  const handleClick = (language) => {
    i18next.changeLanguage(language);
  };

  const onBookModal = () => {
    onSetModal(!onmodal);
  };

  const bookModelData = () => {
    return (
      <div>
        <div className="sign-in-overlay"></div>
        <div className="signin-container">
          <SvgComponentclose
            className="sign-in-close-icon"
            onClick={onBookModal}
          />
          <p className="about-book-heading">{t("About the Book")}</p>
          <p className="about-book-description">
            {t(
              "Ever wondered what it takes to run a nation and be the Prime Minister?"
            )}
          </p>
          <p className="about-book-description">{`${t(string.book1)}`}</p>
          <p className="about-book-description">{`${t(string.book2)}`}</p>
          <div className="about-book-bottom-container">
            <Link
              className="buy-now-link"
              to="https://notionpress.com/read/fantasy-prime-minister-volume-1"
              target="_blank"
            >
              <button className="buy-book-now-button">{t("Buy Now!")}</button>
            </Link>
            <p className="scroll-description">
              {t("Want to scroll through some pages?")}
              <Link
                to="https://notionpress.com/read/fantasy-prime-minister-volume-1"
                target="_blank"
                className="buy-now-link"
              >
                <span className="read-sample-text-style">
                  {t("Read Sample")}
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {onmodal && (
        <SignInScreen onBookModal={onBookModal} modelData={bookModelData} />
      )}
      <div className="change-language-container">
        <p className="change-language" onClick={() => handleClick("en")}>
          English
        </p>
        <p className="change-language" onClick={() => handleClick("tel")}>
          తెలుగు
        </p>
        <p className="change-language" onClick={() => handleClick("hi")}>
          हिंदी
        </p>
      </div>
      <div className="headings">
        <div>
          {/* <img
            src="https://res.cloudinary.com/dzxemuctv/image/upload/v1702902978/logotemp2_pjgocv.png"
            alt=""
            className=""
          /> */}

          <div className="landing-page-container">
            <h1 className="landing-page-heading fantacy-heading">
              {t("THE FANTASY")}
            </h1>
            <h1 className="landing-page-heading">{t("PRIME MINISTER GAME")}</h1>
          </div>
          {/* <img
            src="https://res.cloudinary.com/dzxemuctv/image/upload/v1702903061/bookImage_ifslg5.png"
            alt=""
            className="landing-page-book-image"
          /> */}
        </div>
        <p className="author-names">
          {t("Based on the")}{" "}
          <span onClick={() => onBookModal()} className="book">
            Book
          </span>{" "}
          by Sreedhar Gali and Balaji Sivanadham
        </p>
        <p className="title">
          {t(
            "The Real Prime Minister's Prime ministers of The Republic of India"
          )}
        </p>
        <div className="centered-slider">
          <ImageSlider />
        </div>
      </div>
      <div className="leaderboard-next-maincontainer">
        <div className="leaderboard-next-container">
          <p>{t("LEADERBOARD")}</p>
          <Link to="/leaderboard" className="see-more-link">
            See more
          </Link>
        </div>
      </div>
      <div className="box-container">
        <div className="large-devices-image-card-container">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className={`card`}
              style={{ backgroundColor: card.color }}
            >
              <h1 className="rank">{card.rank}</h1>
              <p className="gdp-year">{card.gdpEnd}</p>
              <h1 className="amount">{card.amount} Cr</h1>
              <img src={card.Image} alt="" className="leaderboard-image" />
              <p className="name">{card.name}</p>
            </div>
          ))}
        </div>
        <div className="mobile-devices-image-card-container">
          <MobileImageSlider />
        </div>
      </div>
      <div className="can-you-lead-india">
        <p className="can-you-lead-india-text">
          {t("Can you lead India better?")}
        </p>
        <Link to="/AvatarContainer" className="lets-see-button">
          {t("Let's See")}
        </Link>
      </div>
    </div>
  );
};

export default LandingPageScreen;
