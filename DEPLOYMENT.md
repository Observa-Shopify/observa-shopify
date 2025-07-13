# GitHub Pages Deployment Guide for Observa

## Common Issues and Solutions

### 1. Repository Settings
Make sure your GitHub repository has GitHub Pages enabled:
1. Go to Settings > Pages
2. Select "GitHub Actions" as the source
3. Make sure the repository is public or you have GitHub Pro

### 2. Branch Configuration
The workflow is configured to deploy from the `main` branch. Make sure:
- Your default branch is named `main` (not `master`)
- All your code is pushed to the `main` branch

### 3. Build Process
The workflow now includes static export for GitHub Pages compatibility:
```yaml
- name: Build with Next.js
  run: next build
- name: Static HTML export with Next.js
  run: next export
```

### 4. Next.js Configuration
The `next.config.js` is configured for static export:
```javascript
{
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  assetPrefix: '/observa-shopify',
  basePath: '/observa-shopify'
}
```

## Deployment Steps

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### Step 2: Check Actions
1. Go to your repository on GitHub
2. Click "Actions" tab
3. Watch the deployment workflow run
4. Check for any errors in the build process

### Step 3: Verify Deployment
Once the action completes successfully:
1. Go to Settings > Pages
2. Your site URL will be: `https://yourusername.github.io/observa-shopify`

## Troubleshooting

### Error: "Module not found"
- Check that all dependencies are in `package.json`
- Verify import paths are correct
- Make sure all files are committed to the repository

### Error: "Build failed"
- Check the Actions log for specific error messages
- Ensure all TypeScript types are correct
- Verify no `console.log` or debugging code remains

### Error: "Page not found"
- Check that `basePath` is correctly set in `next.config.js`
- Verify the repository name matches the `basePath`
- Ensure `.nojekyll` file exists in `public` folder

### Error: "Images not loading"
- Verify `images.unoptimized: true` is set
- Check image paths are relative
- Use Next.js Image component with `unoptimized` prop

## Local Testing

Test the static export locally before deploying:

```bash
# Build and export
npm run build
npm run export

# Serve the static files
npx serve out

# Or use the convenience script
npm run test-deployment
```

## Manual Deployment (Alternative)

If GitHub Actions fails, you can deploy manually:

1. **Build locally:**
   ```bash
   npm run build
   npm run export
   ```

2. **Push the `out` folder to `gh-pages` branch:**
   ```bash
   git add out
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

3. **Configure Pages to use `gh-pages` branch**

## Repository Structure for GitHub Pages

```
observa-shopify/
├── .github/workflows/nextjs.yml  # Deployment workflow
├── app/                          # Next.js app directory
├── public/                       # Static assets
│   └── .nojekyll                # Prevents Jekyll processing
├── next.config.js                # Next.js config with export settings
└── package.json                  # Dependencies and scripts
```

## Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file:**
   ```bash
   echo "observa.yourdomain.com" > public/CNAME
   ```

2. **Configure DNS:**
   - Add CNAME record pointing to `yourusername.github.io`

3. **Update next.config.js:**
   ```javascript
   assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
   basePath: process.env.NODE_ENV === 'production' ? '' : '',
   ```

## Performance Optimization

For better performance on GitHub Pages:

1. **Enable compression** (automatic on GitHub Pages)
2. **Optimize images** before including them
3. **Minimize CSS/JS** (done by Next.js build)
4. **Use CDN** for external assets

## Monitoring Deployment

Check deployment status:
- GitHub Actions tab shows build status
- Pages settings show deployment URL
- Use browser dev tools to check for 404s
- Monitor Core Web Vitals (fitting for Observa!)

## Support

If you continue having issues:

1. **Check GitHub Status:** https://www.githubstatus.com/
2. **Review Actions logs** for specific error messages
3. **Verify repository permissions** and settings
4. **Test with a simple HTML file first** (use `public/fallback.html`)

## Success Checklist

- [ ] Repository is public or you have GitHub Pro
- [ ] Default branch is `main`
- [ ] GitHub Pages source is set to "GitHub Actions"
- [ ] All code is pushed to `main` branch
- [ ] No build errors in Actions tab
- [ ] Site loads at `https://yourusername.github.io/observa-shopify`
- [ ] All pages and navigation work correctly
- [ ] Images and assets load properly
