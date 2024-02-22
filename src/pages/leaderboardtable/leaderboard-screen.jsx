// LeaderboardTable.js
import React, { useState, useEffect } from "react";
import { database } from "../../firebase/fire-config";
import { getDatabase, ref, push, onValue } from "firebase/database";
import {
  CrownSvg,
  TotalPlayers,
  TotalAttempts,
  SuccessfullAttempts,
} from "../../assets/svg/leaderboardtable";
import { useTranslation } from "react-i18next";
import ImageSlider from "../imageslider";
import SignInScreen from "../../atoms/modal/modal";
import "./leaderboard-style.css";
import { Link } from "react-router-dom";
import i18next from "i18next";
import SvgComponentclose from "../../assets/svg/crossmarksvg/close";
import { string } from "../../utils/strings";

const LeaderboardTableScreen = () => {
  const { t } = useTranslation();

  const [leaderboardData, setLeaderboardData] = useState([]);

  const handleClick = (language) => {
    i18next.changeLanguage(language);
  };
  const [onmodal, onSetModal] = useState(false);

  const onBookModal = () => {
    console.log("onbookmodal");
    onSetModal(!onmodal);
  };

  useEffect(() => {
    const leaderboardRef = ref(database, "/leaderboardTable");

    const unsubscribe = onValue(leaderboardRef, (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const dataArray = Object.entries(data).map(([key, value]) => ({
          id: key,
          ...value,
        }));
        setLeaderboardData(dataArray);
      } else {
        setLeaderboardData([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //////////////// Modeal function /////////////////

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
                className="buy-now-link"
                target="_blank"
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
          {/* <img src="https://res.cloudinary.com/dzxemuctv/image/upload/v1702902978/logotemp2_pjgocv.png" alt=""  className=''/> */}

          <div className="landing-page-container">
            <h1 className="landing-page-heading fantacy-heading">
              {t("THE FANTASY")}
            </h1>
            <h1 className="landing-page-heading">{t("PRIME MINISTER GAME")}</h1>
          </div>
          {/* <img src="https://res.cloudinary.com/dzxemuctv/image/upload/v1702903061/bookImage_ifslg5.png" alt="" className='landing-page-book-image'/> */}
        </div>
        <p className="author-names">
          {t("Based on the")}{" "}
          <span className="book" onClick={onBookModal}>
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
        {/* <div className="leaderboard-next-container">
          <p>{t("LEADERBOARD")}</p>
          <Link to="/leaderboard">See more</Link>
        </div> */}
      </div>
      <div className="leaderboard-table-container">
        <div className="success-rate-container">
          <div>
            <div className="percentage-and-crown">
              <div>
                <div className="crown">
                  <CrownSvg />
                </div>

                <h1 className="success-Percentage">8%</h1>
              </div>
            </div>

            <h1 className="success-rate"> SUCCESS RATE</h1>
            <div className="total-players-container">
              <div className="total-players">
                <TotalPlayers />
                <p className="success-rate-description">TOTAL PLAYERS</p>
              </div>
              <p className="success-rate-description-count">12334</p>
            </div>
            <div className="total-players-container">
              <div className="total-players">
                <TotalPlayers />
                <p className="success-rate-description">TOTAL Attempts</p>
              </div>
              <p className="success-rate-description-count">12334</p>
            </div>
            <div className="total-players-container">
              <div className="total-players">
                <TotalPlayers />
                <p className="success-rate-description">Successfull Attempts</p>
              </div>
              <p className="success-rate-description-count">12334</p>
            </div>
          </div>
        </div>
        <table className="leaderboard-table">
          <thead>
            <tr className="top-row">
              <th className="row-title">{t("Rank")}</th>
              <th className="row-title">{t("Name")}</th>
              <th className="row-title">{t("GDP")}</th>
              <th className="row-title">{t("Age")}</th>
              <th className="row-title">{t("City")}</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((item, index) => (
              <tr key={index}>
                <td className="row-data">{item.rank}</td>
                <td className="row-data">{item.name}</td>
                <td className="row-data">{item.gdp}</td>
                <td className="row-data">{item.age}</td>
                <td className="row-data">{item.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default LeaderboardTableScreen;
