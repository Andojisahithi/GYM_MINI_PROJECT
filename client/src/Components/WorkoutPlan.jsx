import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkOutPlan = () => {
  const [registration, setRegistration] = useState(null); // Fetched user data
  const [filteredPlan, setFilteredPlan] = useState(null);
  const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage

  useEffect(() => {
    // Fetch user registration data
    const fetchRegistration = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/fitnessRegistrationsData/${userId}`
        );
        console.log("Fetched Registration Data:", response.data); // Log fetched data
        setRegistration(response.data.data[0]); // Store the first registration object
      } catch (err) {
        console.error("Error fetching registration data:", err);
      }
    };

    fetchRegistration();
  }, [userId]);

  useEffect(() => {
    if (!registration) return;

  
const jsonData = [
    {
        fitnessTypes: [
            {
                fitnessGoal: "Gain weight",
                workOutType: [
                    {
                        WorkOutTitle: "Gym",
                        plans: [
                            {
                                monthPlan: "1 Month",
                                planStructure: [
                                    {
                                        "Frequency": "4–5 days per week.",
                                        "Focus": "Compound movements (squats, bench press, deadlifts) and hypertrophy (muscle growth).",
                                        "ProgressiveOverload": "Gradually increase weights or reps every week.",
                                        "Duration": "60–75 minutes per session."

                                    }
                                ],
                                Breakdown: [
                                    {
                                        heading: "Month-1 Building Strength",
                                        "Goal": "Establish a solid foundation in form and strength.",
                                        DailyPlan: [
                                            {
                                                Day1: [
                                                    {
                                                        heading: "Day1-Chest and Triceps",
                                                        "Bench Press": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Incline Dumbbell Press": "3 sets of 10–12 reps.",
                                                        "Tricep Dips (Assisted if needed)": "3 sets of 8–10 reps.",
                                                        "Cable Tricep Pushdowns": "3 sets of 12–15 reps.",
                                                        "Push-Ups": "3 sets to failure."

                                                    }
                                                ],
                                                Day2: [
                                                    {
                                                        heading: "Day2-Back and Biceps",
                                                        "Deadlifts": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Lat Pulldowns": "3 sets of 10–12 reps.",
                                                        "Dumbbell Rows": "3 sets of 8–10 reps (each arm)",
                                                        "Barbell Bicep Curls": "3 sets of 10–12 reps.",
                                                        "Hammer Curls": "3 sets of 12–15 reps."

                                                    }
                                                ],
                                                Day3: [
                                                    {
                                                        heading: "Day3-Rest or Active Recovery",
                                                        "example": "light yoga or walking"
                                                    }
                                                ],
                                                Day4: [
                                                    {
                                                        heading: "Day4-Legs and Core",
                                                        "Squats": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Leg Press": "3 sets of 10–12 reps.",
                                                        "Romanian Deadlifts": "3 sets of 8–10 reps.",
                                                        "Calf Raises": "3 sets of 15–20 reps.",
                                                        "Plank": "3 sets of 30–60 seconds."

                                                    }
                                                ],
                                                Day5: [
                                                    {
                                                        heading: "Day 5- Shoulders and Arms",
                                                        "Overhead Shoulder Press (Barbell or Dumbbells)": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Lateral Raises": "3 sets of 12–15 reps.",
                                                        "Dumbbell Shrugs": "3 sets of 15–20 reps.",
                                                        "Skull Crushers": "3 sets of 10–12 reps.",
                                                        "Concentration Curls": "3 sets of 12–15 reps."

                                                    }
                                                ],
                                                Day6: [
                                                    {
                                                        heading: "Day 6-Full-Body/Weak Area Focus",
                                                        "Power Cleans or Kettlebell Swings": "3 sets of 10 reps.",
                                                        "Pull-Ups or Chin-Ups": "3 sets of 8–10 reps.",
                                                        "Walking Lunges": "3 sets of 10 steps (each leg).",
                                                        "Core Circuit": "Bicycle Crunches, Russian Twists, and Hanging.",
                                                        "Leg Raises": "(3 rounds)."
                                                    }
                                                ],
                                                Day7: [
                                                    {
                                                        heading: "Day 7- Rest and Recovery",
                                                        

                                                    }
                                                ]
                                            }
                                        ]
                                    },

                                ],
                                TipstoSuccess: [
                                    {
                                        "WarmUpAndCoolDown": "5–10 minutes of cardio or dynamic stretches before workouts.",
                                        "ProgressiveOverload": "Gradually increase weights, reps, or intensity weekly.",
                                        "Nutrition": "Consume a calorie surplus with a balanced diet (protein-rich foods, complex carbs, healthy fats).",
                                        "Rest": "Allow 48–72 hours for muscle recovery for the same muscle group.Supplements (Optional): Consider protein shakes, creatine, or BCAAs if needed."
                                    }
                                ]
                            },
                            {
                                monthPlan: "2 Months",
                                planStructure: [
                                    {
                                        "Frequency": "4–5 days per week.",
                                        "Focus": "Compound movements (squats, bench press, deadlifts) and hypertrophy (muscle growth).",
                                        "ProgressiveOverload": "Gradually increase weights or reps every week.",
                                        "Duration": "60–75 minutes per session."

                                    }
                                ],
                                Breakdown: [
                                    {
                                        heading : "Month-1 Building Strength",
                                        Goal: "Establish a solid foundation in form and strength.",
                                        DailyPlan: [
                                            {
                                                Day1: [
                                                    {
                                                        heading: "Day1-Chest and Triceps",
                                                        "Bench Press": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Incline Dumbbell Press": "3 sets of 10–12 reps.",
                                                        "Tricep Dips (Assisted if needed)": "3 sets of 8–10 reps.",
                                                        "Cable Tricep Pushdowns": "3 sets of 12–15 reps.",
                                                        "Push-Ups": "3 sets to failure."

                                                    }
                                                ],
                                                Day2: [
                                                    {
                                                        heading: "Day2-Back and Biceps",
                                                        "Deadlifts": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Lat Pulldowns": "3 sets of 10–12 reps.",
                                                        "Dumbbell Rows": "3 sets of 8–10 reps (each arm)",
                                                        "Barbell Bicep Curls": "3 sets of 10–12 reps.",
                                                        "Hammer Curls": "3 sets of 12–15 reps."

                                                    }
                                                ],
                                                Day3: [
                                                    {
                                                        heading: "Day3-Rest or Active Recovery",
                                                        "example": "light yoga or walking"
                                                    }
                                                ],
                                                Day4: [
                                                    {
                                                        heading: "Day4-Legs and Core",
                                                        "Squats": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Leg Press": "3 sets of 10–12 reps.",
                                                        "Romanian Deadlifts": "3 sets of 8–10 reps.",
                                                        "Calf Raises": "3 sets of 15–20 reps.",
                                                        "Plank": "3 sets of 30–60 seconds."

                                                    }
                                                ],
                                                Day5: [
                                                    {
                                                        heading: "Day 5- Shoulders and Arms",
                                                        "Overhead Shoulder Press (Barbell or Dumbbells)": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Lateral Raises": "3 sets of 12–15 reps.",
                                                        "Dumbbell Shrugs": "3 sets of 15–20 reps.",
                                                        "Skull Crushers": "3 sets of 10–12 reps.",
                                                        "Concentration Curls": "3 sets of 12–15 reps."

                                                    }
                                                ],
                                                Day6: [
                                                    {
                                                        heading: "Day 6- Full-Body/Weak Area Focus",
                                                        "Power Cleans or Kettlebell Swings": "3 sets of 10 reps.",
                                                        "Pull-Ups or Chin-Ups": "3 sets of 8–10 reps.",
                                                        "Walking Lunges": "3 sets of 10 steps (each leg).",
                                                        "Core Circuit": "Bicycle Crunches, Russian Twists, and Hanging.",
                                                        "Leg Raises": "(3 rounds)."
                                                    }
                                                ],
                                                Day7: [
                                                    {
                                                        heading: "Day 7- Rest and Recovery",
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        heading: "Month-2 Increasing Intensity",
                                        Goal: "Build muscle mass by increasing weights and volume.",
                                        "1": "Increase weights by 5–10% compared to Month 1.",
                                        "2": "Add 1 extra set to key compound exercises.",
                                        "3": "Reduce rest time between sets to 60 seconds for isolation exercises."
                                    }
                                ],
                                TipstoSuccess: [
                                    {
                                        "WarmUpAndCoolDown": "5–10 minutes of cardio or dynamic stretches before workouts.",
                                        "ProgressiveOverload": "Gradually increase weights, reps, or intensity weekly.",
                                        "Nutrition": "Consume a calorie surplus with a balanced diet (protein-rich foods, complex carbs, healthy fats).",
                                        "Rest": "Allow 48–72 hours for muscle recovery for the same muscle group.Supplements (Optional): Consider protein shakes, creatine, or BCAAs if needed."
                                    }
                                ]
                            },
                            {
                                monthPlan: "3 Months",
                                planStructure: [
                                    {
                                        "Frequency": "4–5 days per week.",
                                        "Focus": "Compound movements (squats, bench press, deadlifts) and hypertrophy (muscle growth).",
                                        "Progressive Overload": "Gradually increase weights or reps every week.",
                                        "Duration": "60–75 minutes per session."

                                    }
                                ],
                                Breakdown: [
                                    {
                                        heading: "Month-1 Building Strength",
                                        Goal: "Establish a solid foundation in form and strength.",
                                        DailyPlan: [
                                            {
                                                Day1: [
                                                    {
                                                        heading: "Day1-Chest and Triceps",
                                                        "Bench Press": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Incline Dumbbell Press": "3 sets of 10–12 reps.",
                                                        "Tricep Dips (Assisted if needed)": "3 sets of 8–10 reps.",
                                                        "Cable Tricep Pushdowns": "3 sets of 12–15 reps.",
                                                        "Push-Ups": "3 sets to failure."

                                                    }
                                                ],
                                                Day2: [
                                                    {
                                                        heading: "Day2-Back and Biceps",
                                                        "Deadlifts": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Lat Pulldowns": "3 sets of 10–12 reps.",
                                                        "Dumbbell Rows": "3 sets of 8–10 reps (each arm)",
                                                        "Barbell Bicep Curls": "3 sets of 10–12 reps.",
                                                        "Hammer Curls": "3 sets of 12–15 reps."

                                                    }
                                                ],
                                                Day3: [
                                                    {
                                                        heading: "Day3-Rest or Active Recovery",
                                                        "example": "light yoga or walking"
                                                    }
                                                ],
                                                Day4: [
                                                    {
                                                        heading: "Day4-Legs and Core",
                                                        "Squats": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Leg Press": "3 sets of 10–12 reps.",
                                                        "Romanian Deadlifts": "3 sets of 8–10 reps.",
                                                        "Calf Raises": "3 sets of 15–20 reps.",
                                                        "Plank": "3 sets of 30–60 seconds."

                                                    }
                                                ],
                                                Day5: [
                                                    {
                                                        heading: "Day 5- Shoulders and Arms",
                                                        "Overhead Shoulder Press (Barbell or Dumbbells)": "4 sets of 10, 8, 8, 6 reps.",
                                                        "Lateral Raises": "3 sets of 12–15 reps.",
                                                        "Dumbbell Shrugs": "3 sets of 15–20 reps.",
                                                        "Skull Crushers": "3 sets of 10–12 reps.",
                                                        "Concentration Curls": "3 sets of 12–15 reps."

                                                    }
                                                ],
                                                Day6: [
                                                    {
                                                        heading: "Day 6- Full-Body/Weak Area Focus",
                                                        "Power Cleans or Kettlebell Swings": "3 sets of 10 reps.",
                                                        "Pull-Ups or Chin-Ups": "3 sets of 8–10 reps.",
                                                        "Walking Lunges": "3 sets of 10 steps (each leg).",
                                                        "Core Circuit": "Bicycle Crunches, Russian Twists, and Hanging.",
                                                        "Leg Raises": "(3 rounds)."
                                                    }
                                                ],
                                                Day7: [
                                                    {
                                                        heading: "Day 7- Rest and Recovery",
                                                        

                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        heading: "Month-2 Increasing Intensity",
                                        Goal: "Build muscle mass by increasing weights and volume.",
                                        "1": "Increase weights by 5–10% compared to Month 1.",
                                        "2": "Add 1 extra set to key compound exercises.",
                                        "3": "Reduce rest time between sets to 60 seconds for isolation exercises."
                                    },
                                    {
                                        heading: "Month-3 Advanced Hypertrophy",
                                        Goal: "Maximize muscle growth and endurance.",
                                        "1": "Use drop sets for the last set of each exercise.",
                                        "2": "Include supersets (e.g., combine bench press with push-ups).",
                                        "3": "Incorporate more advanced moves like Bulgarian Split Squats and Weighted Pull-Ups."
                                    }
                                ],
                                TipstoSuccess: [
                                    {
                                        "Warm-Up and Cool Down": "5–10 minutes of cardio or dynamic stretches before workouts.",
                                        "Progressive Overload": "Gradually increase weights, reps, or intensity weekly.",
                                        "Nutrition": "Consume a calorie surplus with a balanced diet (protein-rich foods, complex carbs, healthy fats).",
                                        "Rest": "Allow 48–72 hours for muscle recovery for the same muscle group.Supplements (Optional): Consider protein shakes, creatine, or BCAAs if needed."
                                    }
                                ]
                            },
                        ],
                    },

                ],
            },
        ],
    }
];


     // Filter the data based on fetched registration data
  const filteredData = jsonData
  .flatMap((data) => data.fitnessTypes)
  .find((type) => type.fitnessGoal === registration.fitnessGoal) // Match fitnessGoal
  ?.workOutType.find((workout) => workout.WorkOutTitle === registration.workoutType) // Match workoutType
  ?.plans.find((plan) => plan.monthPlan === registration.duration); // Match duration

console.log("Filtered Plan Data:", filteredData); // Log the filtered plan data

// Set the filtered data
setFilteredPlan(filteredData || null); // Set the filtered plan, null if not found

  }, [registration]);


  return (
    <div>
      <h1>Workout Plan</h1>
      {filteredPlan ? (
        <div>
          <h2>Plan Details</h2>
          {/* Plan Structure */}
          <div>
            <strong>Frequency:</strong> {filteredPlan.planStructure[0].Frequency}
          </div>
          <div>
            <strong>Focus:</strong> {filteredPlan.planStructure[0].Focus}
          </div>
          <div>
            <strong>Progressive Overload:</strong>{" "}
            {filteredPlan.planStructure[0].ProgressiveOverload}
          </div>
          <div>
            <strong>Duration:</strong>{" "}
            {filteredPlan.planStructure[0].Duration}
          </div>
          {/* Breakdown */}
          <div>
            <h3>Breakdown</h3>
            {filteredPlan.Breakdown?.length > 0 ? (
              filteredPlan.Breakdown.map((breakdown, index) => (
                <div key={index}>
                  <h4>{breakdown.heading}</h4>
                  <p>Goal:{breakdown.Goal}</p>
                  <div>
                 
                    {
  breakdown.DailyPlan?.length > 0 ? (
    breakdown.DailyPlan.map((day, dayIndex) => (
      <div key={dayIndex}>
        <strong>Daily Plan:</strong>
        {Object.entries(day).map(([dayKey, dayValue]) => (
          <div key={dayKey}>
            {/* <h5>{dayKey}</h5> */}
            {/* <strong>Daily Plan:</strong> */}
            {dayValue?.map((activity, activityIndex) => (
              <div key={activityIndex}>
                <strong>{activity.heading}</strong>
                <ul>
                  {Object.entries(activity)
                    .filter(([key]) => key !== "heading")
                    .map(([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    ))
  ) : (
    // Fallback content if DailyPlan is not available
    <div>
     {Object.entries(breakdown)
  .filter(([key]) => key !== "heading" && key !== "Goal") // Filter out "heading" and "goal"
  .map(([key, value]) => (
    <div key={key}>
      <ul>
        {Array.isArray(value) ? (
          value.map((item, index) => (
            <li key={index}>{item}</li> // Render array items directly
          ))
        ) : (
          <li>{value}</li> // Render non-array value
        )}
      </ul>
    </div>
  ))}

    </div>
  )
}

                  </div>
                </div>
              ))
            ) : (
              <p>No breakdown available.</p>
            )}
          </div>
  
          {/* Tips to Success */}
          <div>
            <h3>Tips to Success</h3>
            <ul>
              {filteredPlan.TipstoSuccess?.length > 0 ? (
                filteredPlan.TipstoSuccess.map((tip, index) => (
                  <li key={index}>
                    <strong>Warm-Up:</strong> {tip.WarmUpAndCoolDown}
                    <br />
                    <strong>Progressive Overload:</strong>{tip.ProgressiveOverload}
                    <br/>
                    <strong>Nutrition:</strong> {tip.Nutrition}
                    <br/>
                    <strong>Rest:</strong>{tip.Rest}
                  </li>
                ))
              ) : (
                <p>No tips available.</p>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading or no matching plan found.</p>
      )}
    </div>
  );
  






//   return (
//     <div>
//       <h1>Workout Plan</h1>
//       {filteredPlan ? (
//         <div>
//           <h2>Plan Details</h2>
//           {/* Plan Structure */}
//           <div>
//             <strong>Frequency:</strong> {filteredPlan.planStructure[0].Frequency}
//           </div>
//           <div>
//             <strong>Focus:</strong> {filteredPlan.planStructure[0].Focus}
//           </div>
//           <div>
//             <strong>Progressive Overload:</strong>{" "}
//             {filteredPlan.planStructure[0].ProgressiveOverload}
//           </div>

//           {/* Breakdown */}
//           <div>
//             <h3>Breakdown</h3>
//             {filteredPlan.Breakdown.map((breakdown, index) => (
//               <div key={index}>
//                 <h4>{breakdown.heading}</h4>
//                 <p>{breakdown.Goal}</p>
//                 <div>
//                   <strong>Daily Plan:</strong>
//                   {breakdown.DailyPlan.map((day, dayIndex) => (
//                     <div key={dayIndex}>
//                       {Object.entries(day).map(([dayKey, dayValue]) => (
//                         <div key={dayKey}>
//                           <h5>{dayKey}</h5>
//                           {dayValue.map((activity, activityIndex) => (
//                             <div key={activityIndex}>
//                               <strong>{activity.heading}</strong>
//                               <ul>
//                                 {Object.entries(activity)
//                                   .filter(([key]) => key !== "heading")
//                                   .map(([key, value]) => (
//                                     <li key={key}>
//                                       {key}: {value}
//                                     </li>
//                                   ))}
//                               </ul>
//                             </div>
//                           ))}
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Tips to Success */}
//           <div>
//             <h3>Tips to Success</h3>
//             <ul>
//               {filteredPlan.TipstoSuccess.map((tip, index) => (
//                 <li key={index}>
//                   <strong>Warm-Up:</strong> {tip.WarmUpAndCoolDown}
//                   <br />
//                   <strong>Nutrition:</strong> {tip.Nutrition}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <p>Loading or no matching plan found.</p>
//       )}
//     </div>
//   );
};

export default WorkOutPlan;
