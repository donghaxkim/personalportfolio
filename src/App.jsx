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
    const updateViewport = () => {
      // MacBook Pro 14" reference dimensions
      const referenceWidth = 3024;
      const referenceHeight = 1964;
      
      // Get current viewport dimensions
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      
      // Calculate scale factors
      const widthScale = currentWidth / referenceWidth;
      const heightScale = currentHeight / referenceHeight;
      
      // Use the smaller scale to ensure everything fits
      const scale = Math.min(widthScale, heightScale);
      
      // Apply the scale to the root element
      document.documentElement.style.transform = `scale(${scale})`;
      document.documentElement.style.transformOrigin = 'top left';
      
      // Adjust the viewport to prevent scrolling
      document.documentElement.style.width = `${100 / scale}%`;
      document.documentElement.style.height = `${100 / scale}%`;
    };

    // Initial update
    updateViewport();
    
    // Update on resize
    window.addEventListener('resize', updateViewport);
    
    return () => {
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  return (
    <div className={`min-h-screen w-full ${theme === "dark" ? "bg-[#2A3549] text-white" : "bg-[#f9fafb] text-[#2A3549]"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ width: '3024px' }}>
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