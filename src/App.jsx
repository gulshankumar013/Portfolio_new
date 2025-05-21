import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;
