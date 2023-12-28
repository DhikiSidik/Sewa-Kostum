import React from 'react';

const styles = `
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .login-box {
    padding: 20px;
    max-width: 400px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }

  .input-label {
    text-align: left;
    margin-bottom: 5px;
  }

  .input-field {
    padding: 8px;
    border: 2px solid #000000;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .login-button {
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }

  .login-button:hover {
    background-color: #0056b3;
  }
`;

const LoginPage = () => {
  return (
    <div className="login-container">
      <style>{styles}</style>
      <div className="login-box">
        <div className="input-container">
          <label className="input-label">Username:</label>
          <input className="input-field" type="text" />
        </div>

        <div className="input-container">
          <label className="input-label">Password:</label>
          <input className="input-field" type="password" placeholder="Enter password" />
        </div>

        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
