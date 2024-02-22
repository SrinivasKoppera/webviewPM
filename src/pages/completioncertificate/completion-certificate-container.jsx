import html2canvas from "html2canvas";
import SignInScreen from "../../atoms/modal/modal";
import CompletionCertificateScreen from "./completion-certificate-screen";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/fire-config";
import jsPDF from "jspdf";
import { db } from "../../firebase/fire-config";
import { doc, getDoc } from "firebase/firestore";
import { useState } from "react";

const CompletionCertificateContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  let shareLink = "";

  //This is function for uploading the photos
  const uploadImageInFirebase = async (file) => {
    // Create a storage reference
    const storageRef = ref(storage, "images/" + file.name);
    try {
      // Upload the file to Firebase Storage
      await uploadBytes(storageRef, file);
      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);
      // console.log("Image uploaded successfully!");
      // console.log("Download URL:", downloadURL);
      // Return the download URL or perform additional actions as needed
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error; // Propagate the error for handling in the calling code
    }
  };

  const downloadCertificate = async (type) => {
    const completionCertificateElement = document.getElementById(
      "completionCertificate"
    );
    html2canvas(completionCertificateElement, {}).then(async (canvas) => {
      const imageData = canvas.toDataURL("image/jpeg", 1.0);

      // Step 1: Decode base64 to Blob
      const binaryString = atob(imageData.split(",")[1]);
      const arrayBuffer = new ArrayBuffer(binaryString.length);
      const uint8Array = new Uint8Array(arrayBuffer);

      for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
      }

      const blob = new Blob([uint8Array], { type: "image/png" });

      // Step 2: Create a File object
      const file = new File([blob], "image.png", { type: "image/png" });
      try {
        // Step 3: Upload the file to Firebase Storage
        const downloadURL = await uploadImageInFirebase(file);

        if (type === "whatsapp") {
          shareLink = downloadURL;
        } else if (type === "facebook") {
          shareLink = downloadURL;
          // // Create a download link
          // const downloadLink = document.createElement("a");
          // downloadLink.href = imageData;
          // downloadLink.download = "certificate.jpg";
          // downloadLink.click();
        } else if (type === "instagram") {
          window.location.href = `https://www.instagram.com/?url=${encodeURIComponent(
            downloadURL
          )}`;
        } else if (type === "download") {
          const pdf = new jsPDF("l", "mm", "a4");
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
          pdf.addImage(imageData, "jpeg", 0, 0, pdfWidth, pdfHeight);
          pdf.save("certificate.pdf");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    });
  };

  ///////////////.......Get User name from firebase and show in the final certificate funcito........//////////////////////
  let userNameOnCertificate = null;
  const getUserDetailsById = async (loginUserID) => {
    try {
      // Get a reference to the Firestore database
      const userDocRef = doc(db, "userDetailsCollection", loginUserID);
      const docSnapshot = await getDoc(userDocRef);

      if (docSnapshot.exists()) {
        return {
          id: docSnapshot.id,
          data: docSnapshot.data(),
        };
      } else {
        console.log("Document not found");
        return null;
      }
    } catch (error) {
      console.error("Error getting user details by ID:", error);
      throw error;
    }
  };

  //Fetch Data Function
  const fetchData = async () => {
    const loginUserID = localStorage.getItem("userId");
    if (loginUserID) {
      // console.log("This is ID : ", loginUserID);
      const getUserNameForCertificate = await getUserDetailsById(loginUserID);
      const { id, data } = getUserNameForCertificate;
      userNameOnCertificate = data.userName;
      localStorage.setItem("certificateUserName", userNameOnCertificate);
      // console.log("User name for Certificate : ", userNameOnCertificate);
      setIsLoading(true);
    } else {
      console.log("User ID not found in local storage");
    }
  };
  fetchData();
  const result = isLoading ? (
    <CompletionCertificateScreen
      downloadCertificate={downloadCertificate}
      shareLink={shareLink}
    />
  ) : (
    <p>Loding...</p>
  );
  return result;
};

export default CompletionCertificateContainer;
