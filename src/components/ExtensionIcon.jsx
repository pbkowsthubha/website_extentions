import React from 'react';

/**
 * Custom SVG original futuristic artwork for NEXUS tools
 * Designed to replace generic placeholders with high-fidelity,
 * vector-crisp digital product marks.
 */
export const ExtensionIcon = ({ type, size = 48, className = "" }) => {
  switch (type) {
    case 'arc-reactor':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="NewTab Arc Reactor Icon"
        >
          <circle cx="32" cy="32" r="30" stroke="#293129" strokeWidth="1.5" />
          <circle cx="32" cy="32" r="24" stroke="#36D98A" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="32" cy="32" r="18" stroke="#1A201A" fill="#101310" strokeWidth="1.5" />
          {/* Reactor blades */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="32"
              y1="14"
              x2="32"
              y2="10"
              stroke="#B7FF72"
              strokeWidth="2"
              strokeLinecap="round"
              transform={`rotate(${angle} 32 32)`}
            />
          ))}
          {/* Glowing central power core */}
          <circle cx="32" cy="32" r="9" fill="#36D98A" fillOpacity="0.25" stroke="#B7FF72" strokeWidth="2" />
          <circle cx="32" cy="32" r="4" fill="#B7FF72" />
        </svg>
      );

    case 'dashboard':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Student Dashboard Icon"
        >
          <rect x="6" y="8" width="52" height="48" rx="8" stroke="#293129" strokeWidth="1.5" fill="#101310" />
          {/* Top telemetry bar */}
          <line x1="6" y1="20" x2="58" y2="20" stroke="#293129" strokeWidth="1.5" />
          <circle cx="14" cy="14" r="2.5" fill="#B7FF72" />
          <circle cx="22" cy="14" r="2.5" fill="#36D98A" />
          <line x1="32" y1="14" x2="50" y2="14" stroke="#293129" strokeWidth="2" strokeLinecap="round" />
          {/* Metric cards inside */}
          <rect x="12" y="26" width="18" height="12" rx="3" fill="#1A201A" stroke="#36D98A" strokeWidth="1" />
          <rect x="34" y="26" width="18" height="12" rx="3" fill="#1A201A" stroke="#293129" strokeWidth="1" />
          <path d="M16 48L24 43L32 46L48 38" stroke="#B7FF72" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="48" cy="38" r="2.5" fill="#B7FF72" />
        </svg>
      );

    case 'qr-motion':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Aether Animated QR Icon"
        >
          {/* Outer Scanner Target Brackets */}
          <path d="M10 22V12C10 10.8954 10.8954 10 12 10H22" stroke="#B7FF72" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M42 10H52C53.1046 10 54 10.8954 54 12V22" stroke="#B7FF72" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M54 42V52C54 53.1046 53.1046 54 52 54H42" stroke="#B7FF72" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M22 54H12C10.8954 54 10 53.1046 10 52V42" stroke="#B7FF72" strokeWidth="2.5" strokeLinecap="round" />
          {/* Inner QR patterns */}
          <rect x="16" y="16" width="10" height="10" rx="2" fill="#36D98A" />
          <rect x="38" y="16" width="10" height="10" rx="2" fill="#B7FF72" />
          <rect x="16" y="38" width="10" height="10" rx="2" fill="#B7FF72" />
          {/* Center Dynamic Matrix Elements */}
          <rect x="32" y="32" width="6" height="6" rx="1.5" fill="#36D98A" />
          <rect x="42" y="38" width="6" height="6" rx="1.5" fill="#9AA49A" />
          <rect x="32" y="42" width="6" height="6" rx="1.5" fill="#B7FF72" />
        </svg>
      );

    case 'shortcut-bolt':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          aria-label="Shortcut ERP Companion Icon"
        >
          <polygon points="32,6 54,19 54,45 32,58 10,45 10,19" fill="#101310" stroke="#293129" strokeWidth="1.5" />
          <polygon points="32,12 48,22 48,42 32,52 16,42 16,22" stroke="#36D98A" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
          {/* High speed lightning bolt gateway */}
          <path
            d="M36 18L22 34H33L28 48L44 30H32L36 18Z"
            fill="#B7FF72"
            stroke="#B7FF72"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="32" cy="32" r="26" stroke="#293129" strokeWidth="2" />
          <circle cx="32" cy="32" r="8" fill="#B7FF72" />
        </svg>
      );
  }
};

/**
 * Geometric Nexus Brand Mark
 */
export const NexusLogo = ({ size = 32, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="NEXUS Logo"
  >
    <rect width="40" height="40" rx="8" fill="#101310" stroke="#293129" strokeWidth="1" />
    <polygon points="20,7 33,14.5 33,29.5 20,37 7,29.5 7,14.5" fill="none" stroke="#B7FF72" strokeWidth="2" />
    <circle cx="20" cy="22" r="4.5" fill="#36D98A" />
    <line x1="20" y1="7" x2="20" y2="17.5" stroke="#B7FF72" strokeWidth="1.5" />
    <line x1="33" y1="29.5" x2="24" y2="24" stroke="#B7FF72" strokeWidth="1.5" />
    <line x1="7" y1="29.5" x2="16" y2="24" stroke="#B7FF72" strokeWidth="1.5" />
  </svg>
);

/**
 * Brand SVG Icons (Zero external dependency failures)
 */
export const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

