import React from 'react';
import FractalTree from './FractalTree';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <div className="mb-10">
        <FractalTree />
      </div>
      <div className="text-center">
        <h1 className="text-[60px] animate-typing overflow-hidden whitespace-nowrap pr-5 text-5xl text-whiteish font-bold leading-tight border-r-4 border-whiteish cursor-default">
          hi, <span className="text-lightpurple">oorja</span> here.
        </h1>
      </div>
    </section>
  );
}

export default Hero;
