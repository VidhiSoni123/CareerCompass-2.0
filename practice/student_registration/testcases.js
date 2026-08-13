/*
=========================================
Student Registration - Test Cases
=========================================
*/

const fs = require("fs");
const vm = require("vm");

let failedTests = 0;

function pass(testName) {
    console.log(`PASS: ${testName}`);
}

function fail(testName, error) {
    console.error(`FAIL: ${testName}`);
    console.error(`     ${error}`);
    failedTests++;
}

/*
=========================================
TC1 - index.html exists
=========================================
*/

try {
    if (!fs.existsSync("practice/student_registration/index.html")) {
        throw new Error("index.html does not exist");
    }

    pass("TC1 - index.html file exists");
} catch (error) {
    fail("TC1 - index.html file exists", error.message);
}


/*
=========================================
TC2 - style.css exists
=========================================
*/

try {
    if (!fs.existsSync("practice/student_registration/style.css")) {
        throw new Error("style.css does not exist");
    }

    pass("TC2 - style.css file exists");
} catch (error) {
    fail("TC2 - style.css file exists", error.message);
}


/*
=========================================
TC3 - script.js exists
=========================================
*/

try {
    if (!fs.existsSync("practice/student_registration/script.js")) {
        throw new Error("script.js does not exist");
    }

    pass("TC3 - script.js file exists");
} catch (error) {
    fail("TC3 - script.js file exists", error.message);
}


/*
=========================================
TC4 - student.json exists and has
     correct basic structure
=========================================
*/

try {
    const data = JSON.parse(
        fs.readFileSync(
            "practice/student_registration/student.json",
            "utf8"
        )
    );

    if (!Array.isArray(data.students)) {
        throw new Error("'students' must be an array");
    }

    pass("TC4 - student.json exists and contains students array");
} catch (error) {
    fail(
        "TC4 - student.json exists and contains students array",
        error.message
    );
}


/*
=========================================
Create a small fake DOM so that the
actual script.js can be tested using Node
=========================================
*/

function createElement(value = "") {
    return {
        value: value,
        textContent: "",
        addEventListener: function () {}
    };
}

const elements = {
    name: createElement(),
    password: createElement(),
    branch: createElement(),
    phone: createElement(),
    email: createElement(),

    nameError: createElement(),
    passwordError: createElement(),
    branchError: createElement(),
    phoneError: createElement(),
    emailError: createElement(),

    successMessage: createElement(),

    registerBtn: createElement()
};

const fakeDocument = {
    getElementById: function (id) {
        return elements[id];
    }
};

const context = {
    document: fakeDocument,
    console: console
};

vm.createContext(context);

try {
    const scriptCode = fs.readFileSync(
        "practice/student_registration/script.js",
        "utf8"
    );

    vm.runInContext(scriptCode, context);
} catch (error) {
    console.error("Could not load script.js");
    console.error(error.message);
    process.exit(1);
}


/*
=========================================
Helper function
=========================================
*/

function resetForm() {
    elements.name.value = "";
    elements.password.value = "";
    elements.branch.value = "";
    elements.phone.value = "";
    elements.email.value = "";

    elements.nameError.textContent = "";
    elements.passwordError.textContent = "";
    elements.branchError.textContent = "";
    elements.phoneError.textContent = "";
    elements.emailError.textContent = "";
    elements.successMessage.textContent = "";
}


/*
=========================================
TC5 - Name Validation
=========================================
*/

try {
    resetForm();

    elements.name.value = "";
    elements.password.value = "123456";
    elements.branch.value = "CSE";
    elements.phone.value = "9876543210";
    elements.email.value = "vidhi@gmail.com";

    context.validateForm();

    if (elements.nameError.textContent === "") {
        throw new Error("Empty name was accepted");
    }

    pass("TC5 - Empty name is rejected");
} catch (error) {
    fail("TC5 - Empty name is rejected", error.message);
}


/*
=========================================
TC6 - Password Validation
=========================================
*/

try {
    resetForm();

    elements.name.value = "Vidhi";
    elements.password.value = "12345";
    elements.branch.value = "CSE";
    elements.phone.value = "9876543210";
    elements.email.value = "vidhi@gmail.com";

    context.validateForm();

    if (elements.passwordError.textContent === "") {
        throw new Error("Password with less than 6 characters was accepted");
    }

    pass("TC6 - Short password is rejected");
} catch (error) {
    fail("TC6 - Short password is rejected", error.message);
}


/*
=========================================
TC7 - Branch Validation
=========================================
*/

try {
    resetForm();

    elements.name.value = "Vidhi";
    elements.password.value = "123456";
    elements.branch.value = "";
    elements.phone.value = "9876543210";
    elements.email.value = "vidhi@gmail.com";

    context.validateForm();

    if (elements.branchError.textContent === "") {
        throw new Error("Empty branch was accepted");
    }

    pass("TC7 - Empty branch is rejected");
} catch (error) {
    fail("TC7 - Empty branch is rejected", error.message);
}


/*
=========================================
TC8 - Phone Validation
=========================================
*/

try {
    resetForm();

    elements.name.value = "Vidhi";
    elements.password.value = "123456";
    elements.branch.value = "CSE";
    elements.phone.value = "12345";
    elements.email.value = "vidhi@gmail.com";

    context.validateForm();

    if (elements.phoneError.textContent === "") {
        throw new Error("Invalid phone number was accepted");
    }

    pass("TC8 - Invalid phone number is rejected");
} catch (error) {
    fail("TC8 - Invalid phone number is rejected", error.message);
}


/*
=========================================
TC9 - Email Validation
=========================================
*/

try {
    resetForm();

    elements.name.value = "Vidhi";
    elements.password.value = "123456";
    elements.branch.value = "CSE";
    elements.phone.value = "9876543210";
    elements.email.value = "vidhi.gmail.com";

    context.validateForm();

    if (elements.emailError.textContent === "") {
        throw new Error("Invalid email was accepted");
    }

    pass("TC9 - Invalid email is rejected");
} catch (error) {
    fail("TC9 - Invalid email is rejected", error.message);
}


/*
=========================================
TC10 - Valid Registration
=========================================
*/

try {
    resetForm();

    elements.name.value = "Vidhi";
    elements.password.value = "123456";
    elements.branch.value = "CSE";
    elements.phone.value = "9876543210";
    elements.email.value = "vidhi@gmail.com";

    context.validateForm();

    if (
        elements.successMessage.textContent !==
        "Registration Successful!"
    ) {
        throw new Error("Valid registration was rejected");
    }

    pass("TC10 - Valid registration is accepted");
} catch (error) {
    fail("TC10 - Valid registration is accepted", error.message);
}


/*
=========================================
FINAL RESULT
=========================================
*/

console.log("\n=========================================");

if (failedTests > 0) {
    console.error(`${failedTests} test(s) failed.`);
    console.error("BUILD SHOULD FAIL.");
    process.exit(1);
} else {
    console.log("All 10 test cases passed.");
    console.log("BUILD CAN PASS.");
    process.exit(0);
}