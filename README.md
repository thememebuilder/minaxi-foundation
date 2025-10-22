# lighthouse check

npm run lhci

npm i -g lighthouse
# Serve your production build (don’t audit the dev server!)
npm run build
npx serve dist  # or: npx http-server dist
# In another terminal, run lighthouse:
lighthouse http://localhost:3000 --view --only-categories=performance,accessibility,seo,best-practices


# To Dos

Add Google Font + adjust color palette (Done)

Improve navbar & hero CTA (Done)

Add Mission & Programs icons or emoji bullets (Done)

Add SEO meta + favicon (Done)

Add Contact Form (Formspree) (Done)

custom domain minaxifoundation.org or .in 

connect via vercel DNS

Add email via Google Workspace or Zoho mail 

Our Impact - live stats (volunteers, beneficieris, projects completed)

Stories section - simple blog posts

Integrate a donation payment flow via Razorpay or Stripe

Multi-Language support (Englsih + Hindi) using react-i18next

Update Form : Add a subject dropdown (Volunteer / Donation / Partnership) → include name="topic" in the form

Add reCAPTCHA in Formspree settings if spam starts.

Track form submits with a tiny event (e.g., Plausible/Umami) later

# Vercel Deployment

https://minaxi-foundation.vercel.app

# GitHub Deployment

https://thememebuilder.github.io/minaxi-foundation

# Folder Structure

minaxi-foundation/
├─ index.html
├─ package.json
├─ vite.config.js         # set base for GitHub Pages
├─ src/
│  ├─ main.jsx
│  ├─ App.jsx
│  ├─ styles.css
│  └─ components/
│     ├─ NavBar.jsx
│     ├─ Section.jsx
│     └─ Footer.jsx
├─ public/
│  └─ favicon.svg
└─ .github/
   └─ workflows/
      └─ deploy.yml      # GitHub Pages auto-deploy

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

