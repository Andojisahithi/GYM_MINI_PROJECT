import React, { useEffect, useState } from 'react';
import fitnessData from './WorkoutPlan.json';
import axios from "axios";

const WorkoutPlan = () => {
  const [data, setData] = useState(fitnessData);
  const [registrations, setRegistrations] = useState([]);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/fitnessRegistrationsData/${userId}`);
        setRegistrations(response.data.data); // Update state with fetched data
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchRegistrations();
  }, []); // Empty dependency array ensures it runs only once




  return (
    <div>
      <h1>Fitness Registrations</h1>
      <ul>

        {registrations.map((registration) => (
          <li key={registration._id}>
            <p><strong>HealthIssue:</strong> {registration.healthIssues}</p>
            <p><strong>Fitness Goal:</strong> {registration.fitnessGoal}</p>
            <p><strong>Workout Type:</strong> {registration.workoutType}</p>
            <p><strong>Duration:</strong> {registration.duration}</p>
            <hr />
          </li>
        ))}
      </ul>
      {data && data.length > 0 && data.map((healthData, index) => (
        <div key={index}>
          <h1>Fitness Plan for Health Issue: {healthData.healthIssues}</h1>
          {healthData.fitnessTypes && healthData.fitnessTypes.length > 0 && healthData.fitnessTypes.map((fitnessType, index) => (
            <div key={index}>
              <h2>Fitness Goal: {fitnessType.fitnessGoal}</h2>
              {fitnessType.workOutType && fitnessType.workOutType.length > 0 && fitnessType.workOutType.map((workOutType, i) => (
                <div key={i}>
                  <h3>Workout Title: {workOutType.WorkOutTitle}</h3>
                  {workOutType.plans && workOutType.plans.length > 0 && workOutType.plans.map((plan, j) => (
                    <div key={j}>
                      <h4>Plan for: {plan.monthPlan}</h4>
                      <p>Suggestion: {plan.suggestion}</p>

                      <h5>Diet Breakdown:</h5>
                      {plan.Breakdown && plan.Breakdown.length > 0 && (
                        <ul>
                          {Object.entries(plan.Breakdown[0]).map(([meal, calories], k) => (
                            <li key={k}>
                              {meal}: {calories}
                            </li>
                          ))}
                        </ul>
                      )}

                      <h5>Diet Plan:</h5>
                      {plan.DietPlan && plan.DietPlan.length > 0 && plan.DietPlan.map((meal, k) => (
                        <div key={k}>
                          <h6>{meal.Heading}</h6>
                          <ul>
                            {Object.entries(meal).map(([key, item], l) => (
                              key !== "Heading" && <li key={l}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <h5>{plan.FoodToInclude && plan.FoodToInclude[0] && plan.FoodToInclude[0].Heading}</h5>
                      {plan.FoodToInclude && plan.FoodToInclude.length > 0 && (
                        <ul>
                          {Object.entries(plan.FoodToInclude[0]).map(([key, item], k) => (
                            key !== "Heading" && <li key={k}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WorkoutPlan;








