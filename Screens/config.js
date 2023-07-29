// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPrmRiaPw3D-LX2K7QlG3S0Tn5nrEy3Is",
  authDomain: "biblioteca-eletronica-67f01.firebaseapp.com",
  projectId: "biblioteca-eletronica-67f01",
  storageBucket: "biblioteca-eletronica-67f01.appspot.com",
  messagingSenderId: "712088541349",
  appId: "1:712088541349:web:bec90735f4fdc0cdf1d54c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore()