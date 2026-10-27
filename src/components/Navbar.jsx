import React, { useState, useEffect } from 'react';
import { NexusLogo } from './ExtensionIcon';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Extensions', href: '#extensions', id: 'extensions' },
    { label: 'Explorer', href: '#explorer', id: 'explorer' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`navbar-fixed ${isScrolled ? 'navbar-scrolled' : ''}`}
      role="banner"
    >
      <div className="container navbar-container">
        {/* Brand Logo & Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="brand-link"
          aria-label="NEXUS Home"
        >
          <NexusLogo size={36} />
          <div className="brand-wordmark">
            <span className="brand-name">NEXUS</span>
            <span className="brand-subtitle">DIGITAL TOOLS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {link.label}
                    {isActive && <span className="active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA */}
        <div className="navbar-actions">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn btn-outline nav-cta"
          >
            <span>Connect</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn btn-primary mobile-cta-btn"
            >
              Get In Touch
            </a>
          </nav>
        </div>
      )}

      <style>{`
        .navbar-fixed {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar-scrolled {
          padding: 0.75rem 0;
          background: rgba(8, 10, 9, 0.88);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .brand-wordmark {
          display: flex;
          flex-direction: column;
        }

        .brand-name {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-main);
          line-height: 1.1;
        }

        .brand-subtitle {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          color: var(--accent-lime);
          font-weight: 600;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          position: relative;
          padding: 0.3rem 0;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-main);
        }

        .nav-link.active {
          color: var(--accent-lime);
          font-weight: 600;
        }

        .active-dot {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--accent-lime);
          box-shadow: 0 0 6px var(--accent-lime);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-cta {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
        }

        .mobile-toggle {
          display: none;
          color: var(--text-main);
          padding: 0.4rem;
        }

        .mobile-drawer {
          position: fixed;
          top: 68px;
          left: 0;
          right: 0;
          background: rgba(16, 19, 16, 0.97);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 1.5rem;
          z-index: 99;
          animation: slideDown 0.25s ease-out;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(41, 49, 41, 0.5);
        }

        .mobile-nav-link.active {
          color: var(--accent-lime);
        }

        .mobile-cta-btn {
          margin-top: 0.75rem;
          width: 100%;
        }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none;
          }
          .nav-cta {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
};
