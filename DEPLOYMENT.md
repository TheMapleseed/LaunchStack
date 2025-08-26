# Vercel Deployment Guide

This guide will help you deploy the SpaceStack Selector React application to Vercel using PNPM.

## Prerequisites

- GitHub account with the project repository
- Vercel account (free tier available)
- PNPM installed locally

## Step 1: Prepare Your Repository

1. **Push to GitHub**: Ensure your code is committed and pushed to a GitHub repository
2. **Verify PNPM**: Make sure you have a `pnpm-lock.yaml` file in your project root

## Step 2: Deploy to Vercel

### Option A: Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect it's a React app
5. **Important**: Set the following build settings:
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (or leave blank if app is in root)
   - **Install Command**: `pnpm install`
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Option B: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from your project directory:
```bash
vercel
```

4. Follow the prompts and ensure build settings are correct

## Step 3: Verify Configuration

Your `vercel.json` should look like this:
```json
{
  "installCommand": "pnpm install",
  "buildCommand": "pnpm run build",
  "devCommand": "pnpm run dev",
  "framework": "vite"
}
```

## Step 4: Environment Variables

No environment variables are required for basic functionality.

## Step 5: Custom Domain (Optional)

1. In your Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Common Issues

1. **Build Failures**: Ensure all dependencies are in `package.json`
2. **PNPM Issues**: Vercel automatically detects PNPM from `pnpm-lock.yaml`
3. **Framework Detection**: If Vercel doesn't detect Vite, manually set the framework preset

### Build Logs

Check build logs in Vercel dashboard for detailed error information.

## Performance Optimization

- Vercel automatically optimizes your React app
- Static assets are served from CDN
- Automatic HTTPS and compression
- Edge functions available if needed

## Monitoring

- Vercel provides built-in analytics
- Performance monitoring included
- Error tracking available
- Real-time deployment status

## Updates

To update your deployment:
1. Push changes to GitHub
2. Vercel automatically redeploys
3. Preview deployments available for testing

## Support

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Community: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- Project Issues: Use the GitHub repository issue tracker
