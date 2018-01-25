const mongoose = require("mongoose");
const { Schema } = mongoose;

const LessonsSchema = new Schema({
  orderId: Number,
  category: String,
  method_name: String,
  title: String,
  content: String,
  points_worth: Number,
  technical_summary: String
});

mongoose.model("lessons", LessonsSchema);
