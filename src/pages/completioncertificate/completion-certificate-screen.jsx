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
import "./completion-certificate-style.css";

const imageUrl =
  "https://firebasestorage.googleapis.com/v0/b/prime-minister-6d1a2.appspot.com/o/images%2Fimage.png?alt=media&token=973ebebf-d6d1-45eb-b44d-55400ab3f3b6s";

const CompletionCertificateScreen = ({
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
        className="completion-certificate-main-container"
        id="completionCertificate"
      >
        <div className="border-container">
          <div className="completion-certificate-container">
            <div className="star-svg-style">
              <RatingStarSVGComponent />
            </div>
            <p className="certificate-heading">Certificate of Completion</p>
            <p className="certificate-present-text">
              The certificate is proudly present to
            </p>
            <p className="certificate-presented-person-name">
              {certificateAwardName}
            </p>
            <p className="certificate-description">
              for completing the Fantasy PM Game with display of exceptional
              skills in balancing defense needs with developmental needs and
              achieving a GDP of
            </p>
            <div className="certificate-text-image-container">
              <div className="certificate-bottom-text-box">
                <p className="certificate-amount-text">278901 Cr</p>
                {/*This will be change after game implemention is done */}
                <p className="certificate-year">from 1947 - 1965</p>
                <p className="certificate-potential-star">
                  He is a potential 5 star PM.
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

export default CompletionCertificateScreen;
