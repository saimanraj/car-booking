import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } 
  from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBG1lysb8jx4Vhbpl2JxRXDV8U5NQ66S40",
  authDomain: "car-booking-5d415.firebaseapp.com",
  projectId: "car-booking-5d415",
  storageBucket: "car-booking-5d415.appspot.com",
  messagingSenderId: "892931397609",
  appId: "1:892931397609:web:79ce5b3cb2af55a0e81d78"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("signupForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  const message = document.getElementById("message");

  try {
    const usersRef = collection(db, "users");
    const snapshot = await getDocs(usersRef);
    let exists = false;

    snapshot.forEach(doc => {
      if (doc.data().username === username) {
        exists = true;
      }
    });

    if (exists) {
      message.textContent = "Username already exists. Try another.";
      message.style.color = "red";
    } else {
      await addDoc(usersRef, { username, password });
      message.style.color = "green";
      message.textContent = "Signup successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "home.html";
      }, 1500);
    }

  } catch (err) {
    message.textContent = "Error: " + err.message;
    message.style.color = "red";
  }
});
