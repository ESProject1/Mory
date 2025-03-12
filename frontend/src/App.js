import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import FindId from "./pages/FindId/FindId"; 
import FindPassword from "./pages/FindPassword/FindPassword"; 
import Journal from './pages/Journal/Journal';
import Mypage from './pages/Mypage/Mypage';
import Memo from './pages/Memo/Memo';
import Users from './pages/Users/Users';
import Checklist from './pages/Checklist/Checklist';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-id" element={<FindId />} /> 
        <Route path="/find-password" element={<FindPassword />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/memo" element={<Memo />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;
