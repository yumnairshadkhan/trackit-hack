import express from "express";
import Task from "../models/Task.js";
import middleware from "../middleware/middleware.js";

const router = express.Router();


router.post("/add", middleware, async (req, res) => {
    try {
        const { title, description, assignedTo } = req.body;

        const newTask = new Task({
            title,
            description,
            userId: req.user.id,
            assignedTo
        });

        await newTask.save();

        return res.status(200).json({ success: true, message: "Task created successfully" });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Error in creating Task" });
    }
});

router.get("/", middleware, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        return res.status(200).json({ success: true, tasks });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Can't retrieve tasks" });
    }
});

router.put("/:id", middleware, async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        return res.status(200).json({ success: true, updatedTask });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Can't update Task" });
    }
});

router.delete("/:id", middleware, async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ success: false, message: "Task not found" });
        }

        return res.status(200).json({ success: true, deletedTask });
    } catch (error) {
        return res.status(500).json({ success: false, message: "Can't delete Task" });
    }
});

export default router;