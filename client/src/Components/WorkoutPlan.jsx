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
                                                "Focus": "Compound movements (squats, bench press, deadlifts) and hypertrophy (muscle growth).",
                                                "ProgressiveOverload": "Gradually increase weights or reps every week.",
                                                "Duration": "60–75 minutes per session."

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
