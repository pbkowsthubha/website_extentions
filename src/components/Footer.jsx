import React from 'react';
import { NexusLogo, GithubIcon, LinkedinIcon } from './ExtensionIcon';
import { CREATOR_INFO } from '../data/projects';
import { EXTENSIONS_DATA } from '../data/extensions';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-root" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="brand-lockup">
              <NexusLogo size={36} />
              <div className="brand-text">
                <span className="brand-title">NEXUS</span>
                <span className="brand-tag">DIGITAL TOOLS</span>
              </div>
            </div>

            <p className="footer-creator-statement">
              Useful extensions. Thoughtful software. <br />
              Built with curiosity and craft by <strong className="creator-highlight">{CREATOR_INFO.name}</strong>.
            </p>

            <div className="footer-social-row">
              {CREATOR_INFO.socialLinks.github && (
                <a
                  href={CREATOR_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              )}
              {CREATOR_INFO.socialLinks.linkedin && (
                <a
                  href={CREATOR_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-icon"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}
              {CREATOR_INFO.socialLinks.email && (
                <a
                  href={`mailto:${CREATOR_INFO.socialLinks.email}`}
                  className="footer-social-icon"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>
          </div>

          {/* Quick Extensions Links */}
          <div className="footer-links-col">
            <span className="footer-col-title">VERIFIED EXTENSIONS</span>
            <ul className="footer-link-list">
              {EXTENSIONS_DATA.map((ext) => (
                <li key={ext.id}>
                  <a
                    href={ext.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    <span>{ext.name}</span>
                    <span className="footer-link-meta">v{ext.version}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="footer-links-col">
            <span className="footer-col-title">INDEX</span>
            <ul className="footer-link-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#extensions" className="footer-link">Extensions Toolkit</a></li>
              <li><a href="#explorer" className="footer-link">Tool Explorer</a></li>
              <li><a href="#projects" className="footer-link">Projects Roadmap</a></li>
              <li><a href="#about" className="footer-link">About Creator</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Scroll to Top Action */}
          <div className="footer-action-col">
            <button
              type="button"
              onClick={scrollToTop}
              className="scroll-top-btn"
              aria-label="Scroll back to top"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
            <div className="footer-closing-quote">
              “Built with curiosity. <br />Designed with purpose.”
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {currentYear} NEXUS — DIGITAL TOOLS. Built by {CREATOR_INFO.name}. All rights reserved.
          </div>
          <div className="manifest-v3-tag">
            CHROME EXTENSION MANIFEST V3 CERTIFIED
          </div>
        </div>
      </div>

      <style>{`
        .footer-root {
          background-color: #060706;
          border-top: 1px solid var(--border-subtle);
          padding-top: 4.5rem;
          padding-bottom: 2.5rem;
          position: relative;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 0.8fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        .brand-lockup {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: var(--text-main);
          line-height: 1.1;
        }

        .brand-tag {
          font-family: var(--font-mono);
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          color: var(--accent-lime);
        }

        .footer-creator-statement {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .creator-highlight {
          color: var(--text-main);
        }

        .footer-social-row {
          display: flex;
          gap: 0.75rem;
        }

        .footer-social-icon {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .footer-social-icon:hover {
          color: var(--accent-lime);
          border-color: var(--accent-lime);
          transform: translateY(-2px);
        }

        .footer-col-title {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.12em;
          color: var(--accent-lime);
          margin-bottom: 1.25rem;
        }

        .footer-link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-link {
          font-size: 0.85rem;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: color var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--accent-lime);
        }

        .footer-link-meta {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        .footer-action-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.25rem;
        }

        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.55rem 0.95rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .scroll-top-btn:hover {
          color: var(--text-main);
          border-color: var(--accent-lime);
        }

        .footer-closing-quote {
          font-size: 0.85rem;
          font-style: italic;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .footer-bottom-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(41, 49, 41, 0.5);
          font-size: 0.78rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .manifest-v3-tag {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--accent-emerald);
        }

        @media (max-width: 960px) {
          .footer-top-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 580px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};
