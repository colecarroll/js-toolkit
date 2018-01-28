import React from "react";

const Lessons = () => {
  return (
    <div className="post-lesson-page">
      <h1>Post a new lesson</h1>
      <h3>Most recent lesson orderId:</h3>
      <form action="/api/lessons/new" method="post">
        <div className="form-group">
          <label htmlFor="orderId">
            Order ID -- this is very important. This is the order in which the
            lessons will be presented to the user. This is a number, e.g. '1',
            '5', '58'
          </label>
          <br />
          <input name="orderId" type="number" />
        </div>

        <div className="form-group">
          <label htmlFor="category">
            Category -- 'Array', 'String', 'Object', or 'Math'
          </label>
          <br />
          <input name="category" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="method_name">Method Name -- (e.g. 'array.map')</label>
          <br />
          <input name="method_name" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="title">
            Title -- Title for the lesson. Something catchy - 'Mapping Through
            Function!' etc
          </label>
          <br />
          <input name="title" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="points_worth">
            Points Worth -- How many points is completing this lesson worth?
            e.g. '5', '2', '20'
          </label>
          <br />
          <input name="points_worth" type="number" />
        </div>

        <div className="form-group">
          <label htmlFor="technical_summary">
            Technical Summary -- e.g. - 'Array.map( ) is one of the most used
            methods in existence. It's a great way to call a function on every
            item in an array without mutating (changing) the original array
            data. It's a great alternative to a for loop in many situations.
            Let's get started!'
          </label>
          <br />
          <textarea rows="10" cols="100" name="technical_summary" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="content_1">
            Content 1 -- This is where the content of the lesson goes. An
            introduction to the concept and all the educational content will go
            here. It must be written in Markdown!
          </label>
          <br />
          <textarea rows="80" cols="100" name="content_1" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="youtube-url">
            Youtube URL id -- This is where you will put any supplementary
            youtube videos. After you post your youtube video click 'share',
            then 'embed', it will give you the url you need to paste here. For
            example "https://www.youtube.com/embed/W6hasdx4a1I"
          </label>
          <br />
          <input name="youtube_url" type="url" />
        </div>

        <div className="form-group">
          <label htmlFor="challenge_desc_1">
            Challenge Description 1-- This is where you will put the description
            of code challenge 1. Written in Markdown!
          </label>
          <br />
          <textarea rows="10" cols="100" name="challenge_desc_1" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="code_solution_1">
            Write the code solution for the first challenge. Not written in
            markdown.
          </label>
          <br />
          <textarea rows="7" cols="100" name="code_solution_1" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="challenge_desc_2">
            Challenge Description 2-- This is where you will put the description
            of code challenge 2. Written in Markdown!
          </label>
          <br />
          <textarea rows="10" cols="100" name="challenge_desc_2" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="code_solution_2">
            Write the code solution for the second challenge. Not written in
            markdown.
          </label>
          <br />
          <textarea rows="7" cols="100" name="code_solution_2" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="content_2">
            Content 2 -- This is where a wrap up of the lesson goes. It must be
            written in Markdown!
          </label>
          <br />
          <textarea rows="10" cols="100" name="content_2" type="text" />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit Lesson
        </button>
      </form>
    </div>
  );
};

export default Lessons;
