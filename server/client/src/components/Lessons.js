import React from "react";

const Lessons = () => {
  return (
    <div className="post-lesson-page">
      <h1>Post a new lesson</h1>
      <h3>Most recent lesson orderId:</h3>
      <form action="/api/lessons" method="post">
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
          <label htmlFor="content">
            Content -- This is where the content of the lesson goes. It must be
            written in Markdown! It needs to be all on one line. Each line break
            is signified with '\n\n' after it.
          </label>
          <br />
          <textarea rows="100" cols="100" name="content" type="text" />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit Lesson
        </button>
      </form>
    </div>
  );
};

export default Lessons;
