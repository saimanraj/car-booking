// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyBG1lysb8jx4Vhbpl2JxRXDV8U5NQ66S40",
  authDomain: "car-booking-5d415.firebaseapp.com",
  projectId: "car-booking-5d415",
  storageBucket: "car-booking-5d415.appspot.com",
  messagingSenderId: "892931397609",
  appId: "1:892931397609:web:79ce5b3cb2af55a0e81d78"
  
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firestore instance
export const db = getFirestore(app);
