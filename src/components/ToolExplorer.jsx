import React, { useState } from 'react';
import { EXTENSIONS_DATA } from '../data/extensions';
import { ExtensionIcon } from './ExtensionIcon';
import {
  ExternalLink,
  Info,
  CheckCircle2,
  Cpu,
  Wifi,
  Clock,
  Sparkles,
  QrCode,
  GraduationCap,
  Layers,
  Zap,
  BookOpen,
  Calendar,
  Sliders
} from 'lucide-react';

export const ToolExplorer = ({ onViewDetails, initialExtensionSlug = "student-dashboard" }) => {
  const [selectedIndex, setSelectedIndex] = useState(1); // default to Student Dashboard (index 1)
  
  // Interactive state for Aether QR simulation
  const [qrText, setQrText] = useState('https://nexus.tools');
  const [qrTheme, setQrTheme] = useState('lime');

  // Interactive state for Shortcut simulation
  const [shortcutFeedback, setShortcutFeedback] = useState(null);

  const currentExt = EXTENSIONS_DATA[selectedIndex] || EXTENSIONS_DATA[0];

  const handleShortcutClick = (actionName) => {
    setShortcutFeedback(`Opened ERP module: ${actionName}`);
    setTimeout(() => setShortcutFeedback(null), 2500);
  };

  return (
    <section id="explorer" className="section-spacing explorer-section" aria-label="NEXUS Tool Explorer">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>SIGNATURE INTERACTION</span>
          </div>
          <h2 className="section-title">NEXUS Tool Explorer</h2>
          <p className="section-subtitle">
            Experience the interactive design language and real-time capabilities of each extension before installing.
          </p>
        </div>

        {/* Explorer Shell */}
        <div className="explorer-shell">
          {/* Top Selector Tabs */}
          <div className="explorer-selector" role="tablist" aria-label="Select tool to explore">
            {EXTENSIONS_DATA.map((ext, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={ext.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedIndex(idx)}
                  className={`explorer-tab ${isSelected ? 'active' : ''}`}
                >
                  <div className="tab-icon-mini">
                    <ExtensionIcon type={ext.iconType} size={20} />
                  </div>
                  <div className="tab-info">
                    <span className="tab-title">{ext.name}</span>
                    <span className="tab-category">{ext.category}</span>
                  </div>
                  {isSelected && <span className="tab-indicator" />}
                </button>
              );
            })}
          </div>

          {/* Explorer Main Stage (Interactive Stage + Content Spec Panel) */}
          <div className="explorer-stage-grid">
            {/* Left: Dynamic Interactive Tool Simulation Canvas */}
            <div className="interactive-canvas">
              <div className="canvas-header">
                <div className="canvas-header-left">
                  <span className="canvas-indicator-dot" />
                  <span className="canvas-title">INTERACTIVE PREVIEW // {currentExt.slug.toUpperCase()}</span>
                </div>
                <span className="canvas-badge">{currentExt.version}</span>
              </div>

              <div className="canvas-body">
                {/* 1. NEWTAB SIMULATION */}
                {currentExt.slug === 'newtab' && (
                  <div className="sim-newtab">
                    <div className="sim-hud-top">
                      <div className="hud-metric">
                        <Wifi size={14} className="hud-icon" />
                        <span>NET: 12ms PING</span>
                      </div>
                      <div className="hud-metric">
                        <Cpu size={14} className="hud-icon" />
                        <span>CPU TELEMETRY: 14%</span>
                      </div>
                      <div className="hud-metric">
                        <Clock size={14} className="hud-icon" />
                        <span>22:36 UTC</span>
                      </div>
                    </div>

                    <div className="sim-reactor-showcase">
                      <ExtensionIcon type="arc-reactor" size={110} className="pulsing-reactor" />
                      <div className="reactor-glow-ambient" />
                      <div className="sim-reactor-label">CORE TELEMETRY ONLINE</div>
                    </div>

                    <div className="sim-hud-shortcuts">
                      <div className="hud-pill">GitHub</div>
                      <div className="hud-pill">Documentation</div>
                      <div className="hud-pill">Analytics</div>
                      <div className="hud-pill">Bookmarks +</div>
                    </div>
                  </div>
                )}

                {/* 2. STUDENT DASHBOARD SIMULATION */}
                {currentExt.slug === 'student-dashboard' && (
                  <div className="sim-dashboard">
                    <div className="dash-overview-row">
                      <div className="dash-metric-card attendance-card">
                        <span className="metric-label">CURRENT ATTENDANCE</span>
                        <div className="attendance-val">
                          <span className="big-num">89.4%</span>
                          <span className="safe-tag">Safe (+4 classes)</span>
                        </div>
                        <div className="progress-bar-bg">
                          <div className="progress-bar-fill" style={{ width: '89.4%' }} />
                        </div>
                      </div>

                      <div className="dash-metric-card course-card">
                        <span className="metric-label">NEXT CLASS TODAY</span>
                        <div className="class-name">CS402: Distributed Systems</div>
                        <div className="class-time">Room 304 • 10:30 AM</div>
                      </div>
                    </div>

                    <div className="dash-tasks-preview">
                      <div className="dash-task-header">ACADEMIC TASKS & REMINDERS</div>
                      <div className="dash-task-item">
                        <CheckCircle2 size={14} className="task-done" />
                        <span>Submit Cryptography Assignment #2</span>
                        <span className="task-badge">Today</span>
                      </div>
                      <div className="dash-task-item">
                        <div className="task-pending-dot" />
                        <span>Review Computer Networks Mid-term Syllabus</span>
                        <span className="task-badge urgent">Tomorrow</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. AETHER QR SIMULATION */}
                {currentExt.slug === 'aether' && (
                  <div className="sim-aether">
                    <div className="aether-controls">
                      <label className="aether-label">
                        <span>LIVE QR DATA INPUT:</span>
                        <input
                          type="text"
                          value={qrText}
                          onChange={(e) => setQrText(e.target.value)}
                          placeholder="Type URL or text..."
                          className="aether-input"
                        />
                      </label>

                      <div className="theme-selector-row">
                        <span className="theme-label">THEME PRESET:</span>
                        <div className="theme-buttons">
                          <button
                            type="button"
                            onClick={() => setQrTheme('lime')}
                            className={`theme-btn ${qrTheme === 'lime' ? 'active' : ''}`}
                          >
                            Electric Lime
                          </button>
                          <button
                            type="button"
                            onClick={() => setQrTheme('emerald')}
                            className={`theme-btn ${qrTheme === 'emerald' ? 'active' : ''}`}
                          >
                            Obsidian Emerald
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className={`qr-display-box theme-${qrTheme}`}>
                      <div className="qr-scan-line" />
                      <ExtensionIcon type="qr-motion" size={90} className="animated-qr-code" />
                      <div className="qr-encoded-caption">{qrText || 'Enter data above'}</div>
                    </div>
                  </div>
                )}

                {/* 4. SHORTCUT SIMULATION */}
                {currentExt.slug === 'shortcut' && (
                  <div className="sim-shortcut">
                    <div className="shortcut-banner">
                      <Zap size={16} className="bolt-icon" />
                      <span>1-CLICK ERP PORTAL GATEWAY</span>
                    </div>

                    <div className="shortcut-grid">
                      {[
                        { title: 'My Attendance', tag: 'Direct %' },
                        { title: 'Today Timetable', tag: 'Live Slot' },
                        { title: 'Internal Marks', tag: 'Evaluations' },
                        { title: 'Exam Seating', tag: 'Hall Ticket' },
                        { title: 'Course Feedback', tag: 'Active' },
                        { title: 'Fee Status', tag: 'Verified' }
                      ].map((item, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => handleShortcutClick(item.title)}
                          className="shortcut-tile"
                        >
                          <span className="tile-title">{item.title}</span>
                          <span className="tile-tag">{item.tag}</span>
                        </button>
                      ))}
                    </div>

                    {shortcutFeedback && (
                      <div className="shortcut-toast" role="status">
                        <CheckCircle2 size={14} />
                        <span>{shortcutFeedback}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right: Technical Specification Panel */}
            <div className="spec-panel">
              <div className="spec-meta-top">
                <span className="spec-index">NEXUS TOOL #{currentExt.index}</span>
                <span className="spec-category">{currentExt.category}</span>
              </div>

              <h3 className="spec-name">{currentExt.name}</h3>
              <p className="spec-tagline">{currentExt.subtitle}</p>

              <div className="spec-divider" />

              <div className="spec-section">
                <span className="spec-heading">CORE FUNCTIONALITY</span>
                <p className="spec-description">{currentExt.description}</p>
              </div>

              <div className="spec-section">
                <span className="spec-heading">SYSTEM HIGHLIGHTS</span>
                <ul className="spec-feature-list">
                  {currentExt.features.map((feat, i) => (
                    <li key={i} className="spec-feature-item">
                      <CheckCircle2 size={14} className="spec-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="spec-actions">
                <a
                  href={currentExt.storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary spec-store-btn"
                >
                  <span>Install from Chrome Web Store</span>
                  <ExternalLink size={16} />
                </a>

                <button
                  type="button"
                  onClick={() => onViewDetails(currentExt)}
                  className="btn btn-secondary spec-details-btn"
                >
                  <Info size={16} />
                  <span>Full Technical Specs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .explorer-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .explorer-shell {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: var(--shadow-card);
        }

        .explorer-selector {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: rgba(16, 19, 16, 0.95);
          border-bottom: 1px solid var(--border-subtle);
        }

        .explorer-tab {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 1.15rem 1.25rem;
          background: transparent;
          border-right: 1px solid var(--border-subtle);
          position: relative;
          text-align: left;
          transition: background-color var(--transition-fast);
        }

        .explorer-tab:last-child {
          border-right: none;
        }

        .explorer-tab:hover {
          background: rgba(26, 32, 26, 0.5);
        }

        .explorer-tab.active {
          background: var(--bg-card);
        }

        .tab-indicator {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent-lime);
          box-shadow: 0 0 10px var(--accent-lime);
        }

        .tab-icon-mini {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tab-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .tab-title {
          font-family: var(--font-display);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        .tab-category {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-secondary);
        }

        .explorer-stage-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          min-height: 480px;
        }

        /* Interactive Preview Canvas */
        .interactive-canvas {
          background: #0b0e0c;
          border-right: 1px solid var(--border-subtle);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .canvas-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid rgba(41, 49, 41, 0.6);
        }

        .canvas-header-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .canvas-indicator-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-lime);
          box-shadow: 0 0 8px var(--accent-lime);
        }

        .canvas-title {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--text-main);
        }

        .canvas-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-emerald);
          background: var(--accent-emerald-muted);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
        }

        .canvas-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        /* 1. NewTab Simulation Styles */
        .sim-newtab {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .sim-hud-top {
          display: flex;
          justify-content: space-between;
          background: rgba(20, 24, 20, 0.6);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 0.6rem 0.85rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .hud-metric {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }

        .hud-icon {
          color: var(--accent-lime);
        }

        .sim-reactor-showcase {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.5rem 0;
        }

        .pulsing-reactor {
          filter: drop-shadow(0 0 20px rgba(54, 217, 138, 0.3));
          animation: reactorPulse 3s infinite ease-in-out;
        }

        @keyframes reactorPulse {
          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 15px rgba(54, 217, 138, 0.3)); }
          50% { transform: scale(1.04); filter: drop-shadow(0 0 30px rgba(183, 255, 114, 0.5)); }
        }

        .sim-reactor-label {
          margin-top: 1rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          color: var(--accent-lime);
        }

        .sim-hud-shortcuts {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .hud-pill {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          padding: 0.35rem 0.85rem;
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* 2. Dashboard Simulation Styles */
        .sim-dashboard {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .dash-overview-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .dash-metric-card {
          background: rgba(20, 24, 20, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 1rem;
        }

        .metric-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          display: block;
          margin-bottom: 0.4rem;
        }

        .attendance-val {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
        }

        .big-num {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--accent-lime);
        }

        .safe-tag {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-emerald);
        }

        .progress-bar-bg {
          height: 6px;
          background: rgba(41, 49, 41, 0.6);
          border-radius: 9999px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--accent-emerald), var(--accent-lime));
          border-radius: 9999px;
        }

        .class-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .class-time {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .dash-tasks-preview {
          background: rgba(20, 24, 20, 0.5);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 1rem;
        }

        .dash-task-header {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.08em;
          color: var(--accent-lime);
          margin-bottom: 0.75rem;
        }

        .dash-task-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0;
          font-size: 0.82rem;
          color: var(--text-main);
          border-bottom: 1px solid rgba(41, 49, 41, 0.4);
        }

        .dash-task-item:last-child {
          border-bottom: none;
        }

        .task-done {
          color: var(--accent-emerald);
        }

        .task-pending-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid var(--accent-lime);
        }

        .task-badge {
          margin-left: auto;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          padding: 0.1rem 0.45rem;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
        }

        .task-badge.urgent {
          background: rgba(183, 255, 114, 0.15);
          color: var(--accent-lime);
        }

        /* 3. Aether Simulation */
        .sim-aether {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .aether-controls {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .aether-label {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
        }

        .aether-input {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 0.55rem 0.75rem;
          color: var(--text-main);
          font-size: 0.85rem;
        }

        .aether-input:focus {
          border-color: var(--accent-lime);
          outline: none;
        }

        .theme-selector-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .theme-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--text-muted);
        }

        .theme-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .theme-btn {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          padding: 0.3rem 0.65rem;
          border-radius: 4px;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
        }

        .theme-btn.active {
          border-color: var(--accent-lime);
          color: var(--accent-lime);
          background: var(--accent-lime-muted);
        }

        .qr-display-box {
          position: relative;
          background: rgba(16, 19, 16, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .animated-qr-code {
          animation: qrPulse 4s infinite alternate ease-in-out;
        }

        @keyframes qrPulse {
          0% { transform: scale(0.98); }
          100% { transform: scale(1.02); }
        }

        .qr-scan-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--accent-lime), transparent);
          animation: scanDown 3s infinite ease-in-out;
        }

        @keyframes scanDown {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        .qr-encoded-caption {
          margin-top: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-secondary);
          max-width: 260px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        /* 4. Shortcut Simulation */
        .sim-shortcut {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .shortcut-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(183, 255, 114, 0.08);
          border: 1px solid rgba(183, 255, 114, 0.25);
          padding: 0.5rem 0.85rem;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-lime);
        }

        .bolt-icon {
          color: var(--accent-lime);
        }

        .shortcut-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .shortcut-tile {
          background: rgba(20, 24, 20, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 0.85rem 0.65rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          transition: all var(--transition-fast);
        }

        .shortcut-tile:hover {
          border-color: var(--accent-lime);
          background: var(--bg-elevated);
          transform: translateY(-2px);
        }

        .tile-title {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .tile-tag {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-emerald);
        }

        .shortcut-toast {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--accent-lime);
          color: #080a09;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.5rem 0.85rem;
          border-radius: 6px;
          animation: fadeIn 0.2s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Spec Panel */
        .spec-panel {
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }

        .spec-meta-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .spec-index {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-lime);
        }

        .spec-category {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .spec-name {
          font-size: 1.65rem;
          color: var(--text-main);
          margin-bottom: 0.35rem;
        }

        .spec-tagline {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .spec-divider {
          height: 1px;
          background: var(--border-subtle);
          margin-bottom: 1.5rem;
        }

        .spec-section {
          margin-bottom: 1.5rem;
        }

        .spec-heading {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--accent-lime);
          margin-bottom: 0.5rem;
        }

        .spec-description {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .spec-feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .spec-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-main);
        }

        .spec-check {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .spec-actions {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .spec-store-btn {
          width: 100%;
        }

        .spec-details-btn {
          width: 100%;
        }

        @media (max-width: 960px) {
          .explorer-selector {
            grid-template-columns: repeat(2, 1fr);
          }
          .explorer-stage-grid {
            grid-template-columns: 1fr;
          }
          .interactive-canvas {
            border-right: none;
            border-bottom: 1px solid var(--border-subtle);
          }
        }

        @media (max-width: 580px) {
          .explorer-selector {
            grid-template-columns: 1fr;
          }
          .shortcut-grid {
            grid-template-columns: 1fr 1fr;
          }
          .dash-overview-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
