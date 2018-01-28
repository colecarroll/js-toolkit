const mongoose = require("mongoose");
const { Schema } = mongoose;

const LessonsSchema = new Schema({
  orderId: Number,
  category: String,
  method_name: String,
  title: String,
  points_worth: Number,
  technical_summary: String,
  content_1: String,
  youtube_url: String,
  challenge_desc_1: String,
  code_solution_1: String,
  challenge_desc_2: String,
  code_solution_2: String,
  content_2: String
});

mongoose.model("lessons", LessonsSchema);
