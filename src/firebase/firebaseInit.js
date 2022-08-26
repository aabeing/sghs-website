// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMcv_oGSQiPJTh5UN3RaXh_LHYD5W_Gak",
  authDomain: "sghschempanthotty.firebaseapp.com",
  projectId: "sghschempanthotty",
  storageBucket: "sghschempanthotty.appspot.com",
  messagingSenderId: "411106915666",
  appId: "1:411106915666:web:5183ea8c0d0146acb1f68b",
  measurementId: "G-1KMVCYMKSV"
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(fireApp);
export default fireApp;