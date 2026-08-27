# BioHAK Wellness — Holding Page (cPanel Version)

A "launching soon" holding page for BioHAK Wellness, built with Next.js 14, TypeScript and Tailwind CSS. This version is configured for static export and cPanel hosting — no Node.js server required on the host.

---

## What's on the page

- **BioHAK Wellness logo** (high-resolution PNG with transparent "o")
- **Headline**: Wellness, Simplified.
- **Subhead**: Science-backed nutrition and wellness products designed for modern living.
- **Email signup form** (currently stubbed — see "Connecting email signup" below)
- **Instagram handle** with icon: @biohakwellness
- **Footer**: Made with science. Inspired by wellbeing.

---

## Requirements

- [Node.js](https://nodejs.org) 18.17 or later (for building locally)
- A cPanel hosting account with File Manager access

---

## Building for cPanel

Run these commands from inside this project folder:

```bash
npm install
npm run build
```

This generates an `out/` folder containing plain static HTML, CSS and JS files — no server needed.

---

## Deploying to cPanel

1. Open **cPanel → File Manager**
2. Navigate to `public_html` (or your domain/subdomain folder)
3. Upload the **entire contents** of the `out/` folder (not the folder itself — the files inside it)
4. Your site is live

> **Important**: Upload the contents *inside* `out/`, not the `out/` folder itself. Your `public_html` should contain `index.html` directly, not `out/index.html`.

---

## Connecting the email signup

`components/EmailSignup.tsx` currently simulates a submission (stub only — no emails are stored). To wire it up for real before launch:

**Option A — Google Form (simplest, free)**
1. Create a Google Form with one Email question
2. Get the pre-filled link from the form's ⋮ menu
3. In `EmailSignup.tsx`, replace the stub `try/catch` block with a `fetch` POST to the form's `formResponse` URL using the `entry.XXXXXXX` field name from the pre-filled link

**Option B — Mailchimp**
1. Create an API route at `app/api/subscribe/route.ts`
2. Forward the email to Mailchimp's API using your API key (store the key in `.env.local`, never in client code)
3. Call `/api/subscribe` from the form instead of the stub

---

## Updating content

| What to change | Where |
|---|---|
| Headline or subhead text | `app/page.tsx` |
| Instagram handle / URL | `app/page.tsx` (top two constants) |
| Logo image | Replace `public/logo.png` |
| Background gradient colors | `app/globals.css` |
| Button and accent colors | `tailwind.config.ts` |
| Page title and meta description | `app/layout.tsx` |

---

## Project structure

```
app/
  layout.tsx        — root layout, fonts, metadata
  page.tsx          — the holding page
  globals.css       — gradient background, animations, base styles
components/
  Logo.tsx          — logo image component
  EmailSignup.tsx   — email capture form (stub — wire up before launch)
public/
  logo.png          — BioHAK Wellness high-resolution logo
```

---

## Difference from the Vercel version

This version is identical to the Vercel/GitHub version except:
- The **countdown timer has been removed**
- `next.config.js` has `output: "export"` and `images: { unoptimized: true }` enabled for static hosting
- There is no `Countdown.tsx` component

The Vercel version (with countdown) lives at the `biohak-health` GitHub repo.
