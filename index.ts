import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { Task } from "./models/task";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: `${process.env.HOST}`, // Allow requests from frontend
    // origin: "*", // Allow requests from frontend
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allowed headers
  })
);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.get("/api/tasks", async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.post("/api/tasks", async (req: Request, res: Response) => {
  try {
    const { title, description, dueDate, assignee, priority, status } =
      req.body;
    const newTask = new Task({
      title,
      description,
      dueDate,
      assignee,
      priority,
      status,
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.put("/api/tasks/:id", async (req: Request<{ id: string }>, res: any) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, assignee, priority, status } =
      req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, assignee, priority, status },
      { new: true }
    ).exec();

    if (!updatedTask) return res.status(404).json({ error: "Task not found" });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

app.delete("/api/tasks/:id", async (req: Request<{ id: string }>, res: any) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id).exec();

    if (!deletedTask) return res.status(404).json({ error: "Task not found" });
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

// Vercel compatibility
export default app;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
