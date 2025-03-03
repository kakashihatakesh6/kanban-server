```md
# Kanban Board API

A **Kanban Board API** built with **Express.js** and **MongoDB**, providing a backend for managing tasks.

## Features
- RESTful API for managing Kanban tasks.
- MongoDB as a database with Mongoose ODM.
- CORS configuration for secure frontend communication.
- Middleware for logging route hits.
- Deployed on **Vercel** with environment-specific configurations.

## Tech Stack
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose**
- **TypeScript**
- **CORS** for handling cross-origin requests
- **dotenv** for environment variables

## Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/your-repo/kanban-server.git
cd kanban-server
npm install
```

## Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
HOST=http://localhost:3000
NODE_ENV=development
```

## Running the Server

Start the development server:

```sh
npm run dev
```

Start the production server:

```sh
npm start
```

## API Endpoints

### Base URL
- **Local**: `http://localhost:5000`
- **Production**: `https://your-vercel-url.vercel.app`

### Routes

#### 1. Get all tasks
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

#### 2. Create a task
```http
POST /api/tasks
```
**Request Body:**
```json
{
  "title": "Design UI",
  "description": "Create UI mockups",
  "dueDate": "2023-07-20",
  "assignee": "John Doe",
  "priority": "Medium",
  "status": "In Progress"
}
```

#### 3. Update a task
```http
PUT /api/tasks/:id
```
**Request Body:** *(same as POST request)*

#### 4. Delete a task
```http
DELETE /api/tasks/:id
```
**Response:**
```json
{
  "message": "Task deleted successfully"
}
```

## Deployment on Vercel

To deploy on **Vercel**, follow these steps:

1. Install Vercel CLI:
   ```sh
   npm i -g vercel
   ```
2. Run:
   ```sh
   vercel
   ```
3. Follow the CLI instructions to deploy.

## Logging
The API logs every request with a timestamp:
```sh
[2025-03-03T12:00:00.000Z] ✅ Route hit: GET /api/tasks
```

## Contributing
Feel free to open issues or submit pull requests.

## License
MIT License.
```

