#!/bin/bash

# Storybook Setup Script for FilterCard Component Library
# Run this after installing Node.js

echo "📚 Setting up Storybook for Zededa Component Library"
echo "===================================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    echo "Please install Node.js from https://nodejs.org (includes npm)"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

echo "📦 Installing dependencies (this may take a few minutes)..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🚀 Starting Storybook..."
    echo ""
    echo "Storybook will open at: http://localhost:6006"
    echo ""
    npm run storybook
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi

