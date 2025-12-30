// REGISTRATION VALIDATION
document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    const usernamePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!usernamePattern.test(username)) {
        message.style.color = "red";
        message.innerText = "Username must contain only characters";
        return;
    }

    if (!emailPattern.test(email)) {
        message.style.color = "red";
        message.innerText = "Enter a valid email address";
        return;
    }

    if (!phonePattern.test(phone)) {
        message.style.color = "red";
        message.innerText = "Phone number must be 10 digits";
        return;
    }

    if (password.length !== 8) {
        alert("Password must be exactly 8 characters");
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "Passwords do not match";
        return;
    }

    message.style.color = "green";
    message.innerText = "Registration successful!";
});


// LOGIN VALIDATION
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const loginMessage = document.getElementById("loginMessage");

    if (email === "" || password === "") {
        loginMessage.style.color = "red";
        loginMessage.innerText = "All fields are required";
        return;
    }

    loginMessage.style.color = "green";
    loginMessage.innerText = "Login successful!";
});
