// import AllocateSVGComponent from "../../assets/svg/allocatesvg/allocatesv";
// import "./crises-pop-up-style.css";

// const CrisesPopUp = () => {
//   return (
//     <div>
//       <div className="sign-in-overlay"></div>
//       <div className="crises-container">
//         <p className="crises-heading">ALERT! CRISES OCCURRED</p>
//         <p className="crises-description">
//           You like to assume that defence can be secured by diplomacy and other
//           means. But a minimum deterrent is essential to avoid crises.
//         </p>
//         <div className="continue-button-crises-level-container">
//           <p className="crises-level-text">CRISES #1</p>
//           <div className="continue-button-container">
//             <AllocateSVGComponent className="data-svg-icon" />
//             <button className="continue-button-after-crises">Continue</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CrisesPopUp;

import React from "react";
import ReactDOM from "react-dom";
import AllocateSVGComponent from "../../assets/svg/allocatesvg/allocatesv";
import "./crises-pop-up-style.css";

const CrisesPopUp = ({ onCrisesPopupClose, crisesData }) => {
  const onClickCrisisClose = () => {
    onCrisesPopupClose();
  };
  return ReactDOM.createPortal(
    <div>
      <div className="sign-in-overlay"></div>
      <div className="crises-container">
        <p className="crises-heading">ALERT! CRISES OCCURRED</p>
        <p className="crises-description">{crisesData.message}</p>
        <div className="continue-button-crises-level-container">
          <p className="crises-level-text">CRISES #1</p>
          <div className="continue-button-container">
            <AllocateSVGComponent className="data-svg-icon" />
            <button
              className="continue-button-after-crises"
              onClick={onClickCrisisClose}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector(".modalDiv")
  );
};

export default CrisesPopUp;
