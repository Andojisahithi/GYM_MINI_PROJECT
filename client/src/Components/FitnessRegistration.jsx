

import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import './Styles/FitnessRegistration.css';

const FitnessRegistration = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [bmi, setBmi] = useState("");
  const [healthIssues, setHealthIssues] = useState([]);
  const [otherHealth, setOtherHealth] = useState("");
  const [workoutType, setWorkoutType] = useState("");
  const [duration, setDuration] = useState("");
  const [dietPlan, setDietPlan] = useState("");

  const { userId } = useParams(); // Retrieve userId from URL
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
  
    const userId = localStorage.getItem("userId");
    const registrationData = {
      userId, 
      name,
      age,
      bmi,
      healthIssues,
      otherHealth,
      fitnessGoal,
      workoutType,
      duration,
      dietPlan,
    };
  
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/fitness-registration",
        registrationData,
        {
          headers: {
            Authorization: `Bearer ${userId}`,
          },
        }
      );
      console.log(response);  // Log the response to check the backend's reply
      if (response.data.success) {
        navigate(`/DietPlan/${userId}`);
      } else {
        alert("Error: Could not register. Please try again.");
      }
    } catch (err) {
      console.error("Error registering:", err);
      alert("Error: Could not register. Please try again.");
    }
  };
  

  const handleOtherHealthChange = (e) => {
    const { checked } = e.target;
    if (checked) {
      setHealthIssues((prevState) => [...prevState, "Other"]);
    } else {
      setHealthIssues((prevState) => prevState.filter((issue) => issue !== "Other"));
      setOtherHealth("");
    }
  };

  const handleHealthIssueChange = (e) => {
    const { value, checked } = e.target;
  
    if (value === "None" && checked) {
      // Clear all other selections and only check "None"
      setHealthIssues(["None"]);
    } else if (value === "None" && !checked) {
      // Uncheck "None"
      setHealthIssues([]);
    } else {
      // For other checkboxes
      setHealthIssues((prevState) => {
        const withoutNone = prevState.filter((issue) => issue !== "None"); // Remove "None" if other checkboxes are selected
        return checked ? [...withoutNone, value] : withoutNone.filter((issue) => issue !== value);
      });
    }
  };

  return (
    <div className="fitness_registration_container">
      <div className="fitness_registration_form_wrapper">
        <h3 className="fitness_registration_subheading">Get Started with Your Fitness Journey</h3>
        <form onSubmit={handleRegister}>
          <div className="fitness_registration_form_group">
            <label htmlFor="name" className="fitness_registration_label">Name</label>
            <input
              type="text"
              className="fitness_registration_input"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="fitness_registration_form_group">
            <label htmlFor="age" className="fitness_registration_label">Age</label>
            <input
              type="number"
              className="fitness_registration_input"
              id="age"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              required
            />
          </div>

          <div className="fitness_registration_form_group">
            <label htmlFor="bmi" className="fitness_registration_label">Your BMI</label>
            <input
              type="text"
              className="fitness_registration_input"
              id="bmi"
              name="bmi"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
              placeholder="E.g., 18.5 - 24.9"
              required
            />
          </div>

          <div className="fitness_registration_form_group">
            <label className="fitness_registration_label">Any Health Concerns</label>
            <div className="fitness_registration_checkbox_group">
              <label>
                <input
                  className="fitness_registration_checkbox"
                  type="checkbox"
                  value="None"
                  checked={!healthIssues.length}
                  onChange={handleHealthIssueChange}
                />
                None
              </label>
              <label>
                <input
                  className="fitness_registration_checkbox"
                  type="checkbox"
                  value="Diabetes"
                  onChange={handleHealthIssueChange}
                />
                Diabetes
              </label>
              <label>
                <input
                  className="fitness_registration_checkbox"
                  type="checkbox"
                  value="Heart Disease"
                  onChange={handleHealthIssueChange}
                />
                Heart Disease
              </label>
              <label>
                <input
                  className="fitness_registration_checkbox"
                  type="checkbox"
                  value="Blood Pressure"
                  onChange={handleHealthIssueChange}
                />
                Blood Pressure
              </label>
              <label>
                <input
                  className="fitness_registration_checkbox"
                  type="checkbox"
                  value="Asthma"
                  onChange={handleHealthIssueChange}
                />
                Asthma
              </label>
              <label>
                <input
                  className="fitness_registration_checkbox"
                  type="checkbox"
                  value="Lactose Intolerance"
                  onChange={handleHealthIssueChange}
                />
                Lactose Intolerance
              </label>
              <label>
                <input
                  className="fitness_registration_checkbox"
                  type="checkbox"
                  value="Other"
                  onChange={handleOtherHealthChange}
                />
                Other
              </label>
              {healthIssues.includes("Other") && (
                <input
                  type="text"
                  className="fitness_registration_input fitness_registration_input_other"
                  placeholder="Specify other health concerns"
                  value={otherHealth}
                  onChange={(e) => setOtherHealth(e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="fitness_registration_form_group">
            <label htmlFor="fitnessGoal" className="fitness_registration_label">Fitness Goal</label>
            <select
              className="fitness_registration_input"
              id="fitnessGoal"
              value={fitnessGoal}
              onChange={(e) => setFitnessGoal(e.target.value)}
              required
            >
              <option value="" disabled>Select your fitness goal</option>
              <option value="Lose Weight">Lose Weight</option>
              <option value="Gain weight">Gain Weight</option>
            </select>
          </div>

          <div className="fitness_registration_form_group">
            <label htmlFor="workoutType" className="fitness_registration_label">Preferred Workout Type</label>
            <select
              className="fitness_registration_input"
              id="workoutType"
              value={workoutType}
              onChange={(e) => setWorkoutType(e.target.value)}
              required
            >
              <option value="" disabled>Select workout type</option>
              <option value="Gym">Gym</option>
              <option value="Yoga">Yoga</option>
              <option value="Muscle Workout">Muscle Workout</option>
              <option value="Pilates">Pilates</option>
              <option value="Aerobic Exercise">Aerobic Exercise</option>
              <option value="Personal Homework Workout">Personal Homework Workout</option>
            </select>
          </div>

          <div className="fitness_registration_form_group">
            <label htmlFor="duration" className="fitness_registration_label">Workout Duration</label>
            <select
              className="fitness_registration_input"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            >
              <option value="" disabled>Select duration</option>
              <option value="1 Month">1 Month</option>
              <option value="2 Months">2 Months</option>
              <option value="3 Months">3 Months</option>
            </select>
          </div>

          <div className="fitness_registration_form_group">
            <label htmlFor="dietPlan" className="fitness_registration_label">Diet Preference</label>
            <select
              className="fitness_registration_input"
              id="dietPlan"
              value={dietPlan}
              onChange={(e) => setDietPlan(e.target.value)}
              required
            >
              <option value="" disabled>Select diet plan</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Non-Vegetarian">Non-Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>

          <button type="submit" className="fitness_registration_button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default FitnessRegistration;
