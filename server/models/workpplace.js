const mongoose = require('mongoose');

const workoutPlaceSchema = new mongoose.Schema({
  userId: { type: Number, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  bmi: { type: String, required: true },
  healthIssues: { type: [String], required: true },
  otherHealth: { type: String },
  fitnessGoal: { type: String, required: true },
  workoutType: { type: String, required: true },
  duration: { type: String, required: true },
  dietPlan: { type: String, required: true },
});

const WorkoutPlace = mongoose.model('WorkoutPlace', workoutPlaceSchema);

module.exports = WorkoutPlace;
