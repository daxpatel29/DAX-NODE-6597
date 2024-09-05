const express = require('express')
const db = require('./db')
const app = express()
app.use(express.json());

app.get("/", async (req, res) => {
    let data = await User.find()
    res.send(data)
})

app.post("/post", async (req, res) => {

    let data = await User.Create(req.body)
    res.send(data);
})

app.patch("/:id", async (req, res) => {
    let { id } = req.params
    let data = await User.findByIdAndUpdate(id, req.body)
    res.send(data);

})

app.delete(":/id", async (req, res) => {
console.log(req.params);

res.send("Deleted Successfully")
})


app.listen(8090, () => {
    console.log("listening on port 8090");
    dbconnect()



})