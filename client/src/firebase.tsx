// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "animal-web-app.firebaseapp.com",
  projectId: "animal-web-app",
  storageBucket: "animal-web-app.appspot.com",
  messagingSenderId: "45053292079",
  appId: "1:45053292079:web:780c9c7e9acfc6b69060da",
  measurementId: "G-EJ5HV8ZNSX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
