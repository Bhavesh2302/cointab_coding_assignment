const { Router } = require("express");
require("dotenv").config();
const { UserModel } = require("../model/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const loginController = Router();

loginController.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });

  const hash = user.password;

  bcrypt.compare(password, hash, function (err, result) {
    if (err) {
      res.send({ message: "Something went wrong please" });
    }
    if (result === true) {
      const userData = {
        name: user.name,
        email: user.email,
      };
      let token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);
      res.send({
        message: "login successful",
        token: token,
        userData: userData,
      });
    } else {
      res.send({ message: "Something went wrong please" });
    }
  });
});

module.exports = {
  loginController,
};
