// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFfuR5lVWEm9pc20ES8VqT06qNvgnmckk",
  authDomain: "netflix-gpt-84564.firebaseapp.com",
  projectId: "netflix-gpt-84564",
  storageBucket: "netflix-gpt-84564.appspot.com",
  messagingSenderId: "991916761623",
  appId: "1:991916761623:web:2bd09ba27653c549fd7252",
  measurementId: "G-LYY5E1CTQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();