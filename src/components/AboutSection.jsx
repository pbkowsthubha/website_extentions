import React from 'react';
import { CREATOR_INFO } from '../data/projects';
import { NexusLogo, GithubIcon, LinkedinIcon } from './ExtensionIcon';
import {
  Code,
  Layers,
  Cpu,
  Mail,
  ShieldCheck,
  CheckCircle2,
  Terminal
} from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="section-spacing about-section" aria-label="About the Creator">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>ARCHITECT & CREATOR</span>
          </div>
          <h2 className="section-title">Curiosity, turned into code.</h2>
          <p className="section-subtitle">
            Useful extensions. Thoughtful software. Built by Dheeraj Reddy.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Visual Profile Card & Philosophy */}
          <div className="about-profile-card">
            <div className="avatar-wrapper">
              <div className="avatar-ambient-glow" />
              <div className="avatar-inner">
                <NexusLogo size={64} />
                <span className="avatar-brand-tag">NEXUS CORE</span>
              </div>
            </div>

            <h3 className="creator-name">{CREATOR_INFO.name}</h3>
            <p className="creator-role">{CREATOR_INFO.role}</p>

            <div className="philosophy-quote-box">
              <span className="quote-mark">“</span>
              <p className="philosophy-text">{CREATOR_INFO.philosophy}</p>
            </div>

            {/* Configurable Social Links */}
            <div className="creator-social-bar">
              {CREATOR_INFO.socialLinks.github && (
                <a
                  href={CREATOR_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
              {CREATOR_INFO.socialLinks.linkedin && (
                <a
                  href={CREATOR_INFO.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-pill"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn</span>
                </a>
              )}
              {CREATOR_INFO.socialLinks.email && (
                <a
                  href={`mailto:${CREATOR_INFO.socialLinks.email}`}
                  className="social-pill"
                  aria-label="Email Dheeraj Reddy"
                >
                  <Mail size={15} />
                  <span>Email</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Technical Domains & Genuine Engineering Focus */}
          <div className="about-details-panel">
            <div className="panel-block">
              <div className="block-header">
                <Terminal size={18} className="block-icon" />
                <h4 className="block-title">Engineering Focus & Domains</h4>
              </div>
              <p className="block-summary">{CREATOR_INFO.bio}</p>

              <div className="focus-list">
                {CREATOR_INFO.focusAreas.map((area, idx) => (
                  <div key={idx} className="focus-item">
                    <span className="focus-index">0{idx + 1}</span>
                    <span className="focus-text">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel-block">
              <div className="block-header">
                <Cpu size={18} className="block-icon" />
                <h4 className="block-title">Technical Skillset</h4>
              </div>

              <div className="skills-grid">
                {CREATOR_INFO.skills.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <div className="skill-bar-bg">
                      <div className="skill-bar-fill" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-main);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
          align-items: start;
        }

        /* Profile Card */
        .about-profile-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 2.75rem 2.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          box-shadow: var(--shadow-card);
        }

        .avatar-wrapper {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .avatar-ambient-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(183, 255, 114, 0.25) 0%, transparent 70%);
          filter: blur(14px);
        }

        .avatar-inner {
          position: relative;
          width: 110px;
          height: 110px;
          border-radius: 20px;
          background: #101310;
          border: 2px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.35rem;
        }

        .avatar-brand-tag {
          font-family: var(--font-mono);
          font-size: 0.58rem;
          color: var(--accent-lime);
          letter-spacing: 0.12em;
        }

        .creator-name {
          font-size: 1.65rem;
          letter-spacing: 0.05em;
          color: var(--text-main);
          margin-bottom: 0.35rem;
        }

        .creator-role {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-emerald);
          margin-bottom: 1.75rem;
        }

        .philosophy-quote-box {
          position: relative;
          background: rgba(16, 19, 16, 0.7);
          border: 1px solid rgba(41, 49, 41, 0.7);
          border-radius: 10px;
          padding: 1.5rem 1.25rem;
          margin-bottom: 2rem;
          text-align: left;
        }

        .quote-mark {
          position: absolute;
          top: -12px;
          left: 14px;
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: var(--accent-lime);
          line-height: 1;
        }

        .philosophy-text {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
          font-style: italic;
        }

        .creator-social-bar {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.85rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          border-radius: 6px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .social-pill:hover {
          color: var(--accent-lime);
          border-color: var(--accent-lime);
          transform: translateY(-2px);
        }

        /* Right Panel */
        .about-details-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .panel-block {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 2.25rem;
        }

        .block-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .block-icon {
          color: var(--accent-lime);
        }

        .block-title {
          font-size: 1.25rem;
          color: var(--text-main);
        }

        .block-summary {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .focus-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .focus-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.65rem 0.85rem;
          background: rgba(16, 19, 16, 0.6);
          border: 1px solid rgba(41, 49, 41, 0.6);
          border-radius: 6px;
        }

        .focus-index {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent-lime);
        }

        .focus-text {
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .skill-card {
          background: rgba(16, 19, 16, 0.6);
          border: 1px solid rgba(41, 49, 41, 0.6);
          border-radius: 6px;
          padding: 0.75rem 1rem;
        }

        .skill-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .skill-name {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .skill-level {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-emerald);
        }

        .skill-bar-bg {
          height: 4px;
          background: rgba(41, 49, 41, 0.6);
          border-radius: 9999px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          width: 85%;
          background: linear-gradient(90deg, var(--accent-emerald), var(--accent-lime));
          border-radius: 9999px;
        }

        @media (max-width: 920px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
