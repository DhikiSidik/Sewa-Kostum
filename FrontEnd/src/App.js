import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login';
import AdminPage from './Components/Admin/admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
