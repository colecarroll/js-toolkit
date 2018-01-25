const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Lesson = mongoose.model("lessons");

module.exports = app => {
  app.post("/api/lessons", requireLogin, async (req, res) => {
    const lessonSubmission = req.body;

    const newLesson = new Lesson({
      orderId: lessonSubmission.orderId,
      category: lessonSubmission.category,
      method_name: lessonSubmission.method_name,
      title: lessonSubmission.title,
      content: lessonSubmission.content,
      points_worth: lessonSubmission.points_worth,
      technical_summary: lessonSubmission.technical_summary
    });

    const postedLesson = await newLesson.save();
    res.redirect("/lessons");
  });

  app.get("/api/lessons", requireLogin, async (req, res) => {
    const lessons = await Lesson.find();
    res.send(lessons);
  });
};
