import Link from "next/link";

/**
 * FEVA — Home Screen
 * Réplica pixel-perfect do Figma node 34:29 (frame 393×852px)
 *
 * Escala: X = px/393*100cqw | Y = px/852*100%
 *
 * Z-order (Figma layer order, base → topo):
 *  z0  curva roxa SVG (34:296)
 *  z1  ellipse teal esquerda (34:31) — fatia 20px visível
 *  z2  ellipse pink (34:30)  — fatia 242×166 visível
 *  z3  brain illustration (11:4490) — sobre os blobs
 *  z4  dots decorativos (34:32/33/34)
 *  z5  deco top-right (34:297)
 *  z6  título h1 (34:35)
 *  z7  underline squiggle (34:41)
 *  z8  descrição p (34:40)
 *  z9  CTA frame (34:36)
 *  z10 logo (34:314) — topo absoluto
 */
export default function Home() {
  return (
    <main
      className="relative w-full overflow-hidden"
      style={{
        height:    "100dvh",
        minHeight: "600px",
        maxHeight: "1000px",
        background:
          "linear-gradient(180deg,rgba(37,199,177,0.05) 0%,rgba(0,101,110,0.05) 48.301%,rgba(151,49,161,0.05) 100%),#fff",
        fontFamily:          "'Poppins', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >

      {/* ── Z0 · CURVA ROXA SVG ── blob-breathe para simular respiração orgânica */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{ inset: "-12.56% -28.8% 71.99% 58.52%", overflow: "visible", zIndex: 0 }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/feva-blob-purple.svg"
          alt=""
          style={{
            flexShrink: 0,
            display:    "block",
            width:      "calc(302.938 / 393 * 100cqw)",
            height:     "calc(204.758 / 393 * 100cqw)",
            animation:  "feva-blob-breathe 18s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Z1 · ELLIPSE TEAL — drift vertical suave ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:      "0",
          top:       "calc(566 / 852 * 100%)",
          width:     "calc(20  / 393 * 100%)",
          height:    "calc(105 / 852 * 100%)",
          zIndex:    1,
          animation: "feva-ellipse-teal-drift 6s ease-in-out infinite 0.5s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ellipse-teal.png" alt="" style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── Z2 · ELLIPSE ROSA — drift diagonal suave ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:      "calc(151 / 393 * 100%)",
          top:       "calc(686 / 852 * 100%)",
          width:     "calc(242 / 393 * 100%)",
          height:    "calc(166 / 852 * 100%)",
          zIndex:    2,
          animation: "feva-ellipse-pink-drift 8s ease-in-out infinite 1s",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-ellipse-pink.png" alt="" style={{ width: "100%", height: "100%", display: "block" }} />
      </div>

      {/* ── Z3 · BRAIN — flutua para cima e baixo suavemente ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top:       "calc(575 / 852 * 100%)",
          left:      "calc(21  / 393 * 100%)",
          right:     "calc(23  / 393 * 100%)",
          bottom:    0,
          zIndex:    3,
          display:   "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          animation: "feva-brain-float 4.5s ease-in-out infinite",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/feva-brain.png"
          alt="Ilustração da mente emocional"
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom", display: "block" }}
        />
      </div>

      {/* ── Z4 · DOTS — cada um com ritmo próprio ── */}
      {[
        { src: "feva-dot-23.png",  l: 39, t: 754, s: 23, anim: "feva-dot-pulse 3s ease-in-out infinite 0.3s"  },
        { src: "feva-dot-14.png",  l: 64, t: 817, s: 14, anim: "feva-dot-spin  8s linear infinite 0.8s"       },
        { src: "feva-dot-14b.png", l: 32, t: 508, s: 14, anim: "feva-dot-pulse 4s ease-in-out infinite 1.4s"  },
      ].map(({ src, l, t, s, anim }) => (
        <div
          key={src}
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left:      `calc(${l} / 393 * 100%)`,
            top:       `calc(${t} / 852 * 100%)`,
            width:     `calc(${s} / 393 * 100%)`,
            height:    `calc(${s} / 393 * 100%)`,
            zIndex:    4,
            animation: anim,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/${src}`} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
      ))}

      {/* ── Z5 · DECO TOP-RIGHT — gira suavemente ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top:       "calc(18 / 852 * 100%)",
          right:     "calc(10 / 393 * 100%)",
          width:     "calc(78 / 393 * 100%)",
          height:    "calc(80 / 852 * 100%)",
          zIndex:    5,
          animation: "feva-deco-wobble 10s ease-in-out infinite",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-deco-tr.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      </div>

      {/* ── Z6 · TÍTULO — slide up na entrada ── */}
      <h1
        className="absolute m-0 p-0"
        style={{
          left:          "calc(26  / 393 * 100%)",
          top:           "calc(173 / 852 * 100%)",
          width:         "calc(318 / 393 * 100%)",
          fontSize:      "clamp(26px, calc(34 / 393 * 100cqw), 48px)",
          fontWeight:    600,
          lineHeight:    1.15,
          color:         "#023e44",
          letterSpacing: "-0.01em",
          zIndex:        6,
          opacity:       0,
          animation:     "feva-fade-up 0.65s ease-out 0.25s forwards",
        }}
      >
        {"Conheça a mente que "}
        <span style={{ color: "#2e8278" }}>mora em você.</span>
      </h1>

      {/* ── Z7 · UNDERLINE — fade-in após o título ── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          left:      "calc(20     / 393 * 100%)",
          top:       "calc(273    / 852 * 100%)",
          width:     "calc(116.26 / 393 * 100%)",
          height:    "calc(70.92  / 852 * 100%)",
          zIndex:    7,
          opacity:   0,
          animation: "feva-fade-in 0.5s ease-out 0.75s forwards",
        }}
      >
        <div
          style={{
            transform:  "rotate(20.63deg)",
            flexShrink: 0,
            position:   "relative",
            width:      "calc(111.5 / 393 * 100cqw)",
            height:     "calc(33.8  / 393 * 100cqw)",
            marginTop:  "calc(-0.9  / 393 * 100cqw)",
            overflow:   "visible",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/feva-underline.png"
            alt=""
            style={{
              position: "absolute",
              top:      "calc(-2.67%)",
              left:     0,
              right:    0,
              bottom:   0,
              width:    "100%",
              height:   "calc(100% + 2.67%)",
              display:  "block",
            }}
          />
        </div>
      </div>

      {/* ── Z8 · DESCRIÇÃO — fade up após título ── */}
      <p
        className="absolute m-0 p-0"
        style={{
          left:       "calc(26  / 393 * 100%)",
          top:        "calc(322 / 852 * 100%)",
          width:      "calc(339 / 393 * 100%)",
          fontSize:   "clamp(12px, calc(14 / 393 * 100cqw), 17px)",
          fontWeight: 400,
          lineHeight: 1.65,
          color:      "#555555",
          zIndex:     8,
          opacity:    0,
          animation:  "feva-fade-up 0.6s ease-out 0.5s forwards",
        }}
      >
        O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e
        aprenda a se entender de um jeito prático — sem julgamentos, sem
        complicação.
      </p>

      {/* ── Z9 · CTA — slide up final + botão com glow pulsante ── */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          left:      "calc(26  / 393 * 100%)",
          top:       "calc(426 / 852 * 100%)",
          width:     "calc(340 / 393 * 100%)",
          gap:       "calc(17  / 393 * 100cqw)",
          zIndex:    9,
          opacity:   0,
          animation: "feva-fade-up 0.65s ease-out 0.75s forwards",
        }}
      >
        <Link
          href="/entrar"
          className="flex w-full items-center justify-center shrink-0"
          style={{
            height:          "clamp(44px, calc(51 / 393 * 100cqw), 64px)",
            borderRadius:    "15px",
            backgroundImage: "linear-gradient(68.755deg, rgb(46,130,120) 28.77%, rgb(151,49,161) 193.41%)",
            animation:       "feva-btn-glow 3s ease-in-out infinite 1.5s",
            transition:      "opacity .15s",
          }}
        >
          <span
            style={{
              fontSize:      "clamp(15px, calc(18 / 393 * 100cqw), 22px)",
              fontWeight:    600,
              color:         "#fff",
              lineHeight:    1,
              whiteSpace:    "nowrap",
              letterSpacing: "0.01em",
            }}
          >
            Entre agora
          </span>
        </Link>

        <p
          className="m-0 text-center w-full"
          style={{
            fontSize:   "clamp(12px, calc(14 / 393 * 100cqw), 17px)",
            fontWeight: 400,
            lineHeight: 1.5,
            color:      "#6a6a6a",
          }}
        >
          Já tem conta?{" "}
          <Link href="/login" style={{ color: "#2e8278", fontWeight: 600 }}>
            Faça o Login
          </Link>
        </p>
      </div>

      {/* ── Z10 · LOGO — fade down na entrada (primeiro elemento) ── */}
      <div
        className="absolute"
        style={{
          left:        "calc(26  / 393 * 100%)",
          top:         "calc(103 / 852 * 100%)",
          width:       "calc(121 / 393 * 100%)",
          aspectRatio: "4096 / 1389",
          zIndex:      10,
          opacity:     0,
          animation:   "feva-fade-down 0.55s ease-out 0s forwards",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/feva-logo.png"
          alt="FEVA"
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "left", display: "block" }}
        />
      </div>

    </main>
  );
}
