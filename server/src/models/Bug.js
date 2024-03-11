import mongoose from "mongoose";
const bugSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, 
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
  },
  priority: {
    type: String,
    enum: ['Low', 'Normal', 'High', 'Critical'],
    default: 'Normal',
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Testing', 'Closed'],
    default: 'New',
  },
}, { timestamps: true });

const BugModel = mongoose.model('bug', bugSchema);

export default BugModel
