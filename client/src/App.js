import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import FitnessRegistration from "./Components/FitnessRegistration.jsx";
import DietPlan from "./Components/DietPlan.jsx"; 
import HomePage from "./Components/HomePage.jsx";
import AboutUs from "./Components/AboutUs.jsx";
import WorkOutPlan from "./Components/WorkOutPlan.jsx";

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fitnessRegistration/:userId" element={<FitnessRegistration />} />
        <Route path="/DietPlan/:userId" element={<DietPlan />} />
        <Route path="/WorkOutPlan/:userId" element={<WorkOutPlan/>} />
      </Routes>
    </Router>
  );
}

export default App;
