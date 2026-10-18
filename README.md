# Nader Elbahnsawy — Developer Portfolio

A bilingual React + Vite portfolio with a black and neon-red visual identity.

## Included
- Cinematic intro using `portrait-1.png`
- Main hero portrait using `portrait-2.png`
- English default language and Arabic RTL toggle
- Projects marked honestly as in development
- Services with starting prices of EGP 700–1,500
- Functional WhatsApp, Facebook, Instagram, and email links
- Responsive layout and reduced-motion support

## Run locally
1. Install Node.js LTS from https://nodejs.org/
2. Open this folder in Visual Studio Code.
3. Open Terminal → New Terminal.
4. Run `npm install`
5. Run `npm run dev`
6. Open the local URL shown in the terminal.

## Build
Run:
`npm run build`

Vite outputs the production site into the `dist` folder. Preview it with:
`npm run preview`

## Free deployment
### Option A: Vercel
1. Create a GitHub repository and upload this project (including `public/assets`).
2. Sign in to Vercel and import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy and use the public URL provided by Vercel.

### Option B: Netlify
1. Upload the project to GitHub.
2. Import the repository in Netlify.
3. Build command: `npm run build`. Publish directory: `dist`.
4. Deploy and open the public URL.

Free tiers and account requirements can change. A paid custom domain is not required; use the free subdomain supplied by the hosting provider.

## Edit content
- Website text and translations: `src/App.jsx`
- Colors and styling: `src/style.css`
- Intro portrait: `public/assets/portrait-1.png`
- Hero portrait: `public/assets/portrait-2.png`
- Contact links and WhatsApp message: near the top of `src/App.jsx`

The supplied WhatsApp message is pre-filled only; visitors must press Send themselves.
