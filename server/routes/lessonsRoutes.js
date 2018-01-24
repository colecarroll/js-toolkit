const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Lesson = mongoose.model("lessons");

module.exports = app => {
  app.post("/api/lessons", requireLogin, async (req, res) => {
    const les = req.body;

    const lesson = new Lesson({
      orderId: les.orderId,
      category: les.category,
      method_name: les.method_name,
      title: les.title,
      content: les.content,
      points_worth: les.points_worth,
      technical_summary: les.technical_summary
    });

    const postedLesson = await lesson.save();
    res.send(postedLesson);
  });
};
