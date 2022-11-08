// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWwXnORPhZEkCosjIpc6pPauW0dwk7nCE",
  authDomain: "hero-chef-a1d97.firebaseapp.com",
  projectId: "hero-chef-a1d97",
  storageBucket: "hero-chef-a1d97.appspot.com",
  messagingSenderId: "340666111620",
  appId: "1:340666111620:web:4c3c57d39fbfc05a2494d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;