const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");

const Lesson = mongoose.model("lessons");

module.exports = app => {
  app.post("/api/lessons/new", requireLogin, async (req, res) => {
    const lessonSubmission = req.body;
    console.log(lessonSubmission);

    const newLesson = new Lesson({
      orderId: lessonSubmission.orderId,
      category: lessonSubmission.category,
      method_name: lessonSubmission.method_name,
      title: lessonSubmission.title,
      points_worth: lessonSubmission.points_worth,
      technical_summary: lessonSubmission.technical_summary,
      content_1: lessonSubmission.content_1,
      youtube_url: lessonSubmission.youtube_url,
      challenge_desc_1: lessonSubmission.challenge_desc_1,
      code_solution_1: lessonSubmission.code_solution_1,
      challenge_desc_2: lessonSubmission.challenge_desc_2,
      code_solution_2: lessonSubmission.code_solution_2,
      content_2: lessonSubmission.content_2
    });

    const postedLesson = await newLesson.save();
    res.redirect("/dashboard");
  });

  app.get("/api/lessons", requireLogin, async (req, res) => {
    const lessons = await Lesson.find();
    res.send(lessons);
  });
};
