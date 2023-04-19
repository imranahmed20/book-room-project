// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxjIezb0pdeFsoYYnDVcQuP8wTGoXYJ8g",
    authDomain: "room-book-firebase.firebaseapp.com",
    projectId: "room-book-firebase",
    storageBucket: "room-book-firebase.appspot.com",
    messagingSenderId: "940645596213",
    appId: "1:940645596213:web:d0703fbee72cf7abd1c57c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;