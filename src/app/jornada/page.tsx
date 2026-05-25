import Link from "next/link";

/**
 * FEVA — Jornada Screen (node 63:18 "Fasse 01")
 * Frame 393×852px — mesma grade do Home
 * Background: MP4 loop (autoplay muted) com gradiente escuro por cima
 * Font: Manrope
 */
export default function Jornada() {
  const phases = [
    { label: "Fase 2" },
    { label: "Fase 3" },
    { label: "Fase 4" },
  ];

  const navItems = [
    { icon: "/assets/feva-nav-home.png",    label: "Início",   w: 16, h: 22, active: false, href: "/"        },
    { icon: "/assets/feva-nav-journey.png", label: "Jornada",  w: 17, h: 20, active: true,  href: "/jornada" },
    { icon: "/assets/feva-nav-feva.png",    label: "Feva",     w: 20, h: 20, active: false, href: "#"        },
    { icon: "/assets/feva-nav-explore.png", label: "Explorar", w: 20, h: 24, active: false, href: "#"        },
    { icon: "/assets/feva-nav-profile.png", label: "Eu",       w: 16, h: 20, active: false, href: "#"        },
  ];

  return (
    <main
      className="screen-dark relative w-full overflow-hidden"
      style={{
        height:    "100dvh",
        minHeight: "600px",
        maxHeight: "1000px",
        fontFamily: "'Manrope', sans-serif",
        WebkitFontSmoothing: "antialiased",
        background: "#1a1a1a",
      }}
    >

      {/* ── VIDEO BACKGROUND (autoplay loop, muted, covers frame) ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        style={{
          position:   "absolute",
          inset:      0,
          width:      "100%",
          height:     "100%",
          objectFit:  "cover",
          objectPosition: "center top",
          zIndex:     0,
          pointerEvents: "none",
        }}
      >
        <source src="/assets/feva-jornada-bg.mp4" type="video/mp4" />
      </video>

      {/* ── GRADIENT OVERLAY ──
          Reproduz o gradiente escuro do Figma (node 63:29):
          superior transparente → inferior escuro suave
          + camada adicional superior para legibilidade do header
      ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background: [
            /* topo escuro para o header */
            "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.20) 15%, transparent 35%)",
            /* bottom escuro para os cards */
            "linear-gradient(0deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.60) 25%, rgba(0,0,0,0.22) 55%, transparent 100%)",
          ].join(", "),
        }}
      />

      {/* ── DECORATIVE ELEMENTS (por cima do gradiente) ── */}
      {/* Teal ellipse left */}
      <div aria-hidden="true" className="absolute pointer-events-none"
        style={{ left: 0, top: "calc(524/852*100%)", width: "calc(20/393*100%)", height: "calc(105/852*100%)", zIndex: 2, animation: "feva-ellipse-teal-drift 6s ease-in-out infinite 0.5s" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-j-ellipse-teal.png" alt="" style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* Pink ellipse bottom-right */}
      <div aria-hidden="true" className="absolute pointer-events-none"
        style={{ left: "calc(176/393*100%)", top: "calc(738/852*100%)", width: "calc(217/393*100%)", height: "calc(114/852*100%)", zIndex: 2, animation: "feva-ellipse-pink-drift 8s ease-in-out infinite 1s", opacity: 0.35 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-j-ellipse-pink.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      {/* Dots */}
      {([
        { src: "feva-j-dot-23.png", l: 39, t: 754, s: 23, anim: "feva-dot-pulse 3s ease-in-out infinite 0.3s" },
        { src: "feva-j-dot-14.png", l: 64, t: 817, s: 14, anim: "feva-dot-spin  8s linear infinite 0.8s"      },
        { src: "feva-j-dot-14.png", l: 32, t: 466, s: 14, anim: "feva-dot-pulse 4s ease-in-out infinite 1.4s" },
      ] as const).map(({ src, l, t, s, anim }, i) => (
        <div key={i} aria-hidden="true" className="absolute pointer-events-none"
          style={{ left: `calc(${l}/393*100%)`, top: `calc(${t}/852*100%)`, width: `calc(${s}/393*100%)`, height: `calc(${s}/393*100%)`, zIndex: 2, animation: anim, opacity: 0.6 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/${src}`} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
      ))}

      {/* ── HEADER TOP APP BAR ── */}
      <div
        className="absolute flex items-center gap-[5px]"
        style={{
          top: 0, left: 0, right: 0,
          height:       "calc(98/852*100%)",
          minHeight:    "80px",
          padding:      "5px calc(15/393*100%) 6px",
          backdropFilter: "blur(2.5px)",
          background:   "rgba(0,0,0,0.18)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          zIndex:       10,
        }}
      >
        {/* Back */}
        <Link href="/" className="flex items-center justify-center shrink-0"
          style={{ width: "40px", height: "40px", borderRadius: "9999px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/feva-icon-back.png" alt="Voltar" style={{ width: "16px", height: "16px", display: "block" }} />
        </Link>

        {/* Title + progress */}
        <div className="flex-1 flex flex-col gap-[5px] min-w-0">
          <p style={{ fontWeight: 600, fontSize: "16px", lineHeight: 1.178, color: "#fff", whiteSpace: "nowrap", margin: 0 }}>
            Sua jornada
          </p>
          <p style={{ fontWeight: 400, fontSize: "14px", lineHeight: 1.178, color: "#fff", margin: 0 }}>
            Capítulo atual: <strong style={{ fontWeight: 700 }}>Nomear</strong>
          </p>
          {/* Progress bar */}
          <div className="relative" style={{ width: "calc(254/393*100cqw)", height: "7px", marginTop: "2px" }}>
            <div className="absolute inset-0 rounded-[50px]" style={{ background: "#c6e0dd" }} />
            <div className="absolute left-0 top-0 h-full rounded-[50px]" style={{ width: "calc(39/393*100cqw)", background: "linear-gradient(90deg,#0d8482,#26b9ec)" }} />
          </div>
        </div>

        {/* XP badge */}
        <div className="flex items-center gap-[8px] shrink-0"
          style={{ padding: "7px 13px", borderRadius: "9999px", backdropFilter: "blur(2px)", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
          <span style={{ fontWeight: 600, fontSize: "14px", color: "#fff", letterSpacing: "0.28px" }}>1</span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/feva-icon-fire.png" alt="XP" style={{ width: "10.667px", height: "12.667px", display: "block" }} />
        </div>
      </div>

      {/* ── PHASE CARDS BLOCK ── */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          left:      "50%",
          transform: "translateX(-50%)",
          top:       "calc(524/852*100%)",
          width:     "calc(358/393*100%)",
          zIndex:    8,
          gap:       "20px",
          paddingBottom: "20px",
        }}
      >
        {/* Active phase card — FASE 1 */}
        <div className="relative w-full flex flex-col justify-center overflow-hidden"
          style={{
            padding:        "18px",
            borderRadius:   "32px",
            border:         "2px solid #2e8278",
            backdropFilter: "blur(8px)",
            background:     "rgba(54,53,41,0.45)",
            boxShadow:      "0 25px 50px -12px rgba(0,0,0,0.25)",
          }}>
          {/* Glow */}
          <div aria-hidden="true" className="absolute pointer-events-none"
            style={{ inset: "-41px", borderRadius: "9999px", background: "rgba(20,184,166,0.1)", filter: "blur(32px)" }} />

          <div className="relative w-full flex flex-col gap-[10px]">
            {/* FASE 1 label */}
            <div className="flex items-center gap-[8px]">
              <div style={{ width: "8px", height: "8px", borderRadius: "9999px", background: "#fff", flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", color: "#d1d5db", textTransform: "uppercase" as const }}>
                FASE 1
              </span>
            </div>

            {/* Heading + play */}
            <div className="flex items-end justify-between w-full">
              <div className="flex flex-col gap-[8px]">
                <h2 style={{ fontWeight: 700, fontSize: "22px", lineHeight: "36px", color: "#fff", margin: 0 }}>
                  Nomear
                </h2>
                <p style={{ fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#d1d5db", margin: 0, whiteSpace: "nowrap" }}>
                  Continue sua evolução
                </p>
              </div>

              {/* Play button */}
              <button
                aria-label="Reproduzir fase 1"
                className="feva-play-btn relative flex items-center justify-center shrink-0"
                style={{ width: "64px", height: "64px", background: "none", border: "none", padding: 0 }}
              >
                <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "rotate(-90deg)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/feva-icon-progress-ring.png" alt="" style={{ width: "64px", height: "64px", display: "block", filter: "drop-shadow(0 0 2px rgba(45,212,191,0.4))" }} />
                </div>
                <div className="relative flex items-center justify-center"
                  style={{ width: "48px", height: "48px", borderRadius: "9999px", boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1),0 8px 10px -6px rgba(0,0,0,0.1)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/feva-icon-play.png" alt="" style={{ width: "20px", height: "20px", display: "block" }} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Locked phases row */}
        <div className="flex gap-[11px] w-full">
          {phases.map(({ label }) => (
            <button
              key={label}
              aria-label={label}
              className="feva-phase-card flex-1 relative flex items-center overflow-hidden"
              style={{
                height: "66px", padding: "23px 9px", borderRadius: "16px",
                backdropFilter: "blur(12px)", background: "rgba(74,74,74,0.4)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.05)",
                textAlign: "left",
              }}
            >
              <div className="flex items-center gap-[16px]">
                <div
                  className="feva-lock-icon flex items-center justify-center shrink-0"
                  style={{ width: "28px", height: "28px", borderRadius: "9999px", background: "rgba(255,255,255,0.11)", transition: "background 0.18s ease" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/feva-icon-lock.png" alt="" style={{ width: "9px", height: "12px", display: "block" }} />
                </div>
                <span style={{ fontWeight: 700, fontSize: "15px", letterSpacing: "-0.375px", color: "rgba(255,255,255,0.88)", whiteSpace: "nowrap" }}>
                  {label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── BOTTOM NAVIGATION ── */}
      <div
        className="absolute left-0 right-0 flex items-center justify-between overflow-hidden"
        style={{
          bottom: 0, height: "calc(77/852*100%)", minHeight: "64px",
          padding: "12px 24px",
          background: "#2e8278",
          borderRadius: "12px 12px 0 0",
          zIndex: 10,
        }}
      >
        <div aria-hidden="true" className="absolute pointer-events-none"
          style={{ inset: "-39px", borderRadius: "9999px", background: "rgba(20,184,166,0.1)", filter: "blur(32px)" }} />

        {navItems.map(({ icon, label, w, h, active, href }) => (
          <Link key={label} href={href}
            className="relative flex flex-col items-center justify-center gap-[4px]"
            style={{ minWidth: "44px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon} alt={label}
              style={{ width: `${w}px`, height: `${h}px`, display: "block", opacity: active ? 1 : 0.55 }} />
            <span style={{
              fontWeight: 700, fontSize: "12px", letterSpacing: "1.2px", lineHeight: "16px",
              color: active ? "#ffffff" : "#90c1a5",
              textTransform: "uppercase" as const, whiteSpace: "nowrap",
            }}>
              {label}
            </span>
          </Link>
        ))}
      </div>

    </main>
  );
}
