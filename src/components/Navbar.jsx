import { BiHomeAlt } from 'react-icons/bi';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import { WiMoonAltThirdQuarter, WiDaySunny } from 'react-icons/wi';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';

const NAVBAR_HEIGHT = 60; // px

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('');
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isHotspotHovered, setIsHotspotHovered] = useState(false);
  const hideTimeout = useRef(null);

  // Track scroll position to determine if at top
  useEffect(() => {
    const handleScroll = () => {
      const atTop = window.scrollY < 10;
      setIsAtTop(atTop);

      if (!atTop) {
        setShowNavbar(true);
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        hideTimeout.current = setTimeout(() => {
          if (!isHovered && !isHotspotHovered) setShowNavbar(false);
        }, 2000);
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
  }, [isHovered, isHotspotHovered]);

  // Set active section on scroll (for side navbar)
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = ['home', 'about', 'techstack', 'projects', 'contact', 'resume', 'contact-info'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleSectionScroll);
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);

  // Handle navbar hover state
  const handleMouseEnter = () => {
    setIsHovered(true);
    setShowNavbar(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isAtTop && !isHotspotHovered) {
      hideTimeout.current = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
    }
  };

  // Handle hotspot hover state
  const handleHotspotEnter = () => {
    setIsHotspotHovered(true);
    setShowNavbar(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  };

  const handleHotspotLeave = () => {
    setIsHotspotHovered(false);
    if (!isAtTop && !isHovered) {
      hideTimeout.current = setTimeout(() => {
        setShowNavbar(false);
      }, 2000);
    }
  };

  // Theme classes
  const navBg = theme === 'dark' ? 'bg-gray-500/30' : 'bg-gray-700/80';
  const iconColor = theme === 'dark' ? 'text-white/50' : 'text-gray-300';
  const iconHover = theme === 'dark' ? 'hover:text-gray-300' : 'hover:text-gray-700';
  const sideNavBg = theme === 'dark' ? 'bg-black/30' : 'bg-gray-700/80';

  return (
    <>
      {/* HOTSPOT AREA */}
      <div
        className="fixed top-4 left-0 w-full z-40"
        style={{
          height: `${NAVBAR_HEIGHT}px`,
          pointerEvents: showNavbar ? 'none' : 'auto', // Don't block navbar when visible
        }}
        onMouseEnter={handleHotspotEnter}
        onMouseLeave={handleHotspotLeave}
      />

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

      {/* SIDE NAVBAR */}
      <nav className="fixed top-[40%] transform -translate-y-1 right-3 z-50">
        <div className="container mx-auto">
          <div className={`${sideNavBg} w-[40px] py-4 backdrop-blur-xl rounded-full flex flex-col items-center justify-center space-y-6 z-50`}>
            {['home', 'about', 'techstack', 'projects'].map((section) => (
              <Link
                key={section}
                to={section}
                spy={true}
                smooth={true}
                duration={500}
                offset={-60}
                className={`cursor-pointer w-[12px] h-[12px] rounded-full backdrop-blur-sm transition-all duration-300 ease-in-out ${
                  activeSection === section
                    ? 'bg-pink-400/90'
                    : 'bg-gray-500/50 hover:bg-pink-300/60'
                }`}
              />
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;