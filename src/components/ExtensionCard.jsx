import React from 'react';
import { ExtensionIcon } from './ExtensionIcon';
import { ExternalLink, Info, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ExtensionCard = ({ extension, onViewDetails }) => {
  return (
    <article className="extension-card" aria-labelledby={`ext-title-${extension.id}`}>
      {/* Top Meta Bar */}
      <div className="card-meta">
        <span className="card-index">#{extension.index}</span>
        <span className="card-category">{extension.category}</span>
        <span className="card-status-badge">
          <span className="status-dot" />
          Active
        </span>
      </div>

      {/* Header: Visual Artwork + Name & Subtitle */}
      <div className="card-header">
        <div className="card-icon-container">
          <ExtensionIcon type={extension.iconType} size={48} className="card-icon" />
        </div>
        <div className="card-heading-group">
          <h3 id={`ext-title-${extension.id}`} className="card-title">
            {extension.name}
          </h3>
          <p className="card-subtitle">{extension.subtitle}</p>
        </div>
      </div>

      {/* Verified Tagline & Description */}
      <p className="card-description">
        {extension.description}
      </p>

      {/* Key Features Quick List */}
      <div className="card-features-preview">
        <span className="features-preview-title">VERIFIED CAPABILITIES:</span>
        <ul className="preview-list">
          {extension.features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="preview-item">
              <CheckCircle2 size={13} className="feature-check" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="card-footer">
        <button
          type="button"
          onClick={() => onViewDetails(extension)}
          className="btn btn-secondary card-btn-details"
          aria-label={`View full details for ${extension.name}`}
        >
          <Info size={15} />
          <span>View Details</span>
        </button>

        <a
          href={extension.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary card-btn-store"
          aria-label={`Open ${extension.name} in Chrome Web Store`}
        >
          <span>Get on Web Store</span>
          <ExternalLink size={15} />
        </a>
      </div>

      <style>{`
        .extension-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
        }

        .extension-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-emerald);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(54, 217, 138, 0.08);
        }

        .card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
          font-family: var(--font-mono);
          font-size: 0.72rem;
        }

        .card-index {
          color: var(--accent-lime);
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .card-category {
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          background: rgba(255, 255, 255, 0.04);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .card-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-emerald);
          font-size: 0.7rem;
        }

        .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          margin-bottom: 1.25rem;
        }

        .card-icon-container {
          width: 60px;
          height: 60px;
          border-radius: 10px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: border-color var(--transition-fast), transform var(--transition-fast);
        }

        .extension-card:hover .card-icon-container {
          border-color: var(--accent-lime);
          transform: scale(1.04);
        }

        .card-heading-group {
          overflow: hidden;
        }

        .card-title {
          font-size: 1.25rem;
          color: var(--text-main);
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }

        .card-subtitle {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-secondary);
          letter-spacing: 0.03em;
        }

        .card-description {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .card-features-preview {
          background: rgba(16, 19, 16, 0.7);
          border: 1px solid rgba(41, 49, 41, 0.7);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          margin-bottom: 1.5rem;
        }

        .features-preview-title {
          display: block;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--accent-lime);
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .preview-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .preview-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-main);
          line-height: 1.4;
        }

        .feature-check {
          color: var(--accent-emerald);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .card-footer {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 0.75rem;
          margin-top: auto;
        }

        .card-btn-details,
        .card-btn-store {
          padding: 0.65rem 0.85rem;
          font-size: 0.82rem;
        }

        @media (max-width: 480px) {
          .card-footer {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </article>
  );
};
