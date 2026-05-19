"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-poppins ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/assets/feva-logo.png"
            alt="FEVA"
            width={121}
            height={41}
            className="h-9 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-feva-gray hover:text-feva-teal transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#comecar"
          className="hidden md:inline-flex items-center justify-center btn-feva px-6 py-2.5 text-sm font-semibold rounded-[15px]"
        >
          Começar agora
        </a>

        <button
          className="md:hidden p-2 text-feva-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-feva-gray hover:text-feva-teal transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#comecar"
            className="btn-feva text-center px-6 py-3 text-sm font-semibold rounded-[15px]"
            onClick={() => setMenuOpen(false)}
          >
            Começar agora
          </a>
        </div>
      )}
    </nav>
  );
}
