const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  email: String,
  emailSub: Boolean,
  lastCompletedLesson: Number,
  score: Number
});

mongoose.model("users", userSchema);
