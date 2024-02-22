import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./modal-style.css";

const SignInScreen = ({ onBookModal, modelData }) => {
  const [modal, setModal] = useState(true);

  const onToggleModal = () => {
    setModal(!modal);
    onBookModal();
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("sign-in-overlay")) {
        onToggleModal();
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [onToggleModal]);

  return (
    <div>
      {modal &&
        ReactDOM.createPortal(modelData(), document.querySelector(".modalDiv"))}
    </div>
  );
};

export default SignInScreen;
