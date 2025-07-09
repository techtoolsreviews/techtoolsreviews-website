# 🧹 Bluehost Repository Cleanup Guide

## The Problem
Error: "You cannot use the directory because it already contains files"

This happens when Bluehost finds leftover files from a previous Git setup attempt.

## ✅ Solution: Clean the Repository Directory

### Method 1: Using Bluehost File Manager (Recommended)

1. **Log into Bluehost cPanel**
2. **Open "File Manager"** (under Files section)
3. **Navigate to:** `/home2/benmzhmy/repositories/`
4. **Find the folder:** `techtoolsreviews-website`
5. **Right-click** on the folder → **Delete**
6. **Confirm deletion**

### Method 2: Using Terminal (Advanced)

If you have SSH access:
```bash
# Connect to your Bluehost server via SSH
ssh your-username@your-domain.com

# Navigate to repositories directory
cd /home2/benmzhmy/repositories/

# Remove the problematic directory
rm -rf techtoolsreviews-website

# Verify it's gone
ls -la
```

## 🚀 After Cleanup: Fresh Git Setup

### Step 1: Verify Directory is Clean
1. **In File Manager**, check that `/home2/benmzhmy/repositories/` no longer contains `techtoolsreviews-website`
2. **If the folder still exists**, delete it completely

### Step 2: Create New Git Repository Connection
1. **Go to cPanel** → **Git Version Control**
2. **Click "Create"**
3. **Repository Details:**
   - **Repository URL:** `https://github.com/YOUR_USERNAME/techtoolsreviews-website.git`
   - **Repository Path:** `/public_html` (NOT `/repositories/`)
   - **Branch:** `main`
4. **Click "Create"**

### Step 3: Deploy Your Website
1. **In Git Version Control**, find your new repository
2. **Click "Manage"**
3. **Click "Pull"**
4. **Your website should deploy successfully!**

## 🎯 Key Changes for Success

### Important Path Correction:
- ❌ **Wrong:** `/repositories/techtoolsreviews-website`
- ✅ **Correct:** `/public_html`

The repository should deploy directly to your website root (`public_html`), not to a separate repositories folder.

## 📁 Expected File Structure After Deployment

In your `/public_html` directory, you should see:
```
public_html/
├── index.html              # Your website homepage
├── assets/
│   ├── index-DPHH2GMw.css # Optimized CSS
│   └── index-BXlPBDoQ.js  # Optimized JavaScript
└── [other files from dist/]
```

## 🔍 Why This Happened

Bluehost's Git integration can sometimes create repository directories in the wrong location, especially if:
- Previous setup attempts failed
- Repository path was set incorrectly
- Files were left behind from failed deployments

## ✅ Prevention for Future

### Best Practices:
1. **Always use `/public_html`** as repository path
2. **Clean up failed attempts** before trying again
3. **Verify .cpanel.yml file** is in your GitHub repository
4. **Test with a simple pull** after setup

## 🛠️ Alternative: Manual File Upload

If Git continues to have issues, you can manually upload:

1. **Download files** from your GitHub repository
2. **In Bluehost File Manager**, go to `/public_html`
3. **Upload all files** from your `dist` folder
4. **Your website will be live** immediately

## 📞 When to Contact Bluehost Support

Contact support if:
- You can't delete the repository directory
- Git Version Control keeps showing errors
- Files don't appear in `/public_html` after deployment

**Support is very helpful with Git setup issues!**

## 🎉 Success Indicators

You'll know it worked when:
- ✅ No error messages in Git Version Control
- ✅ Files appear in `/public_html` directory
- ✅ Website loads at `https://techtoolsreviews.com`
- ✅ All pages and links work properly

---

**This cleanup should resolve the directory conflict and allow successful deployment!**