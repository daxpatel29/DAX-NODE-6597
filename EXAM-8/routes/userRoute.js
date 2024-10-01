const { Router } = require("express");
const {
    getUser,
  createUser,
  updateUser,
  deleteUser,
  sendOtp,
  loggingin,
} = require("../controllers/user.controller");

const userRouter = Router();

userRouter.get("/", getUser);
userRouter.post("/", sendOtp, createUser);
userRouter.patch("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", loggingin);

module.exports = userRouter;