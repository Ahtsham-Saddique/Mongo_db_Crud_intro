const express = require("express");
const app = express();

const userSchema = require("./usermodel");

app.get("/", (req, res) => {
    res.send("hi this is Sham tech welcome");
});


// CREATE
app.get("/create", async (req, res) => {
    let createdUser = await userSchema.create({
        user: "1st",
        username: "Ahtsham",
        email: "ahthsam@gmail.com"
    });

    res.send(createdUser);
});


// UPDATE
app.get("/update", async (req, res) => {
    let updateduser = await userSchema.findOneAndUpdate(
        { username: "Ahtsham" },
        { username: "Sham" },
        { new: true }
    );

    

    res.send(updateduser);
});



// SERVER
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});