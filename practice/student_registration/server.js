const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

const filePath = path.join(__dirname, "student.json");

app.post("/register", (req, res) => {

    const student = req.body;

    let data = { students: [] };

    if (fs.existsSync(filePath)) {
        data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    }

    student.id = data.students.length + 1;

    data.students.push(student);

    fs.writeFileSync(
        filePath,
        JSON.stringify(data, null, 4)
    );

    res.json({
        success: true,
        message: "Registration Successful!"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});