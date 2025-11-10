# 🚀 Installation Guide

## Node.js Not Found

It looks like Node.js is not currently installed on your system. Here's how to get the Filter Card Component demo running:

---

## 📦 Step 1: Install Node.js

### Option 1: Using Homebrew (Recommended for macOS)

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Verify installation
node --version
npm --version
```

### Option 2: Download from Official Website

1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS (Long Term Support) version for macOS
3. Run the installer
4. Follow the installation prompts
5. Restart your terminal

### Option 3: Using nvm (Node Version Manager)

```bash
# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart terminal or run:
source ~/.zshrc

# Install Node.js LTS
nvm install --lts

# Use it
nvm use --lts

# Verify
node --version
npm --version
```

---

## 🚀 Step 2: Install Project Dependencies

Once Node.js is installed, navigate to the project directory and run:

```bash
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
npm install
```

This will install:
- React 18.2
- TypeScript 5.2
- Vite 5.0
- All development dependencies

---

## 🎪 Step 3: Start the Demo

After installation completes:

```bash
npm run dev
```

Your browser will automatically open to `http://localhost:3000` with the interactive demo!

---

## ⚡ Quick Commands Reference

```bash
# Install dependencies (one time)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check TypeScript types
npm run type-check

# Run linter
npm run lint
```

---

## 🔍 Verify Installation

After installing Node.js, verify everything is working:

```bash
# Check Node.js version (should be 18+ or 20+)
node --version

# Check npm version (should be 9+ or 10+)
npm --version

# Navigate to project
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 🐛 Troubleshooting

### Command not found: npm

**Solution**: Node.js is not installed or not in PATH
- Follow Step 1 above to install Node.js
- Restart your terminal after installation

### Permission errors during npm install

**Solution**: Don't use sudo with npm
```bash
# Fix npm permissions (if needed)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zshrc
source ~/.zshrc
```

### Port 3000 already in use

**Solution**: Kill the process or use a different port
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or specify a different port
npm run dev -- --port 3001
```

### Module not found errors

**Solution**: Clean install
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📱 Alternative: View Without Installation

If you want to see the component code without running the demo:

1. Open `FilterCard.tsx` to see the React component
2. Open `FilterCard.module.css` to see the styles
3. Open `Demo.tsx` to see usage examples
4. Read `README.md` for full documentation

---

## 🎯 Expected Output

When you successfully run `npm run dev`, you should see:

```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h to show help
```

Your browser will open automatically showing:
- 4 interactive filter cards (Critical, Alert, Info, Success)
- Click any card to select it
- Hover to see hover effects
- Ripple animations on click
- Event log showing interactions
- Full documentation

---

## 💡 Next Steps

After the demo is running:

1. ✅ Explore the interactive cards
2. ✅ Try keyboard navigation (Tab, Enter, Space)
3. ✅ Check the event log for interactions
4. ✅ Read the documentation sections
5. ✅ Copy the component files to your project
6. ✅ Start building!

---

## 📚 Documentation

All documentation is available locally:

- `START_HERE.md` - First-time user guide
- `QUICKSTART.md` - 3-minute quick start
- `README.md` - Complete documentation
- `EXAMPLES.md` - Real-world usage patterns
- `CHEATSHEET.md` - Quick reference
- `COMPONENT_SPEC.md` - Technical details

---

## ✅ Requirements

### Minimum Requirements
- Node.js 18+ (or 20+ recommended)
- npm 9+ (comes with Node.js)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Recommended
- Node.js 20 LTS
- npm 10+
- Latest Chrome or Firefox

---

## 🎉 Ready to Go!

Once Node.js is installed:

```bash
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
npm install
npm run dev
```

**Enjoy your Filter Card Component!** 🚀

---

*Need help? Check the troubleshooting section above or read the full documentation in README.md*

