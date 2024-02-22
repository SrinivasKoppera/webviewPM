import LogInScreen from "./login-screen";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../../firebase/fire-config";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { addLoginUserDetailsAction } from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";

const LogInContainer = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log("This is Google Sign : ++++++", result);
      const signedInUser = result.user;

      const userName = signedInUser.displayName;
      localStorage.setItem("userName", userName);

      // dispatch(addLoginUserDetailsAction(userDetails));
      // console.log("This is State : ", signedInUser);
      // console.log("Google Sign-In Successful:", signedInUser);
      navigate("/AvatarContainer"); // Use navigate to redirect
    } catch (error) {
      console.error("Google Sign-In Failed:", error.message);
    }
  };

  const handleGoogleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Google Sign-Out Successful");
      Redirect("/AvatarContainer");
    } catch (error) {
      console.error("Google Sign-Out Failed:", error.message);
    }
  };

  return <LogInScreen handleGoogleSignIn={handleGoogleSignIn} />;
};

export default LogInContainer;
