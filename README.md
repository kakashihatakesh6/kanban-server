# Kanban Board Server

## Overview
This is a **Kanban Board API server** built with **Node.js, Express, and MongoDB**. It allows users to **create, read, update, and delete (CRUD)** tasks for a Kanban board.

## Features
- 🛠️ **RESTful API** for managing tasks
- 📦 **MongoDB Database** integration
- 🔐 **Environment variables support** using `dotenv`
- 🚀 **CORS-enabled** for frontend integration
- 📜 **Middleware for logging API calls**
- 🏗️ **Deployed on Vercel** (compatible with serverless environments)

## Tech Stack
- **Node.js** & **Express** for backend
- **MongoDB** with **Mongoose** for data storage
- **CORS** for secure API access
- **Dotenv** for environment variable management
- **Vercel** for deployment

---

## Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/kanban-server.git
cd kanban-server
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Create a `.env` File
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your-mongodb-connection-string
HOST=http://localhost:3000  # Update this with your frontend URL
```

### 4️⃣ Run the Server
#### Development Mode
```sh
npm run dev
```
#### Production Mode
```sh
npm start
```

---

## API Endpoints

### 🌟 Root Endpoint
```http
GET /
```
**Response:**
```json
{
  "success": true,
  "message": "Welcome to the Kanban Server!"
}
```

### 📌 Get All Tasks
```http
GET /api/tasks
```
**Response:**
```json
[
  {
    "_id": "task-1",
    "title": "Create project proposal",
    "description": "Draft the initial project proposal",
    "dueDate": "2023-07-15",
    "assignee": "Alex Johnson",
    "priority": "High",
    "status": "To Do"
  }
]
```

### 🆕 Create a Task
```http
POST /api/tasks
```
**Request Body:**
```json
{
  "title": "New Task",
  "description": "Task description",
  "dueDate": "2023-08-01",
  "assignee": "John Doe",
  "priority": "Medium",
  "status": "In Progress"
}
```
**Response:**
```json
{
  "_id": "task-123",
  "title": "New Task",
  "description": "Task description",
  "dueDate": "2023-08-01",
  "assignee": "John Doe",
  "priority": "Medium",
  "status": "In Progress"
}
```

### ✏️ Update a Task
```http
PUT /api/tasks/:id
```
**Request Body:** _(Same as Create Task)_

### 🗑️ Delete a Task
```http
DELETE /api/tasks/:id
```
**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

---

## Deployment
### 🚀 Deploy on Vercel
1. Install Vercel CLI: `npm install -g vercel`
2. Run `vercel` and follow the prompts
3. Your server will be live at `https://your-kanban-server.vercel.app`

---

## License
📜 MIT License

## Author
👤 **Your Name**
- GitHub: [@kakashihatakesh6](https://github.com/kakashihatakesh6)
- LinkedIn: [Nikhil Dasar](https://www.linkedin.com/in/nikhildasar/)

