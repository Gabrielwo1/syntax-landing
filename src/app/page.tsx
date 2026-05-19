import Image from "next/image";
import Link from "next/link";

/*
 * Home Screen — pixel-perfect replica do Figma (node 34:29, frame 393×852)
 * Todas as posições/tamanhos em calc(px / 393 * 100%) ou calc(px / 852 * 100%)
 * para escalar proporcionalmente em qualquer viewport mobile.
 */
export default function Home() {
  return (
    <main
      className="relative w-full overflow-hidden"
      style={{
        height: "100dvh",
        minHeight: "600px",
        background:
          "linear-gradient(180deg, rgba(37,199,177,0.05) 0%, rgba(0,101,110,0.05) 48.301%, rgba(151,49,161,0.05) 100%), #ffffff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      {/* ─────────────────────────────────────────────────────────────────────
          VECTOR CURVA ROXA TOP-RIGHT  (node 34:296)
          Figma: containerType=size, inset top=-12.56% right=-28.8% bottom=71.99% left=58.52%
          Posição calculada: left=230px top=-107px width=276px height=345px
          Inner: rotate(-105deg), imagem 153×208px preenchendo o container
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none overflow-hidden"
        style={{
          left:   "calc(230 / 393 * 100%)",
          top:    "calc(-107 / 852 * 100%)",
          width:  "calc(276 / 393 * 100%)",
          height: "calc(345 / 852 * 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ transform: "rotate(-105deg)", width: "130%", height: "130%", position: "relative" }}>
          <Image
            src="/assets/feva-vector-curve.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          DECO TOP-RIGHT  (node 34:297 — Group3, 78×80px)
          Figma: top=18px right=10px width=78px height=80px
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top:    "calc(18 / 852 * 100%)",
          right:  "calc(10 / 393 * 100%)",
          width:  "calc(78 / 393 * 100%)",
          height: "calc(80 / 852 * 100%)",
          position: "absolute",
        }}
      >
        <Image src="/assets/feva-deco-tr.png" alt="" fill className="object-contain" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          LOGO  (node 34:314 — FEVA APP HORIZONTAL COLORIDO 1)
          Figma: left=26px top=103px width=121px aspect=4096/1389 (≈121×41px)
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute"
        style={{
          left:        "calc(26 / 393 * 100%)",
          top:         "calc(103 / 852 * 100%)",
          width:       "calc(121 / 393 * 100%)",
          aspectRatio: "4096 / 1389",
        }}
      >
        <Image
          src="/assets/feva-logo.png"
          alt="FEVA"
          fill
          className="object-contain object-left"
          priority
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          TÍTULO  (node 34:35)
          Figma: left=26px top=173px width=318px
          Font: Poppins SemiBold 34px, #023e44 / span #2e8278
          Line-height: 1.15 (aprox. do 78.52% de 34px × proporção visual)
      ──────────────────────────────────────────────────────────────────────── */}
      <h1
        className="absolute m-0 p-0"
        style={{
          left:       "calc(26 / 393 * 100%)",
          top:        "calc(173 / 852 * 100%)",
          width:      "calc(318 / 393 * 100%)",
          fontSize:   "clamp(24px, calc(34 / 393 * 100vw), 48px)",
          fontWeight: 600,
          lineHeight: 1.15,
          color:      "#023e44",
          letterSpacing: "-0.01em",
        }}
      >
        {"Conheça a mente que "}
        <span style={{ color: "#2e8278" }}>mora em você.</span>
      </h1>

      {/* ─────────────────────────────────────────────────────────────────────
          UNDERLINE SQUIGGLE  (node 34:41 — Vector 1)
          Figma: container left=20px top=273px w=116.26px h=70.92px
          Inner img: w=111.5px h=33.8px, rotate(20.63deg)
          inset-top: -2.67% = -0.9px (img sobe levemente)
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left:   "calc(20 / 393 * 100%)",
          top:    "calc(273 / 852 * 100%)",
          width:  "calc(116.26 / 393 * 100%)",
          height: "calc(70.92 / 852 * 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            transform:      "rotate(20.63deg)",
            width:          "calc(111.5 / 393 * 100vw)",
            height:         "calc(33.8 / 393 * 100vw)",
            position:       "relative",
            marginTop:      "calc(-0.9 / 393 * 100vw)",
          }}
        >
          <Image src="/assets/feva-underline.png" alt="" fill className="object-contain" />
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          DESCRIÇÃO  (node 34:40)
          Figma: left=26px top=322px width=339px
          Font: Poppins Regular 14px, #555555, line-height normal
      ──────────────────────────────────────────────────────────────────────── */}
      <p
        className="absolute m-0 p-0"
        style={{
          left:       "calc(26 / 393 * 100%)",
          top:        "calc(322 / 852 * 100%)",
          width:      "calc(339 / 393 * 100%)",
          fontSize:   "clamp(11px, calc(14 / 393 * 100vw), 18px)",
          fontWeight: 400,
          lineHeight: 1.6,
          color:      "#555555",
        }}
      >
        O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e
        aprenda a se entender de um jeito prático — sem julgamentos, sem
        complicação.
      </p>

      {/* ─────────────────────────────────────────────────────────────────────
          DOT ELLIPSE 5  (node 34:34)
          Figma: left=32px top=508px size=14×14px
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left:   "calc(32 / 393 * 100%)",
          top:    "calc(508 / 852 * 100%)",
          width:  "calc(14 / 393 * 100%)",
          height: "calc(14 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-dot-14b.png" alt="" fill className="object-contain" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          ÁREA CTA  (node 34:36 — Frame 3)
          Figma: left=26px top=426px width=340px gap=17px
          ├── Botão "Entre agora": height=51px rounded=15px gradient
          └── "Já tem conta? Faça o Login": 14px centered #6a6a6a + #2e8278
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          left:  "calc(26 / 393 * 100%)",
          top:   "calc(426 / 852 * 100%)",
          width: "calc(340 / 393 * 100%)",
          gap:   "calc(17 / 393 * 100vw)",
        }}
      >
        <Link
          href="/login"
          className="flex w-full items-center justify-center shrink-0"
          style={{
            height:          "clamp(42px, calc(51 / 393 * 100vw), 64px)",
            borderRadius:    "15px",
            backgroundImage: "linear-gradient(68.755deg, rgb(46,130,120) 28.77%, rgb(151,49,161) 193.41%)",
          }}
        >
          <span
            style={{
              fontSize:   "clamp(14px, calc(18 / 393 * 100vw), 22px)",
              fontWeight: 600,
              color:      "#ffffff",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Entre agora
          </span>
        </Link>

        <p
          className="text-center w-full m-0"
          style={{
            fontSize:   "clamp(11px, calc(14 / 393 * 100vw), 18px)",
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

      {/* ─────────────────────────────────────────────────────────────────────
          ELLIPSE 6 — teal blob esquerda  (node 34:31)
          Figma: left=-85px top=566px size=105×105px (parcialmente fora)
          A imagem capturada (20×105) é só a fatia visível;
          posiciono o elemento completo (105px) saindo pela esquerda.
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left:   "calc(-85 / 393 * 100%)",
          top:    "calc(566 / 852 * 100%)",
          width:  "calc(105 / 393 * 100%)",
          height: "calc(105 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-ellipse-teal.png" alt="" fill className="object-contain" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          ILUSTRAÇÃO CÉREBRO  (node 11:4490 — Group)
          Figma: top=575px left=21px right=23px bottom=0
          Size calculado: width=349px height=277px
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top:    "calc(575 / 852 * 100%)",
          left:   "calc(21 / 393 * 100%)",
          right:  "calc(23 / 393 * 100%)",
          bottom: 0,
        }}
      >
        <Image
          src="/assets/feva-brain.png"
          alt="Ilustração mente emocional FEVA"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          ELLIPSE 2 — blob rosa/salmão  (node 34:30)
          Figma: left=151px top=686px size=291×291px
          (estende além das bordas direita e inferior — clipped pelo overflow:hidden)
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left:   "calc(151 / 393 * 100%)",
          top:    "calc(686 / 852 * 100%)",
          width:  "calc(291 / 393 * 100%)",
          height: "calc(291 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-ellipse-pink.png" alt="" fill className="object-contain" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          DOT ELLIPSE 3  (node 34:32) — 23×23px
          Figma: left=39px top=754px
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left:   "calc(39 / 393 * 100%)",
          top:    "calc(754 / 852 * 100%)",
          width:  "calc(23 / 393 * 100%)",
          height: "calc(23 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-dot-23.png" alt="" fill className="object-contain" />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────
          DOT ELLIPSE 4  (node 34:33) — 14×14px
          Figma: left=64px top=817px
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none"
        style={{
          left:   "calc(64 / 393 * 100%)",
          top:    "calc(817 / 852 * 100%)",
          width:  "calc(14 / 393 * 100%)",
          height: "calc(14 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-dot-14.png" alt="" fill className="object-contain" />
      </div>

    </main>
  );
}
