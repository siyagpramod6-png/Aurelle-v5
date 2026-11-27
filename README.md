# AURELLE V5 — starter source package

A luxury fashion storefront starter for Next.js. Includes a responsive storefront, 800 seeded catalogue records, category/search filters, client-side cart, checkout form shell, account/wishlist/admin route shells, Supabase schema, and environment template.

## Run locally
1. Install Node.js 20 or newer.
2. Extract this ZIP and open the folder in Terminal.
3. Run `npm install`
4. Copy `.env.example` to `.env.local` and add your Supabase values if using Supabase.
5. Run `npm run dev` and open http://localhost:3000

## Deploy to Vercel
1. Create a GitHub repository and upload the extracted project files (not the ZIP itself).
2. In Vercel, import that GitHub repository.
3. Add environment variables from `.env.example` in Vercel Project Settings.
4. Deploy.

## Important production checklist
This package is a V5 implementation starter, not a fully production-certified store. Before taking real orders:
- Connect Supabase Auth email OTP, server-side session handling and account pages.
- Import real products, verified prices, sizes, stock, variants and licensed product images; generated catalogue names are demo seed data.
- Implement server-side cart validation, order persistence and inventory reservation.
- Implement Razorpay server-side order creation, signature verification and webhook verification. Never expose `RAZORPAY_KEY_SECRET` or `SUPABASE_SERVICE_ROLE_KEY` to the browser.
- Add admin authentication with role-based authorization and audit logs. `/admin` is currently only a protected-feature placeholder; do not expose it as a live admin panel.
- Implement wishlist persistence, coupon validation/usage limits, abandoned-cart consent and recovery, shipping integration, refund/return workflows, email/SMS notifications and tracking updates.
- Configure Supabase RLS policies and test with non-admin accounts.
- Add legal business details, shipping/return/privacy/terms policies, customer support contact and tax invoices.
- Test payment success, failure, duplicate webhook, refund, mobile checkout and accessibility before launch.

## Environment variables
See `.env.example`. Keep all secret values server-only.
