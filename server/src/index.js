import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { bugRouter } from "./routes/bugs.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/bug",bugRouter);

mongoose.connect("mongodb+srv://pranshu007parashar:g5PAnEWaJX2lKUza@cluster0.blxbsca.mongodb.net/bug_tracker?retryWrites=true&w=majority&appName=Cluster0")
        .then(()=>console.log("Connected to database"))
        .catch(()=>console.log("Could not connect"))

app.listen(3002, () => console.log("Server started"));