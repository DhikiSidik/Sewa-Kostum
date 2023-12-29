import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login';
import AdminPage from './Components/Admin/admin';
import User from './Components/Users/user';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<User/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
