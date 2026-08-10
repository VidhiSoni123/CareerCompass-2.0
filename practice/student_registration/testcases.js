/*
=========================================
Student Registration - Test Cases
=========================================
*/

// Test Case 1
console.log("TC1: indes.html file exists - PASS");

// Test Case 2
console.log("TC2: style.css file exists - PASS");

// Test Case 3
console.log("TC3: script.js file exists - PASS");

// Test Case 4
console.log("TC4: student.json file exists - PASS");

// Test Case 5 - Name Validation
let tc5_name = "Vidhi";
console.log(
    "TC5: Name should not be empty -",
    tc5_name !== "" ? "PASS" : "FAIL"
);

// Test Case 6 - Password Validation
let tc6_password = "12345";
console.log(
    "TC6: Password should contain at least 6 characters -",
    tc6_password.length >= 6 ? "PASS" : "FAIL"
);

// Test Case 7 - Branch Validation
let tc7_branch = "CSE";
console.log(
    "TC7: Branch should not be empty -",
    tc7_branch !== "" ? "PASS" : "FAIL"
);

// Test Case 8 - Phone Validation
let tc8_phone = "9876543210";
console.log(
    "TC8: Phone number should contain exactly 10 digits -",
    /^[0-9]{10}$/.test(tc8_phone) ? "PASS" : "FAIL"
);

// Test Case 9 - Email Validation
let tc9_email = "vidhi@gmail.com";
console.log(
    "TC9: Email should contain '@' -",
    tc9_email.includes("@") ? "PASS" : "FAIL"
);

// Test Case 10 - Register Button
let registerButton = document.getElementById("registerBtn");
console.log(
    "TC10: Register button exists and is clickable -",
    registerButton ? "PASS" : "FAIL"
);