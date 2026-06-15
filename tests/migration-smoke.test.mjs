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
  assert.match(page, /Selected Works/);
  assert.match(page, /Services/);
  assert.match(page, /Contact/);
  assert.match(page, /filterButtons/);
  assert.match(page, /projects\.filter/);
});

test("header stays above page content with a valid Tailwind z-index utility", () => {
  const page = read("app/page.jsx");

  assert.doesNotMatch(page, /\bz-80\b/);
  assert.match(page, /<header className="[^"]*z-\[80\]/);
});

test("existing SVG assets are available from public assets", () => {
  [
    "brand-film.svg",
    "event-film.svg",
    "gear-review.svg",
    "hero-placeholder.svg",
    "performance.svg",
    "product-test.svg",
    "restaurant.svg",
  ].forEach((file) => {
    assert.ok(existsSync(join(root, "public", "assets", file)), `${file} should be copied`);
  });
});
