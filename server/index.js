

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables
const User = require("./models/User"); // Import User model
const cors = require('cors'); // Import cors
// const PORT = process.env.PORT || 5000;
const app = express();
const UserCounter = require('./models/Counter');
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




app.post("/api/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Get the next userId from the counter
    const counter = await UserCounter.findOneAndUpdate(
      { _id: "userId" },    // Unique identifier for the counter
      { $inc: { count: 1 } }, // Increment the counter by 1
      { new: true, upsert: true } // If not found, create a new entry
    );

    // Create a new user with the incremented userId
    const userId = counter.count;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userId,    // Use the incremented userId
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      userId: newUser.userId, // Return the userId
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
});
app.get("/userData/:userId", async (req, res) => {
  const { userId } = req.params;

  console.log("Received userId:", userId);  // Debugging log

  try {
    // Ensure userId is a number if needed
    const user = await User.findOne({ userId: Number(userId) });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User details retrieved successfully",
      user: {
        userId: user.userId,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong!" });
  }
});




// // Login API
// app.post("/api/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate request body
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // Compare the password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET || "defaultsecret", // Use a secure secret in production
//       { expiresIn: "1h" } // Token expires in 1 hour
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: { id: user._id, name: user.name, email: user.email },
//     });
//   } catch (error) {
//     console.error("Error during login:", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });

// app.post("/api/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Validate request body
//     if (!email || !password) {
//       return res.status(400).json({ message: "Email and password are required" });
//     }

//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // Compare the password with the hashed password in the database
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid email or password" });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET || "defaultsecret",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       message: "Login successful",
//       token,
//       user: { id: user._id, name: user.name, email: user.email },
//     });
//   } catch (error) {
//     console.error("Error during login:", error.message);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });



app.post("/api/login", async (req, res) => {
  try {
    console.log("Request body:", req.body); // Log request body
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1h" }
    );

    console.log("Login successful:", { userId: user.userId });
    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        userId: user.userId,
        name: user.name,
        email: user.email,
      },
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
  userId:  Number,
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

// // POST route to save registration data in 'workoutplace' collection
app.post("/api/fitness-registration", async (req, res) => {
  try {
    const {
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
    } = req.body;

    // Create new registration document for workoutplace collection
    const newWorkoutPlace = new WorkoutPlace({
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
    });

    // Save data to MongoDB in the 'workoutplace' collection
    await newWorkoutPlace.save();
    res.status(201).json({ message: "Registration successful", success: true });
  } catch (err) {
    console.error("Error saving registration:", err);
    res.status(500).json({ message: "Error saving registration", success: false });
  }
});



app.get("/fitnessRegistrationsData/:userId", async (req, res) => {
  const { userId } = req.params; // Extract userId from URL parameters
  try {
    // Find registrations matching the userId
    const registrations = await WorkoutPlace.find({ userId });

    if (registrations.length === 0) {
      return res.status(404).json({ message: "No registrations found for this user", success: false });
    }

    res.status(200).json({ data: registrations, success: true });
  } catch (err) {
    console.error("Error fetching registrations:", err);
    res.status(500).json({ message: "Error fetching registrations", success: false });
  }
});


  


// Protected Route Example
app.get("/api/protected", authenticateToken, (req, res) => {
  res.status(200).json({ message: "This is a protected route", user: req.user });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on http://localhost:${PORT}`);
});
