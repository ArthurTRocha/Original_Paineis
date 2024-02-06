import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import QuemSomos from "../pages/QuemSomos.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/quemsomos" element={<QuemSomos/>} />
      </Routes>
    </Router>
  );
}

export default App;
