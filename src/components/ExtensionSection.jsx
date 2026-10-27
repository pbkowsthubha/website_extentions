import React, { useState, useMemo } from 'react';
import { EXTENSIONS_DATA, CATEGORIES } from '../data/extensions';
import { ExtensionCard } from './ExtensionCard';
import { Search, X, SlidersHorizontal, RefreshCw } from 'lucide-react';

export const ExtensionSection = ({ onViewDetails }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter logic across Name, Description, Tagline, Category, Features
  const filteredExtensions = useMemo(() => {
    return EXTENSIONS_DATA.filter((ext) => {
      const matchesCategory =
        selectedCategory === 'All' || ext.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const query = searchQuery.toLowerCase();
      const matchName = ext.name.toLowerCase().includes(query);
      const matchDesc = ext.description.toLowerCase().includes(query);
      const matchTagline = ext.tagline.toLowerCase().includes(query);
      const matchCategory = ext.category.toLowerCase().includes(query);
      const matchFeature = ext.features.some((f) => f.toLowerCase().includes(query));

      return matchName || matchDesc || matchTagline || matchCategory || matchFeature;
    });
  }, [searchQuery, selectedCategory]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <section id="extensions" className="section-spacing extensions-section" aria-label="Extension Collection">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">
            <span className="pulse-dot" />
            <span>THE TOOLKIT</span>
          </div>
          <h2 className="section-title">Four tools. One mission.</h2>
          <p className="section-subtitle">
            Discover digital tools designed to make everyday tasks simpler.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="filter-controls-wrapper">
          <div className="search-box">
            <label htmlFor="extension-search-input" className="sr-only">
              Search extensions by name, description, or capability
            </label>
            <Search size={18} className="search-icon" aria-hidden="true" />
            <input
              id="extension-search-input"
              type="text"
              placeholder="Search extensions, features, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="category-pills" role="tablist" aria-label="Filter by Category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                onClick={() => setSelectedCategory(cat)}
                className={`category-pill ${selectedCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result Counter & Active Filter Indicators */}
        <div className="results-status-row">
          <div className="results-count-text">
            Showing <strong className="highlight-num">{filteredExtensions.length}</strong> of{' '}
            {EXTENSIONS_DATA.length} verified extensions
          </div>

          {(searchQuery || selectedCategory !== 'All') && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="reset-filters-btn"
            >
              <RefreshCw size={13} />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

        {/* Extension Cards Grid */}
        {filteredExtensions.length > 0 ? (
          <div className="extensions-grid">
            {filteredExtensions.map((ext) => (
              <ExtensionCard
                key={ext.id}
                extension={ext}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="empty-search-state" role="status">
            <div className="empty-search-icon">
              <Search size={32} />
            </div>
            <h3 className="empty-title">No extensions match "{searchQuery}"</h3>
            <p className="empty-subtitle">
              Try adjusting your search terms or clearing your category filters to see all available tools.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="btn btn-outline empty-reset-btn"
            >
              <RefreshCw size={15} />
              <span>Reset Search and Filters</span>
            </button>
          </div>
        )}
      </div>

      <style>{`
        .extensions-section {
          background-color: var(--bg-main);
          position: relative;
        }

        .filter-controls-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 280px;
          max-width: 480px;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-main);
          font-family: var(--font-body);
          font-size: 0.9rem;
          padding: 0.75rem 2.5rem 0.75rem 2.8rem;
          border-radius: 8px;
          transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
        }

        .search-input:focus {
          border-color: var(--accent-lime);
          outline: none;
          box-shadow: 0 0 16px rgba(183, 255, 114, 0.15);
        }

        .search-clear-btn {
          position: absolute;
          right: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          padding: 0.2rem;
          display: flex;
          align-items: center;
        }

        .search-clear-btn:hover {
          color: var(--text-main);
        }

        .category-pills {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .category-pill {
          padding: 0.5rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          border-radius: 6px;
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-secondary);
          transition: all var(--transition-fast);
        }

        .category-pill:hover {
          color: var(--text-main);
          border-color: var(--text-muted);
        }

        .category-pill.active {
          background-color: var(--accent-lime-muted);
          border-color: var(--accent-lime);
          color: var(--accent-lime);
          font-weight: 600;
        }

        .results-status-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(41, 49, 41, 0.5);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .highlight-num {
          color: var(--accent-lime);
        }

        .reset-filters-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--text-secondary);
          font-size: 0.78rem;
          transition: color var(--transition-fast);
        }

        .reset-filters-btn:hover {
          color: var(--accent-lime);
        }

        .extensions-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (max-width: 880px) {
          .extensions-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Empty State */
        .empty-search-state {
          text-align: center;
          padding: 4.5rem 2rem;
          background: var(--bg-card);
          border: 1px dashed var(--border-subtle);
          border-radius: 12px;
          max-width: 600px;
          margin: 0 auto;
        }

        .empty-search-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem auto;
          color: var(--text-muted);
        }

        .empty-title {
          font-size: 1.35rem;
          color: var(--text-main);
          margin-bottom: 0.6rem;
        }

        .empty-subtitle {
          color: var(--text-secondary);
          font-size: 0.92rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .empty-reset-btn {
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};
