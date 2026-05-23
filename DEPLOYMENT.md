# Deploying Biplob Taxi Service to Vercel

This project is ready for Vercel as a Next.js app.

## Option 1: Login flow

```powershell
npx vercel@latest login
npx vercel@latest --prod
```

## Option 2: Token flow

Create a Vercel token from your Vercel account settings, then run:

```powershell
npx vercel@latest --prod --token YOUR_VERCEL_TOKEN
```

## Project settings

- Framework: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: auto-detected by Vercel

The repository includes `vercel.json` and `.vercelignore` for deployment hygiene.
