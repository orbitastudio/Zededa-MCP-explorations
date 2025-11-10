# 📚 Storybook Setup Guide

Complete guide to set up Storybook for the FilterCard component library.

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Install Storybook

After you have Node.js installed, run:

```bash
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
npx storybook@latest init
```

This will:
- Detect your React + Vite setup
- Install Storybook dependencies
- Create `.storybook` configuration folder
- Add Storybook scripts to `package.json`

### Step 2: Run Storybook

```bash
npm run storybook
```

Storybook will open at `http://localhost:6006`

### Step 3: View Your Component

Navigate to "FilterCard" in the Storybook sidebar to see all variants and interactions!

---

## 📦 What Gets Installed

Storybook will add these dependencies to your `package.json`:

```json
{
  "devDependencies": {
    "@storybook/react": "^7.6.0",
    "@storybook/react-vite": "^7.6.0",
    "@storybook/addon-essentials": "^7.6.0",
    "@storybook/addon-interactions": "^7.6.0",
    "@storybook/addon-links": "^7.6.0",
    "@storybook/blocks": "^7.6.0",
    "@storybook/testing-library": "^0.2.2",
    "storybook": "^7.6.0"
  },
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

---

## 📁 Files Already Created

I've pre-created all the Storybook files for you:

```
.storybook/
├── main.ts              # Storybook configuration
└── preview.ts           # Global decorators and parameters

src/stories/
├── FilterCard.stories.tsx    # Main component stories
└── Introduction.mdx          # Documentation homepage
```

---

## 🎨 Stories Included

### 1. **All Variants**
Shows all 4 semantic types side by side:
- Critical
- Alert  
- Info
- Success

### 2. **Interactive Playground**
Full controls to customize:
- Type selection
- Title and subtitle
- Selected state
- Custom className

### 3. **States Showcase**
Demonstrates all interaction states:
- Default
- Hover (instructions)
- Selected

### 4. **Accessibility Testing**
Shows keyboard navigation and ARIA features

### 5. **Individual Stories**
Separate story for each type:
- Critical Alert
- Warning Alert
- New Information
- Success Metric

---

## 🎯 Storybook Features

### Addon: Controls
- Live edit props
- Toggle selected state
- Change text content
- Switch card types

### Addon: Actions
- Logs onClick events
- Shows event parameters
- Tracks user interactions

### Addon: Docs
- Auto-generated documentation
- Props table
- Live code examples
- Component description

### Addon: Accessibility
- WCAG compliance checks
- Color contrast verification
- Keyboard navigation testing
- Screen reader simulation

### Addon: Viewport
- Test responsive design
- Mobile/tablet/desktop views
- Custom viewport sizes

---

## 🔧 Configuration Details

### `.storybook/main.ts`
```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
```

### `.storybook/preview.ts`
- Material Symbols font loaded
- Global CSS imported
- Dark theme applied
- Centered layout

---

## 📖 Using Storybook

### View Stories
```bash
npm run storybook
```
Opens at `http://localhost:6006`

### Build Static Site
```bash
npm run build-storybook
```
Creates static docs in `storybook-static/`

### Deploy to Chromatic
```bash
npx chromatic --project-token=<your-token>
```

---

## 🎨 Customization

### Add New Stories

Create a new `.stories.tsx` file:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import FilterCard from '../FilterCard';

const meta: Meta<typeof FilterCard> = {
  title: 'Components/FilterCard/Custom',
  component: FilterCard,
};

export default meta;
type Story = StoryObj<typeof FilterCard>;

export const MyCustomStory: Story = {
  args: {
    type: 'critical',
    title: 'My Custom Card',
    subtitle: 'Custom subtitle',
  },
};
```

### Modify Theme

Edit `.storybook/preview.ts`:

```typescript
import { themes } from '@storybook/theming';

export const parameters = {
  docs: {
    theme: themes.dark, // or themes.light
  },
};
```

---

## 🚀 Publishing Storybook

### Option 1: GitHub Pages

```bash
# Build static site
npm run build-storybook

# Deploy to gh-pages branch
npx gh-pages -d storybook-static
```

### Option 2: Vercel

```bash
vercel storybook-static
```

### Option 3: Netlify

Drag and drop the `storybook-static` folder to Netlify.

### Option 4: Chromatic (Recommended)

```bash
npm install --save-dev chromatic
npx chromatic --project-token=<your-token>
```

Benefits:
- Visual regression testing
- Automatic deployments
- Team collaboration
- Version history

---

## 🐛 Troubleshooting

### Storybook won't start

```bash
# Clear cache
rm -rf node_modules/.cache

# Reinstall
npm install

# Try again
npm run storybook
```

### CSS modules not working

Make sure `FilterCard.module.css` is imported correctly:
```typescript
import styles from './FilterCard.module.css';
```

### Material Symbols not loading

Check that `global.css` is imported in `.storybook/preview.ts`

### Port already in use

```bash
# Use different port
npm run storybook -- --port 6007
```

---

## 📊 Next Steps

After setup:

1. ✅ View all FilterCard variants
2. ✅ Test interactions in Playground
3. ✅ Check accessibility compliance
4. ✅ Build static documentation
5. ✅ Deploy to hosting platform
6. ✅ Share with team

---

## 📚 Resources

- [Storybook Docs](https://storybook.js.org/docs)
- [React Storybook Tutorial](https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/)
- [Storybook Addons](https://storybook.js.org/addons)
- [Component Story Format](https://storybook.js.org/docs/react/api/csf)

---

**Ready to document your components!** 📖

Run `npx storybook@latest init` to get started!

