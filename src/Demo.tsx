import React, { useState } from 'react';
import FilterCard, { FilterCardType } from './FilterCard';
import './Demo.css';

interface CardData {
  type: FilterCardType;
  title: string;
  subtitle: string;
}

const cardData: CardData[] = [
  {
    type: 'critical',
    title: '4 critical alerts',
    subtitle: 'Review nodes with critical alerts',
  },
  {
    type: 'info',
    title: '3 new nodes',
    subtitle: 'Last week',
  },
  {
    type: 'success',
    title: '95% CPU health',
    subtitle: 'Click to improve CPU health',
  },
  {
    type: 'alert',
    title: '60 offline nodes',
    subtitle: 'For the last week',
  },
];

const Demo: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [clickLog, setClickLog] = useState<string[]>([]);

  const handleCardClick = (index: number, type: FilterCardType, title: string) => {
    setSelectedCard(selectedCard === index ? null : index);
    const timestamp = new Date().toLocaleTimeString();
    setClickLog((prev) => [
      `[${timestamp}] Clicked: ${title} (${type})`,
      ...prev.slice(0, 9),
    ]);
  };

  const clearLog = () => {
    setClickLog([]);
  };

  const clearSelection = () => {
    setSelectedCard(null);
  };

  return (
    <div className="demo-container">
      <header className="demo-header">
        <h1>Filter Card Component Demo</h1>
        <p className="demo-description">
          Interactive card component with hover, selected states, and ripple effects
        </p>
      </header>

      <main className="demo-main">
        {/* Cards Grid */}
        <section className="demo-section">
          <h2>All Card Variants</h2>
          <p className="section-description">
            Click any card to select it. Click again to deselect. Hover to see the hover state.
          </p>
          <div className="cards-grid">
            {cardData.map((card, index) => (
              <FilterCard
                key={index}
                type={card.type}
                title={card.title}
                subtitle={card.subtitle}
                selected={selectedCard === index}
                onClick={() => handleCardClick(index, card.type, card.title)}
                testId={`card-${card.type}`}
              />
            ))}
          </div>
          <div className="demo-controls">
            <button
              onClick={clearSelection}
              className="demo-button"
              disabled={selectedCard === null}
            >
              Clear Selection
            </button>
          </div>
        </section>

        {/* Event Log */}
        <section className="demo-section">
          <div className="log-header">
            <h2>Event Log</h2>
            <button
              onClick={clearLog}
              className="demo-button-small"
              disabled={clickLog.length === 0}
            >
              Clear Log
            </button>
          </div>
          <div className="event-log">
            {clickLog.length === 0 ? (
              <p className="log-empty">No events yet. Click a card to see events here.</p>
            ) : (
              <ul className="log-list">
                {clickLog.map((log, index) => (
                  <li key={index} className="log-item">
                    {log}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* States Documentation */}
        <section className="demo-section">
          <h2>Component States</h2>
          <div className="states-grid">
            <div className="state-card">
              <h3>Default State</h3>
              <p>Background: <code>#2c2826</code></p>
              <p>Initial appearance of the card</p>
            </div>
            <div className="state-card">
              <h3>Hover State</h3>
              <p>Background: <code>#332f2b</code></p>
              <p>When mouse hovers over the card</p>
            </div>
            <div className="state-card">
              <h3>Selected State</h3>
              <p>Background: <code>#332f2b</code></p>
              <p>Blue border outline (2px)</p>
              <p>Persists after click</p>
            </div>
            <div className="state-card">
              <h3>Ripple Effect</h3>
              <p>White ripple with opacity</p>
              <p>Triggered on click</p>
              <p>600ms animation duration</p>
            </div>
          </div>
        </section>

        {/* Semantic Colors Documentation */}
        <section className="demo-section">
          <h2>Semantic Colors</h2>
          <div className="colors-grid">
            <div className="color-card">
              <div className="color-swatch critical"></div>
              <h3>Critical</h3>
              <p><code>#ff7f7f</code></p>
              <p>Urgent issues requiring immediate attention</p>
            </div>
            <div className="color-card">
              <div className="color-swatch alert"></div>
              <h3>Alert</h3>
              <p><code>#ffd86e</code></p>
              <p>Warnings or issues requiring review</p>
            </div>
            <div className="color-card">
              <div className="color-swatch info"></div>
              <h3>Info</h3>
              <p><code>#6775e4</code></p>
              <p>Informational updates or new items</p>
            </div>
            <div className="color-card">
              <div className="color-swatch success"></div>
              <h3>Success</h3>
              <p><code>#29cf8d</code></p>
              <p>Positive metrics or healthy status</p>
            </div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="demo-section">
          <h2>Accessibility Features</h2>
          <ul className="features-list">
            <li>
              <strong>Keyboard Navigation:</strong> Use <kbd>Tab</kbd> to navigate between cards
            </li>
            <li>
              <strong>Keyboard Activation:</strong> Press <kbd>Enter</kbd> or <kbd>Space</kbd> to
              activate a focused card
            </li>
            <li>
              <strong>Focus Indicators:</strong> Blue outline appears when card is focused via
              keyboard
            </li>
            <li>
              <strong>Screen Reader Support:</strong> Cards include proper ARIA labels and roles
            </li>
            <li>
              <strong>Touch Targets:</strong> Minimum 44x44px touch targets on mobile devices
            </li>
            <li>
              <strong>High Contrast Mode:</strong> Enhanced borders in high contrast mode
            </li>
            <li>
              <strong>Reduced Motion:</strong> Respects prefers-reduced-motion preference
            </li>
          </ul>
        </section>

        {/* Usage Instructions */}
        <section className="demo-section">
          <h2>Usage Example</h2>
          <pre className="code-block">
            <code>{`import FilterCard from './FilterCard';

function MyComponent() {
  const [selected, setSelected] = useState(false);

  return (
    <FilterCard
      type="critical"
      title="4 critical alerts"
      subtitle="Review nodes with critical alerts"
      selected={selected}
      onClick={() => setSelected(!selected)}
    />
  );
}`}</code>
          </pre>
        </section>
      </main>

      <footer className="demo-footer">
        <p>Filter Card Component • Built with React & TypeScript</p>
      </footer>
    </div>
  );
};

export default Demo;

