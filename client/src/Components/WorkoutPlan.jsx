import React, { useState, useEffect } from "react";
import axios from "axios";
import './Styles/WorkOutPlan.css'

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
                            {
                                WorkOutTitle: "Yoga",
                                plans: [
                                    {
                                        monthPlan: "1 Month",
                                        planStructure: [
                                            {
                                                "Frequency": "5–6 days per week (40–60 minutes per session).",
                                                "Focus": "Strength-building asanas, digestive stimulation, and relaxation.",
                                                "Equipment": "Yoga mat and blocks (optional).",
                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month-1 Foundation and Digestive Health",
                                                "Goal": "Build flexibility and strength while stimulating digestion.",
                                                "1":"Surya Namaskar (Sun Salutations): 5–10 rounds to warm up.",
"2":"Bhujangasana (Cobra Pose): 3 sets of 20–30 seconds.",
"3":"Trikonasana (Triangle Pose): 3 sets on each side.",
"4":"Vajrasana (Thunderbolt Pose): 1–2 minutes after meals to improve digestion.",
"5":"Balasana (Child’s Pose): 1–2 minutes for relaxation.",
"6":"Savasana (Corpse Pose): 5 minutes for stress relief."

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
                                    {
                                        monthPlan: "2 Months",
                                        planStructure: [
                                            {
                                                "Frequency": "5–6 days per week (40–60 minutes per session).",
                                                "Focus": "Strength-building asanas, digestive stimulation, and relaxation.",
                                                "Equipment": "Yoga mat and blocks (optional).",
                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month-1 Foundation and Digestive Health",
                                                "Goal": "Build flexibility and strength while stimulating digestion.",
                                                "1":"Surya Namaskar (Sun Salutations): 5–10 rounds to warm up.",
"2":"Bhujangasana (Cobra Pose): 3 sets of 20–30 seconds.",
"3":"Trikonasana (Triangle Pose): 3 sets on each side.",
"4":"Vajrasana (Thunderbolt Pose): 1–2 minutes after meals to improve digestion.",
"5":"Balasana (Child’s Pose): 1–2 minutes for relaxation.",
"6":"Savasana (Corpse Pose): 5 minutes for stress relief."

                                            },
                                            {
                                                heading: "Month-2 Strength and Muscle Growth",
                                                Goal: "Incorporate more strength-building poses and increase intensity.",
                                                "1":"Virabhadrasana (Warrior Pose I & II): Hold for 30–60 seconds on each side.",
                                                "2":"Utkatasana (Chair Pose): 3 sets of 30 seconds.",
                                                "3":"Navasana (Boat Pose): Hold for 20–30 seconds, repeat 3 times.",
                                                "4":"Phalakasana (Plank Pose): 3 sets of 20–40 seconds.",
                                                "5":"Dhanurasana (Bow Pose): 3 sets of 20–30 seconds.",
                                                "6":"Bridge Pose (Setu Bandhasana): 3 sets of 30 seconds.",
                                                
                                            },
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
                                    {
                                        monthPlan: "2 Months",
                                        planStructure: [
                                            {
                                                "Frequency": "5–6 days per week (40–60 minutes per session).",
                                                "Focus": "Strength-building asanas, digestive stimulation, and relaxation.",
                                                "Equipment": "Yoga mat and blocks (optional).",
                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month-1 Foundation and Digestive Health",
                                                "Goal": "Build flexibility and strength while stimulating digestion.",
                                                "1":"Surya Namaskar (Sun Salutations): 5–10 rounds to warm up.",
"2":"Bhujangasana (Cobra Pose): 3 sets of 20–30 seconds.",
"3":"Trikonasana (Triangle Pose): 3 sets on each side.",
"4":"Vajrasana (Thunderbolt Pose): 1–2 minutes after meals to improve digestion.",
"5":"Balasana (Child’s Pose): 1–2 minutes for relaxation.",
"6":"Savasana (Corpse Pose): 5 minutes for stress relief."

                                            },
                                            {
                                                heading: "2 Months Strength and Muscle Growth",
                                                Goal: "Incorporate more strength-building poses and increase intensity.",
                                                "1":"Virabhadrasana (Warrior Pose I & II): Hold for 30–60 seconds on each side.",
                                                "2":"Utkatasana (Chair Pose): 3 sets of 30 seconds.",
                                                "3":"Navasana (Boat Pose): Hold for 20–30 seconds, repeat 3 times.",
                                                "4":"Phalakasana (Plank Pose): 3 sets of 20–40 seconds.",
                                                "5":"Dhanurasana (Bow Pose): 3 sets of 20–30 seconds.",
                                                "6":"Bridge Pose (Setu Bandhasana): 3 sets of 30 seconds.",
                                                
                                            },
                                            {
                                                heading:"3 Months Advanced and Dynamic Flow",
                                                Goal: "Focus on dynamic sequences and deeper holds to build strength and stability.",
                                                "1":"Surya Namaskar (Sun Salutations): 5–10 rounds to warm up.",
                                                "2":"Bhujangasana (Cobra Pose): 3 sets of 20–30 seconds.",
                                                "3":"Trikonasana (Triangle Pose): 3 sets on each side.",
                                                "4":"Vajrasana (Thunderbolt Pose): 1–2 minutes after meals to improve digestion.",
                                                "5":"Balasana (Child’s Pose): 1–2 minutes for relaxation.",
                                                "6":"Savasana (Corpse Pose): 5 minutes for stress relief."
                                                
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
                                ]
                            },
                            {
                                WorkOutTitle: "Pilates",
                                plans: [
                                    {
                                        monthPlan: "1 Month",
                                        planStructure: [
                                            {
                                                "Frequency": "4–5 days per week.",
                                                "Focus": "Full-body strength, core stability, muscle endurance, and gradual intensity increase.",
                                                "Duration": "45-60 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month-1  Building Foundation & Strength",
                                                "Goal": ":Focus on mastering basic Pilates movements, building core strength, and improving overall flexibility. It helps prepare the muscles for more advanced exercises.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1 & 3 (Core & Upper Body Strength)",
                                                                "The Hundred": "3 sets of 50 reps (warm-up, focuses on the core)",
                                                                "Roll Up": "3 sets of 10 reps (works core and spine mobility)",
                                                                "Single-Leg Circles": "3 sets of 10 reps per leg (core and hip flexor engagement)",
                                                                "Plank with Leg Lift": "3 sets of 10 reps (strengthens the core, arms, and legs)",
                                                                "Push-Ups (Modified or Regular)": " 3 sets of 5–10 reps (build upper body strength)",
                                                                "Swimming" :"3 sets of 20–30 seconds (back and shoulder strength)",
                                                                "Swan Dive":"3 sets of 5–8 reps (back and shoulder strength)"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2 & 4 (Legs & Glutes Focus)",
                                                                "Bridges": "3 sets of 10–12 reps (glutes and core)",
                                                                "Leg Circles": "3 sets of 10 reps per leg (works hips and glutes)",
                                                                "Side Leg Lifts": "3 sets of 12 reps per side (glute strength)",
                                                                "Clamshells ": " 3 sets of 15 reps per side (outer hips and glutes)",
                                                                "Pilates Roll Over": "3 sets of 5–8 reps (works core and hamstrings)",
                                                                "Leg Pulls":  "3 sets of 10 reps (core and hip flexors)",
                                                                "Single-Leg Stretch":"3 sets of 10 reps per side (core and flexibility)"

                                                            }
                                                        ],
                                                    
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
                                                heading: "Month-1 Building Foundation & Strength",
                                                "Goal": ":Focus on mastering basic Pilates movements, building core strength, and improving overall flexibility. It helps prepare the muscles for more advanced exercises.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1 & 3 (Core & Upper Body Strength)",
                                                                "The Hundred": "3 sets of 50 reps (warm-up, focuses on the core)",
                                                                "Roll Up": "3 sets of 10 reps (works core and spine mobility)",
                                                                "Single-Leg Circles": "3 sets of 10 reps per leg (core and hip flexor engagement)",
                                                                "Plank with Leg Lift": "3 sets of 10 reps (strengthens the core, arms, and legs)",
                                                                "Push-Ups (Modified or Regular)": " 3 sets of 5–10 reps (build upper body strength)",
                                                                "Swimming" :"3 sets of 20–30 seconds (back and shoulder strength)",
                                                                "Swan Dive":"3 sets of 5–8 reps (back and shoulder strength)"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2 & 4 (Legs & Glutes Focus)",
                                                                "Bridges": "3 sets of 10–12 reps (glutes and core)",
                                                                "Leg Circles": "3 sets of 10 reps per leg (works hips and glutes)",
                                                                "Side Leg Lifts": "3 sets of 12 reps per side (glute strength)",
                                                                "Clamshells ": " 3 sets of 15 reps per side (outer hips and glutes)",
                                                                "Pilates Roll Over": "3 sets of 5–8 reps (works core and hamstrings)",
                                                                "Leg Pulls":  "3 sets of 10 reps (core and hip flexors)",
                                                                "Single-Leg Stretch":"3 sets of 10 reps per side (core and flexibility)"

                                                            }
                                                        ],
                                                    
                                                    }
                                                ]
                                            },
                                            {
                                                heading: "Month-2 Increasing Intensity and Muscle Engagement",
                                                "Goal": ":Iincrease the challenge by adding more repetitions,introducing compound movements, and integrating stability exercises",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1 & 3 (Full-Body Strength & Core)",
                                                                "The Hundred": " 3 sets of 60 reps",
                                                                "Roll Up": " 4 sets of 12 reps",
                                                                "Teaser": "3 sets of 5–8 reps (strengthens abs and legs)",
                                                                "Plank with Arm Lift ": " 3 sets of 10 reps per side (core and shoulders)",
                                                                "Side Plank": " 3 sets of 20–30 seconds per side (obliques)",
                                                                "Swimming" :"3 sets of 30 seconds",
                                                                "Double Leg Stretch":"3 sets of 10 reps (core stability)",
                                                                "Push-Ups": "3 sets of 10–15 reps"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2 & 4 (Legs & Glutes  & Flexibility)",
                                                                "Bridges with Marching": "3 sets of 10 reps per leg",
                                                                "Leg Circles": "4 sets of 10 reps per leg",
                                                                "Side Leg Lifts with Knee Bent": "3 sets of 12–15 reps per side",
                                                                "Clamshells with Resistance Band  ": " 3 sets of 15 reps per side",
                                                                "Rolling Like a Ball": "3 sets of 10 reps (core and balance)",
                                                                "Pilates Push-Up":  " 3 sets of 10–12 reps",
                                                                "Corkscrew":"3 sets of 10 reps (core strength and flexibility)"

                                                            }
                                                        ],
                                                    
                                                    }
                                                ]
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
                                                "Focus": "Full-body strength, core stability, muscle endurance, and gradual intensity increase.",
                                                "ProgressiveOverload": "Gradually increase weights or reps every week.",
                                                "Duration": "40-60 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month-1  Building Foundation & Strength",
                                                "Goal": ":Focus on mastering basic Pilates movements, building core strength, and improving overall flexibility. It helps prepare the muscles for more advanced exercises.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1 & 3 (Core & Upper Body Strength)",
                                                                "The Hundred": "3 sets of 50 reps (warm-up, focuses on the core)",
                                                                "Roll Up": "3 sets of 10 reps (works core and spine mobility)",
                                                                "Single-Leg Circles": "3 sets of 10 reps per leg (core and hip flexor engagement)",
                                                                "Plank with Leg Lift": "3 sets of 10 reps (strengthens the core, arms, and legs)",
                                                                "Push-Ups (Modified or Regular)": " 3 sets of 5–10 reps (build upper body strength)",
                                                                "Swimming" :"3 sets of 20–30 seconds (back and shoulder strength)",
                                                                "Swan Dive":"3 sets of 5–8 reps (back and shoulder strength)"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2 & 4 (Legs & Glutes Focus)",
                                                                "Bridges": "3 sets of 10–12 reps (glutes and core)",
                                                                "Leg Circles": "3 sets of 10 reps per leg (works hips and glutes)",
                                                                "Side Leg Lifts": "3 sets of 12 reps per side (glute strength)",
                                                                "Clamshells ": " 3 sets of 15 reps per side (outer hips and glutes)",
                                                                "Pilates Roll Over": "3 sets of 5–8 reps (works core and hamstrings)",
                                                                "Leg Pulls":  "3 sets of 10 reps (core and hip flexors)",
                                                                "Single-Leg Stretch":"3 sets of 10 reps per side (core and flexibility)"

                                                            }
                                                        ],
                                                    
                                                    }
                                                ]
                                            },
                                            {
                                                heading: "Month 2 Increasing Intensity and Muscle Engagement",
                                                "Goal": ":Increase the challenge by adding more repetitions,introducing compound movements, and integrating stability exercises",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1 & 3 (Full-Body Strength & Core)",
                                                                "The Hundred": " 3 sets of 60 reps",
                                                                "Roll Up": " 4 sets of 12 reps",
                                                                "Teaser": "3 sets of 5–8 reps (strengthens abs and legs)",
                                                                "Plank with Arm Lift ": " 3 sets of 10 reps per side (core and shoulders)",
                                                                "Side Plank": " 3 sets of 20–30 seconds per side (obliques)",
                                                                "Swimming" :"3 sets of 30 seconds",
                                                                "Double Leg Stretch":"3 sets of 10 reps (core stability)",
                                                                "Push-Ups": "3 sets of 10–15 reps"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2 & 4 (Legs & Glutes  & Flexibility)",
                                                                "Bridges with Marching": "3 sets of 10 reps per leg",
                                                                "Leg Circles": "4 sets of 10 reps per leg",
                                                                "Side Leg Lifts with Knee Bent": "3 sets of 12–15 reps per side",
                                                                "Clamshells with Resistance Band  ": " 3 sets of 15 reps per side",
                                                                "Rolling Like a Ball": "3 sets of 10 reps (core and balance)",
                                                                "Pilates Push-Up":  " 3 sets of 10–12 reps",
                                                                "Corkscrew":"3 sets of 10 reps (core strength and flexibility)"

                                                            }
                                                        ],
                                                    
                                                    }
                                                ]
                                            },
                                            {
                                                heading: "Month 3 Advanced Movements & Muscle Development",
                                                "Goal": ":Advanced exercises that demand more strength and balance, encouraging greater muscle engagement for weight gain.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1 & 3 (Full-Body Strength & Power)",
                                                                "The Hundred": " 3 sets of 70 reps",
                                                                "Side Plank with Leg Lift": " 3 sets of 20–30 seconds per side",
                                                                "Teaser": " 4 sets of 8–10 reps",
                                                                "Plank with Leg Lift ": "  3 sets of 15 reps per leg)",
                                                                "Single-Leg Stretch": " 3 sets of 12 reps per side",
                                                                "Swan Dive" :" 3 sets of 10 reps",
                                                                "Pilates Push-Ups":"3 sets of 10–15 reps"
                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2 & 4 (Legs, Glutes, and Advanced Core)",
                                                                "Bridges with Resistance Band": "3 sets of 12–15 reps",
                                                                "Leg Circles with Resistance Band": "3 sets of 10 reps per leg",
                                                                "Side Leg Lifts with Resistance Band": " 3 sets of 15 reps per side",
                                                                "Clamshells with Resistance Band  ": " 3 sets of 15 reps per side",
                                                                "Roll Over to Plow ": "3 sets of 5–8 reps",
                                                                "Pilates Push-Up with Side Plank":  "  3 sets of 8–10 reps",
                                                                "Double Leg Kick":"3 sets of 10 reps (back and glutes)",
                                                                "Teaser with Leg Circles":"3 sets of 8–10 reps."
                                                            }
                                                        ],
                                                    
                                                    }
                                                ]
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
                                ],

                            },
                            {
                                WorkOutTitle: "Aerobic Exercise",
                                plans: [
                                    {
                                        monthPlan: "1 Month",
                                        planStructure: [
                                            {
                                                "Frequency": " 3–4 times a week, alternating with strength training.",
                                                "Focus": " Build stamina, endurance, and muscle mass while maintaining a calorie surplus.",
                                                "ProgressiveOverload": "Moderate to low intensity, with the goal of improving aerobic capacity and endurance without burning too many calories.",
                                                "Duration": "30–45 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month 1: Building Endurance and Stamina",
                                                "Goal": "In the first month, the focus will be on building endurance and getting your body accustomed to aerobic activity, with an emphasis on boosting your appetite  and stamina for future workouts.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Brisk Walking or Light Jogging",
                                                                "Goal":"30–40 minutes at a steady pace, focusing on maintaining good posture and rhythm.Include 5-minute warm-up and cool-down (dynamic stretches before, static stretches after)."

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Cycling (Stationary or Outdoor)",
                                                                "Goal":"30 minutes at a moderate pace, maintaining a steady rhythm.Focus on using your leg muscles to build endurance and stamina."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Active Recovery",
                                                                "Goal":"Light walking, yoga, or stretching for 20–30 minutes.Focus on flexibility and recovery."
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Swimming",
                                                                "Goal":"30–40 minutes at a moderate pace. Swimming is a full-body workout that enhances muscle endurance and increases appetite."

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Rowing Machine",
                                                               "Goal":"30–40 minutes at a steady pace, focusing on engaging your core, arms, and legs for a full-body workout."
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
                                                "Frequency": " 3–4 times a week, alternating with strength training.",
                                                "Focus": " Build stamina, endurance, and muscle mass while maintaining a calorie surplus.",
                                                "ProgressiveOverload": "Moderate to low intensity, with the goal of improving aerobic capacity and endurance without burning too many calories.",
                                                "Duration": "30–45 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month 1: Building Endurance and Stamina",
                                                "Goal": "In the first month, the focus will be on building endurance and getting your body accustomed to aerobic activity, with an emphasis on boosting your appetite  and stamina for future workouts.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Brisk Walking or Light Jogging",
                                                                "Goal":"30–40 minutes at a steady pace, focusing on maintaining good posture and rhythm.Include 5-minute warm-up and cool-down (dynamic stretches before, static stretches after)."

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Cycling (Stationary or Outdoor)",
                                                                "Goal":"30 minutes at a moderate pace, maintaining a steady rhythm.Focus on using your leg muscles to build endurance and stamina."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Active Recovery",
                                                                "Goal":"Light walking, yoga, or stretching for 20–30 minutes.Focus on flexibility and recovery."
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Swimming",
                                                                "Goal":"30–40 minutes at a moderate pace. Swimming is a full-body workout that enhances muscle endurance and increases appetite."

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Rowing Machine",
                                                               "Goal":"30–40 minutes at a steady pace, focusing on engaging your core, arms, and legs for a full-body workout."
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
                                            {
                                                heading: "Month 2: Increasing Intensity and Muscle Engagement",
                                                "Goal": "In the second month, the goal is to increase the intensity of your aerobic workouts to help stimulate appetite and muscle engagement while improving cardiovascular endurance.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Brisk Walking or Light Jogging with Intervals",
                                                                "Goal":"30–40 minutes with 5-minute intervals of faster pace (e.g., jogging 2 minutes, walking 1 minute).This builds endurance and stamina while still being manageable."
                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Cycling (High Intensity)",
                                                                "Goal":"30–40 minutes with higher intensity intervals (e.g., sprint for 30 seconds, slow pace for 2 minutes).Focus on cycling at a moderate-to-high intensity to build strength in your legs."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Active Recovery",
                                                                "Goal":"Light walking, yoga, or stretching for 20–30 minutes.Focus on flexibility and recovery."
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Swimming(Intervals)",
                                                                "Goal":"30–40 minutes with interval-style swimming (swim fast for 2 minutes, slower for 1 minute).Alternate between strokes to target different muscle groups."

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Rowing Machine with Intervals",
                                                               "Goal":"30–40 minutes of rowing at moderate intensity, including 1-minute sprints followed by 2 minutes of slower rowing."
                                                            }
                                                        ],
                                                       
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
                                        monthPlan: "3 Months",
                                        planStructure: [
                                            {
                                                "Frequency": " 3–4 times a week, alternating with strength training.",
                                                "Focus": " Build stamina, endurance, and muscle mass while maintaining a calorie surplus.",
                                                "ProgressiveOverload": "Moderate to low intensity, with the goal of improving aerobic capacity and endurance without burning too many calories.",
                                                "Duration": "30–45 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month 1: Building Endurance and Stamina",
                                                "Goal": "In the first month, the focus will be on building endurance and getting your body accustomed to aerobic activity, with an emphasis on boosting your appetite  and stamina for future workouts.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Brisk Walking or Light Jogging",
                                                                "Goal":"30–40 minutes at a steady pace, focusing on maintaining good posture and rhythm.Include 5-minute warm-up and cool-down (dynamic stretches before, static stretches after)."

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Cycling (Stationary or Outdoor)",
                                                                "Goal":"30 minutes at a moderate pace, maintaining a steady rhythm.Focus on using your leg muscles to build endurance and stamina."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Active Recovery",
                                                                "Goal":"Light walking, yoga, or stretching for 20–30 minutes.Focus on flexibility and recovery."
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Swimming",
                                                                "Goal":"30–40 minutes at a moderate pace. Swimming is a full-body workout that enhances muscle endurance and increases appetite."

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Rowing Machine",
                                                               "Goal":"30–40 minutes at a steady pace, focusing on engaging your core, arms, and legs for a full-body workout."
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
                                            {
                                                heading: "Month 2: Increasing Intensity and Muscle Engagement",
                                                "Goal": "In the second month, the goal is to increase the intensity of your aerobic workouts to help stimulate appetite and muscle engagement while improving cardiovascular endurance.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Brisk Walking or Light Jogging with Intervals",
                                                                "Goal":"30–40 minutes with 5-minute intervals of faster pace (e.g., jogging 2 minutes, walking 1 minute).This builds endurance and stamina while still being manageable."
                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Cycling (High Intensity)",
                                                                "Goal":"30–40 minutes with higher intensity intervals (e.g., sprint for 30 seconds, slow pace for 2 minutes).Focus on cycling at a moderate-to-high intensity to build strength in your legs."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Active Recovery",
                                                                "Goal":"Light walking, yoga, or stretching for 20–30 minutes.Focus on flexibility and recovery."
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Swimming(Intervals)",
                                                                "Goal":"30–40 minutes with interval-style swimming (swim fast for 2 minutes, slower for 1 minute).Alternate between strokes to target different muscle groups."

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Rowing Machine with Intervals",
                                                               "Goal":"30–40 minutes of rowing at moderate intensity, including 1-minute sprints followed by 2 minutes of slower rowing."
                                                            }
                                                        ],
                                                       
                                                    }
                                                ]
                                            },
                                            {
                                                heading: "Month 3: Full-Body Engagement and Endurance with Weight Gain Focus",
                                                "Goal":"In the third month, the intensity will be high, combining longer sessions and higher intensity to promote appetite and muscle endurance. The focus will be on full-body engagement while enhancing the aerobic challenge",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Brisk Walking or Jogging with Sprints",
                                                                "Goal":"40–45 minutes. Incorporate 10–15 minutes of sprint intervals(e.g., sprint for 30 seconds, walk for 90 seconds).Engage your core and legs with a focus on building endurance and strength."
                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Cycling (HIIT Intervals)",
                                                                "Goal":"40 minutes of cycling with high-intensity intervals: 1-minute sprint, 2-minute recovery pace.Focus on endurance and building leg strength."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Active Recovery",
                                                                "Goal":"20–30 minutes of light walking or yoga to promote recovery."
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Swimming (Longer Duration with Variations)",
                                                                "Goal":"40–45 minutes, combining sprints with long-distance strokes. Alternate between freestyle, backstroke,and breaststroke for a full-body workout."

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Rowing Machine (Endurance Training)",
                                                               "Goal":"40–45 minutes at moderate intensity with a steady rhythm.Focus on using the full body to power the movement, building core and upper body strength."
                                                            }
                                                        ],
                                                       
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
                                    }
                                ],

                            },
                            {
                                WorkOutTitle: "Personal Homework Workout",
                                plans: [
                                    {
                                        monthPlan: "1 Month",
                                        planStructure: [
                                            {
                                                "Frequency": " 4-5 days per week (with at least 1-2 days of rest or active recovery).",
                                                "Focus": "Strength training, compound movements, and muscle-building exercises.",
                                                "ProgressiveOverload": "gradually increase intensity by increasing sets, reps, or resistance.",
                                                "Duration": "45-60 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month 1: Foundation Building",
                                                "Goal": "Focus on mastering form, building strength, and stimulating muscle fibers for growth.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Upper Body Push (Chest, Shoulders, Triceps)",
                                                                "Push-Ups (regular or knee push-ups)": "4 sets of 12–15 reps",
                                                                "Incline Push-Ups (use a chair or bench)": "3 sets of 10–12 reps",
                                                                "Pike Push-Ups (shoulder focus)": " 3 sets of 8–10 reps",
                                                                "Triceps Dips (using a sturdy chair or bench)": "3 sets of 10–12 reps.",
                                                                "Plank to Push-Up": " 3 sets of 10 reps",
                                                                "Shoulder Taps (from a plank position)":" 3 sets of 20 taps"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Lower Body (Legs, Glutes)",
                                                                "Squats (bodyweight or with added resistance like dumbbells) ": "4 sets of 12–15 reps",
                                                                "Bulgarian Split Squats (using a chair or bench)": "3 sets of 12 reps per leg",
                                                                "Glute Bridges": "4 sets of 15 reps",
                                                                "Lunges (forward or reverse)": "3 sets of 12 reps per leg",
                                                                "Calf Raises (can hold dumbbells or use bodyweight)": " 4 sets of 20 reps",
                                                                "Wall Sits":" 3 sets of 30–45 seconds."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Core & Abs",
                                                                "Planks": " 4 sets of 30–45 seconds",
                                                                "Russian Twists": "3 sets of 20 reps per side",
                                                                "Leg Raises": "3 sets of 12–15 reps",
                                                                "Bicycle Crunches": " 3 sets of 20 reps",
                                                                "Mountain Climbers": "3 sets of 30 seconds",
                                                                "Side Plank":" 3 sets of 30 seconds per side"
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Upper Body Pull (Back, Biceps)",
                                                                "Pull-Ups or Assisted Pull-Ups (use a door frame pull-up bar)": "4 sets of 5–8 reps",
                                                                "Inverted Rows (using a sturdy table or bar) ": "3 sets of 10–12 reps",
                                                                "Bent-Over Rows (with dumbbells or resistance band)": " 4 sets of 12–15 reps",
                                                                "Bicep Curls (with dumbbells or resistance bands)": " 4 sets of 12–15 reps",
                                                                "Renegade Rows (with dumbbells or household items)": "3 sets of 10 reps per side",
                                                                "Superman Holds":"3 sets of 20 seconds"

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Full-Body Compound Movements",
                                                                "Burpees": " 3 sets of 10 reps",
                                                                "Push-Up to T Rotation": "3 sets of 10 reps",
                                                                "Squat to Press (using dumbbells or any weighted object)": "4 sets of 10–12 reps",
                                                                "Deadlifts (using dumbbells or a heavy object)": " 4 sets of 12 reps",
                                                                "Step-Ups (onto a sturdy chair or bench) ": " 3 sets of 12 reps per leg",
                                                                "Jump Squats":"3 sets of 10 reps"

                                                            }
                                                        ],
                                                       
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
                                                "Frequency": " 4-5 days per week (with at least 1-2 days of rest or active recovery).",
                                                "Focus": "Strength training, compound movements, and muscle-building exercises.",
                                                "ProgressiveOverload": "gradually increase intensity by increasing sets, reps, or resistance.",
                                                "Duration": "45-60 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month 1: Foundation Building",
                                                "Goal": "Focus on mastering form, building strength, and stimulating muscle fibers for growth.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Upper Body Push (Chest, Shoulders, Triceps)",
                                                                "Push-Ups (regular or knee push-ups)": "4 sets of 12–15 reps",
                                                                "Incline Push-Ups (use a chair or bench)": "3 sets of 10–12 reps",
                                                                "Pike Push-Ups (shoulder focus)": " 3 sets of 8–10 reps",
                                                                "Triceps Dips (using a sturdy chair or bench)": "3 sets of 10–12 reps.",
                                                                "Plank to Push-Up": " 3 sets of 10 reps",
                                                                "Shoulder Taps (from a plank position)":" 3 sets of 20 taps"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Lower Body (Legs, Glutes)",
                                                                "Squats (bodyweight or with added resistance like dumbbells) ": "4 sets of 12–15 reps",
                                                                "Bulgarian Split Squats (using a chair or bench)": "3 sets of 12 reps per leg",
                                                                "Glute Bridges": "4 sets of 15 reps",
                                                                "Lunges (forward or reverse)": "3 sets of 12 reps per leg",
                                                                "Calf Raises (can hold dumbbells or use bodyweight)": " 4 sets of 20 reps",
                                                                "Wall Sits":" 3 sets of 30–45 seconds."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Core & Abs",
                                                                "Planks": " 4 sets of 30–45 seconds",
                                                                "Russian Twists": "3 sets of 20 reps per side",
                                                                "Leg Raises": "3 sets of 12–15 reps",
                                                                "Bicycle Crunches": " 3 sets of 20 reps",
                                                                "Mountain Climbers": "3 sets of 30 seconds",
                                                                "Side Plank":" 3 sets of 30 seconds per side"
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Upper Body Pull (Back, Biceps)",
                                                                "Pull-Ups or Assisted Pull-Ups (use a door frame pull-up bar)": "4 sets of 5–8 reps",
                                                                "Inverted Rows (using a sturdy table or bar) ": "3 sets of 10–12 reps",
                                                                "Bent-Over Rows (with dumbbells or resistance band)": " 4 sets of 12–15 reps",
                                                                "Bicep Curls (with dumbbells or resistance bands)": " 4 sets of 12–15 reps",
                                                                "Renegade Rows (with dumbbells or household items)": "3 sets of 10 reps per side",
                                                                "Superman Holds":"3 sets of 20 seconds"

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Full-Body Compound Movements",
                                                                "Burpees": " 3 sets of 10 reps",
                                                                "Push-Up to T Rotation": "3 sets of 10 reps",
                                                                "Squat to Press (using dumbbells or any weighted object)": "4 sets of 10–12 reps",
                                                                "Deadlifts (using dumbbells or a heavy object)": " 4 sets of 12 reps",
                                                                "Step-Ups (onto a sturdy chair or bench) ": " 3 sets of 12 reps per leg",
                                                                "Jump Squats":"3 sets of 10 reps"

                                                            }
                                                        ],
                                                       
                                                    }
                                                ]
                                            },
                                            {
                                                heading: "Month 2: Progressing Intensity",
                                                "Goal": "In Month 2, the focus is on increasing the challenge by adding more resistance and progressing the difficulty of exercises.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Upper Body Push",
                                                                "Decline Push-Ups (feet elevated on a bench or chair)": "4 sets of 12–15 reps",
                                                                "Diamond Push-Ups (narrow hand placement)": "4 sets of 10–12 reps.",
                                                                "Pike Push-Ups": "4 sets of 10 reps.",
                                                                "Triceps Dips (add weight if possible)": "4 sets of 12 reps",
                                                                "Shoulder Raises (dumbbells or household items)": "4 sets of 12–15 reps",
                                                                "Push-Up with Shoulder Tap": "3 sets of 10 reps"


                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Lower Body",
                                                                "Jump Squats":"4 sets of 12 reps",
                                                                "Bulgarian Split Squats (add weight or increase reps)": "4 sets of 12 reps per leg",
                                                                "Glute Bridges with Resistance Band":"4 sets of 15 reps",
                                                                "Walking Lunges (with dumbbells or added resistance)": "4 sets of 12 reps per leg",
                                                                "Single-Leg Calf Raises":"4sets of 20 reps",
                                                                "Wall Sits with Weight":"3 sets of 45 seconds"


                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Core & Abs",
                                                                "Planks with Leg Lift": "  4 sets of 30–45 seconds",
                                                                "Russian Twists with Weight": "4 sets of 20 reps per side",
                                                                "Leg Raises (add ankle weights for resistance)": " 4 sets of 15 reps",
                                                                "V-Ups": "3 sets of 15 reps",
                                                                "Bicycle Crunches": "4 sets of 20 reps",
                                                                "Side Plank with Leg Raise":"3 sets of 20–30 seconds"
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Upper Body Pull",
                                                                "Pull-Ups (or assisted)": "4 sets of 8–10 reps",
                                                                "Inverted Rows ": " 4 sets of 12–15 reps",
                                                                "Single-Arm Dumbbell Rows": "4 sets of 12 reps per arm",
                                                                "Bicep Curls with Dumbbells": " 4 sets of 15 reps",
                                                                "Renegade Rows": "4 sets of 10 reps",
                                                                "Superman Holds":"4 sets of 20–30 seconds"

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Full-Body",
                                                                "Burpees": "4 sets of 10 reps",
                                                                "Push-Up to T Rotation": "3 sets of 10 reps",
                                                                "Squat to Press with Dumbbells": " 4 sets of 12 reps",
                                                                "Deadlifts with Dumbbells": " 4 sets of 12 reps",
                                                                "Step-Ups (onto a sturdy chair or bench) ": " 3 sets of 12 reps per leg",
                                                                "Jump Squats":"3 sets of 10 reps"

                                                            }
                                                        ],
                                                       
                                                    }
                                                ]
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
                                                "Frequency": " 4-5 days per week (with at least 1-2 days of rest or active recovery).",
                                                "Focus": "Strength training, compound movements, and muscle-building exercises.",
                                                "ProgressiveOverload": "gradually increase intensity by increasing sets, reps, or resistance.",
                                                "Duration": "45-60 minutes per session."

                                            }
                                        ],
                                        Breakdown: [
                                            {
                                                heading: "Month 1: Foundation Building",
                                                "Goal": "Focus on mastering form, building strength, and stimulating muscle fibers for growth.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Upper Body Push (Chest, Shoulders, Triceps)",
                                                                "Push-Ups (regular or knee push-ups)": "4 sets of 12–15 reps",
                                                                "Incline Push-Ups (use a chair or bench)": "3 sets of 10–12 reps",
                                                                "Pike Push-Ups (shoulder focus)": " 3 sets of 8–10 reps",
                                                                "Triceps Dips (using a sturdy chair or bench)": "3 sets of 10–12 reps.",
                                                                "Plank to Push-Up": " 3 sets of 10 reps",
                                                                "Shoulder Taps (from a plank position)":" 3 sets of 20 taps"

                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Lower Body (Legs, Glutes)",
                                                                "Squats (bodyweight or with added resistance like dumbbells) ": "4 sets of 12–15 reps",
                                                                "Bulgarian Split Squats (using a chair or bench)": "3 sets of 12 reps per leg",
                                                                "Glute Bridges": "4 sets of 15 reps",
                                                                "Lunges (forward or reverse)": "3 sets of 12 reps per leg",
                                                                "Calf Raises (can hold dumbbells or use bodyweight)": " 4 sets of 20 reps",
                                                                "Wall Sits":" 3 sets of 30–45 seconds."

                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Core & Abs",
                                                                "Planks": " 4 sets of 30–45 seconds",
                                                                "Russian Twists": "3 sets of 20 reps per side",
                                                                "Leg Raises": "3 sets of 12–15 reps",
                                                                "Bicycle Crunches": " 3 sets of 20 reps",
                                                                "Mountain Climbers": "3 sets of 30 seconds",
                                                                "Side Plank":" 3 sets of 30 seconds per side"
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Upper Body Pull (Back, Biceps)",
                                                                "Pull-Ups or Assisted Pull-Ups (use a door frame pull-up bar)": "4 sets of 5–8 reps",
                                                                "Inverted Rows (using a sturdy table or bar) ": "3 sets of 10–12 reps",
                                                                "Bent-Over Rows (with dumbbells or resistance band)": " 4 sets of 12–15 reps",
                                                                "Bicep Curls (with dumbbells or resistance bands)": " 4 sets of 12–15 reps",
                                                                "Renegade Rows (with dumbbells or household items)": "3 sets of 10 reps per side",
                                                                "Superman Holds":"3 sets of 20 seconds"

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Full-Body Compound Movements",
                                                                "Burpees": " 3 sets of 10 reps",
                                                                "Push-Up to T Rotation": "3 sets of 10 reps",
                                                                "Squat to Press (using dumbbells or any weighted object)": "4 sets of 10–12 reps",
                                                                "Deadlifts (using dumbbells or a heavy object)": " 4 sets of 12 reps",
                                                                "Step-Ups (onto a sturdy chair or bench) ": " 3 sets of 12 reps per leg",
                                                                "Jump Squats":"3 sets of 10 reps"

                                                            }
                                                        ],
                                                       
                                                    }
                                                ]
                                            },
                                            {
                                                heading: "Month 2: Progressing Intensity",
                                                "Goal": "In Month 2, the focus is on increasing the challenge by adding more resistance and progressing the difficulty of exercises.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Upper Body Push",
                                                                "Decline Push-Ups (feet elevated on a bench or chair)": "4 sets of 12–15 reps",
                                                                "Diamond Push-Ups (narrow hand placement)": "4 sets of 10–12 reps.",
                                                                "Pike Push-Ups": "4 sets of 10 reps.",
                                                                "Triceps Dips (add weight if possible)": "4 sets of 12 reps",
                                                                "Shoulder Raises (dumbbells or household items)": "4 sets of 12–15 reps",
                                                                "Push-Up with Shoulder Tap": "3 sets of 10 reps"


                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Lower Body",
                                                                "Jump Squats":"4 sets of 12 reps",
                                                                "Bulgarian Split Squats (add weight or increase reps)": "4 sets of 12 reps per leg",
                                                                "Glute Bridges with Resistance Band":"4 sets of 15 reps",
                                                                "Walking Lunges (with dumbbells or added resistance)": "4 sets of 12 reps per leg",
                                                                "Single-Leg Calf Raises":"4sets of 20 reps",
                                                                "Wall Sits with Weight":"3 sets of 45 seconds"


                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Core & Abs",
                                                                "Planks with Leg Lift": "  4 sets of 30–45 seconds",
                                                                "Russian Twists with Weight": "4 sets of 20 reps per side",
                                                                "Leg Raises (add ankle weights for resistance)": " 4 sets of 15 reps",
                                                                "V-Ups": "3 sets of 15 reps",
                                                                "Bicycle Crunches": "4 sets of 20 reps",
                                                                "Side Plank with Leg Raise":"3 sets of 20–30 seconds"
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Upper Body Pull",
                                                                "Pull-Ups (or assisted)": "4 sets of 8–10 reps",
                                                                "Inverted Rows ": " 4 sets of 12–15 reps",
                                                                "Single-Arm Dumbbell Rows": "4 sets of 12 reps per arm",
                                                                "Bicep Curls with Dumbbells": " 4 sets of 15 reps",
                                                                "Renegade Rows": "4 sets of 10 reps",
                                                                "Superman Holds":"4 sets of 20–30 seconds"

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Full-Body",
                                                                "Burpees": "4 sets of 10 reps",
                                                                "Push-Up to T Rotation": "3 sets of 10 reps",
                                                                "Squat to Press with Dumbbells": " 4 sets of 12 reps",
                                                                "Deadlifts with Dumbbells": " 4 sets of 12 reps",
                                                                "Step-Ups (onto a sturdy chair or bench) ": " 3 sets of 12 reps per leg",
                                                                "Jump Squats":"3 sets of 10 reps"

                                                            }
                                                        ],
                                                       
                                                    }
                                                ]
                                            },
                                            {
                                                heading: "Month 3: Advanced Training",
                                                "Goal": "Month 3 focuses on increasing the difficulty through compound lifts, more weight, and additional volume.",
                                                DailyPlan: [
                                                    {
                                                        Day1: [
                                                            {
                                                                heading: "Day 1: Upper Body Push",
                                                                "Decline Push-Ups ": "5 sets of 15 reps",
                                                                "Diamond Push-Ups ": "5 sets of 12 reps.",
                                                                "Pike Push-Ups": "5 sets of 12 reps.",
                                                                "Triceps Dips  with Added Weight ": "5 sets of 12 reps",
                                                                "Shoulder Raises": "5 sets of 12 reps",
                                                                "Push-Up with Shoulder Tap": "4 sets of 12 reps"


                                                            }
                                                        ],
                                                        Day2: [
                                                            {
                                                                heading: "Day 2: Lower Body",
                                                                "Jump Squats":"5 sets of 12 reps",
                                                                "Bulgarian Split Squats (weighted)": "5 sets of 12 reps",
                                                                "Glute Bridges with Resistance Band":"5 sets of 12 reps",
                                                                "Walking Lunges with dumbbells ": "5 sets of 12 reps",
                                                                "Single-Leg Calf Raises  with Weight":"5 sets of 12 reps",
                                                                "Wall Sits with Weight":" 4 sets of 1 minute"


                                                            }
                                                        ],
                                                        Day3: [
                                                            {
                                                                heading: "Day 3: Core & Abs",
                                                                "Planks with Leg Lift": "  5 sets of 45 seconds",
                                                                "Russian Twists with Weight": "5 sets of 25 reps per side",
                                                                "Leg Raises (add ankle weights for resistance)": "5 sets of 20 reps",
                                                                "V-Ups": "4 sets of 20 reps",
                                                                "Bicycle Crunches": " 5 sets of 25 reps",
                                                                "Side Plank with Leg Raise":" 4 sets of 30 seconds"
                                                            }
                                                        ],
                                                        Day4: [
                                                            {
                                                                heading: "Day 4: Upper Body Pull",
                                                                "Pull-Ups (or assisted)": "5 sets of 10 reps",
                                                                "Inverted Rows ": " 5 sets of 15 reps",
                                                                "Single-Arm Dumbbell Rows": " 5 sets of 15 reps per arm",
                                                                "Bicep Curls with Dumbbells": " 5 sets of 20 reps",
                                                                "Renegade Rows": " 5 sets of 12 reps",
                                                                "Superman Holds":"5 sets of 30 seconds"

                                                            }
                                                        ],
                                                        Day5: [
                                                            {
                                                                heading: "Day 5: Full-Body",
                                                                "Burpees": "5 sets of 12 reps",
                                                                "Push-Up to T Rotation": " 5 sets of 12 reps",
                                                                "Squat to Press with Dumbbells": " 5 sets of 15 reps",
                                                                "Deadlifts with Dumbbells": "  5 sets of 15 reps",
                                                                "Step-Ups (onto a sturdy chair or bench) ": "5 sets of 15 reps per leg",
                                                                "Jump Squats":" 4 sets of 15 reps"

                                                            }
                                                        ],
                                                       
                                                    }
                                                ]
                                            }

                                        ],
                                        TipstoSuccess: [
                                            {
                                                "WarmUpAndCoolDown": "5–10 minutes of cardio or dynamic stretches before workouts.",
                                                "ProgressiveOverload": "Gradually increase weights, reps, or intensity weekly.",
                                                "Nutrition": "Increase your caloric intake with nutrient-dense foods like lean",
                                                "Rest": "Get enough sleep (7-8 hours) and take rest days to promote muscle recovery.."
                                            }
                                        ]
                                    },
                                ],
                            },
                            {
                                WorkOutTitle: "Muscle Workout",
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
                            }

                        ],
                    },
                    {
                        fitnessGoal: "Weight Loss",
                    }
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
        <div className="workout_plan">
    <h1 className="workout_plan_heading">Workout Plan</h1>
    {filteredPlan ? (
        <div className="plan_details">
            <h2 className="plan_structure_heading">Plan Structure</h2>
            {/* Plan Structure */}
            <div className="plan_structure">
                <div className="plan_structure_item">
                    <strong className="plan_structure_label">Frequency:</strong> {filteredPlan.planStructure[0].Frequency}
                </div>
                <div className="plan_structure_item">
                    <strong className="plan_structure_label">Focus:</strong> {filteredPlan.planStructure[0].Focus}
                </div>
                <div className="plan_structure_item">
                    <strong className="plan_structure_label">Progressive Overload:</strong>{" "}
                    {filteredPlan.planStructure[0].ProgressiveOverload}
                </div>
                <div className="plan_structure_item">
                    <strong className="plan_structure_label">Duration:</strong>{" "}
                    {filteredPlan.planStructure[0].Duration}
                </div>
            </div>

            {/* Breakdown */}
            <div className="breakdown">
                <h3 className="breakdown_heading">Breakdown</h3>
                {filteredPlan.Breakdown?.length > 0 ? (
                    filteredPlan.Breakdown.map((breakdown, index) => (
                        <div className="breakdown_item" key={index}>
                            <h4 className="breakdown_heading">{breakdown.heading}</h4>
                            <p className="breakdown_goal">Goal: {breakdown.Goal}</p>
                            <div className="daily_plan">
                                {breakdown.DailyPlan?.length > 0 ? (
                                    breakdown.DailyPlan.map((day, dayIndex) => (
                                        <div className="daily_plan_item" key={dayIndex}>
                                            <strong className="daily_plan_label">Daily Plan:</strong>
                                            {Object.entries(day).map(([dayKey, dayValue]) => (
                                                <div className="daily_plan_day" key={dayKey}>
                                                    {dayValue?.map((activity, activityIndex) => (
                                                        <div className="daily_plan_activity" key={activityIndex}>
                                                            <strong className="activity_heading">{activity.heading}</strong>
                                                            <ul className="activity_details">
                                                                {Object.entries(activity)
                                                                    .filter(([key]) => key !== "heading")
                                                                    .map(([key, value]) => (
                                                                        <li className="activity_detail_item" key={key}>
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
                                    <div className="fallback_content">
                                        {Object.entries(breakdown)
                                            .filter(([key]) => key !== "heading" && key !== "Goal")
                                            .map(([key, value]) => (
                                                <div className="fallback_item" key={key}>
                                                    <ul className="fallback_list">
                                                        {Array.isArray(value) ? (
                                                            value.map((item, index) => (
                                                                <li className="fallback_list_item" key={index}>{item}</li>
                                                            ))
                                                        ) : (
                                                            <li className="fallback_list_item">{value}</li>
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="no_breakdown_message">No breakdown available.</p>
                )}
            </div>

            {/* Tips to Success */}
            <div className="tips_to_success">
                <h3 className="tips_to_success_heading">Tips to Success</h3>
                <ul className="tips_list">
                    {filteredPlan.TipstoSuccess?.length > 0 ? (
                        filteredPlan.TipstoSuccess.map((tip, index) => (
                            <li className="tip_item" key={index}>
                                <strong className="tip_label">Warm-Up:</strong> {tip.WarmUpAndCoolDown}
                                <br />
                                <strong className="tip_label">Progressive Overload:</strong> {tip.ProgressiveOverload}
                                <br />
                                <strong className="tip_label">Nutrition:</strong> {tip.Nutrition}
                                <br />
                                <strong className="tip_label">Rest:</strong> {tip.Rest}
                            </li>
                        ))
                    ) : (
                        <p className="no_tips_message">No tips available.</p>
                    )}
                </ul>
            </div>
        </div>
    ) : (
        <p className="loading_message">Loading or no matching plan found.</p>
    )}
</div>

        // <div>
        //     <h1>Workout Plan</h1>
        //     {filteredPlan ? (
        //         <div>
        //             <h2>Plan Structure </h2>
        //             {/* Plan Structure */}
        //             <div>
        //                 <strong>Frequency:</strong> {filteredPlan.planStructure[0].Frequency}
        //             </div>
        //             <div>
        //                 <strong>Focus:</strong> {filteredPlan.planStructure[0].Focus}
        //             </div>
        //             <div>
        //                 <strong>Progressive Overload:</strong>{" "}
        //                 {filteredPlan.planStructure[0].ProgressiveOverload}
        //             </div>
        //             <div>
        //                 <strong>Duration:</strong>{" "}
        //                 {filteredPlan.planStructure[0].Duration}
        //             </div>
        //             {/* Breakdown */}
        //             <div>
        //                 <h3>Breakdown</h3>
        //                 {filteredPlan.Breakdown?.length > 0 ? (
        //                     filteredPlan.Breakdown.map((breakdown, index) => (
        //                         <div key={index}>
        //                             <h4>{breakdown.heading}</h4>
        //                             <p>Goal:{breakdown.Goal}</p>
        //                             <div>

        //                                 {
        //                                     breakdown.DailyPlan?.length > 0 ? (
        //                                         breakdown.DailyPlan.map((day, dayIndex) => (
        //                                             <div key={dayIndex}>
        //                                                 <strong>Daily Plan:</strong>
        //                                                 {Object.entries(day).map(([dayKey, dayValue]) => (
        //                                                     <div key={dayKey}>
        //                                                         {/* <h5>{dayKey}</h5> */}
        //                                                         {/* <strong>Daily Plan:</strong> */}
        //                                                         {dayValue?.map((activity, activityIndex) => (
        //                                                             <div key={activityIndex}>
        //                                                                 <strong>{activity.heading}</strong>
        //                                                                 <ul>
        //                                                                     {Object.entries(activity)
        //                                                                         .filter(([key]) => key !== "heading")
        //                                                                         .map(([key, value]) => (
        //                                                                             <li key={key}>
        //                                                                                 {key}: {value}
        //                                                                             </li>
        //                                                                         ))}
        //                                                                 </ul>
        //                                                             </div>
        //                                                         ))}
        //                                                     </div>
        //                                                 ))}
        //                                             </div>
        //                                         ))
        //                                     ) : (
        //                                         // Fallback content if DailyPlan is not available
        //                                         <div>
        //                                             {Object.entries(breakdown)
        //                                                 .filter(([key]) => key !== "heading" && key !== "Goal") // Filter out "heading" and "goal"
        //                                                 .map(([key, value]) => (
        //                                                     <div key={key}>
        //                                                         <ul>
        //                                                             {Array.isArray(value) ? (
        //                                                                 value.map((item, index) => (
        //                                                                     <li key={index}>{item}</li> // Render array items directly
        //                                                                 ))
        //                                                             ) : (
        //                                                                 <li>{value}</li> // Render non-array value
        //                                                             )}
        //                                                         </ul>
        //                                                     </div>
        //                                                 ))}

        //                                         </div>
        //                                     )
        //                                 }

        //                             </div>
        //                         </div>
        //                     ))
        //                 ) : (
        //                     <p>No breakdown available.</p>
        //                 )}
        //             </div>

        //             {/* Tips to Success */}
        //             <div>
        //                 <h3>Tips to Success</h3>
        //                 <ul>
        //                     {filteredPlan.TipstoSuccess?.length > 0 ? (
        //                         filteredPlan.TipstoSuccess.map((tip, index) => (
        //                             <li key={index}>
        //                                 <strong>Warm-Up:</strong> {tip.WarmUpAndCoolDown}
        //                                 <br />
        //                                 <strong>Progressive Overload:</strong>{tip.ProgressiveOverload}
        //                                 <br />
        //                                 <strong>Nutrition:</strong> {tip.Nutrition}
        //                                 <br />
        //                                 <strong>Rest:</strong>{tip.Rest}
        //                             </li>
        //                         ))
        //                     ) : (
        //                         <p>No tips available.</p>
        //                     )}
        //                 </ul>
        //             </div>
        //         </div>
        //     ) : (
        //         <p>Loading or no matching plan found.</p>
        //     )}
        // </div>
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
