import React, { useState, useEffect, useRef } from "react";
import Fade from "react-reveal/Fade";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import Plus and Minus icons
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
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isAccordionView, setIsAccordionView] = useState(false);
  const indicatorRef = useRef<HTMLDivElement>(null);

  // Detect screen size to toggle between accordion and side-by-side layouts
  useEffect(() => {
    const handleResize = () => {
      setIsAccordionView(window.innerWidth < 1024); // Use accordion for screens smaller than 1024px (lg breakpoint)
    };
    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (indicatorRef.current && !isAccordionView) {
      const height = 48; // Adjust this value to match the height of each company item
      indicatorRef.current.style.top = `${activeIndex! * height}px`;
    }
  }, [activeIndex, isAccordionView]);

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

          {/* Accordion Layout for Small & Medium Screens */}
          {isAccordionView ? (
            <div className="accordion-container w-full">
              {experienceItems.map((item, index) => (
                <div key={index} className="mb-4">
                  {/* Accordion Button */}
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className={`accordion-button w-full flex justify-between items-center px-4 py-2 rounded-md ${
                      activeIndex === index
                        ? "bg-cardbg text-lightpurple"
                        : "bg-darkpurple text-white"
                    } font-bold`}
                  >
                    <span>{item.company}</span>
                    {/* Plus and Minus Icons */}
                    <span className="absolute right-4">
                      {activeIndex === index ? (
                        <FaMinus className="text-lightpurple" />
                      ) : (
                        <FaPlus className="text-lightpurple" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {activeIndex === index && (
                    <div
                      className={`accordion-content px-4 py-2 rounded-md mt-2 bg-cardbg`}
                    >
                      <h3 className="text-2xl font-semibold mb-2">
                        {item.jobTitle}
                        <span className="text-lightpurple"> {item.company}</span>
                      </h3>
                      <p className="text-sm mb-4 text-gray-500">{item.duration}</p>
                      <ul className="space-y-2">
                        {item.desc.map((descItem, descIndex) => (
                          <Fade
                            bottom
                            duration={1000}
                            delay={descIndex * 200}
                            key={descIndex}
                          >
                            <li className="flex items-center text-sm">
                              <TriangleIcon size={20} />
                              <span className="ml-2">{descItem}</span>
                            </li>
                          </Fade>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            // Side-by-Side Layout for Large Screens
            <div className="flex flex-col md:flex-col lg:flex-row lg:space-x-10 w-full">
              {/* Sidebar */}
              <div className="relative flex flex-col w-full lg:w-1/4 space-y-6 md:mb-6 lg:mb-0">
                {/* Indicator */}
                <div
                  ref={indicatorRef}
                  className="indicator"
                  style={{ top: 0 }}
                ></div>
                {experienceItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative cursor-pointer pl-4 text-lg font-semibold text-gray-400`}
                  >
                    {item.company}
                  </div>
                ))}
              </div>

              {/* Experience Details */}
              <div className="w-full lg:w-3/4">
                <h3 className="text-2xl font-semibold mb-2">
                  {experienceItems[activeIndex!]?.jobTitle}
                  <span className="text-lightpurple">
                    {" "}
                    {experienceItems[activeIndex!]?.company}
                  </span>
                </h3>
                <p className="text-sm mb-4 text-gray-500">
                  {experienceItems[activeIndex!]?.duration}
                </p>
                <ul className="space-y-2">
                  {experienceItems[activeIndex!]?.desc.map(
                    (descItem, descIndex) => (
                      <Fade
                        bottom
                        duration={1000}
                        delay={descIndex * 200}
                        key={descIndex}
                      >
                        <li className="flex items-center text-sm">
                          <TriangleIcon size={20} />
                          <span className="ml-2">{descItem}</span>
                        </li>
                      </Fade>
                    )
                  )}
                </ul>
              </div>
            </div>
          )}
        </section>
      </div>
    </Fade>
  );
};

export default Experience;
