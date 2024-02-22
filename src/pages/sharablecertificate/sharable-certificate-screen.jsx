import SignInScreen from "../../atoms/modal/modal";
import RatingStarSVGComponent from "../../assets/svg/ratingstarsvg/ratingstarsvg";
import { pmBookLogo } from "../../assets/images/attemptspageimage";
import WhatsAppSVGComponent from "../../assets/svg/cerificatepagesvgs/whatsappsvg";
import MetaSVGComponent from "../../assets/svg/cerificatepagesvgs/metasvg";
import InstagramSVGComponent from "../../assets/svg/cerificatepagesvgs/instagramsvg";
import DownloadSVGComponent from "../../assets/svg/cerificatepagesvgs/downloadsvg";
import {
  WhatsappIcon,
  WhatsappShareButton,
  FacebookShareButton,
  FacebookIcon,
  InstapaperIcon,
  InstapaperShareButton,
} from "react-share";
import { certificateProfileImage } from "../../assets/images/attemptspageimage";

import "./sharable-certificate-styles.css";

const SharableCertificateScreen = ({
  downloadCertificate,
  // certificateAwardName,
  shareLink,
}) => {
  const certificateAwardName = localStorage.getItem("certificateUserName");
  console.log("This is From Screen : ", shareLink);
  return (
    <div>
      <div className="sign-in-overlay"></div>
      <div
        className="sharable-certificate-main-container"
        id="completionCertificate"
      >
        <div className="sharable-border-container">
          <div className="sharable-certificate-container">
            <div className="star-svg-style">
              <RatingStarSVGComponent />
            </div>
            <div className="profile-image-container">
              <img
                src={certificateProfileImage}
                className="profile-image"
                alt="certificate-profile-photo"
              />
            </div>
            <p className="certificate-present-text">
              I AM A POTENTIAL
              <span className="prime-minister-text"> PRIME MINISTER</span>
            </p>
            <p className="certificate-description">
              I could demonstrate that I can balance competing needs and demands
              of a Nation, at a very basic level.
            </p>
            <div className="certificate-text-image-container">
              <div className="certificate-bottom-text-box">
                <p className="do-you-have-text">DO YOU HAVE IT?</p>
                <p className="certificate-potential-star">
                  Play The Fantasy Prime Minister Game
                </p>
              </div>
              <div>
                <img
                  src={pmBookLogo}
                  alt="certificateBookLogo"
                  className="certificate-book-logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="certificate-shared-container">
          <span className="share-text">Share : </span>
          <span className="social-media-icon-box">
            <WhatsappShareButton
              className="social-media-icon"
              // onClick={() => downloadCertificate("whatsapp")}
              url={shareLink || " "}
              // url={imageUrl}
            >
              <WhatsappIcon
                size={24}
                round
                onClick={() => downloadCertificate("whatsapp")}
              />
            </WhatsappShareButton>
          </span>
          <span className="social-media-icon-box">
            <FacebookShareButton
              className="social-media-icon"
              url={shareLink}
              // url={imageUrl}
            >
              {/* <FacebookIcon size={24} round /> */}
              <MetaSVGComponent
                onClick={() => downloadCertificate("facebook")}
              />
            </FacebookShareButton>
          </span>
          <span className="social-media-icon-box">
            {/* <InstapaperShareButton */}
            {/* className="social-media-icon" */}
            {/* // url={shareLink} */}
            {/* url={imageUrl} */}
            {/* > */}
            <InstagramSVGComponent
              onClick={() => downloadCertificate("instagram")}
            />
            {/* <InstapaperIcon size={24} round /> */}
            {/* </InstapaperShareButton> */}
          </span>
          <span className="social-media-icon-box">
            <DownloadSVGComponent
              className="social-media-icon"
              onClick={() => downloadCertificate("download")}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SharableCertificateScreen;
