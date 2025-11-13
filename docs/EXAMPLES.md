# Filter Card - Usage Examples

Real-world examples showing how to use the Filter Card component in different scenarios.

## 📋 Table of Contents

1. [Basic Usage](#basic-usage)
2. [Dashboard with Multiple Cards](#dashboard-with-multiple-cards)
3. [Single Selection](#single-selection)
4. [Multiple Selection](#multiple-selection)
5. [Integration with Router](#integration-with-router)
6. [Dynamic Data from API](#dynamic-data-from-api)
7. [Custom Event Handling](#custom-event-handling)
8. [Controlled Component Pattern](#controlled-component-pattern)
9. [Grid Layouts](#grid-layouts)
10. [Accessibility Testing](#accessibility-testing)

---

## Basic Usage

The simplest way to use the component:

```tsx
import FilterCard from './FilterCard';

function App() {
  return (
    <FilterCard
      type="critical"
      title="4 critical alerts"
      subtitle="Review nodes with critical alerts"
      onClick={() => console.log('Card clicked!')}
    />
  );
}
```

---

## Dashboard with Multiple Cards

Create a dashboard showing different metrics:

```tsx
import React from 'react';
import FilterCard from './FilterCard';

function Dashboard() {
  const metrics = [
    {
      type: 'critical' as const,
      title: '4 critical alerts',
      subtitle: 'Review nodes with critical alerts',
      action: () => navigateTo('/alerts/critical'),
    },
    {
      type: 'alert' as const,
      title: '60 offline nodes',
      subtitle: 'For the last week',
      action: () => navigateTo('/nodes/offline'),
    },
    {
      type: 'info' as const,
      title: '3 new nodes',
      subtitle: 'Last week',
      action: () => navigateTo('/nodes/new'),
    },
    {
      type: 'success' as const,
      title: '95% CPU health',
      subtitle: 'Click to improve CPU health',
      action: () => navigateTo('/health/cpu'),
    },
    {
      type: 'notice' as const,
      title: '60 offline nodes',
      subtitle: 'For the last week',
      action: () => navigateTo('/nodes/offline'),
    },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 312px)', gap: '24px' }}>
      {metrics.map((metric, index) => (
        <FilterCard
          key={index}
          type={metric.type}
          title={metric.title}
          subtitle={metric.subtitle}
          onClick={metric.action}
        />
      ))}
    </div>
  );
}
```

---

## Single Selection

Allow users to select only one card at a time:

```tsx
import React, { useState } from 'react';
import FilterCard, { FilterCardType } from './FilterCard';

interface FilterOption {
  id: string;
  type: FilterCardType;
  title: string;
  subtitle: string;
}

function FilterPanel() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filters: FilterOption[] = [
    { id: 'critical', type: 'critical', title: 'Critical', subtitle: 'Show critical issues only' },
    { id: 'alert', type: 'alert', title: 'Alerts', subtitle: 'Show all alerts' },
    { id: 'info', type: 'info', title: 'Info', subtitle: 'Show informational items' },
    { id: 'success', type: 'success', title: 'Success', subtitle: 'Show success metrics' },
    { id: 'notice', type: 'notice', title: 'Notice', subtitle: 'Show notice items' },
  ];

  const handleSelect = (id: string) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <div>
      <h2>Filter Results</h2>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        {filters.map((filter) => (
          <FilterCard
            key={filter.id}
            type={filter.type}
            title={filter.title}
            subtitle={filter.subtitle}
            selected={selectedId === filter.id}
            onClick={() => handleSelect(filter.id)}
          />
        ))}
      </div>
      {selectedId && <p>Selected filter: {selectedId}</p>}
    </div>
  );
}
```

---

## Multiple Selection

Allow users to select multiple cards:

```tsx
import React, { useState } from 'react';
import FilterCard, { FilterCardType } from './FilterCard';

interface Filter {
  id: string;
  type: FilterCardType;
  title: string;
  subtitle: string;
}

function MultiSelectFilters() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const filters: Filter[] = [
    { id: 'critical', type: 'critical', title: 'Critical', subtitle: 'Include critical alerts' },
    { id: 'alert', type: 'alert', title: 'Alerts', subtitle: 'Include warnings' },
    { id: 'info', type: 'info', title: 'Info', subtitle: 'Include info items' },
    { id: 'success', type: 'success', title: 'Success', subtitle: 'Include success items' },
    { id: 'notice', type: 'notice', title: 'Notice', subtitle: 'Include notice items' },
  ];

  const toggleSelection = (id: string) => {
    const newSelection = new Set(selectedIds);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedIds(newSelection);
  };

  const clearAll = () => setSelectedIds(new Set());

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <h2>Select Filters ({selectedIds.size} selected)</h2>
        <button onClick={clearAll} disabled={selectedIds.size === 0}>
          Clear All
        </button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 312px)', gap: '16px' }}>
        {filters.map((filter) => (
          <FilterCard
            key={filter.id}
            type={filter.type}
            title={filter.title}
            subtitle={filter.subtitle}
            selected={selectedIds.has(filter.id)}
            onClick={() => toggleSelection(filter.id)}
          />
        ))}
      </div>
    </div>
  );
}
```

---

## Integration with Router

Navigate to different pages based on card selection:

```tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilterCard from './FilterCard';

function NavigationCards() {
  const navigate = useNavigate();

  const cards = [
    {
      type: 'critical' as const,
      title: '4 critical alerts',
      subtitle: 'Review nodes with critical alerts',
      path: '/alerts/critical',
    },
    {
      type: 'info' as const,
      title: '3 new nodes',
      subtitle: 'Last week',
      path: '/nodes/new',
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '24px' }}>
      {cards.map((card, index) => (
        <FilterCard
          key={index}
          type={card.type}
          title={card.title}
          subtitle={card.subtitle}
          onClick={() => navigate(card.path)}
        />
      ))}
    </div>
  );
}
```

---

## Dynamic Data from API

Fetch and display cards from an API:

```tsx
import React, { useState, useEffect } from 'react';
import FilterCard, { FilterCardType } from './FilterCard';

interface ApiCard {
  id: string;
  type: FilterCardType;
  title: string;
  subtitle: string;
  count: number;
}

function DynamicCards() {
  const [cards, setCards] = useState<ApiCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/metrics')
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleCardClick = async (cardId: string) => {
    console.log(`Fetching details for card: ${cardId}`);
    // Fetch more details or navigate
    await fetch(`/api/metrics/${cardId}/details`);
  };

  if (loading) return <div>Loading metrics...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, 312px)', gap: '24px' }}>
      {cards.map((card) => (
        <FilterCard
          key={card.id}
          type={card.type}
          title={card.title}
          subtitle={card.subtitle}
          onClick={() => handleCardClick(card.id)}
          testId={`card-${card.id}`}
        />
      ))}
    </div>
  );
}
```

---

## Custom Event Handling

Handle various events with custom logic:

```tsx
import React, { useState } from 'react';
import FilterCard from './FilterCard';

function AdvancedEventHandling() {
  const [clickCount, setClickCount] = useState(0);
  const [lastClicked, setLastClicked] = useState<string | null>(null);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    setLastClicked(new Date().toLocaleTimeString());
    setSelected(!selected);

    // Send analytics
    analytics.track('Card Clicked', {
      type: 'critical',
      timestamp: new Date().toISOString(),
    });

    // Show notification
    if (clickCount >= 4) {
      alert('You really like clicking this card!');
    }
  };

  return (
    <div>
      <FilterCard
        type="critical"
        title="4 critical alerts"
        subtitle="Review nodes with critical alerts"
        selected={selected}
        onClick={handleClick}
      />
      <div style={{ marginTop: '16px' }}>
        <p>Click count: {clickCount}</p>
        <p>Last clicked: {lastClicked || 'Never'}</p>
        <p>Status: {selected ? 'Selected' : 'Not selected'}</p>
      </div>
    </div>
  );
}
```

---

## Controlled Component Pattern

Full control over component state from parent:

```tsx
import React, { useState, useCallback } from 'react';
import FilterCard from './FilterCard';

interface CardState {
  id: string;
  selected: boolean;
  clickCount: number;
}

function ControlledCards() {
  const [cardStates, setCardStates] = useState<Record<string, CardState>>({
    card1: { id: 'card1', selected: false, clickCount: 0 },
    card2: { id: 'card2', selected: false, clickCount: 0 },
    card3: { id: 'card3', selected: false, clickCount: 0 },
  });

  const handleCardClick = useCallback((cardId: string) => {
    setCardStates((prev) => ({
      ...prev,
      [cardId]: {
        ...prev[cardId],
        selected: !prev[cardId].selected,
        clickCount: prev[cardId].clickCount + 1,
      },
    }));
  }, []);

  const resetAll = () => {
    setCardStates((prev) => {
      const reset: Record<string, CardState> = {};
      Object.keys(prev).forEach((key) => {
        reset[key] = { ...prev[key], selected: false, clickCount: 0 };
      });
      return reset;
    });
  };

  return (
    <div>
      <button onClick={resetAll}>Reset All Cards</button>
      <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
        <FilterCard
          type="critical"
          title="Critical Alerts"
          subtitle={`Clicked ${cardStates.card1.clickCount} times`}
          selected={cardStates.card1.selected}
          onClick={() => handleCardClick('card1')}
        />
        <FilterCard
          type="info"
          title="New Nodes"
          subtitle={`Clicked ${cardStates.card2.clickCount} times`}
          selected={cardStates.card2.selected}
          onClick={() => handleCardClick('card2')}
        />
        <FilterCard
          type="success"
          title="CPU Health"
          subtitle={`Clicked ${cardStates.card3.clickCount} times`}
          selected={cardStates.card3.selected}
          onClick={() => handleCardClick('card3')}
        />
      </div>
    </div>
  );
}
```

---

## Grid Layouts

Different responsive grid layouts:

### 2-Column Grid

```tsx
function TwoColumnGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 312px)',
      gap: '24px',
      justifyContent: 'center',
    }}>
      {/* Cards here */}
    </div>
  );
}
```

### Responsive Auto-Fit Grid

```tsx
function ResponsiveGrid() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(312px, 312px))',
      gap: '24px',
      justifyContent: 'center',
      padding: '24px',
    }}>
      {/* Cards here */}
    </div>
  );
}
```

### Flexbox Layout

```tsx
function FlexLayout() {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px',
      justifyContent: 'center',
    }}>
      {/* Cards here */}
    </div>
  );
}
```

---

## Accessibility Testing

Test accessibility features:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilterCard from './FilterCard';

describe('FilterCard Accessibility', () => {
  it('should be keyboard navigable', () => {
    const handleClick = jest.fn();
    render(
      <FilterCard
        type="critical"
        title="Test Card"
        subtitle="Test subtitle"
        onClick={handleClick}
        testId="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    
    // Tab to focus
    card.focus();
    expect(card).toHaveFocus();

    // Press Enter
    fireEvent.keyDown(card, { key: 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);

    // Press Space
    fireEvent.keyDown(card, { key: ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  it('should have proper ARIA attributes', () => {
    render(
      <FilterCard
        type="critical"
        title="Test Card"
        subtitle="Test subtitle"
        selected={true}
        testId="test-card"
      />
    );

    const card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('role', 'button');
    expect(card).toHaveAttribute('aria-pressed', 'true');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('should announce state changes to screen readers', () => {
    const { rerender } = render(
      <FilterCard
        type="critical"
        title="Test Card"
        subtitle="Test subtitle"
        selected={false}
        testId="test-card"
      />
    );

    let card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('aria-pressed', 'false');

    rerender(
      <FilterCard
        type="critical"
        title="Test Card"
        subtitle="Test subtitle"
        selected={true}
        testId="test-card"
      />
    );

    card = screen.getByTestId('test-card');
    expect(card).toHaveAttribute('aria-pressed', 'true');
  });
});
```

---

## 🎯 Tips & Best Practices

### 1. Always Provide Meaningful Content

```tsx
// ✅ Good
<FilterCard
  type="critical"
  title="4 critical alerts"
  subtitle="Review nodes with critical alerts"
/>

// ❌ Bad
<FilterCard
  type="critical"
  title="Alerts"
  subtitle="Click here"
/>
```

### 2. Use Semantic Types Correctly

```tsx
// ✅ Good - Type matches content
<FilterCard type="critical" title="System Down" subtitle="Immediate action required" />
<FilterCard type="info" title="New Features" subtitle="Check out what's new" />
<FilterCard type="notice" title="Scheduled Maintenance" subtitle="Tomorrow at 3 AM" />

// ❌ Bad - Type doesn't match content
<FilterCard type="critical" title="Welcome" subtitle="Nice to see you" />
```

### 3. Handle Loading States

```tsx
function CardsWithLoading() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <Skeleton width={312} height={88} />;
  }
  
  return <FilterCard {...props} />;
}
```

### 4. Provide Feedback

```tsx
function CardWithFeedback() {
  const [selected, setSelected] = useState(false);
  
  const handleClick = () => {
    setSelected(!selected);
    toast.success('Filter applied!');
  };
  
  return <FilterCard {...props} onClick={handleClick} />;
}
```

---

**More examples and patterns coming soon!**

For additional help, check:
- `README.md` for full documentation
- `Demo.tsx` for interactive examples
- `COMPONENT_SPEC.md` for technical details

