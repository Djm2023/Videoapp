// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPQm_Q_WtZGLHdTvDF08hFCNgJGvpXNoA",
  authDomain: "videostreaming-a27ce.firebaseapp.com",
  projectId: "videostreaming-a27ce",
  storageBucket: "videostreaming-a27ce.appspot.com",
  messagingSenderId: "556726310661",
  appId: "1:556726310661:web:7207cf847966e16bffc96c",
  measurementId: "G-FHF1K1TX2H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
