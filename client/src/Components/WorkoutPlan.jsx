// import React, { useEffect, useState } from 'react';
// import fitnessData from './WorkoutPlan.json';
// import axios from "axios";

// const WorkoutPlan = () => {
//   const [data, setData] = useState(fitnessData);
//   const [registrations, setRegistrations] = useState([]);

//   const userId = localStorage.getItem("userId");
//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/fitnessRegistrationsData/${userId}`);
//         setRegistrations(response.data.data); // Update state with fetched data
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchRegistrations();
//   }, []); // Empty dependency array ensures it runs only once

//   return (
//     <div>
//       <h1>Fitness Registrations</h1>
//       <ul>

//         {registrations.map((registration) => (
//           <li key={registration._id}>
//             <p><strong>HealthIssue:</strong> {registration.healthIssues}</p>
//             <p><strong>Fitness Goal:</strong> {registration.fitnessGoal}</p>
//             <p><strong>Workout Type:</strong> {registration.workoutType}</p>
//             <p><strong>Duration:</strong> {registration.duration}</p>
//             <hr />
//           </li>
//         ))}
//       </ul>
//       {data && data.length > 0 && data.map((healthData, index) => (
//         <div key={index}>
//           <h1>Fitness Plan for Health Issue: {healthData.healthIssues}</h1>
//           {healthData.fitnessTypes && healthData.fitnessTypes.length > 0 && healthData.fitnessTypes.map((fitnessType, index) => (
//             <div key={index}>
//               <h2>Fitness Goal: {fitnessType.fitnessGoal}</h2>
//               {fitnessType.workOutType && fitnessType.workOutType.length > 0 && fitnessType.workOutType.map((workOutType, i) => (
//                 <div key={i}>
//                   <h3>Workout Title: {workOutType.WorkOutTitle}</h3>
//                   {workOutType.plans && workOutType.plans.length > 0 && workOutType.plans.map((plan, j) => (
//                     <div key={j}>
//                       <h4>Plan for: {plan.monthPlan}</h4>
//                       <p>Suggestion: {plan.suggestion}</p>

//                       <h5>Diet Breakdown:</h5>
//                       {plan.Breakdown && plan.Breakdown.length > 0 && (
//                         <ul>
//                           {Object.entries(plan.Breakdown[0]).map(([meal, calories], k) => (
//                             <li key={k}>
//                               {meal}: {calories}
//                             </li>
//                           ))}
//                         </ul>
//                       )}

//                       <h5>Diet Plan:</h5>
//                       {plan.DietPlan && plan.DietPlan.length > 0 && plan.DietPlan.map((meal, k) => (
//                         <div key={k}>
//                           <h6>{meal.Heading}</h6>
//                           <ul>
//                             {Object.entries(meal).map(([key, item], l) => (
//                               key !== "Heading" && <li key={l}>{item}</li>
//                             ))}
//                           </ul>
//                         </div>
//                       ))}

//                       <h5>{plan.FoodToInclude && plan.FoodToInclude[0] && plan.FoodToInclude[0].Heading}</h5>
//                       {plan.FoodToInclude && plan.FoodToInclude.length > 0 && (
//                         <ul>
//                           {Object.entries(plan.FoodToInclude[0]).map(([key, item], k) => (
//                             key !== "Heading" && <li key={k}>{item}</li>
//                           ))}
//                         </ul>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WorkoutPlan;























// import React, { useEffect, useState } from 'react';
// import axios from "axios";

// const WorkoutPlan = () => {
//   const [registrations, setRegistrations] = useState([]);

//   const userId = localStorage.getItem("userId");
//   useEffect(() => {
//     const fetchRegistrations = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/fitnessRegistrationsData/${userId}`);
//         setRegistrations(response.data.data); // Update state with fetched data
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       }
//     };

//     fetchRegistrations();
//   }, []); // Empty dependency array ensures it runs only once

//   return (
//     <div>
//       <h1>Fitness Registrations</h1>
//       <ul>

//         {registrations.map((registration) => (
//           <li key={registration._id}>
//             <p><strong>HealthIssue:</strong> {registration.healthIssues}</p>
//             <p><strong>Fitness Goal:</strong> {registration.fitnessGoal}</p>
//             <p><strong>Workout Type:</strong> {registration.workoutType}</p>
//             <p><strong>Duration:</strong> {registration.duration}</p>
//             <hr />
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// export default WorkoutPlan;

































import React, { useEffect, useState } from "react";
import axios from "axios";

const WorkoutPlan = () => {
  const [registrations, setRegistrations] = useState([]);
  const [matchedPlans, setMatchedPlans] = useState([]);

  const userId = localStorage.getItem("userId");

  // Sample JSON data (replace this with your JSON import or API call)
  const jsonData = [
    {
      healthIssues: "Asthma",
      fitnessTypes: [
        {
          fitnessGoal: "Gain weight",
          workOutType: [
            {
              WorkOutTitle: "Gym",
              plans: [
                {
                  monthPlan: "1 Month",
                  suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  Breakdown: [
                    {
                      BreakFast: "500-600 kcal",
                      MorningSnack: "300–400 kcal",
                      Lunch: "600–700 kcal",
                      EveningSnack: "300–400 kcal",
                      Dinner: "500–600 kcal",
                      OptionalSnack: "00–300 kcal",
                    },
                  ],
                  DietPlan: [
                    {
                      Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                      "1": "1 cup cooked oats with almond milk.",
                      "2": "1 tbsp almond butter.",
                      "3": "1 tbsp chia seeds.",
                      "4": "1 medium banana (sliced).",
                      "5": "Herbal Tea or Black Coffee.",
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                      "1": "150g grilled chicken or tofu.",
                      "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                      "3": "Olive oil and lemon dressing.",
                      "4": "1 cup cooked quinoa or brown rice."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)-Smoothie:",
                      "1": "1 cup unsweetened almond milk.",
                      "2": "1 scoop plant-based protein powder.",
                      "3": "1 tbsp peanut butter.",
                      "4": "1/2 cup frozen berries."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                      "1": "150g grilled salmon or 1 cup cooked lentils.",
                      "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                      "3": "1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "1 cup unsweetened coconut yogurt with a sprinkle of granola.",
                      "2": "1 tbsp sunflower seeds."
                    }
                  ],
                  "Food to Include": [
                    {
                      Heading: "Food to Include:",
                      "1": "Proteins: Chicken breast, salmon, eggs, tofu, lentils, chickpeas.",
                      "2": "Carbs: Oats, quinoa, brown rice, sweet potatoes, whole-grain bread.",
                      "3": "Fruits: Bananas, berries, apples, avocados.",
                      "4": "Vegetables: Leafy greens, cucumbers, tomatoes, carrots, broccoli.",
                      "5": "Healthy Fats: Olive oil, almond butter, chia seeds, nuts, seeds.",
                      "6": "Dairy Substitutes: Almond milk.",
                    },
                  ],
                },
                {
                  "monthPlan": "2 Months",
                  "suggestion": "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher)."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                },
                {
                  "monthPlan": "3 Months",
                  "suggestion": "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day.",
                      "Month 3": "~2,600–2,800 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan).",
                      "8": "Month 3:",
                      "9": "Increase portion of oats to 1.5 cups.",
                      "10": "Add a handful of walnuts or pecans."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, 1/2 avocado, spinach, and unsweetened cocoa powder."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato.",
                      "8": "Month 3:",
                      "9": "Increase protein to 200g (chicken, fish, or tofu).",
                      "10": "Add 1 tbsp tahini dressing to vegetables."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, banana, protein powder, and peanut butter."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables.",
                      "8": "Month 3:",
                      "9": "Use 200g salmon, tofu, or lentils.",
                      "10": "Include 1/2 cup chickpeas or kidney beans."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher).",
                      "5": "Month 3:",
                      "6": "Add 1 slice of whole-grain bread with almond butter."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                }
              ],
            },
            {
              "WorkOutTitle": "Yoga",
              "plans": [
                {
                  "monthPlan": "1 Month",
                  "suggestion": "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "BreakFast": "500-600 kcal",
                      "MorningSnack": "300–400 kcal",
                      "Lunch": "600–700 kcal",
                      "EveningSnack": "300–400 kcal",
                      "Dinner": "500–600 kcal",
                      "OptionalSnack": "00–300 kcal"
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                      "1": "1 cup cooked oats with almond milk.",
                      "2": "1 tbsp almond butter.",
                      "3": "1 tbsp chia seeds.",
                      "4": "1 medium banana (sliced).",
                      "5": "Herbal Tea or Black Coffee."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "2": "1 boiled egg or tofu scramble on whole-grain toast."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                      "1": "150g grilled chicken or tofu.",
                      "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                      "3": "Olive oil and lemon dressing.",
                      "4": "1 cup cooked quinoa or brown rice."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)-Smoothie:",
                      "1": "1 cup unsweetened almond milk.",
                      "2": "1 scoop plant-based protein powder.",
                      "3": "1 tbsp peanut butter.",
                      "4": "1/2 cup frozen berries."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                      "1": "150g grilled salmon or 1 cup cooked lentils.",
                      "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                      "3": "1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "1 cup unsweetened coconut yogurt with a sprinkle of granola.",
                      "2": "1 tbsp sunflower seeds."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken breast, salmon, eggs, tofu, lentils, chickpeas.",
                      "2": "Carbs: Oats, quinoa, brown rice, sweet potatoes, whole-grain bread.",
                      "3": "Fruits: Bananas, berries, apples, avocados.",
                      "4": "Vegetables: Leafy greens, cucumbers, tomatoes, carrots, broccoli.",
                      "5": "Healthy Fats: Olive oil, almond butter, chia seeds, nuts, seeds.",
                      "6": "Dairy Substitutes: Almond milk."
                    }
                  ]
                },
                {
                  "monthPlan": "2 Months",
                  "suggestion": "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher)."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                },
                {
                  "monthPlan": "3 Months",
                  "suggestion": "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day.",
                      "Month 3": "~2,600–2,800 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan).",
                      "8": "Month 3:",
                      "9": "Increase portion of oats to 1.5 cups.",
                      "10": "Add a handful of walnuts or pecans."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, 1/2 avocado, spinach, and unsweetened cocoa powder."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato.",
                      "8": "Month 3:",
                      "9": "Increase protein to 200g (chicken, fish, or tofu).",
                      "10": "Add 1 tbsp tahini dressing to vegetables."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, banana, protein powder, and peanut butter."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables.",
                      "8": "Month 3:",
                      "9": "Use 200g salmon, tofu, or lentils.",
                      "10": "Include 1/2 cup chickpeas or kidney beans."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher).",
                      "5": "Month 3:",
                      "6": "Add 1 slice of whole-grain bread with almond butter."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                }
              ]
            }
          ],
        },
        {}
      ],
    },
    {
      "healthIssues": "Diabetes",
      "fitnessTypes": [
        {
          "fitnessGoal": "Gain weight",
          "workOutType": [
            {
              "WorkOutTitle": "Gym",
              "plans": [
                {
                  "monthPlan": "1 Month",
                  "suggestion": "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "BreakFast": "500-600 kcal",
                      "MorningSnack": "300–400 kcal",
                      "Lunch": "600–700 kcal",
                      "EveningSnack": "300–400 kcal",
                      "Dinner": "500–600 kcal",
                      "OptionalSnack": "00–300 kcal"
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                      "1": "1 cup cooked oats with almond milk.",
                      "2": "1 tbsp almond butter.",
                      "3": "1 tbsp chia seeds.",
                      "4": "1 medium banana (sliced).",
                      "5": "Herbal Tea or Black Coffee."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "2": "1 boiled egg or tofu scramble on whole-grain toast."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                      "1": "150g grilled chicken or tofu.",
                      "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                      "3": "Olive oil and lemon dressing.",
                      "4": "1 cup cooked quinoa or brown rice."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)-Smoothie:",
                      "1": "1 cup unsweetened almond milk.",
                      "2": "1 scoop plant-based protein powder.",
                      "3": "1 tbsp peanut butter.",
                      "4": "1/2 cup frozen berries."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                      "1": "150g grilled salmon or 1 cup cooked lentils.",
                      "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                      "3": "1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "1 cup unsweetened coconut yogurt with a sprinkle of granola.",
                      "2": "1 tbsp sunflower seeds."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken breast, salmon, eggs, tofu, lentils, chickpeas.",
                      "2": "Carbs: Oats, quinoa, brown rice, sweet potatoes, whole-grain bread.",
                      "3": "Fruits: Bananas, berries, apples, avocados.",
                      "4": "Vegetables: Leafy greens, cucumbers, tomatoes, carrots, broccoli.",
                      "5": "Healthy Fats: Olive oil, almond butter, chia seeds, nuts, seeds.",
                      "6": "Dairy Substitutes: Almond milk."
                    }
                  ]
                },
                {
                  "monthPlan": "2 Months",
                  "suggestion": "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher)."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                },
                {
                  "monthPlan": "3 Months",
                  "suggestion": "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day.",
                      "Month 3": "~2,600–2,800 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan).",
                      "8": "Month 3:",
                      "9": "Increase portion of oats to 1.5 cups.",
                      "10": "Add a handful of walnuts or pecans."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, 1/2 avocado, spinach, and unsweetened cocoa powder."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato.",
                      "8": "Month 3:",
                      "9": "Increase protein to 200g (chicken, fish, or tofu).",
                      "10": "Add 1 tbsp tahini dressing to vegetables."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, banana, protein powder, and peanut butter."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables.",
                      "8": "Month 3:",
                      "9": "Use 200g salmon, tofu, or lentils.",
                      "10": "Include 1/2 cup chickpeas or kidney beans."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher).",
                      "5": "Month 3:",
                      "6": "Add 1 slice of whole-grain bread with almond butter."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                }
              ]
            },
            {
              "WorkOutTitle": "Yoga",
              "plans": [
                {
                  "monthPlan": "1 Month",
                  "suggestion": "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "BreakFast": "500-600 kcal",
                      "MorningSnack": "300–400 kcal",
                      "Lunch": "600–700 kcal",
                      "EveningSnack": "300–400 kcal",
                      "Dinner": "500–600 kcal",
                      "OptionalSnack": "00–300 kcal"
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                      "1": "1 cup cooked oats with almond milk.",
                      "2": "1 tbsp almond butter.",
                      "3": "1 tbsp chia seeds.",
                      "4": "1 medium banana (sliced).",
                      "5": "Herbal Tea or Black Coffee."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "2": "1 boiled egg or tofu scramble on whole-grain toast."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                      "1": "150g grilled chicken or tofu.",
                      "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                      "3": "Olive oil and lemon dressing.",
                      "4": "1 cup cooked quinoa or brown rice."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)-Smoothie:",
                      "1": "1 cup unsweetened almond milk.",
                      "2": "1 scoop plant-based protein powder.",
                      "3": "1 tbsp peanut butter.",
                      "4": "1/2 cup frozen berries."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                      "1": "150g grilled salmon or 1 cup cooked lentils.",
                      "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                      "3": "1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "1 cup unsweetened coconut yogurt with a sprinkle of granola.",
                      "2": "1 tbsp sunflower seeds."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken breast, salmon, eggs, tofu, lentils, chickpeas.",
                      "2": "Carbs: Oats, quinoa, brown rice, sweet potatoes, whole-grain bread.",
                      "3": "Fruits: Bananas, berries, apples, avocados.",
                      "4": "Vegetables: Leafy greens, cucumbers, tomatoes, carrots, broccoli.",
                      "5": "Healthy Fats: Olive oil, almond butter, chia seeds, nuts, seeds.",
                      "6": "Dairy Substitutes: Almond milk."
                    }
                  ]
                },
                {
                  "monthPlan": "2 Months",
                  "suggestion": "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher)."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                },
                {
                  "monthPlan": "3 Months",
                  "suggestion": "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                  "Breakdown": [
                    {
                      "Month 1": "~2,000–2,200 kcal/day.",
                      "Month 2": "~2,300–2,500 kcal/day.",
                      "Month 3": "~2,600–2,800 kcal/day."
                    }
                  ],
                  "DietPlan": [
                    {
                      "Heading": "Breakfast (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked oatmeal (with almond milk).",
                      "3": "1 tbsp almond butter.",
                      "4": "1 medium banana (sliced).",
                      "5": "Month 2:",
                      "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                      "7": "Include 1 boiled egg (or scrambled tofu if vegan).",
                      "8": "Month 3:",
                      "9": "Increase portion of oats to 1.5 cups.",
                      "10": "Add a handful of walnuts or pecans."
                    },
                    {
                      "Heading": "Mid-Morning Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                      "3": "1 small apple or pear.",
                      "4": "Month 2:",
                      "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                      "6": "Include a small slice of whole-grain bread with almond butter.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, 1/2 avocado, spinach, and unsweetened cocoa powder."
                    },
                    {
                      "Heading": "Lunch (600–700 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup cooked quinoa or brown rice.",
                      "3": "Grilled chicken or tofu (150g).",
                      "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                      "5": "Month 2:",
                      "6": "Add 1/2 avocado to the salad.",
                      "7": "Include 1 medium baked sweet potato.",
                      "8": "Month 3:",
                      "9": "Increase protein to 200g (chicken, fish, or tofu).",
                      "10": "Add 1 tbsp tahini dressing to vegetables."
                    },
                    {
                      "Heading": "Afternoon Snack (300–400 kcal)",
                      "1": "Month 1:",
                      "2": "1 cup unsweetened coconut yogurt with berries.",
                      "3": "1 tbsp chia seeds.",
                      "4": "Month 2:",
                      "5": "Add a handful of granola to the yogurt.",
                      "6": "Include 1 boiled egg or a small serving of hummus with carrots.",
                      "7": "Month 3:",
                      "8": "Smoothie: Blend almond milk, banana, protein powder, and peanut butter."
                    },
                    {
                      "Heading": "Dinner (500–600 kcal)",
                      "1": "Month 1:",
                      "2": "Grilled salmon or lentils (150g).",
                      "3": "Steamed broccoli and carrots with olive oil.",
                      "4": "1 cup cooked quinoa.",
                      "5": "Month 2:",
                      "6": "Add 1 medium roasted sweet potato.",
                      "7": "Increase portion of vegetables.",
                      "8": "Month 3:",
                      "9": "Use 200g salmon, tofu, or lentils.",
                      "10": "Include 1/2 cup chickpeas or kidney beans."
                    },
                    {
                      "Heading": "Optional Evening Snack (200–300 kcal)",
                      "1": "Month 1:",
                      "2": "1 small handful of nuts or seeds.",
                      "3": "Month 2:",
                      "4": "Include a piece of dark chocolate (70% or higher).",
                      "5": "Month 3:",
                      "6": "Add 1 slice of whole-grain bread with almond butter."
                    }
                  ],
                  "Food to Include": [
                    {
                      "Heading": "Food to Include:",
                      "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                      "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                      "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                      "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                      "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                    }
                  ]
                }
              ]
            }
          ]
        },
        {}
      ]
    },
    {
      "healthIssues": "Lactose intolreance",
      "fitnessTypes": [
        {
          "fitnessGoal": "Weight Gain",
          "plans": [
            {
              "monthPlan": "1 Month",
              "suggestion": "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
              "Breakdown": [
                {
                  "BreakFast": "500-600 kcal",
                  "MorningSnack": "300–400 kcal",
                  "Lunch": "600–700 kcal",
                  "EveningSnack": "300–400 kcal",
                  "Dinner": "500–600 kcal",
                  "OptionalSnack": "00–300 kcal"
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                  "1": "1 cup cooked oats with almond milk.",
                  "2": "1 tbsp almond butter.",
                  "3": "1 tbsp chia seeds.",
                  "4": "1 medium banana (sliced).",
                  "5": "Herbal Tea or Black Coffee."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "2": "1 boiled egg or tofu scramble on whole-grain toast."
                },
                {
                  "Heading": "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                  "1": "150g grilled chicken or tofu.",
                  "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                  "3": "Olive oil and lemon dressing.",
                  "4": "1 cup cooked quinoa or brown rice."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)-Smoothie:",
                  "1": "1 cup unsweetened almond milk.",
                  "2": "1 scoop plant-based protein powder.",
                  "3": "1 tbsp peanut butter.",
                  "4": "1/2 cup frozen berries."
                },
                {
                  "Heading": "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                  "1": "150g grilled salmon or 1 cup cooked lentils.",
                  "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                  "3": "1 medium baked sweet potato."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "1 cup unsweetened coconut yogurt with a sprinkle of granola.",
                  "2": "1 tbsp sunflower seeds."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken breast, salmon, eggs, tofu, lentils, chickpeas.",
                  "2": "Carbs: Oats, quinoa, brown rice, sweet potatoes, whole-grain bread.",
                  "3": "Fruits: Bananas, berries, apples, avocados.",
                  "4": "Vegetables: Leafy greens, cucumbers, tomatoes, carrots, broccoli.",
                  "5": "Healthy Fats: Olive oil, almond butter, chia seeds, nuts, seeds.",
                  "6": "Dairy Substitutes: Almond milk."
                }
              ]
            },
            {
              "monthPlan": "2 Months",
              "suggestion": "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
              "Breakdown": [
                {
                  "Month 1": "~2,000–2,200 kcal/day.",
                  "Month 2": "~2,300–2,500 kcal/day."
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked oatmeal (with almond milk).",
                  "3": "1 tbsp almond butter.",
                  "4": "1 medium banana (sliced).",
                  "5": "Month 2:",
                  "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                  "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "3": "1 small apple or pear.",
                  "4": "Month 2:",
                  "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                  "6": "Include a small slice of whole-grain bread with almond butter."
                },
                {
                  "Heading": "Lunch (600–700 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked quinoa or brown rice.",
                  "3": "Grilled chicken or tofu (150g).",
                  "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                  "5": "Month 2:",
                  "6": "Add 1/2 avocado to the salad.",
                  "7": "Include 1 medium baked sweet potato."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup unsweetened coconut yogurt with berries.",
                  "3": "1 tbsp chia seeds.",
                  "4": "Month 2:",
                  "5": "Add a handful of granola to the yogurt.",
                  "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                },
                {
                  "Heading": "Dinner (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "Grilled salmon or lentils (150g).",
                  "3": "Steamed broccoli and carrots with olive oil.",
                  "4": "1 cup cooked quinoa.",
                  "5": "Month 2:",
                  "6": "Add 1 medium roasted sweet potato.",
                  "7": "Increase portion of vegetables."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "Month 1:",
                  "2": "1 small handful of nuts or seeds.",
                  "3": "Month 2:",
                  "4": "Include a piece of dark chocolate (70% or higher)."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                  "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                  "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                  "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                  "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                }
              ]
            },
            {
              "monthPlan": "3 Months",
              "suggestion": "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
              "Breakdown": [
                {
                  "Month 1": "~2,000–2,200 kcal/day.",
                  "Month 2": "~2,300–2,500 kcal/day.",
                  "Month 3": "~2,600–2,800 kcal/day."
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked oatmeal (with almond milk).",
                  "3": "1 tbsp almond butter.",
                  "4": "1 medium banana (sliced).",
                  "5": "Month 2:",
                  "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                  "7": "Include 1 boiled egg (or scrambled tofu if vegan).",
                  "8": "Month 3:",
                  "9": "Increase portion of oats to 1.5 cups.",
                  "10": "Add a handful of walnuts or pecans."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "3": "1 small apple or pear.",
                  "4": "Month 2:",
                  "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                  "6": "Include a small slice of whole-grain bread with almond butter.",
                  "7": "Month 3:",
                  "8": "Smoothie: Blend almond milk, 1/2 avocado, spinach, and unsweetened cocoa powder."
                },
                {
                  "Heading": "Lunch (600–700 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked quinoa or brown rice.",
                  "3": "Grilled chicken or tofu (150g).",
                  "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                  "5": "Month 2:",
                  "6": "Add 1/2 avocado to the salad.",
                  "7": "Include 1 medium baked sweet potato.",
                  "8": "Month 3:",
                  "9": "Increase protein to 200g (chicken, fish, or tofu).",
                  "10": "Add 1 tbsp tahini dressing to vegetables."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup unsweetened coconut yogurt with berries.",
                  "3": "1 tbsp chia seeds.",
                  "4": "Month 2:",
                  "5": "Add a handful of granola to the yogurt.",
                  "6": "Include 1 boiled egg or a small serving of hummus with carrots.",
                  "7": "Month 3:",
                  "8": "Smoothie: Blend almond milk, banana, protein powder, and peanut butter."
                },
                {
                  "Heading": "Dinner (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "Grilled salmon or lentils (150g).",
                  "3": "Steamed broccoli and carrots with olive oil.",
                  "4": "1 cup cooked quinoa.",
                  "5": "Month 2:",
                  "6": "Add 1 medium roasted sweet potato.",
                  "7": "Increase portion of vegetables.",
                  "8": "Month 3:",
                  "9": "Use 200g salmon, tofu, or lentils.",
                  "10": "Include 1/2 cup chickpeas or kidney beans."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "Month 1:",
                  "2": "1 small handful of nuts or seeds.",
                  "3": "Month 2:",
                  "4": "Include a piece of dark chocolate (70% or higher).",
                  "5": "Month 3:",
                  "6": "Add 1 slice of whole-grain bread with almond butter."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                  "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                  "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                  "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                  "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                }
              ]
            }
          ]
        },
        {}
      ]
    },
    {
      "healthIssues": "Heart Disease",
      "fitnessTypes": [
        {
          "fitnessGoal": "Weight Gain",
          "plans": [
            {
              "monthPlan": "1 Month",
              "suggestion": "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
              "Breakdown": [
                {
                  "BreakFast": "500-600 kcal",
                  "MorningSnack": "300–400 kcal",
                  "Lunch": "600–700 kcal",
                  "EveningSnack": "300–400 kcal",
                  "Dinner": "500–600 kcal",
                  "OptionalSnack": "00–300 kcal"
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                  "1": "1 cup cooked oats with almond milk.",
                  "2": "1 tbsp almond butter.",
                  "3": "1 tbsp chia seeds.",
                  "4": "1 medium banana (sliced).",
                  "5": "Herbal Tea or Black Coffee."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "2": "1 boiled egg or tofu scramble on whole-grain toast."
                },
                {
                  "Heading": "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                  "1": "150g grilled chicken or tofu.",
                  "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                  "3": "Olive oil and lemon dressing.",
                  "4": "1 cup cooked quinoa or brown rice."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)-Smoothie:",
                  "1": "1 cup unsweetened almond milk.",
                  "2": "1 scoop plant-based protein powder.",
                  "3": "1 tbsp peanut butter.",
                  "4": "1/2 cup frozen berries."
                },
                {
                  "Heading": "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                  "1": "150g grilled salmon or 1 cup cooked lentils.",
                  "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                  "3": "1 medium baked sweet potato."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "1 cup unsweetened coconut yogurt with a sprinkle of granola.",
                  "2": "1 tbsp sunflower seeds."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken breast, salmon, eggs, tofu, lentils, chickpeas.",
                  "2": "Carbs: Oats, quinoa, brown rice, sweet potatoes, whole-grain bread.",
                  "3": "Fruits: Bananas, berries, apples, avocados.",
                  "4": "Vegetables: Leafy greens, cucumbers, tomatoes, carrots, broccoli.",
                  "5": "Healthy Fats: Olive oil, almond butter, chia seeds, nuts, seeds.",
                  "6": "Dairy Substitutes: Almond milk."
                }
              ]
            },
            {
              "monthPlan": "2 Months",
              "suggestion": "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
              "Breakdown": [
                {
                  "Month 1": "~2,000–2,200 kcal/day.",
                  "Month 2": "~2,300–2,500 kcal/day."
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked oatmeal (with almond milk).",
                  "3": "1 tbsp almond butter.",
                  "4": "1 medium banana (sliced).",
                  "5": "Month 2:",
                  "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                  "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "3": "1 small apple or pear.",
                  "4": "Month 2:",
                  "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                  "6": "Include a small slice of whole-grain bread with almond butter."
                },
                {
                  "Heading": "Lunch (600–700 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked quinoa or brown rice.",
                  "3": "Grilled chicken or tofu (150g).",
                  "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                  "5": "Month 2:",
                  "6": "Add 1/2 avocado to the salad.",
                  "7": "Include 1 medium baked sweet potato."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup unsweetened coconut yogurt with berries.",
                  "3": "1 tbsp chia seeds.",
                  "4": "Month 2:",
                  "5": "Add a handful of granola to the yogurt.",
                  "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                },
                {
                  "Heading": "Dinner (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "Grilled salmon or lentils (150g).",
                  "3": "Steamed broccoli and carrots with olive oil.",
                  "4": "1 cup cooked quinoa.",
                  "5": "Month 2:",
                  "6": "Add 1 medium roasted sweet potato.",
                  "7": "Increase portion of vegetables."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "Month 1:",
                  "2": "1 small handful of nuts or seeds.",
                  "3": "Month 2:",
                  "4": "Include a piece of dark chocolate (70% or higher)."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                  "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                  "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                  "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                  "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                }
              ]
            },
            {
              "monthPlan": "3 Months",
              "suggestion": "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
              "Breakdown": [
                {
                  "Month 1": "~2,000–2,200 kcal/day.",
                  "Month 2": "~2,300–2,500 kcal/day.",
                  "Month 3": "~2,600–2,800 kcal/day."
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked oatmeal (with almond milk).",
                  "3": "1 tbsp almond butter.",
                  "4": "1 medium banana (sliced).",
                  "5": "Month 2:",
                  "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                  "7": "Include 1 boiled egg (or scrambled tofu if vegan).",
                  "8": "Month 3:",
                  "9": "Increase portion of oats to 1.5 cups.",
                  "10": "Add a handful of walnuts or pecans."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "3": "1 small apple or pear.",
                  "4": "Month 2:",
                  "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                  "6": "Include a small slice of whole-grain bread with almond butter.",
                  "7": "Month 3:",
                  "8": "Smoothie: Blend almond milk, 1/2 avocado, spinach, and unsweetened cocoa powder."
                },
                {
                  "Heading": "Lunch (600–700 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked quinoa or brown rice.",
                  "3": "Grilled chicken or tofu (150g).",
                  "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                  "5": "Month 2:",
                  "6": "Add 1/2 avocado to the salad.",
                  "7": "Include 1 medium baked sweet potato.",
                  "8": "Month 3:",
                  "9": "Increase protein to 200g (chicken, fish, or tofu).",
                  "10": "Add 1 tbsp tahini dressing to vegetables."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup unsweetened coconut yogurt with berries.",
                  "3": "1 tbsp chia seeds.",
                  "4": "Month 2:",
                  "5": "Add a handful of granola to the yogurt.",
                  "6": "Include 1 boiled egg or a small serving of hummus with carrots.",
                  "7": "Month 3:",
                  "8": "Smoothie: Blend almond milk, banana, protein powder, and peanut butter."
                },
                {
                  "Heading": "Dinner (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "Grilled salmon or lentils (150g).",
                  "3": "Steamed broccoli and carrots with olive oil.",
                  "4": "1 cup cooked quinoa.",
                  "5": "Month 2:",
                  "6": "Add 1 medium roasted sweet potato.",
                  "7": "Increase portion of vegetables.",
                  "8": "Month 3:",
                  "9": "Use 200g salmon, tofu, or lentils.",
                  "10": "Include 1/2 cup chickpeas or kidney beans."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "Month 1:",
                  "2": "1 small handful of nuts or seeds.",
                  "3": "Month 2:",
                  "4": "Include a piece of dark chocolate (70% or higher).",
                  "5": "Month 3:",
                  "6": "Add 1 slice of whole-grain bread with almond butter."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                  "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                  "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                  "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                  "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                }
              ]
            }
          ]
        },
        {}
      ]
    },
    {
      "healthIssues": "Blood Pressure",
      "fitnessTypes": [
        {
          "fitnessGoal": "Weight Gain",
          "plans": [
            {
              "monthPlan": "1 Month",
              "suggestion": "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
              "Breakdown": [
                {
                  "BreakFast": "500-600 kcal",
                  "MorningSnack": "300–400 kcal",
                  "Lunch": "600–700 kcal",
                  "EveningSnack": "300–400 kcal",
                  "Dinner": "500–600 kcal",
                  "OptionalSnack": "00–300 kcal"
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                  "1": "1 cup cooked oats with almond milk.",
                  "2": "1 tbsp almond butter.",
                  "3": "1 tbsp chia seeds.",
                  "4": "1 medium banana (sliced).",
                  "5": "Herbal Tea or Black Coffee."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "2": "1 boiled egg or tofu scramble on whole-grain toast."
                },
                {
                  "Heading": "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                  "1": "150g grilled chicken or tofu.",
                  "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                  "3": "Olive oil and lemon dressing.",
                  "4": "1 cup cooked quinoa or brown rice."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)-Smoothie:",
                  "1": "1 cup unsweetened almond milk.",
                  "2": "1 scoop plant-based protein powder.",
                  "3": "1 tbsp peanut butter.",
                  "4": "1/2 cup frozen berries."
                },
                {
                  "Heading": "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                  "1": "150g grilled salmon or 1 cup cooked lentils.",
                  "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                  "3": "1 medium baked sweet potato."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "1 cup unsweetened coconut yogurt with a sprinkle of granola.",
                  "2": "1 tbsp sunflower seeds."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken breast, salmon, eggs, tofu, lentils, chickpeas.",
                  "2": "Carbs: Oats, quinoa, brown rice, sweet potatoes, whole-grain bread.",
                  "3": "Fruits: Bananas, berries, apples, avocados.",
                  "4": "Vegetables: Leafy greens, cucumbers, tomatoes, carrots, broccoli.",
                  "5": "Healthy Fats: Olive oil, almond butter, chia seeds, nuts, seeds.",
                  "6": "Dairy Substitutes: Almond milk."
                }
              ]
            },
            {
              "monthPlan": "2 Months",
              "suggestion": "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
              "Breakdown": [
                {
                  "Month 1": "~2,000–2,200 kcal/day.",
                  "Month 2": "~2,300–2,500 kcal/day."
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked oatmeal (with almond milk).",
                  "3": "1 tbsp almond butter.",
                  "4": "1 medium banana (sliced).",
                  "5": "Month 2:",
                  "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                  "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "3": "1 small apple or pear.",
                  "4": "Month 2:",
                  "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                  "6": "Include a small slice of whole-grain bread with almond butter."
                },
                {
                  "Heading": "Lunch (600–700 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked quinoa or brown rice.",
                  "3": "Grilled chicken or tofu (150g).",
                  "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                  "5": "Month 2:",
                  "6": "Add 1/2 avocado to the salad.",
                  "7": "Include 1 medium baked sweet potato."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup unsweetened coconut yogurt with berries.",
                  "3": "1 tbsp chia seeds.",
                  "4": "Month 2:",
                  "5": "Add a handful of granola to the yogurt.",
                  "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                },
                {
                  "Heading": "Dinner (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "Grilled salmon or lentils (150g).",
                  "3": "Steamed broccoli and carrots with olive oil.",
                  "4": "1 cup cooked quinoa.",
                  "5": "Month 2:",
                  "6": "Add 1 medium roasted sweet potato.",
                  "7": "Increase portion of vegetables."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "Month 1:",
                  "2": "1 small handful of nuts or seeds.",
                  "3": "Month 2:",
                  "4": "Include a piece of dark chocolate (70% or higher)."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                  "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                  "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                  "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                  "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                }
              ]
            },
            {
              "monthPlan": "3 Months",
              "suggestion": "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
              "Breakdown": [
                {
                  "Month 1": "~2,000–2,200 kcal/day.",
                  "Month 2": "~2,300–2,500 kcal/day.",
                  "Month 3": "~2,600–2,800 kcal/day."
                }
              ],
              "DietPlan": [
                {
                  "Heading": "Breakfast (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked oatmeal (with almond milk).",
                  "3": "1 tbsp almond butter.",
                  "4": "1 medium banana (sliced).",
                  "5": "Month 2:",
                  "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                  "7": "Include 1 boiled egg (or scrambled tofu if vegan).",
                  "8": "Month 3:",
                  "9": "Increase portion of oats to 1.5 cups.",
                  "10": "Add a handful of walnuts or pecans."
                },
                {
                  "Heading": "Mid-Morning Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                  "3": "1 small apple or pear.",
                  "4": "Month 2:",
                  "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                  "6": "Include a small slice of whole-grain bread with almond butter.",
                  "7": "Month 3:",
                  "8": "Smoothie: Blend almond milk, 1/2 avocado, spinach, and unsweetened cocoa powder."
                },
                {
                  "Heading": "Lunch (600–700 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup cooked quinoa or brown rice.",
                  "3": "Grilled chicken or tofu (150g).",
                  "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                  "5": "Month 2:",
                  "6": "Add 1/2 avocado to the salad.",
                  "7": "Include 1 medium baked sweet potato.",
                  "8": "Month 3:",
                  "9": "Increase protein to 200g (chicken, fish, or tofu).",
                  "10": "Add 1 tbsp tahini dressing to vegetables."
                },
                {
                  "Heading": "Afternoon Snack (300–400 kcal)",
                  "1": "Month 1:",
                  "2": "1 cup unsweetened coconut yogurt with berries.",
                  "3": "1 tbsp chia seeds.",
                  "4": "Month 2:",
                  "5": "Add a handful of granola to the yogurt.",
                  "6": "Include 1 boiled egg or a small serving of hummus with carrots.",
                  "7": "Month 3:",
                  "8": "Smoothie: Blend almond milk, banana, protein powder, and peanut butter."
                },
                {
                  "Heading": "Dinner (500–600 kcal)",
                  "1": "Month 1:",
                  "2": "Grilled salmon or lentils (150g).",
                  "3": "Steamed broccoli and carrots with olive oil.",
                  "4": "1 cup cooked quinoa.",
                  "5": "Month 2:",
                  "6": "Add 1 medium roasted sweet potato.",
                  "7": "Increase portion of vegetables.",
                  "8": "Month 3:",
                  "9": "Use 200g salmon, tofu, or lentils.",
                  "10": "Include 1/2 cup chickpeas or kidney beans."
                },
                {
                  "Heading": "Optional Evening Snack (200–300 kcal)",
                  "1": "Month 1:",
                  "2": "1 small handful of nuts or seeds.",
                  "3": "Month 2:",
                  "4": "Include a piece of dark chocolate (70% or higher).",
                  "5": "Month 3:",
                  "6": "Add 1 slice of whole-grain bread with almond butter."
                }
              ],
              "Food to Include": [
                {
                  "Heading": "Food to Include:",
                  "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                  "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                  "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                  "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                  "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                }
              ]
            }
          ]
        },
        {}
      ]
    }
  ];

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/fitnessRegistrationsData/${userId}`
        );
        setRegistrations(response.data.data); // Set fetched data
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchRegistrations();
  }, [userId]);


  // useEffect(() => {
  //   if (registrations.length > 0) {
  //     const filteredPlans = registrations.flatMap((registration) => {
  //       console.log("Current Registration:", registration); // Debug log

  //       // Extract fields to match from the registration
  //       const healthIssues = registration.healthIssues?.map((issue) =>
  //         issue.toLowerCase()
  //       );
  //       const fitnessGoal = registration.fitnessGoal?.toLowerCase();
  //       const workoutType = registration.workoutType?.toLowerCase();
  //       const duration = registration.duration?.toLowerCase();

  //       // Begin filtering the JSON data
  //       return jsonData.flatMap((item) => {
  //         // Check if health issue matches
  //         if (!healthIssues.includes(item.healthIssues.toLowerCase())) {
  //           return []; // No match, return empty array
  //         }

  //         // Filter for matching fitnessGoal
  //         const matchingFitnessTypes = item.fitnessTypes?.filter(
  //           (type) => type.fitnessGoal?.toLowerCase() === fitnessGoal
  //         );

  //         if (!matchingFitnessTypes || matchingFitnessTypes.length === 0) {
  //           return []; // No match, return empty array
  //         }

  //         // Filter for matching workoutType
  //         const matchingWorkoutTypes = matchingFitnessTypes.flatMap((type) =>
  //           type.workOutType?.filter(
  //             (workout) => workout.WorkOutTitle?.toLowerCase() === workoutType
  //           )
  //         );

  //         if (!matchingWorkoutTypes || matchingWorkoutTypes.length === 0) {
  //           return []; // No match, return empty array
  //         }

  //         // Filter for matching duration (monthPlan)
  //         return matchingWorkoutTypes.flatMap((workout) =>
  //           workout.plans?.filter(
  //             (plan) => plan.monthPlan?.toLowerCase() === duration
  //           )
  //         );
  //       });
  //     });

  //     console.log("Filtered Plans:", filteredPlans); // Debug final filtered plans
  //     setMatchedPlans(filteredPlans);
  //   }
  // }, [registrations, jsonData]);


  useEffect(() => {
    if (registrations.length > 0) {
      const filteredPlans = registrations.flatMap((registration) => {
        console.log("Current Registration:", registration); // Debug log

        // Extract fields to match from the registration
        const healthIssues = registration.healthIssues?.map((issue) =>
          issue.toLowerCase()
        );
        const fitnessGoal = registration.fitnessGoal?.toLowerCase();
        const workoutType = registration.workoutType?.toLowerCase();
        const duration = registration.duration?.toLowerCase();

        // Begin filtering the JSON data
        return jsonData.flatMap((item) => {
          // Check if health issue matches
          if (!healthIssues.includes(item.healthIssues.toLowerCase())) {
            return []; // No match, return empty array
          }

          // Filter for matching fitnessGoal
          const matchingFitnessTypes = item.fitnessTypes?.filter(
            (type) => type.fitnessGoal?.toLowerCase() === fitnessGoal
          );

          if (!matchingFitnessTypes || matchingFitnessTypes.length === 0) {
            return []; // No match, return empty array
          }

          // Filter for matching workoutType
          const matchingWorkoutTypes = matchingFitnessTypes.flatMap((type) =>
            type.workOutType?.filter(
              (workout) => workout.WorkOutTitle?.toLowerCase() === workoutType
            )
          );

          if (!matchingWorkoutTypes || matchingWorkoutTypes.length === 0) {
            return []; // No match, return empty array
          }

          // Filter for matching duration (monthPlan)
          return matchingWorkoutTypes.flatMap((workout) =>
            workout.plans?.filter(
              (plan) => plan.monthPlan?.toLowerCase() === duration
            )
          );
        });
      });

      console.log("Filtered Plans:", filteredPlans); // Debug final filtered plans
      setMatchedPlans(filteredPlans);
    }
  }, [registrations, jsonData]);


  return (

    <div>
      {matchedPlans.length > 0 ? (
        matchedPlans.map((plan, index) => (
          <div key={index}>
            <h3>Plan Duration: {plan.monthPlan}</h3>
            <p>Suggestion: {plan.suggestion}</p>

            {/* Breakdown for Month 1 and Month 2 */}
            {plan.Breakdown && plan.Breakdown.length > 0 && (
              <div>
                <h4>Breakdown:</h4>
                <ul>
                  {Object.entries(plan.Breakdown[0]).map(([month, kcal], idx) => (
                    <li key={idx}>
                      {month}: {kcal}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <h4>Diet Plan:</h4>
            {plan.DietPlan.map((diet, idx) => (
              <div key={idx}>
                <h5>{diet.Heading}</h5>
                <ul>
                  {Object.entries(diet)
                    .filter(([key]) => key !== "Heading")
                    .map(([key, value]) => (
                      <li key={key}>
                        {key}: {value}
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            {/* Rendering the "Food to Include" data */}
            {plan["Food to Include"] && (
              <div>
                <h4>Food to Include:</h4>
                {plan["Food to Include"].map((food, idx) => (
                  <div key={idx}>
                    <h5>{food.Heading}</h5>
                    <ul>
                      {Object.entries(food)
                        .filter(([key]) => key !== "Heading")
                        .map(([key, value]) => (
                          <li key={key}>
                            {key}: {value}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No matching plans found.</p>
      )}
    </div>






  )




};

export default WorkoutPlan;

















// import React, { useState } from 'react';

// // Your JSON data (you can fetch this from an API if needed)
// const fitnessData = [
//   {
//     healthIssues: "Asthma",
//     fitnessTypes: [
//       {
//         fitnessGoal: "Gain weight",
//         workOutType: [
//           {
//             WorkOutTitle: "Yoga",
//             plans: [
//               {
//                 monthPlan: "1 Month",
//                 suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
//                 Breakdown: [
//                   {
//                     BreakFast: "500-600 kcal",
//                     MorningSnack: "300–400 kcal",
//                     Lunch: "600–700 kcal",
//                     EveningSnack: "300–400 kcal",
//                     Dinner: "500–600 kcal",
//                     OptionalSnack: "200–300 kcal"
//                   }
//                 ],
//                 DietPlan: [
//                   { Heading: "Breakfast (500–600 kcal)", "1": "1 cup cooked oats with almond milk.", "2": "1 medium banana." },
//                   { Heading: "Lunch (600–700 kcal)", "1": "150g grilled chicken or tofu.", "2": "Mixed vegetable salad." }
//                 ]
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ];

// function App() {
//   const [registrations, setRegistrations] = useState([
//     {
//       healthIssues: "Asthma",
//       fitnessGoal: "Gain weight",
//       workoutType: "Yoga",
//       duration: "1 Month"
//     }
//   ]);

//   const findPlan = (registration) => {
//     const match = fitnessData.find(
//       (data) => data.healthIssues === registration.healthIssues
//     );

//     if (match) {
//       const fitnessGoalMatch = match.fitnessTypes.find(
//         (type) => type.fitnessGoal === registration.fitnessGoal
//       );

//       if (fitnessGoalMatch) {
//         const workoutMatch = fitnessGoalMatch.workOutType.find(
//           (workout) => workout.WorkOutTitle === registration.workoutType
//         );

//         if (workoutMatch) {
//           const planMatch = workoutMatch.plans.find(
//             (plan) => plan.monthPlan === registration.duration
//           );

//           return planMatch || null;
//         }
//       }
//     }
//     return null;
//   };

//   return (
//     <div>
//       <h1>Fitness Plans</h1>
//       <ul>
//         {registrations.map((registration, index) => {
//           const matchingPlan = findPlan(registration);

//           return (
//             <li key={index}>
//               <h3>User Data</h3>
//               <p><strong>Health Issue:</strong> {registration.healthIssues}</p>
//               <p><strong>Fitness Goal:</strong> {registration.fitnessGoal}</p>
//               <p><strong>Workout Type:</strong> {registration.workoutType}</p>
//               <p><strong>Duration:</strong> {registration.duration}</p>

//               <h3>Fitness Plan</h3>
//               {matchingPlan ? (
//                 <div>
//                   <p><strong>Suggestion:</strong> {matchingPlan.suggestion}</p>
//                   <p><strong>Diet Breakdown:</strong></p>
//                   <ul>
//                     {matchingPlan.Breakdown.map((item, i) => (
//                       <li key={i}>
//                         Breakfast: {item.BreakFast}, Morning Snack: {item.MorningSnack}, Lunch: {item.Lunch}, Evening Snack: {item.EveningSnack}, Dinner: {item.Dinner}
//                       </li>
//                     ))}
//                   </ul>
//                   <p><strong>Diet Plan:</strong></p>
//                   <ul>
//                     {matchingPlan.DietPlan.map((item, i) => (
//                       <li key={i}>
//                         <strong>{item.Heading}</strong>
//                         <ul>
//                           {Object.keys(item)
//                             .filter((key) => key !== "Heading")
//                             .map((key) => (
//                               <li key={key}>{item[key]}</li>
//                             ))}
//                         </ul>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ) : (
//                 <p>No matching fitness plans found for this registration.</p>
//               )}
//               <hr />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;

