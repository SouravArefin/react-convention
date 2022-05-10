// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZd8fYc7gsh1-zRcCD-7nnpZAR2S7UXjI",
  authDomain: "sp-zone-aac4d.firebaseapp.com",
  projectId: "sp-zone-aac4d",
  storageBucket: "sp-zone-aac4d.appspot.com",
  messagingSenderId: "222787441899",
  appId: "1:222787441899:web:f91f37ac63b0a362ba5aae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
 export default app;
 