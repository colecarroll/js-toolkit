import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-body">
      <h1>
        About <span className="accomplishment">jstoolkit.io</span>
      </h1>
      <p>
        Jstoolkit was designed to be used in conjunction with{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
        >
          MDN web docs
        </a>, not as a replacement. It's a training program for beginners to
        JavaScript who would like go about building the habit of learning a
        global object method each day. The best research on learning shows that
        information that is absorbed in small chunks consistently over a period
        of extended time leads to the highest recall percentage.
      </p>
      <p>
        Instead of referring to MDN whenever a coding problem arises that you
        can't figure out the answer to, you will be proactively learning these
        methods, and thus will be able to dispatch them on problems as needed.
      </p>
      <p>
        The aim of jstoolkit is to also engage students in several different
        learning styles. Written, Auditory, Visual, and Active learning will be
        used in each lesson. Jstoolkit lessons also attempt to explain each
        method in <em>layman</em> terms. For beginners, technical documentation
        can be quite daunting and difficult to absorb, so we will make every
        effort to explain things in a manner and context that can be grapsed
        easily by learners from non-technical backgrounds.
      </p>
      <h3>Still don't know what a global object method is?</h3>
      <p>
        JavaScript is what's called a <em>high-level</em> programming language,
        which in part means that a lot of functionality is 'built-in'. That's
        what these methods are. If you wanted to sort an array, in other
        'low-level' older programming languages, you might have to type out a
        short algorithm (computational process) in order to do so. But in
        JavaScript, they give you <em>helpers</em> that you can append onto an
        array, for example, and it will do the computation for you. That's all
        each global object method is doing. It's running some computational
        procedure so that you don't have to type out all the steps manually.
        That's why they are great tools to have. If you learn them and are able
        to use them, you can write very lean, concise code that is easy for
        other developers to understand and work with, and you'll be able to
        solve more difficult problems.
      </p>
      <h3>
        Click <Link to="/">here</Link> to get started
      </h3>
      <p>
        If you would like to <Link to="/contribute">contribute</Link>
      </p>
    </div>
  );
};

export default About;
