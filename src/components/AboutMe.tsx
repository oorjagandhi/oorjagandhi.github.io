import React from "react";
import Fade from "react-reveal/Fade";
import TriangleIcon from "./TriangleIcon";

const AboutMe: React.FC = () => {
  const technologies = [
    "Java",
    "React.js",
    "C",
    "Typescript"
  ];

  return (
    <Fade bottom duration={1000}>
      <div className="flex items-center justify-center mt-20 mb-100">
        <section className="flex flex-col lg:flex-row justify-center items-center bg-background w-[1000px] text-whiteish font-display">
          <div className="lg:w-[1000px] md:w-[650px] w-[500px] px-10">
            <div className="flex items-center mb-6">
              <h2 className="text-lightpurple text-[40px] font-bold">
                / about me
              </h2>
              <div className="h-[1px] bg-darkpurple ml-4 w-36 lg:w-80 mt-4"></div>
            </div>
            <p className="lg:text-[18px] text-lesswhite font-medium">
              I am currently in my second year studying towards a Bachelor of
              Engineering, specialising in <b>Software Engineering</b> at the
              University of Auckland.
            </p>
            <p className="lg:text-[18px] text-lesswhite font-medium mt-3 mb-3">
              Here are some technologies I have been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 mb-4 text-[18px] text-lesswhite font-medium">
              {technologies.map((tech, index) => (
                <Fade bottom duration={1000} delay={index * 200} key={index}>
                  <li className="flex items-center">
                    <TriangleIcon />
                    <span className="ml-2">{tech}</span>
                  </li>
                </Fade>
              ))}
            </ul>
            <p className="lg:text-[18px] text-lesswhite font-medium">
              Outside of studying, I love trying out new cafes and spending time with my friends and family. I also like building legos.
            </p>
          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end lg:mt-24 mt-10">
            <img
              src="/profilepic.JPG"
              alt="Profile"
              className="rounded-lg shadow-lg max-w-full lg:max-w-sm transition-transform duration-300 ease-in-out transform hover:scale-105"
              style={{ width: "280px", height: "280px" }}
            />
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default AboutMe;
