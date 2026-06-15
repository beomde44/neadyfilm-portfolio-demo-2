# Next Tailwind Migration Design

## Goal

Convert the existing static NEADY FILM portfolio demo into a Vercel-ready Next.js app while preserving the current one-page content, visual design, responsive layout, assets, and interactions as closely as possible.

## Architecture

Use the Next.js App Router with a single route at `/`. The page remains a client component because the current site has small browser interactions: mobile navigation, project filtering, and the current year in the footer. No server data fetching, routing, CMS, or API routes are needed.

## Styling

Use Tailwind CSS for the main layout, typography, colors, spacing, borders, and responsive behavior. Keep only small global CSS for base page behavior and effects that are awkward as inline utilities: smooth scrolling, background variables, grain overlay, hero image overlay, and reusable card image transitions.

## Assets

Copy the existing SVG assets into `public/assets` so they can be referenced with `/assets/...` paths in Next.js. Keep the visual placeholders unchanged.

## Testing

Add a lightweight Node test that verifies the migrated project has the expected Next.js scripts, App Router files, Tailwind setup, public assets, and key NEADY FILM page content. Run `npm test` before implementation to confirm the migration test fails, then run it again after implementation.
