import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import TriangleIcon from "./TriangleIcon";

const experienceItems = [
  {
    company: "Visa",
    jobTitle: "Software Engineer Intern @",
    duration: "NOV 2024 - PRESENT",
    desc: [
      "Contributed to the development of new features for Visa Spend Clarity for Enterprise, enhancing user experience for enterprise customers.",
      "Collaborated with cross-functional teams to design, implement, and test scalable solutions using modern software engineering practices.",
      "Gained hands-on experience with cutting-edge technologies and methodologies in a fast-paced, agile environment.",
    ],
  },
  {
    company: "Company 2",
    jobTitle: "Software Engineer @",
    duration: "FEB 2024 - NOV 2024",
    desc: [
      "Developed innovative solutions to improve performance and reliability.",
      "Led a team in delivering scalable backend services with high uptime.",
      "Enhanced security protocols to ensure compliance with industry standards.",
    ],
  },
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Fade bottom duration={1000}>
      <div className="flex items-center justify-center mt-20 mb-20 px-4">
        <section className="flex flex-col justify-center items-start bg-background w-[500px] md:w-[650px] lg:w-[1000px] text-whiteish font-display p-6 lg:p-10">
          {/* Header */}
          <div className="flex items-center mb-6">
            <h2 className="text-lightpurple text-3xl sm:text-4xl font-bold">
              / experience
            </h2>
            <div className="h-1 bg-darkpurple ml-4 w-24 md:w-80 lg:w-80 mt-2"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row lg:space-x-10 w-full">
            {/* Sidebar */}
            <div className="flex flex-col lg:w-1/4 space-y-6 border-r border-gray-700 pr-6">
              {experienceItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`relative cursor-pointer pl-4 text-lg font-semibold ${
                    index === activeIndex ? "text-lightpurple" : "text-gray-400"
                  }`}
                >
                  {item.company}
                  {/* Indicator bar */}
                  <div
                    className={`absolute right-[-0.5rem] top-0 h-full w-1 bg-lightpurple transition-all ${
                      index === activeIndex ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Experience Details */}
            <div className="lg:w-3/4 pl-6">
              <h3 className="text-2xl font-semibold mb-2">
                {experienceItems[activeIndex].jobTitle}
                <span className="text-lightpurple"> {experienceItems[activeIndex].company}</span>
              </h3>
              <p className="text-sm mb-4 text-gray-500">{experienceItems[activeIndex].duration}</p>
              <ul className="space-y-2">
                {experienceItems[activeIndex].desc.map((descItem, descIndex) => (
                  <Fade bottom duration={1000} delay={descIndex * 200} key={descIndex}>
                    <li className="flex items-center text-sm">
                      <TriangleIcon size={20} />
                      <span className="ml-2">{descItem}</span>
                    </li>
                  </Fade>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Experience;
