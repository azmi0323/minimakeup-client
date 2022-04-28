// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbJyS2fPruZniHJe0UeAGh84KFGhmxMdc",
  authDomain: "assignment-eleven-project.firebaseapp.com",
  projectId: "assignment-eleven-project",
  storageBucket: "assignment-eleven-project.appspot.com",
  messagingSenderId: "292230829866",
  appId: "1:292230829866:web:d30e016098d0e379d7b053"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;