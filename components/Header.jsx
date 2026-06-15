"use client";

import { useState } from "react";

export default function Header({ links, logoHref = "/", logoLabel = "NEADY FILM Home" }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="site-header z-[80]">
      <a className="logo" href={logoHref} aria-label={logoLabel}>
        <span>NEADY</span>
        <span>FILM</span>
      </a>
      <button
        className="nav-toggle"
        type="button"
        aria-expanded={isNavOpen}
        aria-controls="site-nav"
        onClick={() => setIsNavOpen((value) => !value)}
      >
        Menu
      </button>
      <nav id="site-nav" className={`site-nav ${isNavOpen ? "open" : ""}`} aria-label="Main navigation">
        {links.map((link) => (
          <a
            key={link.href}
            className={link.active ? "active" : ""}
            href={link.href}
            onClick={() => setIsNavOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
