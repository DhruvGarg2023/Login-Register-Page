# 🔐 MERN Stack Login-Register Page

This project is a **MERN stack** (MongoDB, Express.js, React.js, Node.js) based Login and Register page. It demonstrates how a frontend built with React communicates with a backend built using Express and MongoDB to perform user authentication.

## 📌 Features

- 🧑‍💼 User Registration with form validation
- 📦 MongoDB for storing user credentials
- 🔄 Full-stack integration using RESTful APIs
- ✨ React frontend with user-friendly UI
- ✅ Express.js backend with clear API structure

## 🧠 What I Learned

Through this project, I understood:

- How to connect a React frontend to an Express backend
- How to handle API calls using Axios
- How to manage backend routes for login and registration
- How to store and retrieve data from MongoDB

## 📁 Project Structure

<pre>
```bash 
Login-Register-MERN/
├── Frontend
│   ├── src/
│   │   ├── LoginPage.js
│   │   ├── RegistrationPage.js
│   │   ├── LoginPage.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── Backend
│   ├── DB/
│   │   ├── db.js
│   │   ├── User.js
│   ├── package-lock.json
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
</pre>


## 🔗 Technologies Used

- Frontend: React.js, Axios, CSS
- Backend: Node.js, Express.js, MongoDB, Mongoose
- Dev Tools: Nodemon, Postman (for testing APIs)

## 📦 API Routes

- POST /api/register: 
  Registers a new user.

  Body:
  {
  "name": "Virat Kohli",
  "password": "kohli269"
  }

- POST /api/login:
  Authenticates an existing user.

  Body:
  {
  "name": "Dhruv Garg",
  "password": "28012006"
  }

## 🙌 Contributing

Want to improve the project? Feel free to open issues or submit pull requests.

## 📄 License

This project is open-source and available under the MIT License.



