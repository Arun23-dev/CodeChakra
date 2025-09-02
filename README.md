# CodeChakra 🚀

A modern coding platform inspired by LeetCode, built with React, Node.js, and MongoDB. CodeChakra provides a comprehensive environment for practicing coding problems, submitting solutions, and tracking your progress.

## ✨ Features

- **User Authentication**: Secure signup/login system with JWT tokens
- **Coding Problems**: Curated collection of programming challenges
- **Multiple Languages**: Support for C++, JavaScript, and Python
- **Code Submission**: Submit and test your solutions in real-time
- **Problem Management**: Create and manage coding problems (Admin)
- **Progress Tracking**: Monitor your submission history and performance
- **Modern UI**: Beautiful, responsive interface built with React and Tailwind CSS

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling with validation
- **Axios** - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Redis** - In-memory data structure store
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
CodeChakra/
├── Frontend/                 # React application
│   ├── src/
│   │   ├── pages/           # Page components
│   │   ├── store/           # Redux store configuration
│   │   ├── utils/           # Utility functions
│   │   └── App.jsx          # Main application component
│   └── package.json
├── Backend/                  # Node.js server
│   ├── src/
│   │   ├── config/          # Database and Redis configuration
│   │   ├── controllers/     # Business logic
│   │   ├── middleware/      # Authentication middleware
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   └── utils/           # Utility functions
│   └── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB
- Redis
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arun23-dev/LeetCodeClone-Project.git
   cd CodeChakra
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the Backend directory:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   REDIS_URL=your_redis_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Start the Development Servers**

   **Backend:**
   ```bash
   cd Backend
   npm start
   ```

   **Frontend:**
   ```bash
   cd Frontend
   npm run dev
   ```

   The application will be available at:
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📚 API Endpoints

### Authentication
- `POST /user/signup` - User registration
- `POST /user/login` - User login
- `POST /user/logout` - User logout

### Problems
- `GET /problem` - Get all problems
- `POST /problem` - Create new problem (Admin)
- `GET /problem/:id` - Get specific problem

### Submissions
- `POST /submission` - Submit code solution
- `GET /submission` - Get user submissions

## 🎯 Key Features Explained

### Problem Structure
Each coding problem includes:
- Title and description
- Difficulty level (Easy, Medium, Hard)
- Tags (Array, String, DB, Graph, Two Pointers)
- Visible test cases with explanations
- Hidden test cases for validation
- Starter code in multiple languages
- Reference solutions

### Code Submission
- Support for C++, JavaScript, and Python
- Real-time code execution and testing
- Performance metrics (runtime, memory usage)
- Test case validation
- Error handling and feedback

### User Management
- Secure authentication with JWT
- User profiles and progress tracking
- Submission history
- Admin privileges for problem creation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Arun Chaudhary**
- GitHub: [@Arun23-dev](https://github.com/Arun23-dev)

## 🙏 Acknowledgments

- Inspired by LeetCode's coding platform
- Built with modern web technologies
- Community-driven development

---

**Happy Coding! 🎉**
