import { useTranslation } from "react-i18next";
import Carousel from "../courasal/courasal";
import "./login-style.css";

const LogInScreen = ({ handleGoogleSignIn }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container">
        <div className="mainContainer">
          <Carousel />
          <div className="buttonsContainer">
            <div className="homePageHeadingContainer">
              <h1 className="primeminister">
                <span className="fantasy">{t("FANTASY")}</span>
                <span>{t("PRIME MINISTER")}</span>
              </h1>
              <p className="democratising-political-though">
                {t("Democratising Political Thought")}
              </p>
            </div>
            <p className="can-you-manage">
              {t("Can you manage India better?")} Let’s find out
            </p>

            <button className="googleButton" onClick={handleGoogleSignIn}>
              {t("Sign in with Google")}
            </button>
            <button className="googleButton">
              {t("Sign in with Facebook")}
            </button>
            {/* <SignInContainer onToggleModal={onToggleModal}/> */}

            {/* <button className='googleButton  emailbutton' onClick={onToggleModal}>Sign in with Email</button> */}
            <p className="Donthaveanaccount">Don’t have an account?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInScreen;
