const express= require('express');
const app = express();
const connectDB = require('./DB/db'); // Adjust the path as necessary
const User = require('./DB/User'); 
const cors = require('cors'); // Importing CORS for cross-origin resource sharing

const port = 8000; // Define a simple route, you can change the port as needed

app.use(express.json()); // Middleware to parse JSON bodies

//Enable CORS for all routes
app.use(cors()); // Use CORS middleware to allow cross-origin requests

//Registration 
app.post('/register', async(req,res) => {
    try{
        const { username, password } = req.body; // Destructure username and password from the request body
        console.log(req.body);
        const user = new User({ username, password }); // Create a new user instance
        await user.save(); // Save the user to the database
        res.status(201).json({ message: 'User registered successfully' }); // Respond with success 

    }
    catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
})

//Login
app.post('/login', async (req, res) => {
    try{
        const { username, password } = req.body; // Destructure username and password from the request body
        console.log(req.body);
        const user = await User.findOne({ username}); // Find the user by username

        if(!user) {
            return res.status(404).json({ message: 'Invalid Username' }); // If user not found, respond with 404
        }
        if(user.password !== password) {
            return res.status(401).json({ message: 'Invalid Password' }); // If password does not match, respond with 401
        }
        res.status(200).json({ message: 'Login successful' }); // If login is successful, respond with 200
       
    }
    catch (error) {
        res.status(500).json({ message: 'Login failed' });
    }
});

connectDB() // Connect to the database

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});