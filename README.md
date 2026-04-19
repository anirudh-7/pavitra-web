# Pavitra Securities & Services — Website

> **pgsl.in** · Next.js 14 · Tailwind CSS · TypeScript

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, Services, Stats, Quick SIP preview, CTA |
| `/sip-calculator` | 4-mode calculator: SIP, Lumpsum, Goal Planner, Inflation-adjusted |
| `/mutual-funds` | Live NAV tracker powered by MFAPI.in |
| `/tax-saving` | Tax saving plans — ELSS, PPF, NPS, FD, ULIP, SSY |
| `/about` | Company info, services, timeline, team |
| `/investwell` | Investor portal (InvestWell iframe + redirect fallback) |
| `/contact` | Contact form + office details |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → http://localhost:3000

# 3. Build for production (standalone output for VPS)
npm run build

# 4. Run production build
npm start
```

---

## Configuration

### 1. Logo
Place your logo file at:
```
public/logo.png
```
The navbar and footer will automatically use it. Recommended size: 512×512 px (square or near-square works best).

### 2. InvestWell Portal URL
Open `app/investwell/page.tsx` and update:
```ts
const INVESTWELL_URL = 'https://your-portal.investwell.app'
```
Replace with your actual InvestWell portal URL.

### 3. Contact Details
Update phone number and address in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### 4. Contact Form Submission
The contact form currently simulates a submission. To wire it up, replace the `await new Promise(...)` in `app/contact/page.tsx` with your actual API call (e.g. Formspree, EmailJS, or your own backend endpoint).

---

## VPS Deployment (Self-hosted)

This project is configured with `output: 'standalone'` in `next.config.js`.

```bash
# Build
npm run build

# The standalone build is in .next/standalone/
# Copy static files
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public

# Run on your server
node .next/standalone/server.js
```

For production, use **PM2** or **systemd** to keep the process alive:
```bash
pm2 start .next/standalone/server.js --name pavitra-web
```

Set the port with environment variable:
```bash
PORT=3000 node .next/standalone/server.js
```

Use **Nginx** as a reverse proxy in front of the Node process.

---

## Customisation Checklist

- [ ] Add logo to `public/logo.png`
- [ ] Update InvestWell URL in `app/investwell/page.tsx`
- [ ] Update phone/address in `Footer.tsx` and `app/contact/page.tsx`
- [ ] Wire up contact form to a real email/API endpoint
- [ ] Add SEBI registration number to footer (search for `SEBI Registered`)
- [ ] Update About page team names (`app/about/page.tsx`)
- [ ] Replace placeholder AUM/stats with actual numbers

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **NAV Data**: [MFAPI.in](https://www.mfapi.in/) (free, no API key needed)
- **Deployment**: Standalone Node.js (VPS ready)

---

*Mutual fund investments are subject to market risks. Please read all scheme-related documents carefully.*
