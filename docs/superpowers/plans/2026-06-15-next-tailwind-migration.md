# Next Tailwind Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vercel-ready Next.js App Router version of the existing NEADY FILM static portfolio using Tailwind CSS.

**Architecture:** Keep the app as a single route in `app/page.jsx`. Use React state for the current `script.js` interactions, Tailwind utilities for most styling, and minimal global CSS for base effects and complex backgrounds.

**Tech Stack:** Next.js, React, Tailwind CSS, PostCSS, Node test runner.

---

### Task 1: Add Migration Smoke Test

**Files:**
- Create: `package.json`
- Create: `tests/migration-smoke.test.mjs`

- [ ] **Step 1: Create a test script**

Add `npm test` to run `node --test`.

- [ ] **Step 2: Write failing migration assertions**

Assert that `app/layout.jsx`, `app/page.jsx`, `app/globals.css`, Tailwind config, PostCSS config, and copied public assets exist. Assert that `app/page.jsx` contains `NEADY FILM`, `Selected Works`, `Services`, `Contact`, `useState`, and project filter data.

- [ ] **Step 3: Run the test**

Run: `npm test`

Expected: FAIL because the Next.js app files do not exist yet.

### Task 2: Create Next.js and Tailwind Project Files

**Files:**
- Modify: `package.json`
- Create: `next.config.mjs`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.js`
- Create: `app/layout.jsx`
- Create: `app/globals.css`
- Create: `app/page.jsx`
- Create: `public/assets/*`

- [ ] **Step 1: Add dependencies and scripts**

Add `dev`, `build`, `start`, and `test` scripts. Add `next`, `react`, and `react-dom` dependencies plus `tailwindcss`, `postcss`, and `autoprefixer` dev dependencies.

- [ ] **Step 2: Configure Tailwind**

Set Tailwind content paths to `./app/**/*.{js,jsx}`. Extend theme colors from the original CSS variables.

- [ ] **Step 3: Create the App Router layout**

Move the metadata from `index.html` into `app/layout.jsx` and import `globals.css`.

- [ ] **Step 4: Rebuild the page**

Translate the existing HTML into JSX. Keep text, section order, links, classes, and asset choices visually equivalent. Use React state for mobile nav and project filtering.

- [ ] **Step 5: Copy assets**

Copy existing SVG placeholders to `public/assets`.

### Task 3: Verify

**Files:**
- Existing project files only.

- [ ] **Step 1: Run smoke test**

Run: `npm test`

Expected: PASS.

- [ ] **Step 2: Install dependencies if needed**

Run: `npm install`

Expected: dependencies install and `package-lock.json` is created.

- [ ] **Step 3: Run production build**

Run: `npm run build`

Expected: PASS with a compiled `/` route.
