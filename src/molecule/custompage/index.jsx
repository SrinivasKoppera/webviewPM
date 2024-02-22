import "./style.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { googleSignOut } from "../../pages/signout/google-sign-out-function";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import { pmBookLogo } from "../../assets/images/attemptspageimage";

const CustomPage = ({ limitationsArray, link, heading }) => {
  const { t } = useTranslation();
  const userName = localStorage.getItem("userName");
  const navigate = useNavigate();
  // console.log(link);
  return (
    <div className="custom-page-main-container">
      <div className="top-nav-container">
        <img src={pmBookLogo} alt="book" className="book-logo" />
        <div className="top-Nav">
          <p className="nav-item">{userName}</p>
          <Link to="/leaderboard" className="buy-book-link">
            <p className="nav-item">{t("Leaderboard")}</p>
          </Link>
          <Link
            to="https://notionpress.com/read/fantasy-prime-minister-volume-1"
            target="_blank"
            className="buy-book-link"
          >
            <p className="nav-item">Buy Fantasy PM</p>
          </Link>
        </div>
        <p className="custom-logout" onClick={() => googleSignOut(navigate)}>
          Logout
        </p>
      </div>

      <div className="container1">
        <div className="custom-box-container">
          <h1 className="heading">{t(heading)}</h1>
          <div className="limitaion-box-container">
            <div className="instructions-card">
              {limitationsArray.map((limitation, index) => (
                <div key={index} className="paragraph-container">
                  <p className="paragraph-text">{index + 1}.</p>
                  <p className="paragraph-text">{t(limitation)}</p>
                </div>
              ))}
              <div className="buttons-container">
                <Link to={`/${link}`} className="next-button">
                  {t("Next")}
                </Link>
                <Link to="/attempts" className="skip-button-link">
                  <p className="skip-button">{t("Skip Instructions")}</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPage;
