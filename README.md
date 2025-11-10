# Filter Card Component

An interactive, accessible filter card component built with React and TypeScript that matches the Figma design specifications. Features semantic colors, smooth state transitions, ripple effects, and full keyboard/screen reader support.

![Filter Card Demo](https://img.shields.io/badge/React-18.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue) ![License](https://img.shields.io/badge/license-MIT-green)

## 🎯 Features

- ✅ **Three Interactive States**: Default, Hover, and Selected
- ✅ **Semantic Colors**: Critical (red), Alert (yellow), Info (blue), Success (green)
- ✅ **Ripple Effect**: Material Design-inspired click animation
- ✅ **Fully Accessible**: Keyboard navigation, screen reader support, ARIA labels
- ✅ **Mobile-Friendly**: Touch targets meet accessibility guidelines (44x44px minimum)
- ✅ **Responsive Design**: Works seamlessly on mobile and desktop
- ✅ **Type-Safe**: Built with TypeScript for better developer experience
- ✅ **CSS Modules**: Scoped styling to prevent conflicts

## 📸 Preview

The component includes four semantic variants:

| Type | Color | Use Case |
|------|-------|----------|
| **Critical** | `#ff7f7f` | Urgent issues requiring immediate attention |
| **Alert** | `#ffd86e` | Warnings or issues requiring review |
| **Info** | `#6775e4` | Informational updates or new items |
| **Success** | `#29cf8d` | Positive metrics or healthy status |

### States

- **Default State**: Background `#2c2826`
- **Hover State**: Background `#332f2b` (on mouse hover)
- **Selected State**: Background `#332f2b` with blue border outline (persists after click)
- **Ripple Effect**: White ripple animation on click (600ms duration)

## 🚀 Quick Start

### Installation

1. Clone this repository or copy the component files:
   - `FilterCard.tsx`
   - `FilterCard.module.css`

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:3000`

### Basic Usage

```tsx
import React, { useState } from 'react';
import FilterCard from './FilterCard';

function App() {
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
}
```

## 📚 API Reference

### FilterCard Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | `'critical' \| 'alert' \| 'info' \| 'success'` | ✅ Yes | - | The semantic type of the card |
| `title` | `string` | ✅ Yes | - | Main title text |
| `subtitle` | `string` | ✅ Yes | - | Subtitle/description text |
| `selected` | `boolean` | ❌ No | `false` | Whether the card is currently selected |
| `onClick` | `() => void` | ❌ No | - | Callback function when the card is clicked |
| `className` | `string` | ❌ No | `''` | Additional CSS class names |
| `testId` | `string` | ❌ No | - | Test ID for testing purposes |

### Type Definitions

```typescript
export type FilterCardType = 'critical' | 'alert' | 'info' | 'success';

export interface FilterCardProps {
  type: FilterCardType;
  title: string;
  subtitle: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  testId?: string;
}
```

## 🎨 Design Tokens

### Colors

```css
/* Background Colors */
--card-bg-default: #2c2826;
--card-bg-hover: #332f2b;
--card-bg-selected: #332f2b;

/* Text Colors */
--text-primary: #fffcfa;
--text-secondary: #a7a7a7;

/* Semantic Colors */
--color-critical: #ff7f7f;
--color-alert: #ffd86e;
--color-info: #6775e4;
--color-success: #29cf8d;

/* Border & Outline */
--border-radius-card: 8px;
--border-radius-icon: 4px;
--outline-color: #6775e4;
```

### Typography

- **Font Family**: DM Sans
- **Title**: 16px, line-height 20px, weight 400
- **Subtitle**: 14px, line-height 16px, weight 400

### Spacing

- **Card Padding**: 16px
- **Icon Padding**: 12px
- **Content Gap**: 12px
- **Text Gap**: 4px

## ♿ Accessibility Features

### Keyboard Navigation

- **Tab**: Navigate between cards
- **Enter** or **Space**: Activate/select a focused card
- **Focus Indicator**: Blue outline appears when card is focused via keyboard

### Screen Reader Support

- Cards include proper ARIA labels (`aria-label`, `aria-pressed`)
- Role set to `button` for proper semantics
- State changes are announced to screen readers

### Additional Features

- **High Contrast Mode**: Enhanced borders in high contrast mode
- **Reduced Motion**: Respects `prefers-reduced-motion` preference
- **Touch Targets**: Minimum 44x44px touch targets on mobile devices
- **Color Contrast**: Meets WCAG AA standards

## 📱 Responsive Design

The component adapts to different screen sizes:

- **Desktop**: Fixed width (312px)
- **Mobile**: Adapts to container width
- **Touch Devices**: Enhanced touch targets

## 🧪 Testing

Run type checking:

```bash
npm run type-check
```

Run linting:

```bash
npm run lint
```

### Testing with Data Attributes

The component exposes data attributes for easy testing:

```tsx
<FilterCard
  testId="my-card"
  type="critical"
  // ... other props
/>
```

Access in tests:

```tsx
const card = screen.getByTestId('my-card');
expect(card).toHaveAttribute('data-type', 'critical');
expect(card).toHaveAttribute('data-selected', 'true');
```

## 🎯 Example Use Cases

### Dashboard Alerts

```tsx
<FilterCard
  type="critical"
  title="4 critical alerts"
  subtitle="Review nodes with critical alerts"
  onClick={() => navigateToAlerts()}
/>
```

### Status Overview

```tsx
<FilterCard
  type="success"
  title="95% CPU health"
  subtitle="Click to improve CPU health"
  onClick={() => showHealthDetails()}
/>
```

### Information Cards

```tsx
<FilterCard
  type="info"
  title="3 new nodes"
  subtitle="Last week"
  onClick={() => showNewNodes()}
/>
```

### Warning Notifications

```tsx
<FilterCard
  type="alert"
  title="60 offline nodes"
  subtitle="For the last week"
  onClick={() => showOfflineNodes()}
/>
```

## 🛠️ Customization

### Custom Styling

You can extend the component's styling by passing a custom className:

```tsx
<FilterCard
  type="info"
  title="Custom Card"
  subtitle="With custom styling"
  className="my-custom-card"
/>
```

Then in your CSS:

```css
.my-custom-card {
  width: 400px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
```

### Controlled vs Uncontrolled

The component can work in both modes:

**Controlled** (recommended):
```tsx
const [selectedId, setSelectedId] = useState<number | null>(null);

<FilterCard
  selected={selectedId === 1}
  onClick={() => setSelectedId(selectedId === 1 ? null : 1)}
/>
```

**Uncontrolled**:
```tsx
<FilterCard
  onClick={() => console.log('Card clicked')}
/>
```

## 📦 Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design specifications from Figma
- Icons inspired by Material Design
- Built with React and TypeScript
- Styled with CSS Modules

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with a detailed description
3. Include code samples and screenshots if applicable

---

**Built with ❤️ using React + TypeScript**

