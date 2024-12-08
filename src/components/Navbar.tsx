import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from 'react-icons/ri';
import { CgMenuMotion } from 'react-icons/cg';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex w-screen fixed top-0 z-10">
        <nav className="bg-background text-whiteish flex justify-between items-center px-6 md:px-20 lg:px-40 py-2 md:py-4 w-full max-w-screen-xl mx-auto transition-all duration-300">
          <ul className="hidden md:flex items-center gap-4 md:gap-6">
            <li>
              <Link to="intro" smooth spy offset={-80} className="no-hover font-bold text-sm md:text-[15px]">
                Oorja Gandhi
              </Link>
            </li>
            <li>
              <Link to="intro" smooth spy offset={-80} className="menu-item font-medium text-sm md:text-base">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth spy offset={-80} className="menu-item font-medium text-sm md:text-base">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth spy offset={-80} className="menu-item font-medium text-sm md:text-base">
                Projects
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center gap-2 md:gap-4 text-sm md:text-xl">
            <a href="mailto:oorjagandhi@gmail.com" className="menu-icon">
              <FiMail />
            </a>
            <a href="https://github.com/oorjagandhi" target="_blank" rel="noopener noreferrer" className="menu-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/oorja-gandhi" target="_blank" rel="noopener noreferrer" className="menu-icon">
              <FaLinkedin />
            </a>
          </div>
          <button onClick={toggleMenu} className="md:hidden text-2xl pt-2 ml-auto">
            {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
          </button>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-background text-whiteish fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-20">
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-3xl">
              <RxCross2 />
            </button>
            <ul className="flex flex-col items-center gap-6 mt-12">
              <li>
                <Link to="intro" smooth spy offset={-80} className="no-hover font-bold text-2xl" onClick={toggleMenu}>
                  Oorja Gandhi
                </Link>
              </li>
              <li>
                <Link to="intro" smooth spy offset={-80} className="menu-item font-medium text-2xl" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth spy offset={-80} className="menu-item font-medium text-2xl" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" smooth spy offset={-80} className="menu-item font-medium text-2xl" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>
              <li className="flex gap-4 text-2xl">
                <a href="mailto:oorjagandhi@gmail.com" className="menu-icon">
                  <FiMail />
                </a>
                <a href="https://github.com/oorjagandhi" target="_blank" rel="noopener noreferrer" className="menu-icon">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/oorja-gandhi" target="_blank" rel="noopener noreferrer" className="menu-icon">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
