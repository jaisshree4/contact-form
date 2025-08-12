document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let valid = true;

    // Clear old errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";
    document.getElementById("successMessage").style.opacity = "0";

    // Name check
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        valid = false;
    }

    // Email check with regex
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    // Message check
    if (message === "") {
        document.getElementById("messageError").textContent = "Message is required.";
        valid = false;
    }

    // If valid, show success
    if (valid) {
        let successMsg = document.getElementById("successMessage");
        successMsg.textContent = "✅ Form submitted successfully!";
        successMsg.style.opacity = "1";
        document.getElementById("contactForm").reset();
    }
});
