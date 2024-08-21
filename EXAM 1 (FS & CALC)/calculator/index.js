const express = require("express");
const app = express();
app.use(express.json());

app.post("/sum/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`Add a+b = ${Number(a) + Number(b)}`);
});

app.post("/sub/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`Sub a-b = ${a - b}`);
});
app.post("/multi/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`Multi a*b = ${a * b}`);
});
app.post("/div/:a/:b", (req, res) => {
    const { a, b } = req.params;
    res.send(`Div a/b = ${a / b}`);
});

app.listen("2906", () => {
    console.log("Successfull !!");
});