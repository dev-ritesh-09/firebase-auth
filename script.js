import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const messageBox = document.getElementById("message");
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        messageBox.textContent = "Login successful!";
        messageBox.style.color = "green";
    } catch (error) {
        messageBox.textContent = "Error: " + error.message;
        messageBox.style.color = "red";
    }
});
