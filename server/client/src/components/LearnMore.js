import React from "react";
import GoogleButton from "./GoogleButton";

const LearnMore = () => {
  return (
    <div className="learn-more">
      <h3 className="learn-more-headers">Learn More</h3>
      <hr />
      <div className="learn-more-container">
        <div className="learn-more-col">
          <h4>What is jstoolkit.io?</h4>
          <p className="learn-more-p">
            It's a educational program for JavaScript beginners. Have a lesson
            emailed to you each day or navigate around lessons. One or multiple
            JavaScript built-in methods will be presented in each lesson in
            easy-to-understand active learning tutorials, which contain a
            written lesson, a short video lesson, and mini-coding challenges.
            Everything is expalined in layman terms, free of annoying
            overly-complicated tech jargon.
          </p>
          <h4>
            Why is it so important to learn all of JavaScript's built-in
            methods?
          </h4>
          <p className="learn-more-p">
            It will make solving difficult coding problems inifintely easier. It
            shows you are a professional who cares about your craft. You will
            know when a situation calls for one tool and not another. By using
            the right method in the right situation you'll be able to avoid
            side-effects from your code which can wreak havoc when you start
            working on much larger, far more complicated code bases.
          </p>
          <h4>What exactly are built in methods?</h4>
          <p className="learn-more-p">
            Built-in methods are concise commands that can be called on a global
            object data type, such as string, array, or object. They allow you
            to perform complex logic steps in very concise snippets of code.
            They can also reduce the runtime and memory required to run an
            application. Don't let the name intimidate you, they are easy to
            implement once you undrestand them.
          </p>
        </div>
        <div className="learn-more-col">
          <h4>What can't I just use MDN to learn these?</h4>
          <p className="learn-more-p">
            You certainly can. However, in my experience being around hundreds
            of JavaScript students, only a very small minority go about learning
            them all systematically. They usually only resort to searching MDN
            when they face a challange they can't solve. And often, they don't
            know what tool can help them and lose tons of time searching. These
            lessons will install the methods into your brain so that you can use
            them on command when a situation calls for it.
          </p>
          <h4>Will knowing these methods impress interviewers?</h4>
          <p className="learn-more-p">
            Yes, it will. It shows you've put in the time to hone your craft and
            that you care about being a great problem solver. You will also know
            the how, the why, and the when of using a specific method. Every
            company will want you to write concise, declarative code that works.
            Within a month or two of learning, you'll have an edge over the vast
            majority of other students learning JavaScript.
          </p>
          <h4>
            Is $11 worth it when I could scour the internet for information?
          </h4>
          <p className="learn-more-p">
            If you value your time, then yes. If you value doing well on a
            potential whiteboard interview, then yes. If you care, about being a
            professional, and being a strong problem solver then yes. If you
            don't really care about learning the language or being a good
            programmer, then no, probably not.
          </p>
        </div>
      </div>
      <h4 className="button-google free">It's free, just sign in.</h4>
      <GoogleButton />
    </div>
  );
};

export default LearnMore;
