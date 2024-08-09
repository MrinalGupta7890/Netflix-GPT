// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcHAOL-TLRqYb_IU64pdoI_qYqZSHaQoU",
  authDomain: "netflix-11eaf.firebaseapp.com",
  projectId: "netflix-11eaf",
  storageBucket: "netflix-11eaf.appspot.com",
  messagingSenderId: "747213700681",
  appId: "1:747213700681:web:517b45317f0b06b27f8998",
  measurementId: "G-C8XTL0017B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();