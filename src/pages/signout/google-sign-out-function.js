import { auth } from "../../firebase/fire-config";
import { signOut } from "firebase/auth";

export const googleSignOut = async (navigate) => {
  try {
    await signOut(auth);
    // setUser(null);
    console.log("Google Sign-Out Successful");
    navigate("/");
  } catch (error) {
    console.error("Google Sign-Out Failed:", error.message);
  }
};
