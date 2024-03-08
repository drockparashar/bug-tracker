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
  }, // Assuming the image is a URL or file path
  // assigner: {
  //   type: String,
  //   default: false,
  // },
  // assignedTo: {
  //   type: String,
  // },
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

const BugModel = mongoose.model('buge', bugSchema);

export default BugModel
