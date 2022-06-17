// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApgExK05_HS5HYP6JiXt_hU7P5QO88xnE",
  authDomain: "fonts-presentation.firebaseapp.com",
  databaseURL:
    "https://fonts-presentation-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fonts-presentation",
  storageBucket: "fonts-presentation.appspot.com",
  messagingSenderId: "129788826623",
  appId: "1:129788826623:web:6842a6867e9966c5878dca",
};
// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const database = getDatabase(firebaseApp);
