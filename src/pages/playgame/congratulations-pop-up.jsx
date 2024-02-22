// import { congratulationsImage } from "../../assets/images/attemptspageimage";
// import "./congratulations-pop-up-style.css";

// const CongratulationsPopUp = () => {
//   return (
//     <div>
//       <div className="sign-in-overlay"></div>
//       <div className="congratulations-container">
//         <div className="congratulations-image-container">
//           <img
//             src={congratulationsImage}
//             alt="congratulationsImage"
//             className="congratulations-image"
//           />
//         </div>
//         <div className="congratulations-text-container">
//           <div>
//             <p className="congratulation-heading">CONGRATULATIONS</p>
//           </div>
//           <div>
//             <p className="congratulation-gdp-text">
//               You steered India's GDP to
//             </p>
//             <p className="congratulation-gdp-amount">282000 Cr.</p>
//           </div>
//           <div>
//             <p className="congratulation-description">
//               You are economically strong. But keep an eye on defence
//               preparedness.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default CongratulationsPopUp;

import React from "react";
import ReactDOM from "react-dom";
import { congratulationsImage } from "../../assets/images/attemptspageimage";
import SvgComponentclose from "../../assets/svg/crossmarksvg/close";
import "./congratulations-pop-up-style.css";

const CongratulationsPopUp = ({ congratsPopupData, onPopupclose }) => {
  const onButtonClose = () => {
    onPopupclose();
  };
  return ReactDOM.createPortal(
    <div>
      <div className="sign-in-overlay"></div>
      <div className="congratulations-container">
        <SvgComponentclose className="close-btn" onClick={onButtonClose} />
        <div className="congratulations-image-text-container">
          <div className="congratulations-image-container">
            <img
              src={congratulationsImage}
              alt="congratulationsImage"
              className="congratulations-image"
            />
          </div>
          <div className="congratulations-text-container">
            <div>
              <p className="congratulation-heading">CONGRATULATIONS</p>
            </div>
            <div>
              <p className="congratulation-gdp-text">
                You steered India's GDP to
              </p>
              <p className="congratulation-gdp-amount">
                {congratsPopupData.gdp} Cr.
              </p>
            </div>
            <div>
              <p className="congratulation-description">
                {congratsPopupData.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modalDiv")
  );
};

export default CongratulationsPopUp;
