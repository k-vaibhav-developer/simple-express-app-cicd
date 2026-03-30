import express from "express";
const app = express();

const PORT = 5001;

app.get("/", (req,res) => {
    res.send(`<h1>Welcome to Home Page.</h1>`);
});

app.get("/user", (req,res) => {
    res.send(`<h1>Welcome to User Page.</h1>`);
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));