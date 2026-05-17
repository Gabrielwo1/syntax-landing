"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className="nav" id="nav">
      <div className="nav-inner">
        <a className="nav-brand" href="#top" aria-label="Mentoria Exatas">
          <Image src="/logo.png" alt="Mentoria Exatas" className="nav-logo" width={120} height={38} style={{ height: 38, width: "auto" }} />
        </a>
        <nav className="nav-links" aria-label="Principal">
          <a href="#mentorias">Mentorias</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#depoimentos">Depoimentos</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <div className="nav-actions">
          <a href="#area-aluno" className="link-quiet">Área do aluno</a>
          <a href="#contato" className="btn btn-primary btn-sm">
            <span>Quero saber mais</span>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>
        <button className="nav-burger" aria-label="Menu" onClick={() => setMenuOpen(v => !v)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
