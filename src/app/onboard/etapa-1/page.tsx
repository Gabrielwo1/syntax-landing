import Link from "next/link";

const leftCards = [
  { icon: "/assets/feva-ob-icon-nomear.svg",     iconW: "20px", iconH: "18px", bg: "#f3e8ff",              label: "Nomear o que\neu sinto"          },
  { icon: "/assets/feva-ob-icon-relac.svg",      iconW: "22px", iconH: "22px", bg: "#fce7f3",              label: "Melhorar\nrelacionamentos"       },
  { icon: "/assets/feva-ob-icon-auto.svg",       iconW: "20px", iconH: "18px", bg: "rgba(139,147,255,0.2)", label: "Ter mais\nautocompaixão"          },
];
const rightCards = [
  { icon: "/assets/feva-ob-icon-ansiedade.svg",  iconW: "20px", iconH: "17px", bg: "#dbeafe",              label: "Reduzir a minha\nansiedade"      },
  { icon: "/assets/feva-ob-icon-nervoso.svg",    iconW: "15px", iconH: "20px", bg: "#fef9c3",              label: "Regular meu sistema\nnervoso"    },
  { icon: "/assets/feva-ob-icon-sabotar.svg",    iconW: "22px", iconH: "12px", bg: "#ffedd5",              label: "Parar de me sabotar\nfrequentemente" },
];

export default function Etapa1() {
  return (
    <main
      className="relative w-full overflow-hidden"
      style={{
        height:    "100dvh",
        minHeight: "600px",
        maxHeight: "1000px",
        background: "#f3f6f7",
        fontFamily: "'Poppins', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ── PURPLE BLOB LEFT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{ inset: "-13.38% 44.63% 73.29% -37.66%", overflow: "visible", zIndex: 1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ob2-vector.svg" alt=""
          style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── DECO TOP-RIGHT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{ inset: "1.53% 6.86% 88.5% 1.78%", zIndex: 4, animation: "feva-deco-wobble 10s ease-in-out infinite" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-deco-tr.png" alt=""
          style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      </div>

      {/* ── PINK ELLIPSE BOTTOM-RIGHT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: "calc(176/393*100%)", top: "calc(738/852*100%)",
          width: "calc(291/393*100%)", height: "calc(291/393*100%)",
          zIndex: 2, animation: "feva-ellipse-pink-drift 8s ease-in-out infinite 1s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ellipse-pink.png" alt=""
          style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── TEAL ELLIPSE LEFT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: "calc(-85/393*100%)", top: "calc(566/852*100%)",
          width: "calc(105/393*100%)", height: "calc(105/852*100%)",
          zIndex: 2, animation: "feva-ellipse-teal-drift 6s ease-in-out infinite 0.5s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ellipse-teal.png" alt=""
          style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── PURPLE ELLIPSE RIGHT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: "calc(328/393*100%)", top: "calc(211/852*100%)",
          width: "calc(105/393*100%)", height: "calc(105/852*100%)",
          zIndex: 2, opacity: 0.45, animation: "feva-ellipse-pink-drift 9s ease-in-out infinite 2s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ob-ellipse-purple.svg" alt=""
          style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── DOTS ── */}
      {([
        { src: "feva-dot-23.png", l: 39, t: 754, s: 23, anim: "feva-dot-pulse 3s ease-in-out infinite 0.3s" },
        { src: "feva-dot-14.png", l: 64, t: 817, s: 14, anim: "feva-dot-spin  8s linear infinite 0.8s"      },
        { src: "feva-dot-14.png", l: 32, t: 508, s: 14, anim: "feva-dot-pulse 4s ease-in-out infinite 1.4s" },
      ] as const).map(({ src, l, t, s, anim }, i) => (
        <div key={i} aria-hidden="true" className="absolute pointer-events-none"
          style={{ left: `calc(${l}/393*100%)`, top: `calc(${t}/852*100%)`, width: `calc(${s}/393*100%)`, height: `calc(${s}/393*100%)`, zIndex: 3, animation: anim, opacity: 0.55 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/${src}`} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
      ))}

      {/* ── PROGRESS BAR ── */}
      <div className="absolute" style={{ left: "calc(26/393*100%)", top: "calc(37/852*100%)", width: "calc(348/393*100%)", height: "7px", borderRadius: "50px", background: "#c6e0dd", zIndex: 10 }}>
        <div style={{ width: "calc(33/348*100%)", height: "100%", borderRadius: "50px", background: "linear-gradient(90deg,#0d8482,#26b9ec)" }} />
      </div>

      {/* ── ETAPA LABEL + BACK BUTTON ── */}
      <div
        className="absolute flex items-center justify-between"
        style={{ left: "calc(26/393*100%)", top: "calc(60/852*100%)", width: "calc(348/393*100%)", zIndex: 10 }}
      >
        <span style={{ fontWeight: 600, fontSize: "16px", lineHeight: 1.178, color: "#76898b" }}>Etapa 1</span>
        <Link href="/onboard"
          className="flex items-center justify-center shrink-0"
          style={{ width: "38px", height: "38px", borderRadius: "15px", background: "#0e5c5b" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/feva-icon-back.png" alt="Voltar"
            style={{ width: "24px", height: "24px", display: "block" }} />
        </Link>
      </div>

      {/* ── CONTENT BLOCK ── */}
      <div
        className="absolute flex flex-col"
        style={{
          left:      "calc(18/393*100%)",
          top:       "calc(137/852*100%)",
          width:     "calc(355/393*100%)",
          gap:       "20px",
          zIndex:    5,
          opacity:   0,
          animation: "feva-fade-up 0.6s ease-out 0.15s forwards",
        }}
      >
        {/* Heading */}
        <div className="flex flex-col" style={{ gap: "16px" }}>
          <p style={{ fontWeight: 600, fontSize: "clamp(18px, calc(22/393*100cqw), 28px)", lineHeight: 1.178, color: "#023e44", margin: 0 }}>
            {"Escolha seu "}
            <span style={{ color: "#13919d" }}>objetivo Principal</span>
          </p>
          <p style={{ fontWeight: 400, fontSize: "clamp(12px, calc(14/393*100cqw), 17px)", lineHeight: "normal", color: "#555", margin: 0 }}>
            O que realmente você quer transformar?
          </p>
        </div>

        {/* Cards grid */}
        <div className="flex items-start justify-between" style={{ gap: "11px" }}>
          {/* Left column */}
          <div className="flex flex-col flex-1" style={{ gap: "20px" }}>
            {leftCards.map(({ icon, iconW, iconH, bg, label }) => (
              <button key={label} className="feva-ob-card flex flex-col items-center justify-center"
                style={{
                  gap: "4px", padding: "15px", borderRadius: "12px",
                  backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid #e2e8f0", boxShadow: "0 4px 20px 0 rgba(0,0,0,0.04)",
                  width: "100%",
                }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "9999px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" style={{ width: iconW, height: iconH, display: "block" }} />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#555", textAlign: "center", margin: 0, whiteSpace: "pre-line" }}>
                  {label}
                </p>
              </button>
            ))}
          </div>
          {/* Right column */}
          <div className="flex flex-col flex-1" style={{ gap: "20px" }}>
            {rightCards.map(({ icon, iconW, iconH, bg, label }) => (
              <button key={label} className="feva-ob-card flex flex-col items-center justify-center"
                style={{
                  gap: "4px", padding: "15px", borderRadius: "12px",
                  backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.9)",
                  border: "1px solid #e2e8f0", boxShadow: "0 4px 20px 0 rgba(0,0,0,0.04)",
                  width: "100%",
                }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "9999px", background: bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={icon} alt="" style={{ width: iconW, height: iconH, display: "block" }} />
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#555", textAlign: "center", margin: 0, whiteSpace: "pre-line" }}>
                  {label}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BUTTON ── */}
      <Link
        href="/onboard/etapa-2"
        className="absolute flex items-center justify-center gap-[10px]"
        style={{
          left:            "calc(22/393*100%)",
          top:             "calc(766/852*100%)",
          width:           "calc(340/393*100%)",
          height:          "calc(51/852*100%)",
          minHeight:       "44px",
          borderRadius:    "15px",
          backgroundImage: "linear-gradient(124.71deg, rgb(0,98,74) 0.256%, rgb(0,187,255) 183.74%)",
          zIndex:          10,
        }}
      >
        <span style={{ fontWeight: 600, fontSize: "clamp(14px, calc(16/393*100cqw), 20px)", color: "#fff", lineHeight: 1, whiteSpace: "nowrap" }}>
          Continuar
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ob-chevron.svg" alt="" style={{ width: "6px", height: "10px", display: "block" }} />
      </Link>
    </main>
  );
}
