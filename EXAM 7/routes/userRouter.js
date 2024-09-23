
const { Router } = require("express")
const user = require("./models/player_schema")
const { getUser, createUser, deleteUser, updateUser, upload, getIndex, login } = require("../controllers/user.controller")

const userRouter = Router()


userRouter.get("/", getUser)
userRouter.post("/", upload.single("img"), createUser)
userRouter.delete("/:id", deleteUser)
userRouter.patch("/:id", updateUser)


userRouter.post("/upload", upload.single("img"), (req, res) => {
    console.log("req.file", req.file);
    res.send("file uploaded successfully")
})

userRouter.get("/login", (req, res) => {
    res.render("login");
})

userRouter.post("/login", login)
userRouter.get("/signup", (req, res) => {
    res.render("signup")
});

userRouter.get("/index", getIndex)



userRouter.delete("/delete", async(req, res) => {

let user=await user.delete()


res.send({user,msg: "delete"})

});

module.exports = userRouter
