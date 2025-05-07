import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const BG_DARK = "#2A3549";
const BG_LIGHT = "#f9fafb";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");


  useEffect(() => {
    const updateScaling = () => {
      const viewportWidth = window.innerWidth;
      const baseWidth = 1440;
      const scale = viewportWidth / baseWidth;
      document.documentElement.style.setProperty('--scale-factor', scale);
    };

    updateScaling();
    window.addEventListener('resize', updateScaling);
    return () => window.removeEventListener('resize', updateScaling);
  }, []);

  return (
    <div className={`min-h-screen w-full ${theme === "dark" ? "bg-[#2A3549] text-white" : "bg-[#f9fafb] text-[#2A3549]"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Techstack theme={theme} />
        <Projects theme={theme} />
      </div>
      <Footer />
    </div>
  );
};

export default App;