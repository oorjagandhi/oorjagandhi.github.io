import React from "react";
import FractalTree from "./FractalTree";
import Fade from "react-reveal/Fade";
import { FiMail } from "react-icons/fi";

const Intro: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-4">
      <FractalTree />
      <div className="text-center mt-5">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl animate-typing overflow-hidden whitespace-nowrap pr-5 text-whiteish font-bold leading-[1.2] sm:leading-[1.2] md:leading-[1.2] lg:leading-[1.2] border-r-4 border-whiteish cursor-default">
        hi, <span className="text-lightpurple">oorja</span> here.
      </h1>

      </div>
      <Fade bottom duration={2000} distance="100px">
        <p className="text-lg sm:text-2xl lg:text-3xl text-lesswhite font-medium mt-2">
          I build stuff sometimes.
        </p>
        <div className="max-w-prose text-center px-4 mt-3">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-lesswhite font-light">
            I'm an aspiring software engineer based in Auckland, New Zealand.
            Enthusiastic about technology and problem solving, I'm excited to join a
            team where I can contribute to real-world projects. I look forward
            to developing my potential and making a meaningful impact! ☺
          </p>
        </div>
        <div className="flex justify-center items-center mt-5">
          <a href="mailto:oorjagandhi@gmail.com">
            <button className="relative flex items-center justify-center h-12 w-32 sm:w-40 overflow-hidden bg-background text-lightpurple font-bold py-4 px-6 border border-lightpurple rounded transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-lightpurple before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:text-white">
              <FiMail className="relative z-10 mr-2" />
              <span className="relative z-10">say hi!</span>
            </button>
          </a>
        </div>
      </Fade>
    </section>
  );
};

export default Intro;
