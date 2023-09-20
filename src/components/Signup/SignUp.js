import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignupPage({ onSignup }) {
  const navigate = useNavigate();
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignup(userCredentials);

    setTimeout(() => {
      navigate('/taskboard');
    }, 0);
  };

  return (
    <div className="form-container signup-container">
      <h2 className="form-title">Signup</h2>
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
        <button type="submit" className="form-button">Signup</button>
      </form>
      <p>
        Already have an account? <Link className="redirectbutton" to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
