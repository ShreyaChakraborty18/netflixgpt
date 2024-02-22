// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC30AziqoDzO_S_jo8A5WMYCC7_yqdyvUM",
  authDomain: "netflixgpt-c7edf.firebaseapp.com",
  projectId: "netflixgpt-c7edf",
  storageBucket: "netflixgpt-c7edf.appspot.com",
  messagingSenderId: "113934223049",
  appId: "1:113934223049:web:6e4efbec6f2d046249ef18",
  measurementId: "G-KHJ8TBTJ0G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();