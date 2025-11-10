# Quick Start Guide

Get the Filter Card Component running in 3 minutes! ⚡

## 1. Install Dependencies

```bash
npm install
```

This will install:
- React 18.2
- TypeScript 5.2
- Vite 5.0 (fast development server)
- All required type definitions

## 2. Start Development Server

```bash
npm run dev
```

The demo will automatically open in your browser at `http://localhost:3000` 🚀

## 3. See It in Action!

You'll see:
- ✅ Four card variants (Critical, Alert, Info, Success)
- ✅ Interactive hover effects
- ✅ Click to select cards
- ✅ Beautiful ripple animations
- ✅ Event log showing all interactions
- ✅ Full documentation and examples

## Using the Component

### Copy these files to your project:
1. `FilterCard.tsx` - Main component
2. `FilterCard.module.css` - Styling

### Minimal Example:

```tsx
import FilterCard from './FilterCard';

function App() {
  return (
    <FilterCard
      type="critical"
      title="4 critical alerts"
      subtitle="Review nodes with critical alerts"
      onClick={() => alert('Card clicked!')}
    />
  );
}
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run type-check` | Check TypeScript types |

## Next Steps

- Check out `Demo.tsx` for comprehensive examples
- Read `README.md` for full documentation
- Customize colors in `FilterCard.module.css`
- Add more semantic types as needed

## Need Help?

- All components are well-commented
- TypeScript provides IntelliSense
- Check the demo page for live examples
- See README.md for detailed API docs

**Happy coding! 🎉**

