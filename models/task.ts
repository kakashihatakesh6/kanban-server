import mongoose from "mongoose";

interface ITask {
  title: string;
  description: string;
  dueDate: string;
  assignee: string;
  priority: "Low" | "Medium" | "High";
  status: "To Do" | "In Progress" | "Completed";
  createdAt?: Date;
  updatedAt?: Date;
}

const taskSchema = new mongoose.Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: String, required: true },
    assignee: { type: String, required: true },
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    status: { type: String, enum: ["To Do", "In Progress", "Completed"], required: true },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

export const Task = mongoose.model<ITask>("Task", taskSchema);