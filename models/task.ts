import mongoose from "mongoose";

interface ITask {
  content: string;
}

const taskSchema = new mongoose.Schema<ITask>({
  content: { type: String, required: true },
});

export const Task = mongoose.model<ITask>("Task", taskSchema);
