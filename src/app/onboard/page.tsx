import Link from "next/link";

export default function Onboard() {
  return (
    <main
      className="relative w-full overflow-hidden"
      style={{
        height: "100dvh",
        minHeight: "600px",
        maxHeight: "1000px",
        background:
          "linear-gradient(180deg,rgba(37,199,177,0.05) 0%,rgba(0,101,110,0.05) 48.301%,rgba(151,49,161,0.05) 100%),#fff",
        fontFamily: "'Poppins', sans-serif",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {/* ── BACKGROUND ILLUSTRATION (watercolor face, opacity 0.4) ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:    "calc(-76/393*100%)",
          top:     "calc(266/852*100%)",
          width:   "calc(504/393*100%)",
          height:  "calc(756/852*100%)",
          opacity: 0.4,
          zIndex:  0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ob-bg.png" alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      {/* ── PURPLE BLOB TOP-RIGHT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{ inset: "-13.34% -39.34% 71.21% 47.99%", overflow: "visible", zIndex: 1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ob-vector.svg" alt=""
          style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── PURPLE BLOB TOP-LEFT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{ inset: "-21.24% 60.51% 80.68% -30.79%", overflow: "visible", zIndex: 1 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ob-vector-tl.svg" alt=""
          style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── DECO TOP-RIGHT ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{ inset: "2.11% 2.56% 88.5% 77.61%", zIndex: 4, animation: "feva-deco-wobble 10s ease-in-out infinite" }}
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
          left:      "calc(176/393*100%)",
          top:       "calc(738/852*100%)",
          width:     "calc(291/393*100%)",
          height:    "calc(291/393*100%)",
          zIndex:    2,
          animation: "feva-ellipse-pink-drift 8s ease-in-out infinite 1s",
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
          left:      "calc(-85/393*100%)",
          top:       "calc(566/852*100%)",
          width:     "calc(105/393*100%)",
          height:    "calc(105/852*100%)",
          zIndex:    2,
          animation: "feva-ellipse-teal-drift 6s ease-in-out infinite 0.5s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ellipse-teal.png" alt=""
          style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── DOTS ── */}
      {([
        { src: "feva-dot-23.png", l: 39,  t: 754, s: 23, anim: "feva-dot-pulse 3s ease-in-out infinite 0.3s" },
        { src: "feva-dot-14.png", l: 64,  t: 817, s: 14, anim: "feva-dot-spin  8s linear infinite 0.8s"      },
        { src: "feva-dot-14.png", l: 32,  t: 508, s: 14, anim: "feva-dot-pulse 4s ease-in-out infinite 1.4s" },
      ] as const).map(({ src, l, t, s, anim }, i) => (
        <div key={i} aria-hidden="true" className="absolute pointer-events-none"
          style={{ left: `calc(${l}/393*100%)`, top: `calc(${t}/852*100%)`, width: `calc(${s}/393*100%)`, height: `calc(${s}/393*100%)`, zIndex: 3, animation: anim, opacity: 0.6 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/${src}`} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
      ))}

      {/* ── BACK BUTTON (top-right) ── */}
      <div
        className="absolute flex items-center justify-end"
        style={{ left: "calc(26/393*100%)", top: "calc(38/852*100%)", width: "calc(348/393*100%)", zIndex: 10 }}
      >
        <Link href="/"
          className="flex items-center justify-center shrink-0"
          style={{ width: "38px", height: "38px", borderRadius: "15px", background: "#0e5c5b" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/feva-icon-back.png" alt="Voltar"
            style={{ width: "24px", height: "24px", display: "block" }} />
        </Link>
      </div>

      {/* ── TEXT BLOCK ── */}
      <div
        className="absolute flex flex-col items-center text-center"
        style={{
          left:      "calc(27/393*100%)",
          top:       "calc(166/852*100%)",
          width:     "calc(330/393*100%)",
          gap:       "16px",
          zIndex:    5,
          opacity:   0,
          animation: "feva-fade-up 0.65s ease-out 0.25s forwards",
        }}
      >
        <p style={{ fontWeight: 600, fontSize: "clamp(22px, calc(28/393*100cqw), 36px)", lineHeight: 1.178, color: "#023e44", margin: 0 }}>
          {"Recomendamos tratar esse momento com uma "}
          <span style={{ color: "#13919d" }}>reflexão Honesta</span>
        </p>
        <p style={{ fontWeight: 400, fontSize: "clamp(12px, calc(14/393*100cqw), 17px)", lineHeight: 1.5, color: "#555", margin: 0 }}>
          Não há respostas certas ou erradas apenas o que você realmente sente
        </p>
      </div>

      {/* ── CTA BUTTON ── */}
      <Link
        href="/onboard/etapa-1"
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
          opacity:         0,
          animation:       "feva-fade-up 0.65s ease-out 0.5s forwards",
          transition:      "opacity .15s, filter .15s",
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
