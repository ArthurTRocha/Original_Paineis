import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home.jsx";
import QuemSomos from "../pages/QuemSomos.jsx"
import TrabalheConosco from "../pages/TrabalheConosco.jsx"
import Login from "../pages/Login.jsx";
import Obrigado from "../pages/Obrigado.jsx"
import Pagina404 from "../pages/Pagina404.jsx"
import Painel from "../pages/Painel.jsx"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/quemsomos" element={<QuemSomos/>} />
        <Route path="/trabalheconosco" element={<TrabalheConosco/>} />
        <Route path="/paineladm" element={<Login/>} />
        <Route path="/obrigado" element={<Obrigado/>} />
        <Route path="*" element={<Pagina404/>} />
        <Route path="/painel" element={<Painel/>} />
      </Routes>
    </Router>
  );
}

export default App;
