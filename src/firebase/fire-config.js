// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, push } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoUjDHlT47591tuBRHa7CetmkipqBjYQE",
  authDomain: "prime-minister-6d1a2.firebaseapp.com",
  projectId: "prime-minister-6d1a2",
  storageBucket: "prime-minister-6d1a2.appspot.com",
  messagingSenderId: "69916703490",
  appId: "1:69916703490:web:29c4a3aaff6fad3593e01b",
  measurementId: "G-3XFJRPD2KK",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;
