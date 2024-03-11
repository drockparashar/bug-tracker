import express from "express";
import BugModel from "../models/Bug.js";
import { verifyToken } from "./user.js";
import { UserModel } from "../models/Users.js";

const router = express.Router();

router.post("/create",  async (req, res) => {
  try {
    const {
      title,
      description,
      image,
      assignedBy,
      assignedTo,
      priority,
      status,
    } = req.body;
    const newBug = new BugModel({
      title,
      description,
      image,
      assignedBy,
      assignedTo,
      priority,
      status,
    });
    console.log(newBug);

    const result = await newBug.save();
    res.status(201).json({
      createdBug: {
        title: result.title,
        description: result.description,
        image: result.image,
        assignedBy: result.assignedBy,
        assignedTo: result.assignedTo,
        priority: result.priority,
        status: result.status,
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/get", async (req, res) => {
  try {
    const bugs = await BugModel.find({});
    return res.status(200).json(bugs);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/getUsers", async (req, res) => {
  try {
    const users = await UserModel.find({ role: "user" });
    return res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/update",  async (req, res) => {
  try {
    const { _id, status } = req.body;
    // const filter = { _id:id };
    // const update = { $set: { priority: prioriti } };
    // const result = await collection.updateOne(filter, update);
    const updatedBug = await BugModel.findByIdAndUpdate(
      _id,
      { status },
      { new: true } // Return the updated document
    );

    if (!updatedBug) {
      // If the document with the provided _id is not found
      return res.status(404).json({ message: req.body._id });
    }

    res.status(200).json({ message: "Updated successfully", updatedBug });
  } catch (err) {
    res.status(400);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const _id = req.body;

    const deleteBug = await BugModel.findByIdAndDelete(_id);

    if (!deleteBug) {
      return res.status(404).json({ message: "Bug not found" });
    }
    return res.status(201).json({ message: "Bug Deleted Succesfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export { router as bugRouter };
