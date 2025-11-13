import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import FilterCard from '../FilterCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/FilterCard',
  component: FilterCard,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: 'select',
      options: ['critical', 'alert', 'info', 'success', 'notice', 'zededa'],
      description: 'The semantic type of the card',
    },
    title: {
      control: 'text',
      description: 'Main title text',
    },
    subtitle: {
      control: 'text',
      description: 'Subtitle/description text',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the card is currently selected',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class names',
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked
  args: { onClick: fn() },
} satisfies Meta<typeof FilterCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/**
 * The default Critical card shows urgent issues requiring immediate attention.
 * Features a red icon (#ff7f7f) with an error symbol.
 */
export const Critical: Story = {
  args: {
    type: 'critical',
    title: '4 critical alerts',
    subtitle: 'Review nodes with critical alerts',
    selected: false,
  },
};

/**
 * The Alert card displays warnings or issues requiring review.
 * Features a yellow icon (#ffd86e) with a chart symbol.
 */
export const Alert: Story = {
  args: {
    type: 'alert',
    title: '60 offline nodes',
    subtitle: 'For the last week',
    selected: false,
  },
};

/**
 * The Info card shows informational updates or new items.
 * Features a blue icon (#6775e4) with a lightbulb symbol.
 */
export const Info: Story = {
  args: {
    type: 'info',
    title: '3 new nodes',
    subtitle: 'Last week',
    selected: false,
  },
};

/**
 * The Success card displays positive metrics or healthy status.
 * Features a green icon (#29cf8d) with a trending chart symbol.
 */
export const Success: Story = {
  args: {
    type: 'success',
    title: '95% CPU health',
    subtitle: 'Click to improve CPU health',
    selected: false,
  },
};

/**
 * The Notice card displays important notifications or items requiring attention.
 * Features an orange icon (#ffa16e) with a chart symbol.
 */
export const Notice: Story = {
  args: {
    type: 'notice',
    title: '60 offline nodes',
    subtitle: 'For the last week',
    selected: false,
  },
};

/**
 * The Zededa card represents Zededa-branded content or special items.
 * Features a bright orange/red icon (#ff5900) with a chart symbol.
 */
export const Zededa: Story = {
  args: {
    type: 'zededa',
    title: '60 offline nodes',
    subtitle: 'For the last week',
    selected: false,
  },
};

/**
 * Selected state shows the card with its semantic color border.
 * Each card type uses its own semantic color for the selection indicator.
 */
export const Selected: Story = {
  args: {
    type: 'critical',
    title: '4 critical alerts',
    subtitle: 'Review nodes with critical alerts',
    selected: true,
  },
};

/**
 * All Variants displayed side by side for comparison.
 * Shows the six semantic types: Critical, Alert, Info, Success, Notice, and Zededa.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
      <FilterCard
        type="critical"
        title="4 critical alerts"
        subtitle="Review nodes with critical alerts"
        onClick={fn()}
      />
      <FilterCard
        type="alert"
        title="60 offline nodes"
        subtitle="For the last week"
        onClick={fn()}
      />
      <FilterCard
        type="info"
        title="3 new nodes"
        subtitle="Last week"
        onClick={fn()}
      />
      <FilterCard
        type="success"
        title="95% CPU health"
        subtitle="Click to improve CPU health"
        onClick={fn()}
      />
      <FilterCard
        type="notice"
        title="60 offline nodes"
        subtitle="For the last week"
        onClick={fn()}
      />
      <FilterCard
        type="zededa"
        title="60 offline nodes"
        subtitle="For the last week"
        onClick={fn()}
      />
    </div>
  ),
};

/**
 * Interactive states demonstration.
 * Try hovering over the cards and clicking to select them.
 */
export const InteractiveStates: Story = {
  render: () => {
    const [selected1, setSelected1] = React.useState(false);
    const [selected2, setSelected2] = React.useState(false);
    const [selected3, setSelected3] = React.useState(false);
    const [selected4, setSelected4] = React.useState(false);
    const [selected5, setSelected5] = React.useState(false);
    const [selected6, setSelected6] = React.useState(false);

    return (
      <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: '#fffcfa', marginBottom: '12px', textAlign: 'center' }}>
          <p style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
            Try the interactions:
          </p>
          <p style={{ margin: '0', fontSize: '14px', color: '#a7a7a7' }}>
            Hover to see hover state • Click to toggle selection • Use Tab + Enter for keyboard navigation
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 312px)', gap: '24px' }}>
          <FilterCard
            type="critical"
            title="4 critical alerts"
            subtitle="Hover and click me!"
            selected={selected1}
            onClick={() => setSelected1(!selected1)}
          />
          <FilterCard
            type="alert"
            title="60 offline nodes"
            subtitle="Try selecting me"
            selected={selected2}
            onClick={() => setSelected2(!selected2)}
          />
          <FilterCard
            type="info"
            title="3 new nodes"
            subtitle="Interactive card"
            selected={selected3}
            onClick={() => setSelected3(!selected3)}
          />
          <FilterCard
            type="success"
            title="95% CPU health"
            subtitle="Click to select"
            selected={selected4}
            onClick={() => setSelected4(!selected4)}
          />
          <FilterCard
            type="notice"
            title="60 offline nodes"
            subtitle="Notice variant"
            selected={selected5}
            onClick={() => setSelected5(!selected5)}
          />
          <FilterCard
            type="zededa"
            title="60 offline nodes"
            subtitle="Zededa variant"
            selected={selected6}
            onClick={() => setSelected6(!selected6)}
          />
        </div>
      </div>
    );
  },
};

// Import React for the interactive stories
import React from 'react';

/**
 * Accessibility features demonstration.
 * The component is fully keyboard accessible and screen reader friendly.
 * 
 * **Keyboard Navigation:**
 * - Use Tab to focus cards
 * - Press Enter or Space to select
 * - Focus indicators use semantic colors
 * 
 * **Screen Reader Support:**
 * - Proper ARIA labels and roles
 * - State changes announced
 * - Semantic button role
 * 
 * **WCAG 2.1 AA Compliant:**
 * - All color contrasts meet standards
 * - Touch targets are 44x44px minimum
 * - Supports high contrast mode
 * - Respects reduced motion preference
 */
export const Accessibility: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ color: '#fffcfa', marginBottom: '12px', textAlign: 'center', maxWidth: '600px' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '16px', fontWeight: 600 }}>
          Accessibility Features
        </p>
        <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#a7a7a7' }}>
          Press Tab to navigate • Enter/Space to activate • Check the Accessibility addon panel
        </p>
      </div>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <FilterCard
          type="critical"
          title="Critical Alert"
          subtitle="Keyboard accessible"
          onClick={fn()}
        />
        <FilterCard
          type="info"
          title="Information"
          subtitle="Screen reader friendly"
          onClick={fn()}
        />
      </div>
    </div>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'button-name',
            enabled: true,
          },
        ],
      },
    },
  },
};

/**
 * Playground story for experimenting with all props.
 * Use the Controls panel below to customize the card in real-time.
 */
export const Playground: Story = {
  args: {
    type: 'info',
    title: 'Customize me!',
    subtitle: 'Use the controls panel below',
    selected: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['critical', 'alert', 'info', 'success', 'notice', 'zededa'],
    },
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
  },
};

