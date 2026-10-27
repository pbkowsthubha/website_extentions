import React, { useEffect, useRef } from 'react';
import { ExtensionIcon } from './ExtensionIcon';
import { X, ExternalLink, CheckCircle2, ShieldCheck, Tag, Info, Cpu, Layers } from 'lucide-react';

export const ExtensionModal = ({ extension, onClose }) => {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close on Escape key press & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!extension) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-ext-title"
    >
      <div className="modal-container" ref={modalRef}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-badge-group">
            <span className="modal-index">NEXUS TOOL #{extension.index}</span>
            <span className="modal-category">{extension.category}</span>
            <span className="modal-status">
              <span className="modal-status-dot" />
              {extension.status}
            </span>
          </div>

          <button
            type="button"
            ref={closeBtnRef}
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close extension details"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Main Content */}
        <div className="modal-body">
          {/* Identity Bar */}
          <div className="modal-identity-bar">
            <div className="modal-icon-box">
              <ExtensionIcon type={extension.iconType} size={54} />
            </div>
            <div className="modal-title-box">
              <h2 id="modal-ext-title" className="modal-title">{extension.name}</h2>
              <p className="modal-subtitle">{extension.subtitle}</p>
            </div>
          </div>

          {/* Description */}
          <div className="modal-section">
            <span className="modal-section-label">OVERVIEW & PURPOSE</span>
            <p className="modal-desc-text">{extension.description}</p>
          </div>

          {/* Verified Capabilities */}
          <div className="modal-section">
            <span className="modal-section-label">VERIFIED CAPABILITIES</span>
            <ul className="modal-features-list">
              {extension.features.map((feat, idx) => (
                <li key={idx} className="modal-feature-item">
                  <CheckCircle2 size={16} className="modal-check-icon" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Specifications */}
          <div className="modal-section">
            <span className="modal-section-label">SPECIFICATIONS</span>
            <div className="modal-specs-grid">
              <div className="spec-tile">
                <span className="tile-k">MANIFEST SPEC</span>
                <span className="tile-v">Manifest V3</span>
              </div>
              <div className="spec-tile">
                <span className="tile-k">CURRENT VERSION</span>
                <span className="tile-v">v{extension.version}</span>
              </div>
              <div className="spec-tile">
                <span className="tile-k">PERMISSIONS</span>
                <span className="tile-v">Strictly Least Privilege</span>
              </div>
              <div className="spec-tile">
                <span className="tile-k">STORE ECOSYSTEM</span>
                <span className="tile-v">Official Chrome Web Store</span>
              </div>
            </div>
          </div>

          {/* Verified Privacy Note */}
          <div className="modal-privacy-callout">
            <ShieldCheck size={18} className="privacy-shield" />
            <div className="privacy-text">
              <strong>Official Chrome Web Store Verification:</strong> All extensions adhere to Google Chrome Web Store policies. We do not claim this website installs extensions directly; you will be safely redirected to Google's official Chrome Web Store listing.
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-secondary modal-cancel-btn"
          >
            Close
          </button>

          <a
            href={extension.storeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary modal-action-btn"
          >
            <span>View on Chrome Web Store</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(8, 10, 9, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          z-index: 200;
          animation: modalFadeIn 0.2s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          background: #121612;
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          width: 100%;
          max-width: 680px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 30px rgba(183, 255, 114, 0.08);
          animation: modalSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.75rem;
          background: #141814;
          border-bottom: 1px solid var(--border-subtle);
        }

        .modal-badge-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .modal-index {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--accent-lime);
        }

        .modal-category {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          text-transform: uppercase;
          background: rgba(255, 255, 255, 0.05);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .modal-status {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          color: var(--accent-emerald);
        }

        .modal-status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald);
        }

        .modal-close-btn {
          color: var(--text-muted);
          padding: 0.3rem;
          display: flex;
          align-items: center;
          border-radius: 6px;
          transition: color var(--transition-fast), background var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: var(--text-main);
          background: var(--bg-elevated);
        }

        .modal-body {
          padding: 1.75rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-identity-bar {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .modal-icon-box {
          width: 72px;
          height: 72px;
          border-radius: 12px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .modal-title {
          font-size: 1.65rem;
          color: var(--text-main);
          margin-bottom: 0.2rem;
        }

        .modal-subtitle {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .modal-section {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .modal-section-label {
          font-family: var(--font-mono);
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          color: var(--accent-lime);
        }

        .modal-desc-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .modal-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .modal-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-main);
        }

        .modal-check-icon {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .modal-specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.75rem;
        }

        .spec-tile {
          background: rgba(20, 24, 20, 0.7);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 0.75rem 1rem;
        }

        .tile-k {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }

        .tile-v {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-main);
        }

        .modal-privacy-callout {
          display: flex;
          gap: 0.75rem;
          background: rgba(16, 19, 16, 0.8);
          border: 1px solid rgba(41, 49, 41, 0.8);
          border-radius: 8px;
          padding: 1rem;
        }

        .privacy-shield {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .privacy-text {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
          padding: 1.25rem 1.75rem;
          background: #141814;
          border-top: 1px solid var(--border-subtle);
        }

        @media (max-width: 600px) {
          .modal-specs-grid {
            grid-template-columns: 1fr;
          }
          .modal-footer {
            flex-direction: column;
          }
          .modal-footer .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};
