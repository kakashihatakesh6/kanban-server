import express, { Request, Response } from "express";
import mongoose, { FilterQuery } from "mongoose";
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
    origin: ["*"],
  })
);

// MongoDB Connection
mongoose
  .connect(
    process.env.MONGO_URI as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Routes
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch tasks" });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const { content } = req.body;
    const newTask = new Task({ content });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.put("/api/tasks/:id", async (req: Request<{ id: string }>, res: any) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!content) return res.status(400).json({ error: "Content is required" });

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { content },
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

if (process.env.NODE_ENV !== "vercel") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
