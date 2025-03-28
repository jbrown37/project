import { auth } from "./firebase-config.js";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth";

document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("signupEmail").value;
            const password = document.getElementById("signupPassword").value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Account created successfully!");
                    window.location.href = "index.html"; // Redirect to login page
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    alert("Login successful!");
                    window.location.href = "dashboard.html"; 
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }

    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            signOut(auth)
                .then(() => {
                    alert("Logged out successfully!");
                    window.location.href = "index.html"; 
                })
                .catch((error) => {
                    alert(error.message);
                });
        });
    }
});
