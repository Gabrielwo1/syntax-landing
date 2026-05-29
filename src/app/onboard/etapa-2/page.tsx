import Link from "next/link";

export default function Etapa2() {
  return (
    <main
      className="relative w-full overflow-hidden"
      style={{
        height:    "100dvh",
        minHeight: "600px",
        maxHeight: "1000px",
        background: "#f3f6f8",
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
        <div style={{ width: "calc(80/348*100%)", height: "100%", borderRadius: "50px", background: "linear-gradient(90deg,#0d8482,#26b9ec)" }} />
      </div>

      {/* ── ETAPA LABEL + BACK BUTTON ── */}
      <div
        className="absolute flex items-center justify-between"
        style={{ left: "calc(26/393*100%)", top: "calc(60/852*100%)", width: "calc(348/393*100%)", zIndex: 10 }}
      >
        <span style={{ fontWeight: 600, fontSize: "16px", lineHeight: 1.178, color: "#76898b" }}>Etapa 2</span>
        <Link href="/onboard/etapa-1"
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
            {"Qual o seu "}
            <span style={{ color: "#13919d" }}>gênero?</span>
          </p>
          <p style={{ fontWeight: 400, fontSize: "clamp(12px, calc(14/393*100cqw), 17px)", lineHeight: "normal", color: "#555", margin: 0 }}>
            Isso ajuda a personalizar a experiencia
          </p>
        </div>

        {/* Cards grid */}
        <div className="flex items-start justify-between" style={{ gap: "11px" }}>
          {/* Left column */}
          <div className="flex flex-col flex-1" style={{ gap: "20px" }}>
            {/* Homem — tall card with illustration */}
            <button className="feva-ob-card relative flex flex-col items-center justify-end overflow-hidden"
              style={{
                height: "183px", padding: "15px", borderRadius: "12px",
                backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.9)",
                border: "1px solid #e2e8f0", boxShadow: "0 4px 20px 0 rgba(0,0,0,0.04)",
                width: "100%",
              }}>
              {/* Man illustration (horizontally mirrored) */}
              <div className="absolute pointer-events-none" style={{ width: "194px", height: "291px", top: "-55px", left: "-31px", opacity: 0.5, transform: "scaleX(-1)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/feva-ob-man.png" alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#555", textAlign: "center", margin: 0, position: "relative" }}>
                Homem
              </p>
            </button>

            {/* Não Binário */}
            <button className="feva-ob-card flex flex-col items-center justify-center"
              style={{
                gap: "4px", padding: "15px", borderRadius: "12px",
                backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.9)",
                border: "1px solid #e2e8f0", boxShadow: "0 4px 20px 0 rgba(0,0,0,0.04)",
                width: "100%",
              }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "9999px", background: "#fce7f3", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/feva-ob-icon-nonbinary.svg" alt="" style={{ width: "24px", height: "24px", display: "block" }} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#555", textAlign: "center", margin: 0 }}>
                Não Binário
              </p>
            </button>
          </div>

          {/* Right column */}
          <div className="flex flex-col flex-1" style={{ gap: "20px" }}>
            {/* Mulher — tall card with illustration */}
            <button className="feva-ob-card relative flex flex-col items-center justify-end overflow-hidden"
              style={{
                height: "183px", padding: "15px", borderRadius: "12px",
                backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.9)",
                border: "1px solid #e2e8f0", boxShadow: "0 4px 20px 0 rgba(0,0,0,0.04)",
                width: "100%",
              }}>
              {/* Woman illustration */}
              <div className="absolute pointer-events-none" style={{ width: "194px", height: "291px", top: "-50px", left: "-10px", opacity: 0.5 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/feva-ob-woman.png" alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#555", textAlign: "center", margin: 0, position: "relative" }}>
                Mulher
              </p>
            </button>

            {/* Não Responder */}
            <button className="feva-ob-card flex flex-col items-center justify-center"
              style={{
                gap: "4px", padding: "15px", borderRadius: "12px",
                backdropFilter: "blur(4px)", background: "rgba(255,255,255,0.9)",
                border: "1px solid #e2e8f0", boxShadow: "0 4px 20px 0 rgba(0,0,0,0.04)",
                width: "100%",
              }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "9999px", background: "#fff2ef", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/feva-ob-icon-notanswer.svg" alt="" style={{ width: "16px", height: "16px", display: "block" }} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#555", textAlign: "center", margin: 0 }}>
                Não Responder
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* ── CTA BUTTON ── */}
      <Link
        href="/jornada"
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
