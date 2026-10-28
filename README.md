###
# Cardoba Website

A static services website built with Next.js (App Router) and Tailwind CSS.

Pages: Home (`/`), About Us (`/about`), Services (`/services`) and Contact Us (`/contact`).

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build the static site

```bash
npm run build    # outputs plain HTML/CSS/JS to ./out
npm start        # preview ./out locally
```

Upload the `out/` folder to any static host (Vercel, Netlify, GitHub Pages, cPanel, S3 and so on).

## Editing content

- `data/site.ts`: company name, email, phone, address and working hours. **These are placeholders; replace them with the client's real details.**
- `data/services.ts`: the intro paragraph and all 10 services (title, icon, description and key points).
- `public/logo.svg` and `app/icon.svg`: placeholder logo and favicon.

## Contact form

The form emails each enquiry to the client through [Web3Forms](https://web3forms.com). Set the access key as the environment variable `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` (in Vercel, or in `.env.local` when running locally). It is read at build time, so redeploy after changing it. The key is public by design; no password or server is needed.
