import React from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { GithubIcon } from './ExtensionIcon';
import { Code2, ExternalLink, Sparkles, Terminal } from 'lucide-react';

export const ProjectsSection = () => {
  const hasProjects = PROJECTS_DATA && PROJECTS_DATA.length > 0;

  return (
    <section id="projects" className="section-spacing projects-section" aria-label="Projects Section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>DEVELOPMENT ROADMAP</span>
          </div>
          <h2 className="section-title">Beyond extensions.</h2>
          <p className="section-subtitle">
            Expanding from browser surfaces into standalone developer tools, utility micro-apps, and web infrastructure.
          </p>
        </div>

        {hasProjects ? (
          /* When projects are populated in projects.js */
          <div className="projects-grid">
            {PROJECTS_DATA.map((proj) => (
              <article key={proj.id} className="project-card">
                {proj.thumbnail && (
                  <div className="project-thumb-box">
                    <img src={proj.thumbnail} alt={proj.name} className="project-thumb-img" />
                  </div>
                )}
                <div className="project-card-body">
                  <h3 className="project-title">{proj.name}</h3>
                  <p className="project-desc">{proj.description}</p>
                  
                  <div className="project-tech-pills">
                    {proj.technologies?.map((tech, i) => (
                      <span key={i} className="tech-pill">{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {proj.demoUrl && (
                      <a href={proj.demoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-btn">
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary project-btn">
                        <GithubIcon size={14} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Graceful Minimal Future Pipeline Card (No fake projects or broken links) */
          <div className="future-pipeline-card">
            <div className="pipeline-grid">
              <div className="pipeline-left">
                <div className="pipeline-status-tag">
                  <Terminal size={14} />
                  <span>NEXUS LABS // IN ACTIVE RESEARCH</span>
                </div>
                <h3 className="pipeline-title">Next-generation software in progress.</h3>
                <p className="pipeline-text">
                  Dheeraj Reddy is actively designing experimental productivity tools, developer micro-utilities, and reactive web applications to complement the NEXUS browser extension ecosystem.
                </p>
                <div className="pipeline-specs">
                  <div className="spec-item">
                    <span className="spec-dot" />
                    <span>Focus on zero-overhead local-first architecture</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-dot" />
                    <span>Deep integration with browser APIs & automated workflows</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-dot" />
                    <span>Open, configurable schema ready in <code>src/data/projects.js</code></span>
                  </div>
                </div>
              </div>

              <div className="pipeline-right">
                <div className="code-blueprint-box">
                  <div className="blueprint-header">
                    <span className="blueprint-title">registry // projects.js</span>
                    <span className="blueprint-badge">READY</span>
                  </div>
                  <pre className="blueprint-code">
{`// Add future software projects:
export const PROJECTS_DATA = [
  {
    name: "Nexus Web Hub",
    tech: ["React", "Manifest V3"],
    status: "Pipeline"
  }
];`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .future-pipeline-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 3rem;
          box-shadow: var(--shadow-card);
        }

        .pipeline-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 3rem;
          align-items: center;
        }

        .pipeline-status-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-lime);
          letter-spacing: 0.08em;
          background: var(--accent-lime-muted);
          border: 1px solid rgba(183, 255, 114, 0.2);
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          margin-bottom: 1.25rem;
        }

        .pipeline-title {
          font-size: 1.85rem;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .pipeline-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 1.75rem;
        }

        .pipeline-specs {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .spec-item code {
          background: rgba(255, 255, 255, 0.06);
          color: var(--accent-lime);
          padding: 0.15rem 0.4rem;
          border-radius: 4px;
        }

        .spec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
        }

        .code-blueprint-box {
          background: #0a0d0a;
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .blueprint-header {
          background: var(--bg-card);
          padding: 0.65rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-subtle);
        }

        .blueprint-title {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .blueprint-badge {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-lime);
        }

        .blueprint-code {
          padding: 1.25rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #9aa49a;
          line-height: 1.6;
          overflow-x: auto;
        }

        @media (max-width: 860px) {
          .pipeline-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .future-pipeline-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};
