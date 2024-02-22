import "./Avatar-style.css";
import { useTranslation } from "react-i18next";

const AvatarScreen = ({
  Avatars,
  userPhoto,
  setUserPhoto,
  userName,
  setUserName,
  userAge,
  setUserAge,
  userCity,
  setUserCity,
  handleCreateCollection,
  handleImageChange,
  handleGoogleSignOut,
}) => {
  const { t } = useTranslation();

  const avatarUserName = localStorage.getItem("userName");

  return (
    <div>
      <div className="nav-bar">
        <p className="user-name">Hi, {avatarUserName}</p>
        <h1 className="choose-a">
          {t("Choose a")} <span className="avatar"> {t("Avatar")}</span>
        </h1>
        <p className="logout" onClick={handleGoogleSignOut}>
          Logout
        </p>
      </div>
      <div className="nav-bar-avatar-container">
        <div className="nav-bar">
          <p className="pick-from-characters">{t("PICK FROM CHARACTERS")}</p>
          <p className="or">{t("OR")}</p>
          <p className="create-your-own">{t("CREATE YOUR OWN")}</p>
        </div>
        <div className="avatar-container">
          {/* avatar container */}

          <div className="avatar-list">
            {Avatars.map((avatar, index) => (
              <div key={index} className="avatar-item">
                <img
                  src={avatar.imagelink}
                  alt={avatar.name}
                  onClick={() =>
                    handleImageChange("avatar", avatar.imagelink, avatar.name)
                  }
                />
                <p>{avatar.name}</p>
              </div>
            ))}
          </div>

          {/* details container */}

          <div className="details-container">
            <div className="center-content">
              <div className="upload-container">
                {/* <SvgComponentupload /> */}
                {userPhoto && (
                  <img
                    src={userPhoto}
                    className="user-profile-photo"
                    alt="userPhoto"
                  />
                )}
                <label
                  htmlFor="userPhotoUploadField"
                  className="upload-photo-label"
                >
                  {userPhoto ? t("Change Photo") : t("Upload Photo")}
                </label>
                <input
                  type="file"
                  id="userPhotoUploadField"
                  className="user-photo-upload-field"
                  onChange={(e) => handleImageChange("upload", e)}
                  accept="image/jpeg image/png image/jpg"
                />
              </div>
              <div className="name-input">
                <input
                  type="text"
                  placeholder="Your name"
                  className="nameinput"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="name-input">
                <input
                  type="text"
                  placeholder="Age"
                  className="nameinput"
                  value={userAge}
                  onChange={(e) => setUserAge(e.target.value)}
                />
              </div>
              <div className="name-input">
                <input
                  type="text"
                  placeholder="City"
                  className="nameinput"
                  value={userCity}
                  onChange={(e) => setUserCity(e.target.value)}
                />
              </div>
              <div className="altert-text">
                All characters are fictional and only be used as an avatar for
                playing without having any resemblance to reality.
                <div className="check-boc-container">
                  <input type="checkbox" className="checkbox" />
                  <p className="t-and-c">I understand and agree with this.</p>
                </div>
                <div className="start-game-button-container">
                  <span
                    className="start-game-button"
                    onClick={handleCreateCollection}
                  >
                    Start your game
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarScreen;
