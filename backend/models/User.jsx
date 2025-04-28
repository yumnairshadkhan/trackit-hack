import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    assignedTo: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
});

const Task = mongoose.model('Task', TaskSchema);
export default Task;