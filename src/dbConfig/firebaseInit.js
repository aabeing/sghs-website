// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const { initializeApp } = require("firebase/app");
const { initializeAppCheck, ReCaptchaV3Provider } = require("firebase/app-check");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_APIKEY,
  authDomain: process.env.REACT_APP_FIRE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIRE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIRE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIRE_MSGSENDERID,
  appId: process.env.REACT_APP_FIRE_APPID,
  measurementId: process.env.REACT_APP_FIRE_MEASUREMENTID 
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(process.env.REACT_APP_FIRE_APPCHECK),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true
});
const analytics = getAnalytics(fireApp);
export default fireApp;