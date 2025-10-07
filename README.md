# notes-app-full-stack-example

A full-stack notes management application built with Angular and Node.js.

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Contributing](#contributing)

## 📁 Project Structure

```
project-root/
├── frontend/          # Angular application
│   ├── src/
│   ├── package.json
│   └── angular.json
├── backend/           # Node.js backend API
│   ├── src/
│   └── package.json
├── package.json       # Root package.json with concurrent scripts
└── README.md
```

## ⚙️ Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v22.x or higher) - [Download here](https://nodejs.org/)
- **npm** (v10 or higher - comes with Node.js)
- **MongoDB** (v4.4 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **Angular CLI** (v19 or higher) - Install globally using the command below

```bash
npm install -g @angular/cli@19
```

**Check your versions:**
```bash
node --version    # Should show v22.x.x
npm --version     # Should show v10.x.x
ng version        # Should show Angular CLI 19.x.x
```

### MongoDB Setup

**Option 1: Local MongoDB**
1. Install MongoDB Community Edition
2. Start MongoDB service:
   ```bash
   # macOS (using Homebrew)
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod

   # Windows
   # MongoDB runs as a service automatically after installation
   ```

**Option 2: MongoDB Atlas (Cloud)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Use it in your `.env` file

## 🚀 Installation

Follow these steps to set up the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/parth2187/notes-app-full-stack-example
cd notes-app-full-stack-example
```

### 2. Install root dependencies

```bash
npm install
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Install backend dependencies

```bash
cd backend
npm install
cd ..
```

### 5. Configure environment variables

**Backend Environment Setup:**

1. Navigate to the backend directory and create a `.env` file:

```bash
cd backend
cp .env.example .env
```

2. Open `.env` and configure your MongoDB connection:

```env
PORT=3000
MONGODB_URI="mongodb url"
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:4300,http:vercel.app
```

**Note:** Make sure MongoDB is installed and running on your machine. If you're using MongoDB Atlas (cloud), replace the `MONGODB_URI` with your Atlas connection string.

**Frontend Environment Setup:**

Angular uses environment files for configuration:

- **Development:** `frontend/src/environments/environment.ts` - Points to `http://localhost:3000/api`
- **Production:** `frontend/src/environments/environment.prod.ts` - Points to your production domain

These files are automatically selected based on the build configuration. No manual changes needed during development.

## 🏃 Running the Application

### Option 1: Run Both Frontend and Backend Together (Recommended)

From the project root directory, run:

```bash
npm start
```

This command will:
- ✅ Start the backend server
- ✅ Start the frontend development server on port 4300
- ✅ Automatically open your browser to `http://localhost:4300`

### Option 2: Run Frontend and Backend Separately

**To run only the backend:**
```bash
npm run start:backend
```

**To run only the frontend:**
```bash
npm run start:frontend
```

## 📜 Available Scripts

### Root Directory Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs both frontend and backend concurrently |
| `npm run start:backend` | Runs backend server only |
| `npm run start:frontend` | Runs frontend application only (port 4300) |

### Frontend Scripts (in `frontend/` directory)

| Command | Description |
|---------|-------------|
| `npm start` | Start development server (default port 4200) |
| `npm run build` | Build for production with optimizations |
| `npm run watch` | Build in watch mode for development |
| `npm test` | Run unit tests with Karma |
| `npm run serve:ssr:notes-app` | Serve the SSR application |

### Backend Scripts (in `backend/` directory)

| Command | Description |
|---------|-------------|
| `npm start` | Start the backend server |
| `npm run dev` | Start with hot reload (if configured) |
| `npm test` | Run backend tests |

## 🛠️ Technologies Used

### Frontend
- **Angular 19** - Frontend framework
- **Angular Material** - UI component library
- **Bootstrap 5** - CSS framework
- **TypeScript 5.7** - Programming language
- **RxJS 7.8** - Reactive programming library
- **SweetAlert2** - Beautiful alert/modal library
- **Angular SSR** - Server-side rendering support

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **TypeScript/JavaScript** - Programming language

### Development Tools
- **Concurrently** - Run multiple commands concurrently

## 🌐 Port Configuration

- **Frontend:** http://localhost:4300
- **Backend:** http://localhost:3000 (default)

## ✨ Features

- Create, read, update, and delete notes
- Template-driven form validation
- Responsive user interface
- RESTful API backend

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request

### Issue Tracking

- Check existing issues before creating a new one
- Use descriptive titles and provide detailed descriptions
- Reference issues in commits using `Fixes #issue-number`

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

Parth Kawatra- [My GitHub Profile](https://github.com/parth2187)

## 📧 Support

If you have any questions or need help, please open an issue in the repository.

---

**Happy Coding!** 🎉