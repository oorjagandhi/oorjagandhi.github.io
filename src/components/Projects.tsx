import React from "react";
import Fade from "react-reveal/Fade";

const Projects: React.FC = () => {
  return (
    <Fade bottom duration={1000}>
      <div className="flex items-center justify-center mt-20">
        <section className="flex flex-col lg:flex-row justify-center items-center bg-background w-[1000px] text-whiteish font-display mb-96">
          <div className="lg:w-[1000px] md:w-[650px] w-[500px] px-10">
            <div className="flex items-center mb-6">
              <h2 className="text-lightpurple text-[40px] font-bold">
                / projects
              </h2>
              <div className="h-[1px] bg-darkpurple ml-4 w-36 lg:w-80 mt-4"></div>
            </div>
            <p className="lg:text-[18px] text-lesswhite font-medium">
              projects
            </p>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default Projects;
