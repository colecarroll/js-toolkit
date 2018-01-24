const mongoose = require("mongoose");
const { Schema } = mongoose;

const LessonsSchema = new Schema({
  orderId: Number,
  category: String,
  method_name: String,
  title: String,
  content: String,
  pointsWorth: Number,
  codeCheck1: String,
  codeCheck2: String
});

mongoose.model("lessons", LessonsSchema);
