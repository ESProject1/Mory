import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import FindId from "./pages/FindId/FindId"; 
import "./styles/global.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/find-id" element={<FindId />} /> 
      </Routes>
    </Router>
  );
};

export default App;
