import { useState } from "react";
import AvatarScreen from "./avatar-screen";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/fire-config";
import { useNavigate } from "react-router-dom";
import { googleSignOut } from "../signout/google-sign-out-function";

const Avatars = [
  {
    imagelink:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481895/6_cu6dyf.png",
    name: "J. K. Shah",
  },
  {
    imagelink:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481911/5_wka6du.png",
    name: "R. L Shinde",
  },
  {
    imagelink:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481810/9_q08fpp.png",
    name: "Savitri R.",
  },
  {
    imagelink:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481888/7_1_d6tsk8.png",
    name: "M. S. Singh",
  },
  {
    imagelink:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481839/8_upchcc.png",
    name: "Meenakumari ",
  },
  {
    imagelink:
      "https://res.cloudinary.com/dzxemuctv/image/upload/v1701481732/10_vrzzec.png",
    name: "A. R. Khan",
  },
];
const AvatarContainer = () => {
  const navigate = useNavigate();

  const [userPhoto, setUserPhoto] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userCity, setUserCity] = useState("");

  const userDetails = {
    userName,
    userAge,
    userCity,
    userPhoto,
  };
  //Handle change Image function
  const handleImageChange = (type, event, name) => {
    if (type === "avatar") {
      setUserName(name);
      setUserPhoto(event);
    } else {
      const file = event.target.files[0];
      const createImageUrl = URL.createObjectURL(file);
      setUserPhoto(createImageUrl);
    }
  };

  // Function to add a document to a collection
  const addDocumentToCollection = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
      localStorage.setItem("userId", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  //Create a collection function
  const handleCreateCollection = () => {
    if (
      userPhoto !== "" &&
      userName !== "" &&
      userAge !== "" &&
      userCity !== ""
    ) {
      addDocumentToCollection("userDetailsCollection", userDetails);
      setUserPhoto("");
      setUserName("");
      setUserAge("");
      setUserCity("");
      navigate("/LimitationsScreen");
    }
  };

  //.............Google Sign Out Function.............//
  const handleGoogleSignOut = () => {
    googleSignOut(navigate);
  };

  return (
    <AvatarScreen
      Avatars={Avatars}
      userPhoto={userPhoto}
      setUserPhoto={setUserPhoto}
      userName={userName}
      setUserName={setUserName}
      userAge={userAge}
      setUserAge={setUserAge}
      userCity={userCity}
      setUserCity={setUserCity}
      handleCreateCollection={handleCreateCollection}
      handleImageChange={handleImageChange}
      handleGoogleSignOut={handleGoogleSignOut}
    />
  );
};

export default AvatarContainer;
