# 📋 Filter Card Component - Cheat Sheet

Quick reference for developers. Keep this handy!

---

## ⚡ Quick Commands

```bash
npm install              # Install dependencies
npm run dev              # Start dev server
npm run build            # Build for production
npm run lint             # Check code quality
npm run type-check       # Verify TypeScript
```

---

## 🎨 Component API

### Basic Import
```tsx
import FilterCard from './FilterCard';
```

### Props
```tsx
<FilterCard
  type="critical"              // Required: 'critical' | 'alert' | 'info' | 'success'
  title="Your title"           // Required: string
  subtitle="Your subtitle"     // Required: string
  selected={false}             // Optional: boolean
  onClick={() => {}}           // Optional: () => void
  className="custom-class"     // Optional: string
  testId="my-card"            // Optional: string
/>
```

---

## 🎯 Card Types

| Type | Color | Hex | Use For |
|------|-------|-----|---------|
| `critical` | Red | `#ff7f7f` | Urgent issues |
| `alert` | Yellow | `#ffd86e` | Warnings |
| `info` | Blue | `#6775e4` | Information |
| `success` | Green | `#29cf8d` | Positive metrics |

---

## 🎨 Design Tokens

### Colors
```css
/* Backgrounds */
--bg-default:   #2c2826
--bg-hover:     #332f2b
--bg-selected:  #332f2b

/* Text */
--text-primary:   #fffcfa
--text-secondary: #a7a7a7

/* Semantic */
--critical: #ff7f7f
--alert:    #ffd86e
--info:     #6775e4
--success:  #29cf8d
```

### Spacing
```css
--card-padding: 16px
--icon-padding: 12px
--content-gap:  12px
--text-gap:     4px
```

### Border Radius
```css
--card-radius: 8px
--icon-radius: 4px
```

### Typography
```css
/* Title */
font: 16px/20px DM Sans

/* Subtitle */
font: 14px/16px DM Sans
```

---

## 💡 Common Patterns

### Single Selection
```tsx
const [selectedId, setSelectedId] = useState<string | null>(null);

<FilterCard
  selected={selectedId === 'card1'}
  onClick={() => setSelectedId(selectedId === 'card1' ? null : 'card1')}
/>
```

### Multiple Selection
```tsx
const [selected, setSelected] = useState<Set<string>>(new Set());

const toggle = (id: string) => {
  const newSet = new Set(selected);
  newSet.has(id) ? newSet.delete(id) : newSet.add(id);
  setSelected(newSet);
};

<FilterCard
  selected={selected.has('card1')}
  onClick={() => toggle('card1')}
/>
```

### With Navigation
```tsx
const navigate = useNavigate();

<FilterCard
  type="critical"
  title="4 critical alerts"
  subtitle="View details"
  onClick={() => navigate('/alerts')}
/>
```

### Grid Layout
```tsx
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 312px)',
  gap: '24px'
}}>
  {cards.map(card => <FilterCard key={card.id} {...card} />)}
</div>
```

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Focus next card |
| `Shift + Tab` | Focus previous card |
| `Enter` | Activate focused card |
| `Space` | Activate focused card |

---

## ♿ Accessibility Attributes

```tsx
role="button"                          // Semantic role
tabIndex={0}                          // Keyboard focusable
aria-pressed={selected}               // State for screen readers
aria-label={`${title}. ${subtitle}`} // Full description
```

---

## 🎬 Animation Timing

```css
/* Hover transition */
transition: background-color 0.2s ease;

/* Ripple animation */
animation: rippleAnimation 0.6s ease-out;

/* Ripple cleanup */
setTimeout(removeRipple, 600);
```

---

## 📐 Dimensions

```
Card:        312px × auto
Icon:        24px × 24px
Icon box:    48px × 48px (24px + 12px padding × 2)
Min touch:   44px × 44px (mobile)
```

---

## 🎨 CSS Classes

### Available Classes
```css
.card           /* Base card styles */
.cardHover      /* Hover state */
.cardSelected   /* Selected state */
.content        /* Content wrapper */
.iconContainer  /* Icon wrapper */
.textContainer  /* Text wrapper */
.title          /* Title text */
.subtitle       /* Subtitle text */
.ripple         /* Ripple animation */
```

### Semantic Classes
```css
.iconBgCritical   /* Red background */
.iconBgAlert      /* Yellow background */
.iconBgInfo       /* Blue background */
.iconBgSuccess    /* Green background */
```

---

## 🧪 Testing

### Get Element
```tsx
const card = screen.getByTestId('my-card');
```

### Check Attributes
```tsx
expect(card).toHaveAttribute('data-type', 'critical');
expect(card).toHaveAttribute('data-selected', 'true');
expect(card).toHaveAttribute('aria-pressed', 'true');
```

### Simulate Interaction
```tsx
fireEvent.click(card);
fireEvent.keyDown(card, { key: 'Enter' });
```

---

## 🎯 File Locations

### Component
```
FilterCard.tsx              Line ~220: Main component
FilterCard.module.css       Line ~210: Styles
```

### Key Functions
```tsx
getIcon()         Line ~61:  Returns icon based on type
getTypeClasses()  Line ~76:  Returns color classes
createRipple()    Line ~103: Creates ripple effect
handleClick()     Line ~129: Handles click events
handleKeyDown()   Line ~131: Handles keyboard events
```

### Key Styles
```css
.card            Line ~9:   Base card
.cardHover       Line ~33:  Hover state
.cardSelected    Line ~37:  Selected state
.iconBg*         Line ~65:  Semantic colors
@keyframes       Line ~157: Ripple animation
```

---

## 🐛 Troubleshooting

### Card not clickable?
✅ Check `onClick` prop is provided  
✅ Verify no overlapping elements  
✅ Check z-index values

### Ripple not showing?
✅ Check `.rippleContainer` has `overflow: hidden`  
✅ Verify `createRipple()` is called  
✅ Check animation keyframes exist

### Colors not right?
✅ Verify CSS Module import  
✅ Check semantic color classes  
✅ Inspect computed styles

### Keyboard not working?
✅ Verify `tabIndex={0}`  
✅ Check `handleKeyDown` is attached  
✅ Test focus visibility

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",           // Required
  "react-dom": "^18.2.0",       // Required
  "@types/react": "^18.2.43",   // Dev only
  "typescript": "^5.2.2",       // Dev only
  "vite": "^5.0.8"              // Dev only
}
```

---

## 🔗 Quick Links

| Resource | File |
|----------|------|
| 🚀 Start | `START_HERE.md` |
| ⚡ Quick Start | `QUICKSTART.md` |
| 📖 Full Docs | `README.md` |
| 💡 Examples | `EXAMPLES.md` |
| 🔧 Tech Spec | `COMPONENT_SPEC.md` |

---

## 📝 Code Snippets

### Controlled Component
```tsx
function MyComponent() {
  const [selected, setSelected] = useState(false);
  
  return (
    <FilterCard
      type="critical"
      title="Title"
      subtitle="Subtitle"
      selected={selected}
      onClick={() => setSelected(!selected)}
    />
  );
}
```

### With State Management
```tsx
const [filters, setFilters] = useState({
  critical: false,
  alert: false,
  info: false,
  success: false,
});

const toggle = (key: string) => {
  setFilters(prev => ({ ...prev, [key]: !prev[key] }));
};

<FilterCard
  type="critical"
  selected={filters.critical}
  onClick={() => toggle('critical')}
  {...props}
/>
```

### Dynamic from API
```tsx
const [cards, setCards] = useState([]);

useEffect(() => {
  fetch('/api/metrics')
    .then(res => res.json())
    .then(setCards);
}, []);

{cards.map(card => (
  <FilterCard key={card.id} {...card} />
))}
```

---

## 🎨 Customization

### Change Card Width
```tsx
<FilterCard
  className="custom-width"
  {...props}
/>

/* In your CSS */
.custom-width {
  width: 400px;
}
```

### Change Colors
Edit `FilterCard.module.css`:
```css
.iconBgCritical {
  background-color: #your-color;
}
```

### Change Ripple Duration
```css
.ripple {
  animation: rippleAnimation 1s ease-out; /* Change 0.6s to 1s */
}
```

---

## ✅ Checklist for Use

Before using in production:

- [ ] `npm install` completed
- [ ] `npm run dev` works
- [ ] Demo page loads correctly
- [ ] All card types render
- [ ] Click interactions work
- [ ] Keyboard navigation works
- [ ] Ripple effect appears
- [ ] Responsive on mobile
- [ ] No console errors
- [ ] `npm run build` succeeds

---

## 🎯 Performance Tips

1. ✅ Memoize callbacks with `useCallback`
2. ✅ Use `React.memo` for list items
3. ✅ Debounce rapid clicks if needed
4. ✅ Keep ripple array small (auto-cleanup)
5. ✅ Use CSS animations (not JS)

---

## 📚 Learn More

- React Docs: https://react.dev
- TypeScript: https://typescriptlang.org
- ARIA: https://w3.org/WAI/ARIA
- WCAG: https://w3.org/WAI/WCAG21

---

**Print this page for quick reference!** 📄

*Last Updated: November 10, 2025*

