import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ExtensionSection } from './components/ExtensionSection';
import { ToolExplorer } from './components/ToolExplorer';
import { FeaturedExtension } from './components/FeaturedExtension';
import { ProjectsSection } from './components/ProjectsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ExtensionModal } from './components/ExtensionModal';

export function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalExtension, setModalExtension] = useState(null);

  // Set up IntersectionObserver to update active navigation section smoothly
  useEffect(() => {
    const sectionIds = ['home', 'extensions', 'explorer', 'projects', 'about', 'contact'];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleOpenDetails = (extension) => {
    setModalExtension(extension);
  };

  const handleCloseModal = () => {
    setModalExtension(null);
  };

  return (
    <div className="nexus-app-root">
      {/* Background Graphic Grid & Ambient Lighting */}
      <div className="cyber-grid-bg" aria-hidden="true" />
      <div className="ambient-glow-top" aria-hidden="true" />

      {/* Primary Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content">
        <Hero onSelectExtension={handleOpenDetails} />
        
        <ExtensionSection onViewDetails={handleOpenDetails} />

        <ToolExplorer onViewDetails={handleOpenDetails} />

        <FeaturedExtension onViewDetails={handleOpenDetails} />

        <ProjectsSection />

        <AboutSection />

        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Accessible Detail Modal */}
      {modalExtension && (
        <ExtensionModal
          extension={modalExtension}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
