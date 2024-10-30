// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMdom4aVCkH-iRIE3Q5rS2VnGXSfXTY4w",
  authDomain: "amanlog-783bc.firebaseapp.com",
  projectId: "amanlog-783bc",
  storageBucket: "amanlog-783bc.appspot.com",
  messagingSenderId: "824215801826",
  appId: "1:824215801826:web:e9860e9d2b56bc4aa673bb",
  measurementId: "G-DQ13D9ZVZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
export {storage}
// const analytics = getAnalytics(app);