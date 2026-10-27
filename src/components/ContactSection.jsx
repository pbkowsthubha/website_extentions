import React, { useState } from 'react';
import { CREATOR_INFO } from '../data/projects';
import { GithubIcon, LinkedinIcon } from './ExtensionIcon';
import { Mail, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = CREATOR_INFO.socialLinks?.email;
  const github = CREATOR_INFO.socialLinks?.github;
  const linkedin = CREATOR_INFO.socialLinks?.linkedin;

  const handleCopyEmail = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-spacing contact-section" aria-label="Contact Section">
      <div className="container">
        <div className="contact-card">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>DIRECT CHANNELS</span>
          </div>

          <h2 className="contact-headline">Have an idea worth building?</h2>
          <p className="contact-supporting">Let's create something useful.</p>

          <div className="contact-methods-grid">
            {/* Primary Direct Email Channel */}
            {email && (
              <div className="channel-box email-channel">
                <div className="channel-header">
                  <Mail size={20} className="channel-icon" />
                  <span className="channel-type">DIRECT INBOX</span>
                </div>
                <div className="channel-value">{email}</div>
                <div className="channel-actions">
                  <a
                    href={`mailto:${email}?subject=Collaboration%20Inquiry%20via%20NEXUS`}
                    className="btn btn-primary channel-btn"
                  >
                    <span>Send Message</span>
                    <ArrowUpRight size={15} />
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="btn btn-secondary channel-btn-secondary"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            )}

            {/* Developer Channels */}
            <div className="channel-box external-channels">
              <div className="channel-header">
                <MessageSquare size={20} className="channel-icon" />
                <span className="channel-type">CONNECTED PROFILES</span>
              </div>
              <p className="channel-note">
                Explore source code, repositories, and direct professional networks.
              </p>
              <div className="channel-links-col">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="network-link-row"
                  >
                    <div className="net-left">
                      <GithubIcon size={16} />
                      <span>GitHub Architecture</span>
                    </div>
                    <ArrowUpRight size={14} />
                  </a>
                )}
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="network-link-row"
                  >
                    <div className="net-left">
                      <LinkedinIcon size={16} />
                      <span>LinkedIn Profile</span>
                    </div>
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .contact-card {
          background: linear-gradient(135deg, rgba(20, 24, 20, 0.95) 0%, rgba(16, 19, 16, 0.85) 100%);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 3.5rem 3rem;
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
          box-shadow: var(--shadow-card);
        }

        .contact-headline {
          font-size: 2.75rem;
          color: var(--text-main);
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }

        .contact-supporting {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 2.75rem;
        }

        .contact-methods-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          text-align: left;
        }

        .channel-box {
          background: #0d100d;
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }

        .channel-header {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          margin-bottom: 0.85rem;
        }

        .channel-icon {
          color: var(--accent-lime);
        }

        .channel-type {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          color: var(--text-secondary);
        }

        .channel-value {
          font-family: var(--font-mono);
          font-size: 1rem;
          color: var(--text-main);
          margin-bottom: 1.5rem;
          word-break: break-all;
        }

        .channel-actions {
          display: flex;
          gap: 0.75rem;
          margin-top: auto;
        }

        .channel-btn {
          flex: 1;
          padding: 0.65rem 0.85rem;
          font-size: 0.82rem;
        }

        .channel-btn-secondary {
          padding: 0.65rem 0.85rem;
          font-size: 0.82rem;
        }

        .channel-note {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }

        .channel-links-col {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-top: auto;
        }

        .network-link-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.65rem 0.85rem;
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--text-main);
          transition: all var(--transition-fast);
        }

        .network-link-row:hover {
          border-color: var(--accent-lime);
          color: var(--accent-lime);
          transform: translateX(3px);
        }

        .net-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 2.5rem 1.5rem;
          }
          .contact-headline {
            font-size: 2rem;
          }
          .contact-methods-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
