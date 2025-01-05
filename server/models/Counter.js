const { Schema, model } = require("mongoose");

const userCounterSchema = new Schema({
  _id: { type: String, required: true }, // "userId" as the counter
  count: { type: Number, default: 1 },   // Start from 1
});

const UserCounter = model("UserCounter", userCounterSchema);

module.exports = UserCounter;
