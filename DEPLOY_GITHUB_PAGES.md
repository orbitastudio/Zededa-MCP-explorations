# 🚀 Deploy Storybook to GitHub Pages

Complete guide to deploy your Storybook documentation to GitHub Pages with automatic deployment.

---

## ✅ What's Already Set Up

I've created a GitHub Actions workflow that will:
- ✅ Automatically build Storybook on every push to `main`
- ✅ Deploy to GitHub Pages
- ✅ Keep your documentation always up-to-date

**File Created**: `.github/workflows/deploy-storybook.yml`

---

## 🔧 GitHub Repository Setup (Required)

You need to enable GitHub Pages in your repository settings.

### Step 1: Go to Repository Settings

1. Visit: https://github.com/orbitastudio/Zededa-MCP-explorations
2. Click on **⚙️ Settings** (top right)

### Step 2: Enable GitHub Pages

1. In the left sidebar, click **Pages** (under "Code and automation")
2. Under **Source**, select:
   - Source: **GitHub Actions**
3. Click **Save**

That's it! GitHub Pages is now configured.

---

## 🚀 Deploy Storybook

### Automatic Deployment (Recommended)

Once you push the workflow file to GitHub, Storybook will automatically deploy:

```bash
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
git add .github/workflows/deploy-storybook.yml
git commit -m "Add GitHub Actions workflow for Storybook deployment"
git push origin main
```

**That's it!** GitHub Actions will:
1. Build your Storybook
2. Deploy to GitHub Pages
3. Make it available at your GitHub Pages URL

---

## 🌐 Access Your Storybook

After deployment (takes 1-2 minutes), your Storybook will be available at:

**URL**: https://orbitastudio.github.io/Zededa-MCP-explorations/

🎉 Bookmark this URL and share it with your team!

---

## 📊 Monitor Deployment

### View Deployment Status

1. Go to your repository: https://github.com/orbitastudio/Zededa-MCP-explorations
2. Click the **Actions** tab
3. You'll see the workflow running:
   - ⏳ Yellow circle = Building
   - ✅ Green check = Deployed successfully
   - ❌ Red X = Failed (check logs)

### View Deployment History

In the **Actions** tab, you can:
- See all past deployments
- View build logs
- Re-run failed deployments
- Monitor build times

---

## 🔄 How Automatic Deployment Works

### Trigger
Every time you push to the `main` branch:
1. GitHub Actions detects the push
2. Starts the deployment workflow
3. Installs dependencies
4. Builds Storybook
5. Deploys to GitHub Pages

### Build Process
```yaml
1. Checkout code
2. Setup Node.js 20
3. Install dependencies (npm ci)
4. Build Storybook (npm run build-storybook)
5. Upload to GitHub Pages
6. Deploy
```

### Deployment Time
- **First deployment**: ~3-5 minutes
- **Subsequent deployments**: ~2-3 minutes

---

## 🛠️ Manual Deployment (Alternative)

If you prefer to deploy manually:

### Option 1: Using gh-pages package

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add script to package.json
# "deploy-storybook": "npm run build-storybook && gh-pages -d storybook-static"

# Deploy
npm run deploy-storybook
```

### Option 2: Manual build and upload

```bash
# Build Storybook
npm run build-storybook

# The static files are in storybook-static/
# Upload to GitHub Pages branch manually
```

---

## 📁 What Gets Deployed

The `storybook-static` folder contains:
- All Storybook HTML/CSS/JS files
- Component documentation
- Interactive demos
- All stories and examples

**Note**: The `storybook-static` folder is NOT committed to git (it's in `.gitignore`). Only the built files are deployed to the `gh-pages` branch or GitHub Pages.

---

## 🔒 Security & Permissions

### Required Permissions
The GitHub Actions workflow needs:
- `contents: read` - To read your repository
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For deployment authentication

These are already configured in `.github/workflows/deploy-storybook.yml`

### Branch Protection
The workflow only runs on the `main` branch to prevent accidental deployments from other branches.

---

## 🐛 Troubleshooting

### Deployment Failed

**Check the Actions tab** for error logs:
1. Go to Actions tab
2. Click on the failed workflow
3. Expand the failed step
4. Read the error message

**Common Issues:**

#### 1. Build Errors
```
Error: npm run build-storybook failed
```
**Solution**: Make sure your code builds locally first:
```bash
npm install
npm run build-storybook
```

#### 2. GitHub Pages Not Enabled
```
Error: Deployment failed - Pages not configured
```
**Solution**: Enable GitHub Pages in repository settings (see Step 2 above)

#### 3. Permission Errors
```
Error: Resource not accessible by integration
```
**Solution**: 
1. Go to Settings > Actions > General
2. Under "Workflow permissions", select "Read and write permissions"
3. Click Save

### Storybook Not Loading

If you see a blank page:

1. **Check Console Errors**: Open browser DevTools (F12)
2. **Check Build**: Review the GitHub Actions log
3. **Clear Cache**: Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Not Found

If you get a 404 error:

1. Wait 2-3 minutes after first deployment
2. Check GitHub Pages settings are correct
3. Verify the workflow completed successfully

---

## 🎨 Customization

### Custom Domain

To use a custom domain:

1. In repository Settings > Pages
2. Add your custom domain
3. Create a `CNAME` file in `storybook-static/` with your domain

Or add to `.storybook/manager-head.html`:
```html
<script>
  if (window.location.hostname === 'your-domain.com') {
    // Custom domain logic
  }
</script>
```

### Base Path

If deploying to a subdirectory, update `.storybook/main.ts`:

```typescript
const config: StorybookConfig = {
  // ... other config
  viteFinal: async (config) => {
    config.base = '/Zededa-MCP-explorations/'; // Your repo name
    return config;
  },
};
```

---

## 📈 Monitoring

### Check Deployment Status

You can check the deployment status with:
```bash
# View latest deployment
gh run list --workflow=deploy-storybook.yml --limit 1

# View logs
gh run view <run-id> --log
```

### GitHub Status Badge

Add a status badge to your README:

```markdown
[![Deploy Storybook](https://github.com/orbitastudio/Zededa-MCP-explorations/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/orbitastudio/Zededa-MCP-explorations/actions/workflows/deploy-storybook.yml)
```

---

## 🎯 Best Practices

### 1. Test Before Push
Always build locally before pushing:
```bash
npm run build-storybook
```

### 2. Use Semantic Commits
```bash
git commit -m "docs: update FilterCard stories"
```

### 3. Preview Deployments
For PRs, consider adding Vercel or Netlify for preview deployments.

### 4. Cache Dependencies
The workflow already caches npm dependencies for faster builds.

---

## 📊 Workflow File Explained

```yaml
name: Deploy Storybook to GitHub Pages

# Triggers
on:
  push:
    branches: [main]        # Auto-deploy on push to main
  workflow_dispatch:        # Manual trigger option

# Permissions needed
permissions:
  contents: read
  pages: write
  id-token: write

# Build and deploy jobs
jobs:
  build:                    # Build Storybook
    - Checkout code
    - Setup Node.js
    - Install dependencies
    - Build Storybook
    - Upload artifact
  
  deploy:                   # Deploy to Pages
    - Deploy artifact
```

---

## 🚀 Next Steps

### Immediate
1. ✅ Push the workflow file to GitHub
2. ✅ Enable GitHub Pages in repository settings
3. ✅ Wait for deployment to complete
4. ✅ Visit your Storybook URL

### Short Term
1. Share the Storybook URL with your team
2. Add deployment status badge to README
3. Set up Slack/email notifications for deployments
4. Consider custom domain

### Long Term
1. Add visual regression testing
2. Set up preview deployments for PRs
3. Monitor analytics
4. Automate component testing

---

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Storybook Deployment Guide](https://storybook.js.org/docs/react/sharing/publish-storybook)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

---

## ✅ Quick Checklist

Before deploying:
- [ ] GitHub Pages enabled in repository settings
- [ ] Workflow file committed and pushed
- [ ] `npm run build-storybook` works locally
- [ ] All stories load without errors

After deploying:
- [ ] Check Actions tab for successful deployment
- [ ] Visit GitHub Pages URL
- [ ] Share URL with team
- [ ] Add to project documentation

---

## 🎉 Success!

Once deployed, your Storybook will be available at:

**https://orbitastudio.github.io/Zededa-MCP-explorations/**

And it will automatically update every time you push to the `main` branch! 🚀

---

*Last Updated: November 10, 2025*
*Repository: https://github.com/orbitastudio/Zededa-MCP-explorations*

