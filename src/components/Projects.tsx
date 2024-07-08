import React from "react";
import Fade from "react-reveal/Fade";
import { FaFolderClosed } from "react-icons/fa6";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "SESA Website",
      description:
        "Contributed to the redevelopment of the SESA (UoA's Software Engineering Student Association) website. This project redesigned the current website to improve user experience and provide a more modern and responsive design.",
      technologies: [
        "Node.js",
        "React.js",
        "Typescript",
        "HTML",
        "TailwindCSS",
      ],
      github: "https://github.com/sesauoa/sesa.org.nz",
      link: "https://sesa.org.nz",
    },
    {
      title: "Weather Application",
      description:
        "An application that displays real-time weather updates and forecasts across multiple locations, including key features such as a location search and current weather conditions display (temperature, humidity, wind speed).",
      technologies: ["Java", "Swing", "Weather Forecast API", "Geocoding API"],
      github: "https://github.com",
    },
    {
      title: "Routing Application",
      description:
        "A routing application that uses Breadth First Search (BFS) and Graph data structures to optimise global delivery routes. The system calculates the shortest path and cross-border taxes between countries, ensuring efficient and cost-effective routing decisions.",
      technologies: ["Java"],
      github: "https://github.com",
    },
    {
      title: "Odds and Evens",
      description:
        "An odds and evens game that allows users to play against the computer. The game includes features like a variable AI strategy that adapts based on the game progress.",
      technologies: ["Java"],
      github: "https://github.com",
    },
    {
      title: "Venue Booking System",
      description:
        "A venue hire system developed using object-oriented principles, featuring terminal-based management of bookings, venues, and services.",
      technologies: ["Java"],
      github: "https://github.com",
    },
    {
      title: "Battleships Game",
      description:
        "A customisable Battleships game that allows users to play against the computer. The game includes features such as customisable board sizes, ship placements, and a hit/miss tracking system.",
      technologies: ["C"],
      github: "https://github.com",
    },
    // {
    //   title: "Image Fingerprinting",
    //   description:
    //     "A program that uses  image hashing techniques to create unique identifiers for efficient similarity checks and rapid identification of image originals from thumbnails.",
    //   technologies: ["MATLAB"],
    //   github: "https://github.com",
    // },
  ];

  return (
    <Fade bottom duration={1000}>
      <div className="flex items-center justify-center mt-40">
        <section className="flex flex-col justify-center items-center bg-background lg:w-[1000px] md:w-[650px] w-[500px] text-whiteish font-display mb-20">
          <div className="px-10 w-full">
            <div className="flex items-center mb-6">
              <h2 className="text-lightpurple text-[40px] font-bold">
                / projects
              </h2>
              <div className="h-[1px] bg-darkpurple ml-4 w-36 lg:w-80 mt-4"></div>
            </div>
            <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
              {projectData.map((project, index) => (
                <Fade bottom duration={1000} distance="100px" delay={index * 300} key={index}>
                  <div className="bg-cardbg p-6 rounded-lg shadow-lg md:w-[280px] lg:w-[300px] lg:h-[350px] flex flex-col justify-between hover:bg-cardhover transition-all duration-300 ease-in-out">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <FaFolderClosed
                          className="text-lightpurple mr-2"
                          size={24}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub className="text-lesswhite" size={18} />
                        </a>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaExternalLinkAlt
                              className="text-lesswhite"
                              size={18}
                            />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-whiteish">
                      {project.title}
                    </h3>
                    <div className="flex-grow">
                      <p className="text-lesswhite text-sm mt-3">
                        {project.description}
                      </p>
                    </div>
                    <ul className="flex flex-wrap mt-3 gap-2">
                      {project.technologies.map((tech, idx) => (
                        <li key={idx} className="text-lightpurple text-sm">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fade>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Projects;
