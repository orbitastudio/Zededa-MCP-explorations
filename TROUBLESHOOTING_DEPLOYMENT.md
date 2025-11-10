# 🔧 Troubleshooting GitHub Pages Deployment

Your Storybook page at https://orbitastudio.github.io/Zededa-MCP-explorations/ is showing blank.

## 🎯 Most Likely Issues

### Issue 1: GitHub Pages Not Enabled ⚠️ MOST COMMON

**Symptom**: Blank page or 404 error

**Solution**: Enable GitHub Pages in repository settings

#### Steps:
1. Go to: https://github.com/orbitastudio/Zededa-MCP-explorations/settings/pages
2. Under **"Source"**, you should see:
   - If it shows **"Deploy from a branch"** → Change it!
   - Select **"GitHub Actions"** from the dropdown
3. Click **Save**

**This is required for the workflow to deploy!**

### Issue 2: Workflow Not Running

**Check if the workflow has run:**

1. Go to: https://github.com/orbitastudio/Zededa-MCP-explorations/actions
2. Look for **"Deploy Storybook to GitHub Pages"**
3. Check the status:
   - No workflows? → Workflow hasn't been triggered
   - Yellow/Running? → Wait for completion
   - Red/Failed? → Check error logs
   - Green/Success? → But still blank page? See Issue 3

**If no workflow runs appear:**

The workflow might not have been triggered yet. Try:

```bash
# Make a small change and push to trigger the workflow
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
git commit --allow-empty -m "Trigger GitHub Pages deployment"
git push origin main
```

### Issue 3: Permissions Issue

**The workflow needs proper permissions:**

1. Go to: https://github.com/orbitastudio/Zededa-MCP-explorations/settings/actions
2. Scroll to **"Workflow permissions"**
3. Select: **"Read and write permissions"**
4. Check: **"Allow GitHub Actions to create and approve pull requests"**
5. Click **Save**

Then re-run the workflow:
1. Go to Actions tab
2. Click on the latest workflow run
3. Click **"Re-run all jobs"**

### Issue 4: Build Failed

**Check the build logs:**

1. Go to: https://github.com/orbitastudio/Zededa-MCP-explorations/actions
2. Click on the latest workflow run
3. Click on the failed job
4. Read the error message

**Common build errors:**

#### Error: "npm ci" failed
```bash
# Solution: Update package-lock.json
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push origin main
```

#### Error: "build-storybook" failed
```bash
# Test locally first
npm install
npm run build-storybook

# If it works locally, push the changes
git push origin main
```

---

## 🔍 Diagnostic Checklist

Go through this checklist in order:

### ✅ Step 1: Verify GitHub Pages Settings
- [ ] Go to Settings → Pages
- [ ] Source is set to **"GitHub Actions"** (not "Deploy from a branch")
- [ ] Click Save if you changed it

### ✅ Step 2: Check Workflow Status
- [ ] Go to Actions tab: https://github.com/orbitastudio/Zededa-MCP-explorations/actions
- [ ] See if any workflows ran
- [ ] Check latest workflow status (green/red/yellow)

### ✅ Step 3: Verify Permissions
- [ ] Go to Settings → Actions → General
- [ ] Workflow permissions set to "Read and write"
- [ ] Save if changed

### ✅ Step 4: Trigger Deployment
- [ ] Push an empty commit (see command above)
- [ ] Watch Actions tab for new workflow run
- [ ] Wait 3-5 minutes for completion

### ✅ Step 5: Wait and Refresh
- [ ] Wait 2-3 minutes after workflow succeeds
- [ ] Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
- [ ] Clear browser cache if needed

---

## 🚀 Quick Fix Commands

### Trigger Deployment Manually
```bash
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
git commit --allow-empty -m "Trigger deployment"
git push origin main
```

### Check Workflow Status (if you have GitHub CLI)
```bash
gh run list --workflow=deploy-storybook.yml --limit 5
```

### View Latest Workflow
```bash
gh run view --web
```

---

## 🔴 If Workflow Failed

### View Error Logs

1. Go to Actions tab
2. Click the failed workflow
3. Click the failed job
4. Read the error message

### Common Errors and Fixes

#### "Error: Process completed with exit code 1"

**Cause**: Build failed

**Fix**: Test build locally
```bash
npm run build-storybook
```

If it fails locally, fix the errors, commit, and push.

#### "Resource not accessible by integration"

**Cause**: Insufficient permissions

**Fix**: 
1. Settings → Actions → General
2. Set "Read and write permissions"
3. Save and re-run workflow

#### "Page build failed"

**Cause**: GitHub Pages not enabled or wrong source

**Fix**: 
1. Settings → Pages
2. Source = "GitHub Actions"
3. Save

---

## 🌐 Expected Result

When working correctly, you should see:

1. **Actions Tab**: Green checkmark ✅ on latest workflow
2. **GitHub Pages**: Shows deployed URL in Settings → Pages
3. **Website**: https://orbitastudio.github.io/Zededa-MCP-explorations/ loads Storybook
4. **Storybook**: Shows "Zededa Component Library" with FilterCard stories

---

## 📊 Verification Steps

After fixing:

### 1. Check Workflow Success
```
✅ Actions tab shows green checkmark
✅ "Deploy to GitHub Pages" step completed
✅ No red error indicators
```

### 2. Check GitHub Pages Status
```
✅ Settings → Pages shows: "Your site is live at..."
✅ URL matches: https://orbitastudio.github.io/Zededa-MCP-explorations/
✅ Shows last deployment time
```

### 3. Check Website
```
✅ URL loads without 404
✅ Storybook UI appears
✅ Sidebar shows "Introduction" and "Components"
✅ FilterCard stories are visible
✅ No console errors in browser DevTools
```

---

## 🆘 Still Not Working?

### Check These URLs

1. **Repository**: https://github.com/orbitastudio/Zededa-MCP-explorations
2. **Settings**: https://github.com/orbitastudio/Zededa-MCP-explorations/settings/pages
3. **Actions**: https://github.com/orbitastudio/Zededa-MCP-explorations/actions
4. **Workflow File**: https://github.com/orbitastudio/Zededa-MCP-explorations/blob/main/.github/workflows/deploy-storybook.yml

### Debug Information to Check

When asking for help, provide:
- [ ] Screenshot of Settings → Pages
- [ ] Screenshot of Actions tab (latest workflow)
- [ ] Error message from workflow logs (if failed)
- [ ] Browser console errors (F12 → Console)
- [ ] What you see at the GitHub Pages URL

---

## 🎯 Most Common Solution

**9 out of 10 times, the issue is:**

1. GitHub Pages not enabled OR
2. Source not set to "GitHub Actions"

**Fix**: 
1. Go to https://github.com/orbitastudio/Zededa-MCP-explorations/settings/pages
2. Set Source to **"GitHub Actions"**
3. Save
4. Wait 3-5 minutes
5. Refresh the page

---

## 📝 Quick Test

Run this to trigger a deployment and verify:

```bash
cd /Users/cpablo/Documents/zededa/code/Zededa-MCP-explorations
echo "Test deployment" >> DEPLOYMENT_STATUS.md
git add DEPLOYMENT_STATUS.md
git commit -m "Test: Trigger deployment"
git push origin main
```

Then:
1. Watch Actions tab: https://github.com/orbitastudio/Zededa-MCP-explorations/actions
2. Wait for green checkmark (3-5 min)
3. Visit: https://orbitastudio.github.io/Zededa-MCP-explorations/
4. Hard refresh browser (Cmd+Shift+R)

---

## ✅ Success Indicators

You'll know it's working when:

1. ✅ Actions tab shows successful deployment
2. ✅ Settings → Pages shows "Your site is live"
3. ✅ URL loads Storybook interface
4. ✅ You see "Zededa Component Library" title
5. ✅ FilterCard stories are clickable

---

**Start with Step 1 of the Diagnostic Checklist above!** 🔍

Most likely, you just need to enable GitHub Pages with "GitHub Actions" as the source.

