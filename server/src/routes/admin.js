import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();
import { UserModel } from "../models/Users.js";

router.post("/adminRegister", async (req, res) => {
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
        role: "admin",
      });
      await newUser.save();
      res.status(200).json({ message: "Admin registered successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  router.post("/adminLogin", async (req, res) => {
    try {
      const { username, password,role } = req.body;
      const user = await UserModel.findOne({ username });
      if(user.role!="admin") return res.status(404).json({ message: "Invalid Access" });
      
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
  
  export { router as adminRouter };