import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG1lysb8jx4Vhbpl2JxRXDV8U5NQ66S40",
  authDomain: "car-booking-5d415.firebaseapp.com",
  projectId: "car-booking-5d415",
  storageBucket: "car-booking-5d415.appspot.com",
  messagingSenderId: "892931397609",
  appId: "1:892931397609:web:79ce5b3cb2af55a0e81d78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Login form handler
document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const loginMsg = document.getElementById("loginMsg");

  const usersSnapshot = await getDocs(collection(db, "users"));
  let isValidUser = false;

  usersSnapshot.forEach((doc) => {
    const user = doc.data();
    if (user.username === username && user.password === password) {
      isValidUser = true;
    }
  });

  if (isValidUser) {
    window.location.href = "index.html";
  } else {
    loginMsg.textContent = "Invalid username or password.";
  }
});

// Show/hide password toggle
document.getElementById("showPassword").addEventListener("change", function () {
  const passField = document.getElementById("password");
  passField.type = this.checked ? "text" : "password";
});
