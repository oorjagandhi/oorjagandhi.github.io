import React from "react";
import Fade from "react-reveal/Fade";
import TriangleIcon from "./TriangleIcon";

const AboutMe: React.FC = () => {
  const technologies = ["Java", "React.js", "C#", "Typescript"];

  return (
    <Fade bottom duration={1000}>
      <div className="flex items-center justify-center mt-20 mb-20 px-4">
        <section className="flex flex-col lg:flex-row justify-center items-center bg-background w-[500px] md:w-[650px] lg:w-[1000px] text-whiteish font-display p-6 lg:p-10">
          <div>
            <div className="flex items-center mb-6">
              <h2 className="text-lightpurple text-3xl sm:text-4xl font-bold">
                / about me
              </h2>
              <div className="h-1 bg-darkpurple ml-4 w-24 md:w-80 lg:w-80 mt-2"></div>
            </div>
            <p className="text-sm sm:text-base md:text-base lg:text-lg text-lesswhite font-light">
              I'm currently a <span className="font-bold">Software Engineer Intern</span> at {' '}
              <a 
                href="https://visa.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lightpurple font-bold hover:underline"
              >
                Visa
              </a>,
              and in my penultimate year of studying {' '}
              <span className="font-bold">Software Engineering</span> at the {' '}
              <a 
                href="https://www.auckland.ac.nz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lightpurple font-bold hover:underline"
              >
                University of Auckland
              </a>.
            </p>

            <p className="text-sm sm:text-base md:text-base lg:text-lg text-lesswhite font-light mt-3 mb-3">
              Here are some technologies I have been working with:
            </p>

            <ul className="grid grid-cols-2 gap-2 mb-4 text-sm sm:text-base md:text-base lg:text-lg text-lesswhite font-light">
              {technologies.map((tech, index) => (
                <Fade bottom duration={1000} delay={index * 200} key={index}>
                  <li className="flex items-center">
                    <TriangleIcon />
                    <span className="ml-2">{tech}</span>
                  </li>
                </Fade>
              ))}
            </ul>
            <p className="text-sm sm:text-base md:text-base lg:text-lg text-lesswhite font-light">
              I'm also the <span className="font-bold">President</span> of{' '}
              <a 
                href="https://sesa.org.nz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lightpurple font-bold hover:underline"
              >
                SESA (Software Engineering Students Association)
              </a> - leading a team of 18 to organise events connecting over 500 members with industry professionals and peers.
            </p>

          </div>
          <div className="lg:w-1/3 flex justify-center lg:justify-end lg:mt-12 mt-10 pl-4">
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
