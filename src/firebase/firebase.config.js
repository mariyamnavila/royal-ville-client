// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK29tt-NAtylzfTgWqsgGLwsq9fv5fAXg",
  authDomain: "royal-ville.firebaseapp.com",
  projectId: "royal-ville",
  storageBucket: "royal-ville.firebasestorage.app",
  messagingSenderId: "925233972410",
  appId: "1:925233972410:web:28eccbfe2a18e73e1b2e83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
