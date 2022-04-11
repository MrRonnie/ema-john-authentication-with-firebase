// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDliDv7bAiOXeJYiGxZVcj8ExOtbcjOJ-Q",
  authDomain: "ema-john-simple-91f32.firebaseapp.com",
  projectId: "ema-john-simple-91f32",
  storageBucket: "ema-john-simple-91f32.appspot.com",
  messagingSenderId: "834844267273",
  appId: "1:834844267273:web:531ba22db323929461b9d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
