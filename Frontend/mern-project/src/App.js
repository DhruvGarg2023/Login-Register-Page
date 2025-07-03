import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'; // Importing BrowserRouter, Routes, and Route from react-router-dom
import LoginPage from './LoginPage'; 
import RegistrationPage from './RegistrationPage'; 

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} /> {/* Route for the login page */}
        <Route path="register" element={<RegistrationPage />} /> {/* Route for the registration page */}
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
