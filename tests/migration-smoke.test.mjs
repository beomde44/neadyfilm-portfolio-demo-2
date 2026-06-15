import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";

const root = process.cwd();

const read = (path) => readFileSync(join(root, path), "utf8");

test("project is configured as a Next.js Tailwind app", () => {
  const pkg = JSON.parse(read("package.json"));

  assert.equal(pkg.scripts.dev, "next dev");
  assert.equal(pkg.scripts.build, "next build");
  assert.equal(pkg.scripts.start, "next start");
  assert.equal(pkg.scripts.test, "node --test");
  assert.ok(pkg.dependencies.next);
  assert.ok(pkg.dependencies.react);
  assert.ok(pkg.devDependencies.tailwindcss);
});

test("App Router files and Tailwind configuration exist", () => {
  [
    "next.config.mjs",
    "postcss.config.mjs",
    "tailwind.config.js",
    "app/layout.jsx",
    "app/page.jsx",
    "app/archive/page.jsx",
    "app/globals.css",
  ].forEach((path) => assert.ok(existsSync(join(root, path)), `${path} should exist`));

  assert.match(read("tailwind.config.js"), /content:\s*\[/);
  assert.match(read("app/globals.css"), /@tailwind base/);
});

test("portfolio content and interactions were migrated", () => {
  const page = read("app/page.jsx");

  assert.match(page, /"use client"/);
  assert.match(page, /useState/);
  assert.match(page, /NEADY FILM/);
  assert.match(page, /Based in Korea/);
  assert.match(page, /Selected Works/);
  assert.match(page, /Kosmos Project/);
  assert.match(page, /1min Improvisation/);
  assert.match(page, /Gear-in Youtube/);
  assert.match(page, /Services/);
  assert.match(page, /Dance Film/);
  assert.match(page, /Mini Documentary \/ Interview/);
  assert.match(page, /Contact/);
  assert.match(page, /neadyfilm0722@naver\.com/);
  assert.match(page, /filterButtons/);
  assert.match(page, /projects\.filter/);
});

test("main project roles include color grading where filming and editing are listed", () => {
  const page = read("app/page.jsx");

  assert.doesNotMatch(page, /role:\s*"촬영 \/ 편집"/);
  assert.equal(page.match(/role:\s*"촬영 \/ 편집 \/ 색보정"/g)?.length, 6);
});

test("archive route content and filtering were migrated", () => {
  const page = read("app/archive/page.jsx");

  assert.match(page, /"use client"/);
  assert.match(page, /Archive/);
  assert.match(page, /More works/);
  assert.match(page, /Social Content Series/);
  assert.match(page, /Brand Promotion Film/);
  assert.match(page, /Restaurant & Space Content/);
  assert.match(page, /archiveProjects\.filter/);
});

test("header stays above page content with a valid Tailwind z-index utility", () => {
  const page = read("app/page.jsx");

  assert.doesNotMatch(page, /\bz-80\b/);
  assert.match(page, /<header className="[^"]*z-\[80\]/);
});

test("hero video renders opaque to avoid poster ghosting behind it", () => {
  const css = read("app/globals.css");

  assert.doesNotMatch(css, /\.hero-video\s*\{[^}]*opacity:\s*0\.[0-9]+/s);
  assert.match(css, /\.hero-video\s*\{[^}]*opacity:\s*1\s*;/s);
});

test("v5-final assets are available from public assets", () => {
  [
    "archive-brand.svg",
    "archive-more.svg",
    "archive-portrait.svg",
    "archive-restaurant.svg",
    "archive-short.svg",
    "archive-social.svg",
    "dance-film-01.webp",
    "dance-film-02.webp",
    "event-sketch-01.webp",
    "event-sketch-02.webp",
    "gear-in-youtube.webp",
    "hero-poster.webp",
    "kosmos-project-2026.webp",
    "maiskind-project.webp",
    "showreel.mp4",
  ].forEach((file) => {
    assert.ok(existsSync(join(root, "public", "assets", file)), `${file} should be copied`);
  });
});

test("raster page images use optimized WebP assets", () => {
  const page = read("app/page.jsx");
  const archive = read("app/archive/page.jsx");
  const css = read("app/globals.css");

  assert.doesNotMatch(page + archive + css, /\.(jpg|jpeg)/i);
  assert.match(page, /kosmos-project-2026\.webp/);
  assert.match(page, /gear-in-youtube\.webp/);
  assert.match(css, /hero-poster\.webp/);
});

test("local variable fonts are loaded from public fonts", () => {
  const css = read("app/globals.css");

  assert.ok(existsSync(join(root, "public", "fonts", "InterVariable.woff2")));
  assert.ok(existsSync(join(root, "public", "fonts", "PretendardVariable.woff2")));
  assert.match(css, /font-family:\s*"Inter"/);
  assert.match(css, /url\("\/fonts\/InterVariable\.woff2"\)/);
  assert.match(css, /font-family:\s*"Pretendard Variable"/);
  assert.match(css, /url\("\/fonts\/PretendardVariable\.woff2"\)/);
});

test("landing typography keeps the original bold visual hierarchy", () => {
  const css = read("app/globals.css");

  assert.match(css, /h1\s*\{[^}]*font-weight:\s*700\s*;/s);
  assert.match(css, /\.hero-copy\s*\{[^}]*font-size:\s*22px\s*;/s);
  assert.match(css, /\.section-head h2,[\s\S]*?font-size:\s*56px\s*;/);
  assert.match(css, /\.section-head h2,[\s\S]*?font-weight:\s*700\s*;/);
  assert.match(css, /\.project-card\.featured \.project-info h3\s*\{[^}]*font-size:\s*50px\s*;/s);
  assert.match(css, /\.project-info h3\s*\{[^}]*font-weight:\s*700\s*;/s);
});
