import React from "react";
import { useSpring, animated } from "react-spring";

import GraphemeSplitter from "grapheme-splitter";

export default function About() {
  const stringSplitter = (string) => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.section id="about" style={props}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Geoffrey Bii.
            {/* <br className="hidden lg:inline-block" />I love to build amazing
            apps. */}
          </h1>
          <p className="mb-8 leading-relaxed">
            Experienced Full Stack Developer with expertise in building robust web applications.<br />
            Proficient in React, JavaScript, Python, and Flask. Skilled in both front-end and back-end development,<br />
            with a strong focus on creating responsive and user-friendly interfaces. Eager to contribute to innovative projects. Actively seeking new opportunities.
          </p>

          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
              href="https://drive.google.com/drive/u/1/home"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore My Profile
            </a>

            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-full shadow-md"
            alt="Hero Image"
            src="https://images.unsplash.com/photo-1636041293723-abceb81bffbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhciUyMGZvciUyMHBvcnRpZm9saW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            style={{ maxWidth: '100%', maxHeight: '400px' }}
          />
        </div>
      </div>
    </animated.section>
  );
}
