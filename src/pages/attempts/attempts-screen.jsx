import RightMarkSVGComponent from "../../assets/svg/attemptspagerightmark/right-mark-svg";
import EmptyRightMarkSVG from "../../assets/svg/attemptspagerightmark/empty-right-mark-svg";
import CopySVGComponent from "../../assets/svg/attemptspagerightmark/copy-svg";
import { pmBookLogo } from "../../assets/images/attemptspageimage";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./attempts-style.css";

const AttemptsScreen = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="top-container">
        <div>
          <img src={pmBookLogo} alt="brandLogo" className="brand-logo" />
        </div>
        <div className="attempt-heading-container">
          <h4 className="attempt-heading">{t("ATTEMPT")}</h4>
          <p className="attempt-description">
            {t("Note : You have Max 18 Attempts in Total")}
          </p>
        </div>
      </div>
      <div className="attempts-card-container">
        <div className="attempt-card">
          <div className="attempt-payment-type-box box-1">
            <p className="attempt-payment-type-text">{t("FREE")}</p>
          </div>
          <div className="attempt-card-middle">
            <div className="started-on-container">
              <span className="hash-style">#</span>
              <span className="started-on-text">{t("STARTED ON")}</span>
            </div>
            <div className="date-time-tickmark-container">
              <RightMarkSVGComponent className="tickmark-svg" />
              <div className="date-time-box">
                <span className="date">23/07/2023</span>
                <span className="time">06:00 PM</span>
              </div>
            </div>
            <div className="date-time-tickmark-container">
              <RightMarkSVGComponent className="tickmark-svg" />
              <div className="date-time-box">
                <div className="status-of-attempt">
                  <span className="date">23/07/2023</span>
                  <span className="status">INPROGRESS</span>
                </div>
                <span className="time">06:00 PM</span>
              </div>
            </div>
            <div className="date-time-tickmark-container">
              <EmptyRightMarkSVG className="tickmark-svg" />
              <span className="availability-status">{t("Available")}</span>
            </div>
          </div>
        </div>
        <div className="card-with-redirect-link">
          <p className="redirect-link">{t("I HAVE A CODE")}</p>
          <div className="attempt-card">
            <div className="attempt-payment-type-box box-2">
              <p className="attempt-payment-type-text">{t("REFER A FRIEND")}</p>
              <p className="referal-code-text">
                FDGU4 <CopySVGComponent className="copy-svg" />
              </p>
            </div>
            <div className="attempt-card-middle">
              <div className="started-on-container">
                <span className="hash-style">#</span>
                <span className="started-on-text">{t("STARTED ON")}</span>
              </div>
              <div className="date-time-tickmark-container">
                <EmptyRightMarkSVG className="tickmark-svg" />
                <div className="date-time-box">
                  <span className="availability-status">
                    {t("Unavailable")}
                  </span>
                </div>
              </div>
              <div className="date-time-tickmark-container">
                <EmptyRightMarkSVG className="tickmark-svg" />
                <div>
                  <span className="availability-status">
                    {" "}
                    {t("Unavailable")}
                  </span>
                </div>
              </div>
              <div className="date-time-tickmark-container">
                <EmptyRightMarkSVG className="tickmark-svg" />
                <span className="availability-status">{t("Unavailable")}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-with-redirect-link">
          <p className="redirect-link">{t("BUY ATTEMPT")}</p>
          <div className="attempt-card">
            <div className="attempt-payment-type-box box-3">
              <p className="attempt-payment-type-text">{t("PAY AND PLAY")}</p>
            </div>
            <div className="attempt-card-middle">
              <div className="started-on-container">
                <span className="hash-style">#</span>
                <span className="started-on-text">{t("STARTED ON")}</span>
              </div>
              <div className="date-time-tickmark-container">
                <EmptyRightMarkSVG className="tickmark-svg" />
                <div className="date-time-box">
                  <span className="availability-status">
                    {t("Unavailable")}
                  </span>
                </div>
              </div>
              <div className="date-time-tickmark-container">
                <EmptyRightMarkSVG className="tickmark-svg" />
                <div>
                  <span className="availability-status">
                    {t("Unavailable")}
                  </span>
                </div>
              </div>
              <div className="date-time-tickmark-container">
                <EmptyRightMarkSVG className="tickmark-svg" />
                <span className="availability-status">{t("Unavailable")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="start-game-btn-container">
        <button className="start-game-btn" type="button">
          <Link to="/GameplayContainer" className="play-game-link">
            Play Game
          </Link>
          {/* {t("Start gameplay")} */}
        </button>
      </div>
    </div>
  );
};

export default AttemptsScreen;
