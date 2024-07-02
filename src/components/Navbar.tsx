import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { RiCloseFill } from 'react-icons/ri';
import { CgMenuMotion } from 'react-icons/cg';
import MobileNavbar from './MobileNavbar';
import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      <div className="hidden md:flex w-screen fixed top-0 z-10">
        <nav className="bg-background text-whiteish flex justify-between items-center px-6 md:px-20 lg:px-40 py-2 md:py-4 w-full transition-all duration-300">
          <ul className="flex items-center gap-4 md:gap-6">
            <li>
              <Link to="intro" smooth spy offset={-80} className="menu-item font-bold text-sm md:text-[15px]">
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
          <div className="flex items-center gap-2 md:gap-4 text-sm md:text-xl">
            <a href="mailto:your-email@example.com" className="menu-icon">
              <FiMail />
            </a>
            <a href="https://github.com/oorjagandhi" target="_blank" rel="noopener noreferrer" className="menu-icon">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/oorja-gandhi" target="_blank" rel="noopener noreferrer" className="menu-icon">
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
