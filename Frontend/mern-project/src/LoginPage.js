import React from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom for navigation
import axios from 'axios'; // Importing axios for making HTTP requests
//Axios is a promise-based HTTP client for the browser and Node.js, used to make requests to the backend server.

const LoginPage = () => {
     
    const [loginData,setLoginData] = React.useState({   // State to hold login data
        username: '',
        password: '',
    })

    const handleLoginChange = (event) => {
        //console.log(event); // Log the input value to the console
        const {name , value } = event.target; // Destructure name and value from the event target //name will take for both username and password, value will take the input value
        setLoginData((prevData) => ({
            ...prevData, // Spread the previous state to keep other fields intact
            [name]: value // Update the specific field in the loginData state
        }));
    }
    
    const handleLoginSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        try{
            const response = await axios.post('http://localhost:8000/login', loginData); // Make a POST request to the login endpoint with the loginData
            const {success, message} = response.data; // Destructure success and message from the response data
            if(success) {
                console.log('Login successful:', message); // Log success message to the console

            }
            else {
                console.error('Login failed:', message); // Log error message to the console if login fails
            }
        }
        catch (error) {
            console.error('Login failed:', error); // Log any errors that occur during the login process
        }
        setLoginData({
            username: '',
            password: '',
        }); // Reset the loginData state to empty strings after submission
    }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLoginSubmit}>
        <input type='text' name='username' placeholder='Username' value={loginData.username} onChange={handleLoginChange} required/>
        <input type='password' name='password' placeholder='Password' value={loginData.password} onChange={handleLoginChange} required/>
        <button type='submit'>Login</button>
        <p>
            Not Registered yet?
            <Link to='/register'>Registration</Link>
        </p>
      </form>
    </div>
  )
}

export default LoginPage
