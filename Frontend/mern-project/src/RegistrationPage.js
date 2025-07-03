import React from 'react'
import axios from 'axios'; 
import { Link } from 'react-router-dom'; 


const RegistrationPage = () => {

    const [registrationData, setRegistrationData] = React.useState({
        username: '',
        password: '',
    });

    const handleRegistrationChange = (event) => {
        const {name, value} = event.target;
        setRegistrationData((prevData) => ({
            ...prevData,
            [name]: value
        }));

    }

    const handleRegistrationSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        try {
            const response = await axios.post('http://localhost:8000/register', registrationData); // Make a POST request to the registration endpoint with the registrationData
            console.log(response.data); // Destructure success and message from the response data
            
        } catch (error) {
            console.error(error); // Log any errors that occur during the registration process
        }
        setRegistrationData({
            username: '',
            password: '',
        }); // Reset the registrationData state to empty strings after submission
    }
  return (
    <div>
      <h1>Registration Page</h1>
      <form onSubmit={handleRegistrationSubmit}>
        <input type='text' name='username' placeholder='Username' value={registrationData.username} onChange={handleRegistrationChange} required/>
        <input type='password' name='password' placeholder='Password' value={registrationData.password} onChange={handleRegistrationChange} required/>
        <button type='submit'>Register</button>
        <p>
            Already Registered?
            <Link to='/login'>Login</Link>
        </p>
      </form>
    </div>
  )
}

export default RegistrationPage
