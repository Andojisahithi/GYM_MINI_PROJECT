
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import './Styles/DietPlan.css'

const DietPlan = () => {
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
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                    monthPlan: "2 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Yoga",
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
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Pilates",
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
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Muscle Workout",
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
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Aerobic Exercise",
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
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Personal Homework Workout",
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
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Asthma: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
            healthIssues: "Diabetes",
            fitnessTypes: [
                {
                    fitnessGoal: "Gain weight",
                    workOutType: [
                        {
                            WorkOutTitle: "Gym",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            1: "1 cup cooked oats with almond milk.",
                                            2: "1 tbsp almond butter.",
                                            3: "1 tbsp chia seeds.",
                                            4: "1 medium banana (sliced).",
                                            5: "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Yoga",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Pilates",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Muscle Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Aerobic Exercise",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Personal Homework Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Diabetes: Avoid high-sugar foods to prevent spikes in blood sugar.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
            healthIssues: "Lactose Intolerance",
            fitnessTypes: [
                {
                    fitnessGoal: "Gain weight",
                    workOutType: [
                        {
                            WorkOutTitle: "Gym",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Yoga",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Pilates",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Muscle Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Aerobic Exercise",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Personal Homework Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Lactose Intolerance: Use plant-based milk like almond, soy, or oat milk.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
            healthIssues: "Heart Disease",
            fitnessTypes: [
                {
                    fitnessGoal: "Gain weight",
                    workOutType: [
                        {
                            WorkOutTitle: "Gym",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Yoga",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Pilates",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Muscle Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Aerobic Exercise",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Personal Homework Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Heart Disease: Focus on unsaturated fats, avoid trans fats, and limit saturated fats.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
            healthIssues: "Blood Pressure",
            fitnessTypes: [
                {
                    fitnessGoal: "Gain weight",
                    workOutType: [
                        {
                            WorkOutTitle: "Gym",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Yoga",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Pilates",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Muscle Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Aerobic Exercise",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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
                            WorkOutTitle: "Personal Homework Workout",
                            plans: [
                                {
                                    monthPlan: "1 Month",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            BreakFast: "500-600 kcal",
                                            MorningSnack: "300–400 kcal",
                                            Lunch: "600–700 kcal",
                                            EveningSnack: "300–400 kcal",
                                            Dinner: "500–600 kcal",
                                            OptionalSnack: "00–300 kcal"
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)-Oatmeal Bowl:",
                                            "1": "1 cup cooked oats with almond milk.",
                                            "2": "1 tbsp almond butter.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Herbal Tea or Black Coffee."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "2": "1 boiled egg or tofu scramble on whole-grain toast."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)-Grilled Chicken or Tofu Salad:",
                                            "1": "150g grilled chicken or tofu.",
                                            "2": "Mixed greens, cucumber, tomatoes, and 1/2 avocado.",
                                            "3": "Olive oil and lemon dressing.",
                                            "4": "1 cup cooked quinoa or brown rice."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)-Smoothie:",
                                            "1": "1 cup unsweetened almond milk.",
                                            "2": "1 scoop plant-based protein powder.",
                                            "3": "1 tbsp peanut butter.",
                                            "4": "1/2 cup frozen berries."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)-Grilled Salmon or Lentils:",
                                            "1": "150g grilled salmon or 1 cup cooked lentils.",
                                            "2": "Steamed broccoli and carrots (drizzle with olive oil).",
                                            "3": "1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            "6": "Dairy Substitutes: Almond milk."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "2 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked oatmeal (with almond milk).",
                                            "3": "1 tbsp almond butter.",
                                            "4": "1 medium banana (sliced).",
                                            "5": "Month 2:",
                                            "6": "Add 1 tbsp chia seeds or 2 tbsp ground flaxseeds to oatmeal.",
                                            "7": "Include 1 boiled egg (or scrambled tofu if vegan)."
                                        },
                                        {
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "Handful of mixed nuts (almonds, walnuts, pistachios)",
                                            "3": "1 small apple or pear.",
                                            "4": "Month 2:",
                                            "5": "Add 1 tbsp of sunflower or pumpkin seeds.",
                                            "6": "Include a small slice of whole-grain bread with almond butter."
                                        },
                                        {
                                            Heading: "Lunch (600–700 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup cooked quinoa or brown rice.",
                                            "3": "Grilled chicken or tofu (150g).",
                                            "4": "Mixed vegetable salad with olive oil and lemon. dressing.",
                                            "5": "Month 2:",
                                            "6": "Add 1/2 avocado to the salad.",
                                            "7": "Include 1 medium baked sweet potato."
                                        },
                                        {
                                            Heading: "Afternoon Snack (300–400 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 cup unsweetened coconut yogurt with berries.",
                                            "3": "1 tbsp chia seeds.",
                                            "4": "Month 2:",
                                            "5": "Add a handful of granola to the yogurt.",
                                            "6": "Include 1 boiled egg or a small serving of hummus with carrots."
                                        },
                                        {
                                            Heading: "Dinner (500–600 kcal)",
                                            "1": "Month 1:",
                                            "2": "Grilled salmon or lentils (150g).",
                                            "3": "Steamed broccoli and carrots with olive oil.",
                                            "4": "1 cup cooked quinoa.",
                                            "5": "Month 2:",
                                            "6": "Add 1 medium roasted sweet potato.",
                                            "7": "Increase portion of vegetables."
                                        },
                                        {
                                            Heading: "Optional Evening Snack (200–300 kcal)",
                                            "1": "Month 1:",
                                            "2": "1 small handful of nuts or seeds.",
                                            "3": "Month 2:",
                                            "4": "Include a piece of dark chocolate (70% or higher)."
                                        }
                                    ],
                                    "Food to Include": [
                                        {
                                            Heading: "Food to Include:",
                                            "1": "Proteins: Chicken, salmon, tofu, eggs, lentils, chickpeas.",
                                            "2": "Carbs: Quinoa, oats, brown rice, sweet potatoes.",
                                            "3": "Healthy Fats: Avocado, olive oil, almond butter, nuts.",
                                            "4": "Fruits and Veggies: Berries, spinach, kale, carrots, broccoli.",
                                            "5": "Dairy Alternatives: Unsweetened almond milk, soy milk, coconut yogurt."
                                        }
                                    ]
                                },
                                {
                                    monthPlan: "3 Months",
                                    suggestion: "Blood Pressure: Use diet with low sodium, high potassium, lean proteins, whole grains, and plenty of fruits and vegetables.",
                                    Breakdown: [
                                        {
                                            "Month 1": "~2,000–2,200 kcal/day.",
                                            "Month 2": "~2,300–2,500 kcal/day.",
                                            "Month 3": "~2,600–2,800 kcal/day."
                                        }
                                    ],
                                    DietPlan: [
                                        {
                                            Heading: "Breakfast (500–600 kcal)",
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
                                            Heading: "Mid-Morning Snack (300–400 kcal)",
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
                                            Heading: "Lunch (600–700 kcal)",
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
                                            Heading: "Afternoon Snack (300–400 kcal)",
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
                                            Heading: "Dinner (500–600 kcal)",
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
                                            Heading: "Optional Evening Snack (200–300 kcal)",
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
                                            Heading: "Food to Include:",
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


    const navigate = useNavigate();

    const handleWorkOutPlan = () => {
        navigate(`/WorkOutPlan/${userId}`);
        window.location.reload();
    };


    const handleDownloadPdf = async () => {
        const element = document.querySelector('.plans_container'); // Select the element to screenshot
        if (!element) return;

        try {
            // Take a screenshot of the element
            const canvas = await html2canvas(element, { scale: 2 }); // Higher scale for better quality
            const imgData = canvas.toDataURL('image/png'); // Convert the canvas to an image

            // Create a new PDF instance
            const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait, millimeters, A4 size
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // Maintain aspect ratio

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight); // Add the image to the PDF
            pdf.save('plans.pdf'); // Save the PDF
        } catch (error) {
            console.error('Failed to generate PDF:', error);
        }
    };
    return (

        <div className="plans_container">
            {matchedPlans.length > 0 ? (
                matchedPlans.map((plan, index) => (
                    <div className="plan_card" key={index}>
                        <h3 className="plan_duration">Plan Duration: {plan.monthPlan}</h3>
                        <p className="plan_suggestion">Suggestion: {plan.suggestion}</p>

                        {/* Breakdown for Month 1 and Month 2 */}
                        {plan.Breakdown && plan.Breakdown.length > 0 && (
                            <div className="breakdown_section">
                                <h4 className="breakdown_title">Breakdown:</h4>
                                <ul className="breakdown_list">
                                    {Object.entries(plan.Breakdown[0]).map(([month, kcal], idx) => (
                                        <li className="breakdown_item" key={idx}>
                                            {month}: {kcal}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <h4 className="diet_plan_title">Diet Plan:</h4>
                        {plan.DietPlan.map((diet, idx) => (
                            <div className="diet_plan_card" key={idx}>
                                <h5 className="diet_plan_heading">{diet.Heading}</h5>
                                <ul className="diet_plan_list">
                                    {Object.entries(diet)
                                        .filter(([key]) => key !== "Heading")
                                        .map(([key, value]) => (
                                            <li className="diet_plan_item" key={key}>
                                                {key}: {value}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))}

                        {/* Rendering the "Food to Include" data */}
                        {plan["Food to Include"] && (
                            <div className="food_include_section">
                                <h4 className="food_include_title">Food to Include:</h4>
                                {plan["Food to Include"].map((food, idx) => (
                                    <div className="food_include_card" key={idx}>
                                        {/* <h5 className="food_include_heading">{food.Heading}</h5> */}
                                        <ul className="food_include_list">
                                            {Object.entries(food)
                                                .filter(([key]) => key !== "Heading")
                                                .map(([key, value]) => (
                                                    <li className="food_include_item" key={key}>
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
                <p className="no_plans_message">No matching plans found.</p>
            )}
            <div className="actions_container">
                <button className="download_pdf_button" onClick={handleDownloadPdf}>Download Pdf</button>
                <button className="workout_plan_button" onClick={handleWorkOutPlan}>WorkOutPlan</button>
            </div>
        </div>

    )

};

export default DietPlan;






