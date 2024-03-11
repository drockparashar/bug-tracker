import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();
import { UserModel } from "../models/Users.js";

router.post("/userRegister", async (req, res) => {
  try {
    const { email, name, username, password } = req.body;
    const user = await UserModel.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      email,
      name,
      username,
      password: hashedPassword,
      role: "user",
    });
    await newUser.save();
    res.status(200).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/userLogin", async (req, res) => {
  try {
    const { username, password,role } = req.body;
    const user = await UserModel.findOne({ username });

    if(user.role!="user") return res.status(404).json({ message: "Invalid Access" });

    if (!user) return res.status(404).json({ message: "Invalid Username" });

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid Password" });
    const token = jwt.sign({ _id: user._id }, "secret");
    return res
      .status(200)
      .json({ token, userID: user._id, message: "Login Successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export const verifyToken = (req, res, next) => {
  const authToken = req.headers.authorization;
  if (authToken) {
    jwt.verify(authToken, "secret", (err) => {
      if (err) {
        return res.status(403);
      }
      next();
    });
  } else {
    res.status(401);
  }
};

export { router as userRouter };
