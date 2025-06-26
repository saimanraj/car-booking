import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

// Example usage:
const snapshot = await getDocs(collection(db, "users"));


// Form handler
document.getElementById("bookingForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const pickup = document.getElementById("pickup").value;
  const drop = document.getElementById("drop").value;
  const datetime = document.getElementById("datetime").value;
  const car = document.getElementById("car").value;
  const successMsg = document.getElementById("successMsg");

  try {
    await addDoc(collection(db, "bookings"), {
      name, pickup, drop, datetime, car
    });

    successMsg.style.display = "block";
    successMsg.textContent = "Booking stored in Firebase!";
    document.getElementById("bookingForm").reset();
  } catch (error) {
    alert("Error saving booking: " + error.message);
  }
});

// Optional logout function
function logout() {
  window.location.href = "login.html";
}
window.logout = logout;
