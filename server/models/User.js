



const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,  // Custom userId, not ObjectId
      required: true,
      unique: true,  // Ensure the userId is unique
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,  // Ensure email is unique
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,  // Adds createdAt and updatedAt fields
  }
);

const User = mongoose.model("Fitness_SignUp", userSchema);

// Automatically generate userId when a new user is saved
userSchema.pre('save', async function(next) {
  if (this.isNew) {
    const latestUser = await User.findOne().sort({ userId: -1 });
    this.userId = latestUser ? latestUser.userId + 1 : 1;
  }
  next();
});

module.exports = User;

