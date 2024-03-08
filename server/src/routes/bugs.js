import express from "express";
import BugModel from "../models/Bug.js";

const router=express.Router();

router.post("/create",async (req,res)=>{
    try{
        const {title,description,image,priority,status}=req.body;
        const newBug=new BugModel({title,description,image,priority,status});
        console.log(newBug);

        const result=await newBug.save();
        res.status(201).json({
            createdBug:{
                title:result.title,
                description:result.description,
                image:result.image,
                priority:result.priority,
                status:result.status
            }
        })

    }catch(err)
    {
        res.status(400).json({message:err.message});
    }
});

router.get("/get", async (req,res)=>{
    try{
        const bugs= await BugModel.find({});
        return res.status(200).json(bugs);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.put("/update",async (req,res)=>{
    try{
        const {_id,status}=req.body;
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
        res.status(201).json({message:"Updated suceesfully"});
    }catch(err){
        res.status(400);
    }
}

);

export  {router as bugRouter};