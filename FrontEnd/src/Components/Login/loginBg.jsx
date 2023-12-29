import React from 'react';
import './login.css';

const LoginBackground = ({ children }) => {
  return (
    <div className="login-background">
      {children}
    </div>
  );
};

export default LoginBackground;
