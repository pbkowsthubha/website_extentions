import React, { useState } from 'react';
import { ArrowDown, Compass, User, ExternalLink } from 'lucide-react';
import { EXTENSIONS_DATA } from '../data/extensions';

export const Hero = ({ onSelectExtension }) => {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Four tool nodes positions in the orbital visual
  const orbitalNodes = [
    {
      id: "newtab",
      label: "NewTab",
      sub: "HUD & Telemetry",
      angle: -45, // Top-Right
      cx: 260,
      cy: 90,
      data: EXTENSIONS_DATA[0],
      color: "#36D98A"
    },
    {
      id: "student-dashboard",
      label: "Student Dashboard",
      sub: "Academic Hub",
      angle: 45, // Bottom-Right
      cx: 260,
      cy: 270,
      data: EXTENSIONS_DATA[1],
      color: "#B7FF72"
    },
    {
      id: "aether",
      label: "Aether",
      sub: "Motion QR",
      angle: 135, // Bottom-Left
      cx: 100,
      cy: 270,
      data: EXTENSIONS_DATA[2],
      color: "#36D98A"
    },
    {
      id: "shortcut",
      label: "Shortcut",
      sub: "Fast ERP Companion",
      angle: 225, // Top-Left
      cx: 100,
      cy: 90,
      data: EXTENSIONS_DATA[3],
      color: "#B7FF72"
    }
  ];

  const handleNodeClick = (ext) => {
    if (onSelectExtension) {
      onSelectExtension(ext);
    }
    const section = document.querySelector('#extensions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-label="Hero Section">
      <div className="container hero-container">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-badge">
              <span className="pulse-dot" />
              INDEPENDENT DEVELOPER / DIGITAL TOOLS
            </span>
          </div>

          <h1 className="hero-headline">
            The internet, <br />
            <span className="hero-gradient-text">a little more useful.</span>
          </h1>

          <p className="hero-supporting">
            I build browser extensions and digital tools designed to simplify everyday workflows and make technology more useful.
          </p>

          <div className="hero-actions">
            <a href="#extensions" className="btn btn-primary">
              <Compass size={18} />
              <span>Explore Extensions</span>
            </a>
            <a href="#about" className="btn btn-secondary">
              <User size={18} />
              <span>Meet the Creator</span>
            </a>
          </div>

          {/* Quick Metrics / Verification Chips */}
          <div className="hero-chips">
            <div className="hero-chip">
              <span className="chip-indicator" />
              <span className="chip-label">4 Chrome Extensions</span>
            </div>
            <div className="hero-chip">
              <span className="chip-indicator active" />
              <span className="chip-label">Manifest V3 Verified</span>
            </div>
            <div className="hero-chip">
              <span className="chip-indicator" />
              <span className="chip-label">Built by Dheeraj Reddy</span>
            </div>
          </div>
        </div>

        {/* Right Column: Original NEXUS Animated Orbital Constellation */}
        <div className="hero-visual-wrapper">
          <div className="constellation-container">
            {/* Ambient Back Glow */}
            <div className="constellation-glow" />

            <svg
              className="constellation-svg"
              viewBox="0 0 360 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="NEXUS Orbital Constellation Visual"
            >
              {/* Outer Subtle Orbit Guide Rings */}
              <circle cx="180" cy="180" r="140" stroke="#293129" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
              <circle cx="180" cy="180" r="95" stroke="#293129" strokeWidth="1" opacity="0.4" />
              <circle cx="180" cy="180" r="50" stroke="#36D98A" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" className="rotating-orbit" />

              {/* Connecting Vector Rays to Nodes */}
              {orbitalNodes.map((node) => (
                <g key={`ray-${node.id}`}>
                  <line
                    x1="180"
                    y1="180"
                    x2={node.cx}
                    y2={node.cy}
                    stroke={hoveredNode === node.id ? "#B7FF72" : "#293129"}
                    strokeWidth={hoveredNode === node.id ? "2" : "1.2"}
                    strokeDasharray={hoveredNode === node.id ? "none" : "4 4"}
                    className="connection-line"
                  />
                  {/* Energy pulse travelling along the line */}
                  <circle
                    cx="180"
                    cy="180"
                    r="2.5"
                    fill={node.color}
                    className={`energy-pulse pulse-${node.id}`}
                  />
                </g>
              ))}

              {/* Central NEXUS Core Luminous Node */}
              <g className="core-node-group">
                <circle cx="180" cy="180" r="32" fill="#101310" stroke="#293129" strokeWidth="2" />
                <circle cx="180" cy="180" r="24" fill="#141814" stroke="#36D98A" strokeWidth="1.5" />
                <polygon points="180,165 193,172 193,188 180,195 167,188 167,172" fill="#1A201A" stroke="#B7FF72" strokeWidth="1.5" />
                <circle cx="180" cy="180" r="4" fill="#B7FF72" className="core-glow" />
                <text x="180" y="208" textAnchor="middle" fill="#9AA49A" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="1.5">
                  NEXUS
                </text>
              </g>

              {/* Four Tool Nodes */}
              {orbitalNodes.map((node) => {
                const isHovered = hoveredNode === node.id;
                return (
                  <g
                    key={node.id}
                    className="tool-node"
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                    onClick={() => handleNodeClick(node.data)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select ${node.label} extension`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleNodeClick(node.data);
                      }
                    }}
                  >
                    {/* Outer halo on hover */}
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r={isHovered ? "28" : "22"}
                      fill="#141814"
                      stroke={isHovered ? node.color : "#293129"}
                      strokeWidth={isHovered ? "2" : "1.5"}
                      className="node-ring"
                    />
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="12"
                      fill="#1A201A"
                      stroke={node.color}
                      strokeWidth="1"
                    />
                    <circle
                      cx={node.cx}
                      cy={node.cy}
                      r="4"
                      fill={isHovered ? "#B7FF72" : node.color}
                    />

                    {/* Small Node Identifier Label */}
                    <text
                      x={node.cx}
                      y={node.cy > 180 ? node.cy + 34 : node.cy - 24}
                      textAnchor="middle"
                      fill={isHovered ? "#F4F7F1" : "#9AA49A"}
                      fontSize="9.5"
                      fontFamily="var(--font-display)"
                      fontWeight="600"
                    >
                      {node.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Interactive Tooltip Card for Active / Hovered Node */}
            {hoveredNode && (
              <div className="constellation-tooltip animate-fade-in" role="tooltip">
                {(() => {
                  const node = orbitalNodes.find((n) => n.id === hoveredNode);
                  if (!node) return null;
                  return (
                    <div className="tooltip-inner">
                      <div className="tooltip-header">
                        <span className="tooltip-index">{node.data.index}</span>
                        <span className="tooltip-category">{node.data.category}</span>
                      </div>
                      <div className="tooltip-name">{node.data.name}</div>
                      <div className="tooltip-tagline">{node.data.tagline}</div>
                      <div className="tooltip-cta">
                        <span>Jump to Toolkit</span>
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hero Scroll Indicator */}
      <div className="scroll-indicator">
        <a href="#extensions" aria-label="Scroll down to extensions section">
          <span className="scroll-text">EXPLORE TOOLKIT</span>
          <ArrowDown size={14} className="bounce-arrow" />
        </a>
      </div>

      <style>{`
        .hero-section {
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          padding-top: 7rem;
          padding-bottom: 4rem;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 3.5rem;
        }

        .hero-content {
          max-width: 620px;
        }

        .hero-eyebrow {
          margin-bottom: 1.5rem;
        }

        .eyebrow-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--accent-lime);
          background: rgba(183, 255, 114, 0.08);
          border: 1px solid rgba(183, 255, 114, 0.22);
          padding: 0.4rem 0.9rem;
          border-radius: 9999px;
        }

        .hero-headline {
          font-size: 3.6rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .hero-gradient-text {
          background: linear-gradient(135deg, #F4F7F1 30%, #B7FF72 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-supporting {
          font-size: 1.15rem;
          line-height: 1.65;
          color: var(--text-secondary);
          margin-bottom: 2.25rem;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
          margin-bottom: 2.5rem;
        }

        .hero-chips {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(41, 49, 41, 0.6);
        }

        .hero-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .chip-indicator {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--text-muted);
        }

        .chip-indicator.active {
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald);
        }

        /* Constellation Orbital Visual */
        .hero-visual-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .constellation-container {
          position: relative;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .constellation-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          background: radial-gradient(circle, rgba(183, 255, 114, 0.12) 0%, rgba(54, 217, 138, 0.05) 50%, transparent 75%);
          filter: blur(50px);
          pointer-events: none;
        }

        .constellation-svg {
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 10px 25px rgba(0, 0, 0, 0.5));
        }

        .rotating-orbit {
          transform-origin: 180px 180px;
          animation: rotateOrbit 30s linear infinite;
        }

        @keyframes rotateOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .tool-node {
          cursor: pointer;
          transition: all 0.25s ease;
          outline: none;
        }

        .node-ring {
          transition: all 0.25s ease;
        }

        .constellation-tooltip {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(20, 24, 20, 0.94);
          backdrop-filter: blur(12px);
          border: 1px solid var(--accent-emerald);
          border-radius: 8px;
          padding: 0.85rem 1.15rem;
          width: 90%;
          max-width: 320px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
          pointer-events: none;
          z-index: 10;
        }

        .tooltip-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.35rem;
        }

        .tooltip-index {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent-lime);
        }

        .tooltip-category {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          color: var(--text-secondary);
        }

        .tooltip-name {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 0.2rem;
        }

        .tooltip-tagline {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }

        .tooltip-cta {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          color: var(--accent-lime);
          font-weight: 500;
        }

        /* Scroll indicator */
        .scroll-indicator {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
        }

        .scroll-indicator a {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          transition: color var(--transition-fast);
        }

        .scroll-indicator a:hover {
          color: var(--accent-lime);
        }

        .bounce-arrow {
          animation: bounce 2s infinite ease-in-out;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(5px); }
        }

        @media (max-width: 960px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-content {
            margin: 0 auto;
          }
          .hero-headline {
            font-size: 2.8rem;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-chips {
            justify-content: center;
          }
          .constellation-container {
            margin: 0 auto;
            max-width: 340px;
          }
        }

        @media (max-width: 540px) {
          .hero-headline {
            font-size: 2.2rem;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};
