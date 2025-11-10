#!/bin/bash

# Filter Card Component - Setup Script
# Run this script after installing Node.js and npm

echo "🚀 Filter Card Component - Setup Script"
echo "========================================"
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

echo "📦 Installing dependencies..."
echo ""

npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Installation complete!"
    echo ""
    echo "🎉 Ready to run! Starting development server..."
    echo ""
    npm run dev
else
    echo ""
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi

