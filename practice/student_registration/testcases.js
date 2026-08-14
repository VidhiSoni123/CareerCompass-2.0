/*
=========================================
Student Registration - Test Cases
=========================================
*/

const fs = require("fs");

let failed = 0;

function test(testNumber, description, condition) {
    if (condition) {
        console.log(`TC${testNumber}: ${description} - PASS`);
    } else {
        console.log(`TC${testNumber}: ${description} - FAIL`);
        failed++;
    }
}


// TC1 - index.html exists
test(
    1,
    "index.html file exists",
    fs.existsSync("practice/student_registration/index.html")
);


// TC2 - style.css exists
test(
    2,
    "style.css file exists",
    fs.existsSync("practice/student_registration/style.css")
);


// TC3 - script.js exists
test(
    3,
    "script.js file exists",
    fs.existsSync("practice/student_registration/script.js")
);


// TC4 - student.json exists
test(
    4,
    "student.json file exists",
    fs.existsSync("practice/student_registration/student.json")
);


// Read files
const html = fs.readFileSync(
    "practice/student_registration/index.html",
    "utf8"
);

const js = fs.readFileSync(
    "practice/student_registration/script.js",
    "utf8"
);

const json = fs.readFileSync(
    "practice/student_registration/student.json",
    "utf8"
);


// TC5 - Name validation exists
test(
    5,
    "Name validation is implemented",
    js.includes('name === ""')
);


// TC6 - Password validation exists
test(
    6,
    "Password validation is implemented",
    js.includes("password.length < 6")
);


// TC7 - Branch validation exists
test(
    7,
    "Branch validation is implemented",
    js.includes('branch === ""')
);


// TC8 - Phone validation exists
test(
    8,
    "Phone validation is implemented",
    js.includes("10")
);


// TC9 - Email validation exists
test(
    9,
    "Email validation is implemented",
    js.includes('email.includes("@")')
);


// TC10 - Register button exists
test(
    10,
    "Register button exists",
    html.includes('id="registerBtn"')
);


// Final result
console.log("\n=========================================");

if (failed > 0) {
    console.log(`${failed} test case(s) FAILED.`);
    process.exit(1);
} else {
    console.log("All test cases PASSED.");
    process.exit(0);
}