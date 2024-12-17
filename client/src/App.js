import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import FitnessRegistration from "./Components/FitnessRegistration.jsx";
import WorkoutPlan from "./Components/WorkoutPlan.jsx"; 
import HomePage from "./Components/HomePage.jsx";
import AboutUs from "./Components/AboutUs.jsx";
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fitnessRegistration" element={<FitnessRegistration />} />
        <Route path="/workoutPlan" element={<WorkoutPlan />} />
      </Routes>
    </Router>
  );
}

export default App;
