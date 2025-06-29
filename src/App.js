import React, { useState } from 'react';
// import Navbar from './components/Navbar';
import NavbarDemo from './components/NavbarDemo';
import Welcome from './components/Welcome';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="scroll-smooth">
      {showWelcome && <Welcome onComplete={handleWelcomeComplete} />}
      {/* Only the new Motion-based Navbar Demo */}
      <NavbarDemo />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Achievements />
      <Footer />
    </div>
  );
};

export default App;
