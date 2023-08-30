// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"; // 인증 기능을 추가하기 때문에 따로 추가
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYnLQvvBxLNjsUBO0-ZwJ3ON2e08gMVzA",
  authDomain: "disney-plus-app-15ed7.firebaseapp.com",
  projectId: "disney-plus-app-15ed7",
  storageBucket: "disney-plus-app-15ed7.appspot.com",
  messagingSenderId: "510296370147",
  appId: "1:510296370147:web:7259289c517d8897428ed6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
