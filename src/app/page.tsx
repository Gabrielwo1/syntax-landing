import Image from "next/image";
import Link from "next/link";

/**
 * FEVA — Home Screen
 * Réplica pixel-perfect do Figma node 34:29 (frame 393×852px)
 *
 * Sistema de coordenadas:
 *   X → calc(px / 393 * 100%)   | escalona pela largura do viewport
 *   Y → calc(px / 852 * 100%)   | escalona pela altura do viewport
 *   Font → clamp(min, Xvw, max) | fluido entre breakpoints
 *
 * Z-order (de trás pra frente, igual ao Figma):
 *   1. Blob roxa curva (34:296) — fundo decorativo
 *   2. Ellipse teal (34:31)     — blob esquerda
 *   3. Ellipse rosa (34:30)     — blob inferior
 *   4. Brain / ilustração (11:4490)  ← sobre os blobs
 *   5. Dots decorativos (34:32–34)
 *   6. Deco top-right (34:297)
 *   7. Título, descrição, underline
 *   8. CTA
 *   9. Logo ← topo do stack
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
          "linear-gradient(180deg, rgba(37,199,177,0.05) 0%, rgba(0,101,110,0.05) 48.301%, rgba(151,49,161,0.05) 100%), #fff",
        fontFamily: "'Poppins', sans-serif",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
    >

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 1 — CURVA ROXA TOP-RIGHT (node 34:296)
          Figma: inset -12.56% -28.8% 71.99% 58.52% | container-type:size
          Inner: rotate(-105deg) + hypot(cqw,cqh) sizing
          Calculado no base 393×852:
            container → left=230px top=-107px w=276px h=345px
            inner     → w≈302px h≈205px (hypot das frações cq)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          inset:         "-12.56% -28.8% 71.99% 58.52%",
          containerType: "size",
          zIndex:        0,
        } as React.CSSProperties}
      >
        <div
          style={{
            transform:  "rotate(-105deg)",
            flexShrink: 0,
            width:      "hypot(28.3888cqw, 84.6662cqh)",
            height:     "hypot(71.6112cqw, 15.3338cqh)",
            position:   "relative",
          }}
        >
          <Image
            src="/assets/feva-vector-curve.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 2 — BLOB TEAL ESQUERDA (node 34:31 — Ellipse 6)
          Figma: left=-85px top=566px size=105×105px
          (sai 85px pela borda esquerda — só a fatia direita é visível)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:   "calc(-85 / 393 * 100%)",
          top:    "calc(566 / 852 * 100%)",
          width:  "calc(105 / 393 * 100%)",
          height: "calc(105 / 393 * 100%)",
          zIndex: 1,
        }}
      >
        <Image src="/assets/feva-ellipse-teal.png" alt="" fill className="object-contain" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 3 — BLOB ROSA (node 34:30 — Ellipse 2)
          Figma: left=151px top=686px size=291×291px
          (extende além das bordas direita e inferior)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:   "calc(151 / 393 * 100%)",
          top:    "calc(686 / 852 * 100%)",
          width:  "calc(291 / 393 * 100%)",
          height: "calc(291 / 393 * 100%)",
          zIndex: 2,
        }}
      >
        <Image src="/assets/feva-ellipse-pink.png" alt="" fill className="object-contain" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 4 — ILUSTRAÇÃO CÉREBRO (node 11:4490)
          Figma: top=575px left=21px right=23px bottom=0
          Dimensão calculada: 349×277px
          ← SOBRE os blobs (Ellipse 2 e 6)
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top:    "calc(575 / 852 * 100%)",
          left:   "calc(21  / 393 * 100%)",
          right:  "calc(23  / 393 * 100%)",
          bottom: 0,
          zIndex: 3,
        }}
      >
        <Image
          src="/assets/feva-brain.png"
          alt="Ilustração da mente emocional"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 5 — DOTS DECORATIVOS
          (nodes 34:32, 34:33, 34:34)
      ═══════════════════════════════════════════════════════════════════ */}

      {/* Dot teal 23×23 — left=39 top=754 */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:   "calc(39 / 393 * 100%)",
          top:    "calc(754 / 852 * 100%)",
          width:  "calc(23 / 393 * 100%)",
          height: "calc(23 / 393 * 100%)",
          zIndex: 4,
        }}
      >
        <Image src="/assets/feva-dot-23.png" alt="" fill className="object-contain" />
      </div>

      {/* Dot pequeno 14×14 — left=64 top=817 */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:   "calc(64 / 393 * 100%)",
          top:    "calc(817 / 852 * 100%)",
          width:  "calc(14 / 393 * 100%)",
          height: "calc(14 / 393 * 100%)",
          zIndex: 4,
        }}
      >
        <Image src="/assets/feva-dot-14.png" alt="" fill className="object-contain" />
      </div>

      {/* Dot pequeno 14×14 — left=32 top=508 */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left:   "calc(32 / 393 * 100%)",
          top:    "calc(508 / 852 * 100%)",
          width:  "calc(14 / 393 * 100%)",
          height: "calc(14 / 393 * 100%)",
          zIndex: 4,
        }}
      >
        <Image src="/assets/feva-dot-14b.png" alt="" fill className="object-contain" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 6 — DECO TOP-RIGHT (node 34:297 — Group3, 78×80px)
          Figma: top=18px right=10px width=78px height=80px
      ═══════════════════════════════════════════════════════════════════ */}
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
        <Image src="/assets/feva-deco-tr.png" alt="" fill className="object-contain" />
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 7 — TÍTULO (node 34:35)
          Figma: left=26 top=173 width=318 | Poppins SemiBold 34px
          Cor: #023e44 / "mora em você." → #2e8278
      ═══════════════════════════════════════════════════════════════════ */}
      <h1
        className="absolute m-0 p-0"
        style={{
          left:          "calc(26  / 393 * 100%)",
          top:           "calc(173 / 852 * 100%)",
          width:         "calc(318 / 393 * 100%)",
          fontSize:      "clamp(24px, calc(34 / 393 * 100vw), 48px)",
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

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 7b — UNDERLINE SQUIGGLE (node 34:41 — Vector 1)
          Figma: outer left=20 top=273 w=116.26 h=70.92
                 inner  w=111.5 h=33.8 rotate(20.63deg) inset-top=-0.9px
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none flex items-center justify-center"
        style={{
          left:   "calc(20     / 393 * 100%)",
          top:    "calc(273    / 852 * 100%)",
          width:  "calc(116.26 / 393 * 100%)",
          height: "calc(70.92  / 852 * 100%)",
          zIndex: 6,
        }}
      >
        <div
          style={{
            transform:  "rotate(20.63deg)",
            flexShrink: 0,
            width:      "calc(111.5 / 393 * 100vw)",
            height:     "calc(33.8  / 393 * 100vw)",
            position:   "relative",
            marginTop:  "calc(-0.9  / 393 * 100vw)",
          }}
        >
          <Image src="/assets/feva-underline.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 7c — DESCRIÇÃO (node 34:40)
          Figma: left=26 top=322 width=339 | Poppins Regular 14px #555
      ═══════════════════════════════════════════════════════════════════ */}
      <p
        className="absolute m-0 p-0"
        style={{
          left:       "calc(26  / 393 * 100%)",
          top:        "calc(322 / 852 * 100%)",
          width:      "calc(339 / 393 * 100%)",
          fontSize:   "clamp(11px, calc(14 / 393 * 100vw), 17px)",
          fontWeight: 400,
          lineHeight: 1.65,
          color:      "#555555",
          zIndex:     6,
        }}
      >
        O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e
        aprenda a se entender de um jeito prático — sem julgamentos, sem
        complicação.
      </p>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 8 — ÁREA CTA (node 34:36 — Frame 3)
          Figma: left=26 top=426 width=340 gap=17px
          ├─ Botão: height=51px radius=15px gradient teal→roxo
          └─ Link:  14px #6a6a6a / "Faça o Login" #2e8278 SemiBold
      ═══════════════════════════════════════════════════════════════════ */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          left:   "calc(26  / 393 * 100%)",
          top:    "calc(426 / 852 * 100%)",
          width:  "calc(340 / 393 * 100%)",
          gap:    "calc(17  / 393 * 100vw)",
          zIndex: 8,
        }}
      >
        <Link
          href="/entrar"
          className="flex w-full items-center justify-center shrink-0 transition-opacity duration-200 active:opacity-80"
          style={{
            height:          "clamp(44px, calc(51 / 393 * 100vw), 64px)",
            borderRadius:    "15px",
            backgroundImage: "linear-gradient(68.755deg, rgb(46,130,120) 28.77%, rgb(151,49,161) 193.41%)",
            boxShadow:       "0 4px 24px rgba(46,130,120,0.25)",
          }}
        >
          <span
            style={{
              fontSize:   "clamp(14px, calc(18 / 393 * 100vw), 22px)",
              fontWeight: 600,
              color:      "#ffffff",
              lineHeight: 1,
              whiteSpace: "nowrap",
              letterSpacing: "0.01em",
            }}
          >
            Entre agora
          </span>
        </Link>

        <p
          className="m-0 text-center w-full"
          style={{
            fontSize:   "clamp(11px, calc(14 / 393 * 100vw), 17px)",
            fontWeight: 400,
            lineHeight: 1.5,
            color:      "#6a6a6a",
          }}
        >
          Já tem conta?{" "}
          <Link
            href="/login"
            className="transition-opacity duration-150 active:opacity-70"
            style={{ color: "#2e8278", fontWeight: 600 }}
          >
            Faça o Login
          </Link>
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════════
          CAMADA 9 — LOGO (node 34:314 — FEVA APP HORIZONTAL COLORIDO 1)
          Figma: left=26 top=103 width=121 aspect=4096/1389 (≈121×41px)
          ← No TOPO do stack — sobre tudo
      ═══════════════════════════════════════════════════════════════════ */}
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
        <Image
          src="/assets/feva-logo.png"
          alt="FEVA"
          fill
          priority
          className="object-contain object-left"
        />
      </div>

    </main>
  );
}
