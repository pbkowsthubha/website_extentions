import React from 'react';
import { EXTENSIONS_DATA } from '../data/extensions';
import { ExtensionIcon } from './ExtensionIcon';
import { ExternalLink, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export const FeaturedExtension = ({ onViewDetails }) => {
  // Student Dashboard is EXTENSIONS_DATA[1]
  const studentDashboard = EXTENSIONS_DATA.find((e) => e.slug === 'student-dashboard') || EXTENSIONS_DATA[1];

  return (
    <section className="section-spacing featured-section" aria-label="Featured Extension Spotlight">
      <div className="container">
        <div className="featured-card">
          {/* Left Column: Product Introduction & Verified Benefits */}
          <div className="featured-content">
            <div className="featured-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>FEATURED EXTENSION SPOTLIGHT</span>
            </div>

            <h2 className="featured-headline">
              Your academic workflow, <br />
              <span className="featured-gradient">in one place.</span>
            </h2>

            <p className="featured-description">
              {studentDashboard.description}
            </p>

            <div className="featured-benefits">
              <span className="benefits-label">DESIGNED FOR STUDENT SUCCESS:</span>
              <ul className="benefits-list">
                {studentDashboard.features.map((feat, idx) => (
                  <li key={idx} className="benefit-item">
                    <CheckCircle2 size={16} className="benefit-check" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="featured-actions">
              <a
                href={studentDashboard.storeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary featured-cta"
              >
                <span>Explore Student Dashboard</span>
                <ExternalLink size={16} />
              </a>

              <button
                type="button"
                onClick={() => onViewDetails(studentDashboard)}
                className="btn btn-secondary featured-secondary-cta"
              >
                <span>View Full Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clearly Illustrative Dashboard Architecture Visual */}
          <div className="featured-visual-wrapper">
            <div className="illustrative-disclaimer">
              <span>ILLUSTRATIVE INTERFACE COMPOSITION</span>
            </div>

            <div className="dashboard-mockup">
              {/* Window Frame Top Bar */}
              <div className="mockup-chrome-bar">
                <div className="chrome-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="chrome-title">Student Dashboard // Nexus Core Engine</div>
                <div className="chrome-telemetry">v1.0.0 MV3</div>
              </div>

              {/* Main Visual Content */}
              <div className="mockup-content">
                {/* Visual Widget 1: Attendance Arc */}
                <div className="mockup-widget widget-attendance">
                  <div className="widget-header">
                    <span className="widget-label">ATTENDANCE MONITOR</span>
                    <span className="widget-status">ON TRACK</span>
                  </div>
                  <div className="attendance-gauge-row">
                    <div className="gauge-number">
                      <span className="gauge-big">89.4%</span>
                      <span className="gauge-sub">Target: &gt;75%</span>
                    </div>
                    <div className="gauge-circle-svg">
                      <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="24" stroke="#293129" strokeWidth="4" fill="none" />
                        <circle
                          cx="30"
                          cy="30"
                          r="24"
                          stroke="#B7FF72"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray="150"
                          strokeDashoffset="25"
                          strokeLinecap="round"
                          transform="rotate(-90 30 30)"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Visual Widget 2: Timetable Card */}
                <div className="mockup-widget widget-timetable">
                  <div className="widget-header">
                    <span className="widget-label">TIMETABLE DISPATCH</span>
                    <span className="widget-time">TODAY</span>
                  </div>
                  <div className="slot-item active">
                    <span className="slot-dot" />
                    <div className="slot-info">
                      <span className="slot-name">Advanced Operating Systems</span>
                      <span className="slot-meta">Hall C-201 • In Progress</span>
                    </div>
                  </div>
                  <div className="slot-item">
                    <span className="slot-dot muted" />
                    <div className="slot-info">
                      <span className="slot-name">Database Engineering Lab</span>
                      <span className="slot-meta">Lab 4 • 02:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Visual Widget 3: Tasks and Reminders */}
                <div className="mockup-widget widget-tasks">
                  <div className="widget-header">
                    <span className="widget-label">ACADEMIC TASKS & REMINDERS</span>
                    <span className="widget-count">3 Pending</span>
                  </div>
                  <div className="mock-task-row">
                    <span className="task-checkbox checked" />
                    <span className="task-text done">Submit Cloud Architecture Report</span>
                  </div>
                  <div className="mock-task-row">
                    <span className="task-checkbox" />
                    <span className="task-text">Prepare Seminar Presentation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featured-section {
          background-color: var(--bg-main);
          position: relative;
        }

        .featured-card {
          background: linear-gradient(135deg, rgba(20, 24, 20, 0.9) 0%, rgba(16, 19, 16, 0.8) 100%);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 3.5rem;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3.5rem;
          align-items: center;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }

        .featured-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-lime);
          background: var(--accent-lime-muted);
          border: 1px solid rgba(183, 255, 114, 0.25);
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          margin-bottom: 1.5rem;
        }

        .badge-sparkle {
          color: var(--accent-lime);
        }

        .featured-headline {
          font-size: 2.75rem;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 1.25rem;
        }

        .featured-gradient {
          background: linear-gradient(135deg, #F4F7F1 20%, #36D98A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .featured-description {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin-bottom: 2rem;
        }

        .featured-benefits {
          margin-bottom: 2.25rem;
        }

        .benefits-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--accent-lime);
          margin-bottom: 0.85rem;
        }

        .benefits-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .benefit-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .benefit-check {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .featured-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        /* Mockup Visual Right */
        .featured-visual-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .illustrative-disclaimer {
          margin-bottom: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: var(--text-muted);
        }

        .dashboard-mockup {
          width: 100%;
          background: #0d100d;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(54, 217, 138, 0.08);
        }

        .mockup-chrome-bar {
          background: #141814;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
        }

        .chrome-dots {
          display: flex;
          gap: 0.35rem;
        }

        .chrome-dots .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .dot.red { background: #ff5f56; }
        .dot.yellow { background: #ffbd2e; }
        .dot.green { background: #27c93f; }

        .chrome-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        .chrome-telemetry {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-lime);
        }

        .mockup-content {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .mockup-widget {
          background: rgba(20, 24, 20, 0.75);
          border: 1px solid rgba(41, 49, 41, 0.7);
          border-radius: 8px;
          padding: 0.85rem 1rem;
        }

        .widget-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.6rem;
        }

        .widget-label {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.08em;
          color: var(--text-secondary);
        }

        .widget-status {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-emerald);
          font-weight: 600;
        }

        .attendance-gauge-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .gauge-big {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--accent-lime);
          display: block;
        }

        .gauge-sub {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-secondary);
        }

        .slot-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(41, 49, 41, 0.4);
        }

        .slot-item:last-child {
          border-bottom: none;
        }

        .slot-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-lime);
          box-shadow: 0 0 6px var(--accent-lime);
        }

        .slot-dot.muted {
          background: var(--text-muted);
          box-shadow: none;
        }

        .slot-name {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-main);
          display: block;
        }

        .slot-meta {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-secondary);
        }

        .mock-task-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-main);
          padding: 0.25rem 0;
        }

        .task-checkbox {
          width: 14px;
          height: 14px;
          border-radius: 3px;
          border: 1px solid var(--border-subtle);
          display: inline-block;
        }

        .task-checkbox.checked {
          background: var(--accent-emerald);
          border-color: var(--accent-emerald);
        }

        .task-text.done {
          text-decoration: line-through;
          color: var(--text-muted);
        }

        @media (max-width: 960px) {
          .featured-card {
            grid-template-columns: 1fr;
            padding: 2.5rem 1.75rem;
            gap: 2.5rem;
          }
          .featured-headline {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};
