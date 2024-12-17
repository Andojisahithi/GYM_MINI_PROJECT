

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables
const User = require("./models/User"); // Import User model
const cors = require('cors'); // Import cors
// const PORT = process.env.PORT || 5000;
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all origins (you can specify origins if needed)
app.use(cors());

// MongoDB Connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Log the connected database name
    console.log(`MongoDB connected successfully to database: ${conn.connection.name}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
};


// Signup API
app.post("/api/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate request body
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email }, // Avoid sending the password
    });
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Login API
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "defaultsecret", // Use a secure secret in production
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    res.status(200).json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Middleware to Protect Routes
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: "Access denied, token missing" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET || "defaultsecret");
    req.user = verified; // Attach user info to request
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};


// Define Mongoose Schema for storing fitness registration data
const workoutPlaceSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bmi: String,
  healthIssues: [String],
  otherHealth: String,
  fitnessGoal: String,
  workoutType: String,
  duration: String,
  dietPlan: String,
}, { collection: 'workoutplace' });  // Specify the collection name 'workoutplace'

// Create Registration Model based on the Schema
const WorkoutPlace = mongoose.model("WorkoutPlace", workoutPlaceSchema);

// POST route to save registration data in 'workoutplace' collection
app.post("/api/fitness-registration", async (req, res) => {
  try {
    const {
      name,
      age,
      bmi,
      healthIssues,
      otherHealth,
      fitnessGoal,
      workoutType,
      duration,
      dietPlan,
    } = req.body;

    // Create new registration document for workoutplace collection
    const newWorkoutPlace = new WorkoutPlace({
      name,
      age,
      bmi,
      healthIssues,
      otherHealth,
      fitnessGoal,
      workoutType,
      duration,
      dietPlan,
    });

    // Save data to MongoDB in the 'workoutplace' collection
    await newWorkoutPlace.save();
    res.status(201).json({ message: "Registration successful", success: true });
  } catch (err) {
    console.error("Error saving registration:", err);
    res.status(500).json({ message: "Error saving registration", success: false });
  }
});



// Protected Route Example
app.get("/api/protected", authenticateToken, (req, res) => {
  res.status(200).json({ message: "This is a protected route", user: req.user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
