import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './components/Login/Login';
import SignupPage from './components/Signup/SignUp';
import TaskBoard from './components/taskboard/TaskBoard';
import Weather from './components/Weather/Weather'; // New import
import Calculator from './components/Calculator/Calculator'; // New import
import Navbar from './components/Navbar';
function App() {
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('userData')) || {});

  const handleSignup = (user) => {
    const validationErrors = validateUser(user);

    if (validationErrors.length === 0) {
      localStorage.setItem('userData', JSON.stringify(user));
      setUserData(user);
    } else {
      alert(validationErrors.join('\n'));
    }
  };

  const validateUser = (user) => {

    const validationErrors = [];

    if (user.username.length < 4) {
      validationErrors.push('Username must be at least 4 characters long');
    }

    if (user.password.length < 6) {
      validationErrors.push('Password must be at least 6 characters long');
    }


    return validationErrors;
  };

  const handleLogin = (user) => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && user.username === storedUserData.username && user.password === storedUserData.password) {
      setUserData(storedUserData);
    } else {
      console.error('Invalid credentials');
    }
  };


  const handleLogout = () => {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser) {
      storedUser.isAuthenticated = false;
      localStorage.setItem('userData', JSON.stringify(storedUser));
    }
    setUserData({});
  };

  return (
    <Router>
      <div className="App">
        {userData.username && <Navbar onLogout={handleLogout} />}

        <Routes>
          <Route
            path="/login"
            element={userData.username ? <Navigate to="/taskboard" /> : <LoginPage onLogin={handleLogin} />}
          />
          <Route
            path="/signup"
            element={userData.username ? <Navigate to="/taskboard" /> : <SignupPage onSignup={handleSignup} />}
          />
          <Route path="/taskboard" element={userData.username ? <TaskBoard /> : <Navigate to="/login" />} />
          <Route
            path="/weather"
            element={
              userData.username ? (
                <Weather />
              ) : (
                <Navigate to="/login" state={{ from: '/weather' }} />
              )
            }
          />
          <Route
            path="/calculator"
            element={userData.username ? <Calculator /> : <Navigate to="/login" />}
          />
          <Route path="/" element={<Navigate to="/taskboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
