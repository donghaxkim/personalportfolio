import { BiHomeAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { WiMoonAltThirdQuarter, WiDaySunny } from 'react-icons/wi';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';

const Navbar = ({ theme, toggleTheme }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 10;
      setIsAtTop(atTop);

      if (!atTop) {
        setShowNavbar(true);
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
          if (!isHovered) setShowNavbar(false);
        }, 5000);
      } else {
        setShowNavbar(true);
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, [isHovered]);

  // Handle hover state
  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowNavbar(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isAtTop) {
      hideTimeout.current = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
    }
  };

  // Theme classes
  const navBg = theme === 'dark' ? 'bg-gray-500/30' : 'bg-gray-700/80';
  const iconColor = theme === 'dark' ? 'text-white/50' : 'text-gray-300';
  const iconHover = theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700';

  return (
    <>
      {/* TOP NAVBAR */}
      <nav
        className={`fixed top-4 left-0 w-full z-50 transition-opacity duration-500 ${
          showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ pointerEvents: showNavbar ? 'auto' : 'none' }}
      >
        <div className="container mx-auto">
          <div className={`w-full ${navBg} h-[60px] backdrop-blur-3xl rounded-full max-w-[700px] mx-auto px-5 flex justify-between text-2xl ${iconColor}`}>
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}
            >
              <BiHomeAlt />
            </Link>
            <a
              href="https://www.linkedin.com/in/dongha-kimm/"
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/donghaxkim"
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}
            >
              <FaGithub />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}
            >
              <FaFileAlt />
            </a>
            <div
              className={`cursor-pointer w-[60px] h-[60px] flex items-center justify-center ${iconHover}`}
              onClick={toggleTheme}
            >
              {theme === 'dark' ? <WiDaySunny /> : <WiMoonAltThirdQuarter />}
            </div>
          </div>
        </div>
      </nav>

      {/* SIDE NAVBAR (unchanged) */}
      {/* ... existing code ... */}
    </>
  );
};

export default Navbar;