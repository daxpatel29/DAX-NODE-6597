const user = require("../model/user.schema");
const sendMail = require("../service/mailService");
const cookieParser = require("cookie-parser");

const getUser = async (req, res) => {
  const user= await user.find();
  res.json(user);
};

const createUser = async (req, res) => {
  let { username, email, password } = req.body;

  let user = {
    username,
    email,
    password,
  };
  const isExists = User?.await.findOne({ email: email });
  if (!isExists) {
    let data = await user.create(user);
    res.send(data);
  } else {
    res.send({ user: isExists, msg: "user already exists" });
  }
};

let otps = new Map();

const sendOtp = async (req, res) => {
  let { email } = req.body;
  let user = await user.findOne({ email: email });

  if (!user) {
    res.send({ msg: "user does not exist!" });
  } else {
    const otp = Math.floor(Math.random() * 10000);
    otps.set(email, otp);

    let html = `<h2> Your OTP is ${otp}</h2>`;

    sendMail(email, "OTP", html);
    res.cookieParser("id", user.id).send({ msg: "OTP sent successfully!" });
  }
};

const loggingin = async (req, res) => {
  const { email, otp } = req.body;
  const user = await user.findOne({ email: email });
  if (!user) {
    res.send({ msg: "user does not exist" });
  }

  // verify

  if (otps.get(email) === otp) {
    res.send({ msg: "OTP verified" });
  } else {
    res.send({ msg: "OTP not verified" });
  }
  user.isVerified = true;
  await user.save();

  res.cookieParser("id", user.id).send({ msg: "user verified" });
  res.send({ msg: "User verified" });
};

const updateUser = async (req, res) => {
  let { id } = req.params;
  let data = await user.findByIdAndUpdate(id, req.body, { new: true });

  res.send(data);
};

const deleteUser = async (req, res) => {
  let { id } = req.params;
  let data = await user.findByIdAndDelete(id);
  res.send(data);
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  loggingin,
  sendOtp,
};