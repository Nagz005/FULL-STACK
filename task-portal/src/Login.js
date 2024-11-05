import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import images from './Images.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // For programmatic navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation for demonstration
    if (username === 'default@gmail.com' && password === 'password123') {
      navigate('/dashboard'); // Redirect to dashboard
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  // Handle Google Sign-In button click (just setting default credentials)
  const handleGoogleSignIn = () => {
    setUsername('default@gmail.com');
    setPassword('password123');
  };

  const handleFacultySignIn = () => {
    setUsername('faculty@gmail.com');
    setPassword('password143');
    navigate('/userfaculty'); // Redirect to UserFaculty
  };

  return (
    <div className="login-container">
      <img src={images} alt="Logo" className="logo" />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Log in
        </button>
        <button type="button" onClick={handleGoogleSignIn} className="google-signin-button">
          Sign in with Admin
        </button>
        <button type="button" onClick={handleFacultySignIn} className="google-signin-button">
          Sign in with Faculty
        </button>
      </form>
    </div>
  );
}

export default Login;
