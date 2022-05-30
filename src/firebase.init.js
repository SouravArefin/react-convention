// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIdegGymisgXFDRkGbst9MX9kOgNUd4Jg",
  authDomain: "royal-convention-hall.firebaseapp.com",
  projectId: "royal-convention-hall",
  storageBucket: "royal-convention-hall.appspot.com",
  messagingSenderId: "915126498332",
  appId: "1:915126498332:web:e3cd447bd735bce7851bd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;
 