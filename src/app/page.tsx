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

      {/* ──────────────────────────────────────────────────────────────────
        Z0 · CURVA ROXA SVG (node 34:296)
        SVG viewBox="0 0 302.938 204.758" preserveAspectRatio="none"
        Container: inset -12.56% -28.8% 71.99% 58.52%
          → left=230px top=-107px w=276px h=345px
        Inner: rotate(-105deg) w=302.938/393*100cqw h=204.758/393*100cqw
        Usa <img> simples pois o arquivo é SVG com overflow="visible"
      ────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          inset:    "-12.56% -28.8% 71.99% 58.52%",
          overflow: "visible",
          zIndex:   0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/feva-blob-purple.svg"
          alt=""
          style={{
            transform:  "rotate(-105deg)",
            flexShrink: 0,
            display:    "block",
            width:      "calc(302.938 / 393 * 100cqw)",
            height:     "calc(204.758 / 393 * 100cqw)",
          }}
        />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
        Z1 · ELLIPSE TEAL — FATIA ESQUERDA (node 34:31)
        Full circle: left=-85px top=566px size=105×105px
        Imagem capturada = fatia visível: 20×105px
        → posicionar em left=0, top=566/852*100%
           w=20/393*100%  h=105/852*100%
      ────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:   "0",
          top:    "calc(566 / 852 * 100%)",
          width:  "calc(20  / 393 * 100%)",
          height: "calc(105 / 852 * 100%)",
          zIndex: 1,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/feva-ellipse-teal.png"
          alt=""
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
        Z2 · ELLIPSE ROSA (node 34:30)
        Full circle: left=151px top=686px size=291×291px
        Imagem capturada = fatia visível no frame: 242×166px
        → posicionar em left=151/393*100%, top=686/852*100%
           w=242/393*100%  h=166/852*100%
      ────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:   "calc(151 / 393 * 100%)",
          top:    "calc(686 / 852 * 100%)",
          width:  "calc(242 / 393 * 100%)",
          height: "calc(166 / 852 * 100%)",
          zIndex: 2,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/feva-ellipse-pink.png"
          alt=""
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
        Z3 · BRAIN ILLUSTRATION (node 11:4490)
        Figma: top=575 left=21 right=23 bottom=0  →  349×277px
        ACIMA dos ellipses (z3 > z2 e z1)
      ────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top:    "calc(575 / 852 * 100%)",
          left:   "calc(21  / 393 * 100%)",
          right:  "calc(23  / 393 * 100%)",
          bottom: 0,
          zIndex: 3,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/feva-brain.png"
          alt="Ilustração da mente emocional"
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "bottom", display: "block" }}
        />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
        Z4 · DOTS DECORATIVOS
        34:32 → 23×23 @ left=39 top=754
        34:33 → 14×14 @ left=64 top=817
        34:34 → 14×14 @ left=32 top=508
      ────────────────────────────────────────────────────────────────── */}
      {[
        { src: "feva-dot-23.png", l: 39,  t: 754, s: 23 },
        { src: "feva-dot-14.png", l: 64,  t: 817, s: 14 },
        { src: "feva-dot-14b.png",l: 32,  t: 508, s: 14 },
      ].map(({ src, l, t, s }) => (
        <div
          key={src}
          aria-hidden="true"
          className="absolute pointer-events-none"
          style={{
            left:   `calc(${l} / 393 * 100%)`,
            top:    `calc(${t} / 852 * 100%)`,
            width:  `calc(${s} / 393 * 100%)`,
            height: `calc(${s} / 393 * 100%)`,
            zIndex: 4,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`/assets/${src}`} alt="" style={{ width: "100%", height: "100%", display: "block" }} />
        </div>
      ))}

      {/* ──────────────────────────────────────────────────────────────────
        Z5 · DECO TOP-RIGHT (node 34:297 — Group3)
        Figma: top=18 right=10 width=78 height=80
      ────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top:    "calc(18 / 852 * 100%)",
          right:  "calc(10 / 393 * 100%)",
          width:  "calc(78 / 393 * 100%)",
          height: "calc(80 / 852 * 100%)",
          zIndex: 5,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/feva-deco-tr.png" alt="" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      </div>

      {/* ──────────────────────────────────────────────────────────────────
        Z6 · TÍTULO (node 34:35)
        Figma: left=26 top=173 width=318
        Poppins SemiBold 34px | #023e44 / span #2e8278
        line-height: 1.15 (visual da screenshot Figma)
      ────────────────────────────────────────────────────────────────── */}
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
        }}
      >
        {"Conheça a mente que "}
        <span style={{ color: "#2e8278" }}>mora em você.</span>
      </h1>

      {/* ──────────────────────────────────────────────────────────────────
        Z7 · UNDERLINE SQUIGGLE (node 34:41 — Vector 1)
        Figma JSX:
          outer  left=20 top=273 w=116.26 h=70.92  (flex center)
          inner  w=111.5 h=33.8  rotate(20.63deg)
                 img absolute inset[-2.67%_0_0_0] max-w-none size-full
        CRÍTICO: a imagem (115×16) é esticada para preencher 111.5×33.8
                 → usar width:100% height:100% no <img> (não object-contain)
      ────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          left:   "calc(20     / 393 * 100%)",
          top:    "calc(273    / 852 * 100%)",
          width:  "calc(116.26 / 393 * 100%)",
          height: "calc(70.92  / 852 * 100%)",
          zIndex: 7,
        }}
      >
        <div
          style={{
            transform:  "rotate(20.63deg)",
            flexShrink: 0,
            position:   "relative",
            width:      "calc(111.5 / 393 * 100cqw)",
            height:     "calc(33.8  / 393 * 100cqw)",
            marginTop:  "calc(-0.9  / 393 * 100cqw)", /* inset-top: -2.67% */
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

      {/* ──────────────────────────────────────────────────────────────────
        Z8 · DESCRIÇÃO (node 34:40)
        Figma: left=26 top=322 width=339
        Poppins Regular 14px #555555 line-height normal
      ────────────────────────────────────────────────────────────────── */}
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
        }}
      >
        O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e
        aprenda a se entender de um jeito prático — sem julgamentos, sem
        complicação.
      </p>

      {/* ──────────────────────────────────────────────────────────────────
        Z9 · CTA FRAME (node 34:36 — Frame 3)
        Figma: left=26 top=426 width=340 gap=17px
        ├─ Botão "Entre agora": h=51 radius=15 gradient teal→roxo
        └─ "Já tem conta? Faça o Login": 14px centered
      ────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          left:   "calc(26  / 393 * 100%)",
          top:    "calc(426 / 852 * 100%)",
          width:  "calc(340 / 393 * 100%)",
          gap:    "calc(17  / 393 * 100cqw)",
          zIndex: 9,
        }}
      >
        <Link
          href="/entrar"
          className="flex w-full items-center justify-center shrink-0"
          style={{
            height:          "clamp(44px, calc(51 / 393 * 100cqw), 64px)",
            borderRadius:    "15px",
            backgroundImage: "linear-gradient(68.755deg, rgb(46,130,120) 28.77%, rgb(151,49,161) 193.41%)",
            boxShadow:       "0 4px 20px rgba(46,130,120,0.22)",
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
          <Link
            href="/login"
            style={{ color: "#2e8278", fontWeight: 600 }}
          >
            Faça o Login
          </Link>
        </p>
      </div>

      {/* ──────────────────────────────────────────────────────────────────
        Z10 · LOGO (node 34:314 — FEVA APP HORIZONTAL COLORIDO 1)
        Figma: left=26 top=103 width=121 aspect=4096/1389 (~121×41px)
        Imagem: 4096×1389px (alta resolução — Next/Image otimiza)
        TOPO do stack — sobre tudo
      ────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute"
        style={{
          left:        "calc(26  / 393 * 100%)",
          top:         "calc(103 / 852 * 100%)",
          width:       "calc(121 / 393 * 100%)",
          aspectRatio: "4096 / 1389",
          zIndex:      10,
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
