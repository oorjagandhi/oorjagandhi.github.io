import React from "react";
import FractalTree from "./FractalTree";
import Fade from "react-reveal/Fade";
import { FiMail } from "react-icons/fi";

const Intro: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <FractalTree />
      <div className="text-center mt-5">
        <h1 className="sm:text-[50px] md:text-[70px] lg:text-[70px] animate-typing overflow-hidden whitespace-nowrap pr-5 text-5xl text-whiteish font-bold leading-tight border-r-4 border-whiteish cursor-default">
          hi, <span className="text-lightpurple">oorja</span> here.
        </h1>
      </div>
      <Fade bottom duration={3000}>
        <p className="sm:text-[30px] lg:text-[30px] text-lesswhit font-medium mt-2">
          I build stuff sometimes.
        </p>
        <div className="max-w-prose text-center px-4 mt-3">
          <p className="sm:text-[15px] md:text-[18px] lg:text-[18px] text-lesswhite font-medium">
            I'm an aspiring software engineer based in Auckland, New Zealand.
            Enthusiastic about technology and innovation, I'm excited to join a
            team where I can contribute to real-world projects. I look forward
            to developing my potential and making a meaningful impact! ☺
          </p>
        </div>
        <div className="flex justify-center items-center h-screen">
          <a href="mailto:oorjagandhi@gmail.com">
            <button className="relative flex items-center justify-center h-[50px] w-40 overflow-hidden bg-background text-lightpurple font-bold py-4 px-6 border border-lightpurple rounded transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-lightpurple before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56 hover:text-white">
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
