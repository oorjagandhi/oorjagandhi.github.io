import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from 'react-icons/ri';
import { CgMenuMotion } from 'react-icons/cg';
import MobileNavbar from './MobileNavbar';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <div className="hidden md:flex w-screen fixed top-0 z-10">
        <nav className="bg-background text-whiteish flex justify-between items-center px-40 py-4 w-full">
          <ul className="flex items-center gap-6">
            <li>
              <Link to="hero" smooth spy offset={-80} className="menu-item font-bold text-[15px]">
                Oorja Gandhi
              </Link>
            </li>

            <li>
              <Link to="hero" smooth spy offset={-80} className="menu-item font-medium">
                Home
              </Link>
            </li>

            <li>
              <Link to="skills" smooth spy offset={-80} className="menu-item font-medium">
                About
              </Link>
            </li>

            <li>
              <Link to="experience" smooth spy offset={-80} className="menu-item font-medium">
                Projects
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="mailto:your-email@example.com" className="text-xl menu-item">
              <FiMail />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl menu-item">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-xl menu-item">
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
      <div className="p-3 fixed top-0 right-0 z-50">
          <button onClick={toggleMenu} 
          className="w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 border border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto">
            {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
          </button>
        </div>
    </>
  )
}

export default Navbar;
