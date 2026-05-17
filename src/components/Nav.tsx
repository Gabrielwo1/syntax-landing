"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="3" width="6" height="12" rx="1" fill="white" opacity="0.9" />
              <rect x="10" y="3" width="6" height="12" rx="1" fill="white" opacity="0.6" />
              <rect x="4" y="1" width="6" height="12" rx="1" fill="white" />
            </svg>
          </div>
          <span
            className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
              scrolled ? "text-text-dark" : "text-text-dark"
            }`}
          >
            BookLayer
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["Funcionalidades", "Como funciona", "Depoimentos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#download"
          className="bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-sm"
        >
          Baixar grátis
        </a>
      </div>
    </nav>
  );
}
