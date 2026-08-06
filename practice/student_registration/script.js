// Register button event
document.getElementById("registerBtn").addEventListener("click", validateForm);

function validateForm() {

    // Get input values
    let name = document.getElementById("name").value.trim();
    let password = document.getElementById("password").value;
    let branch = document.getElementById("branch").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    // Error message elements
    let nameError = document.getElementById("nameError");
    let passwordError = document.getElementById("passwordError");
    let branchError = document.getElementById("branchError");
    let phoneError = document.getElementById("phoneError");
    let emailError = document.getElementById("emailError");
    let successMessage = document.getElementById("successMessage");

    // Clear previous messages
    nameError.textContent = "";
    passwordError.textContent = "";
    branchError.textContent = "";
    phoneError.textContent = "";
    emailError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    // Name Validation
    if (name === "") {
        nameError.textContent = "Name cannot be empty.";
        isValid = false;
    }

    // Password Validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }

    // Branch Validation
    if (branch === "") {
        branchError.textContent = "Branch cannot be empty.";
        isValid = false;
    }

    // Phone Validation
    if (!/^[0-9]{10}$/.test(phone)) {
        phoneError.textContent = "Phone number must contain exactly 10 digits.";
        isValid = false;
    }

    // Email Validation
    if (!email.includes("@")) {
        emailError.textContent = "Enter a valid email address.";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMessage.textContent = "Registration Successful!";
    }
}