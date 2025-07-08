# Deploy TechToolsReviews to Bluehost using Git

## Why Git Method is Best for You:
- ✅ Professional deployment workflow
- ✅ Easy updates (just push to GitHub)
- ✅ Version control and backup
- ✅ Bluehost has native Git support
- ✅ No manual file uploads needed

## Step 1: Prepare Your Website Files

First, let's build your production-ready website:

```bash
npm run build
```

This creates a `dist` folder with optimized files ready for production.

## Step 2: Create GitHub Repository

1. **Go to GitHub.com** and sign in (create account if needed)
2. **Click "New Repository"**
3. **Repository name:** `techtoolsreviews-website`
4. **Make it Public** (easier for Bluehost integration)
5. **Don't initialize** with README (we'll upload existing files)
6. **Click "Create Repository"**

## Step 3: Upload Your Website to GitHub

### Option A: Using GitHub Web Interface (Easiest)
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL files from your `dist` folder
3. Add commit message: "Initial website deployment"
4. Click **"Commit changes"**

### Option B: Using Git Commands (if you have Git installed)
```bash
# In your project folder
git init
git add dist/*
git commit -m "Initial website deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/techtoolsreviews-website.git
git push -u origin main
```

## Step 4: Connect GitHub to Bluehost

### Access Bluehost cPanel:
1. **Log into Bluehost**
2. **Go to cPanel**
3. **Find "Git Version Control"** (under Files section)

### Set up Git Repository:
1. **Click "Create"**
2. **Repository URL:** `https://github.com/YOUR_USERNAME/techtoolsreviews-website.git`
3. **Repository Path:** `/public_html` (this is your website root)
4. **Branch:** `main`
5. **Click "Create"**

## Step 5: Deploy to Your Domain

### Pull Files to Live Site:
1. **In Git Version Control**, find your repository
2. **Click "Manage"**
3. **Click "Pull"** to download files to your live site
4. **Your website is now live!**

## Step 6: Configure Domain (if needed)

### Check Domain Settings:
1. **In Bluehost:** Domains → Assign
2. **Make sure** `techtoolsreviews.com` points to `public_html`
3. **Enable SSL** (Security → SSL/TLS → Let's Encrypt)

## Step 7: Test Your Live Website

Visit: `https://techtoolsreviews.com`

Your website should be live with:
- ✅ Homepage with all categories
- ✅ All affiliate program pages
- ✅ Blog section
- ✅ Contact forms
- ✅ Mobile responsive design

## Future Updates (Super Easy!)

When you want to update your website:

1. **Make changes** to your files
2. **Upload updated files** to GitHub
3. **In Bluehost Git Control:** Click "Pull"
4. **Your live site updates automatically!**

## Troubleshooting Common Issues

### If website doesn't load:
- Check that files are in `/public_html` not a subfolder
- Ensure `index.html` is in the root directory
- Wait 24-48 hours for DNS propagation

### If images don't load:
- Make sure image paths are relative (not absolute)
- Check that image files were uploaded to GitHub

### If styles look broken:
- Verify CSS files are in the correct folder structure
- Check browser console for any missing file errors

## Pro Tips for Success

### Performance Optimization:
1. **Enable Cloudflare** in Bluehost (free CDN)
2. **Compress images** before uploading
3. **Enable caching** in Bluehost

### SEO Setup:
1. **Add Google Analytics** code to your site
2. **Submit to Google Search Console**
3. **Create XML sitemap**

### Security:
1. **Keep SSL certificate active**
2. **Regular backups** (Bluehost provides these)
3. **Monitor for updates**

## Your Repository Structure Should Look Like:

```
techtoolsreviews-website/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── images/ (if any)
```

## Next Steps After Deployment

1. **Replace placeholder affiliate links** with your real ones
2. **Set up email capture** (integrate with your email service)
3. **Add Google Analytics tracking**
4. **Submit sitemap to Google**
5. **Start creating blog content**

## Need Help?

If you run into any issues:
1. **Check Bluehost documentation** on Git integration
2. **Contact Bluehost support** (they're very helpful with Git setup)
3. **GitHub has excellent tutorials** for beginners

Your website is production-ready and will look amazing on your domain!