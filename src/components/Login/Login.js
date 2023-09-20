import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('userData'));

    if (storedUser && storedUser.username === userCredentials.username && storedUser.password === userCredentials.password) {
      const userData = { ...storedUser, isAuthenticated: true };
      localStorage.setItem('userData', JSON.stringify(userData));
      onLogin(userData);
      navigate('/taskboard');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <div className="form-container login-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            value={userCredentials.username}
            onChange={(e) => setUserCredentials({ ...userCredentials, username: e.target.value })}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            className="form-input"
            value={userCredentials.password}
            onChange={(e) => setUserCredentials({ ...userCredentials, password: e.target.value })}
          />
        </div>
        <button type="submit" className="form-button">Login</button>
      </form>
      <p>
        Don't have an account? <Link className="redirectbutton" to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export default LoginPage;
