// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvpUEPhhO13bxrusywl2iYTFYigqwCQc0",
  authDomain: "spn-db.firebaseapp.com",
  projectId: "spn-db",
  storageBucket: "spn-db.appspot.com",
  messagingSenderId: "154991533048",
  appId: "1:154991533048:web:0a3512daa1198ec3d2140d",
  measurementId: "G-H5CNF0LTPN",
  databaseURL: "https://spn-db-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);