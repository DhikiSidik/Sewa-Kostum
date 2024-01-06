import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import './login.css';
import LoginBackground from './loginBg';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Your authentication logic

    if (username && password) {
      navigate('/admin');
    } else {
      console.log('Authentication failed');
    }
  };

  return (
    <LoginBackground>
      <div className="wrapper">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              autoComplete='off'
            />
            <FaUserAlt className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="off"
            />
            <FaLock className="icon" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </LoginBackground>
  );
};

export default Login;
