import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Awards } from "@/components/sections/Awards";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showAdminButton, setShowAdminButton] = useState(false);

  const handleLogoClick = () => {
    const newCount = logoClickCount + 1;
    setLogoClickCount(newCount);

    if (newCount === 5) {
      setShowAdminButton(true);
    }

    // Reset counter after 5 seconds
    setTimeout(() => {
      setLogoClickCount(0);
    }, 5000);
  };

  return (
    <div className="min-h-screen">
      <Navigation onLogoClick={handleLogoClick} showAdminButton={showAdminButton} />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Awards />
      <Contact />
    </div>
  );
};

export default Index;
