import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="relative w-full overflow-hidden"
      style={{
        height: "100dvh",
        minHeight: "852px",
        background:
          "linear-gradient(180deg, rgba(37,199,177,0.05) 0%, rgba(0,101,110,0.05) 48.301%, rgba(151,49,161,0.05) 100%), #fff",
        fontFamily: "'Poppins', sans-serif",
      }}
    >

      {/* ── BLOB ROXO TOP-RIGHT ─────────────────────────────────────────────
          Figma: inset top=-12.56% right=-28.8% bottom=71.99% left=58.52%
          Em px (393×852): top=-107, right=-113, left=230, height=346, width=276 */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "calc(-107 / 852 * 100%)",
          right: "calc(-113 / 393 * 100%)",
          width: "calc(276 / 393 * 100%)",
          height: "calc(346 / 852 * 100%)",
        }}
      >
        <Image
          src="/assets/feva-blob-purple.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* ── DECO TOP-RIGHT (Group3) ─────────────────────────────────────────
          Figma: inset top=2.11% right=2.56% bottom=88.5% left=77.61%
          Em px: top=18, right=10, width=78, height=80 */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "calc(18 / 852 * 100%)",
          right: "calc(10 / 393 * 100%)",
          width: "calc(78 / 393 * 100%)",
          height: "calc(80 / 852 * 100%)",
        }}
      >
        <Image
          src="/assets/feva-deco-tr.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* ── LOGO ────────────────────────────────────────────────────────────
          Figma: left=26, top=103, width=121, height=41 (aspect 4096/1389) */}
      <div
        className="absolute"
        style={{
          left: "calc(26 / 393 * 100%)",
          top: "calc(103 / 852 * 100%)",
          width: "calc(121 / 393 * 100%)",
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

      {/* ── TÍTULO ─────────────────────────────────────────────────────────
          Figma: left=26, top=173, width=318, font=Poppins SemiBold 34px
          Cor: #023e44 + span teal #2e8278, line-height≈1.15 */}
      <h1
        className="absolute"
        style={{
          left: "calc(26 / 393 * 100%)",
          top: "calc(173 / 852 * 100%)",
          width: "calc(318 / 393 * 100%)",
          fontSize: "clamp(28px, calc(34 / 393 * 100vw), 52px)",
          fontWeight: 600,
          lineHeight: 1.15,
          color: "#023e44",
          letterSpacing: "-0.01em",
        }}
      >
        {"Conheça a mente que "}
        <span style={{ color: "#2e8278" }}>mora em você.</span>
      </h1>

      {/* ── UNDERLINE SQUIGGLE ─────────────────────────────────────────────
          Figma: left≈20, top=273, width=116.26, height=70.92, rotate=20.63°
          Inner SVG: w=111.5, h=33.8 */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: "calc(20 / 393 * 100%)",
          top: "calc(273 / 852 * 100%)",
          width: "calc(116.26 / 393 * 100%)",
          height: "calc(70.92 / 852 * 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            transform: "rotate(20.63deg)",
            width: "calc(111.5 / 393 * 100vw)",
            height: "calc(33.8 / 393 * 100vw)",
            position: "relative",
          }}
        >
          <Image
            src="/assets/feva-underline.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* ── DESCRIÇÃO ──────────────────────────────────────────────────────
          Figma: left=26, top=322, width=339, font=Poppins Regular 14px, #555 */}
      <p
        className="absolute"
        style={{
          left: "calc(26 / 393 * 100%)",
          top: "calc(322 / 852 * 100%)",
          width: "calc(339 / 393 * 100%)",
          fontSize: "clamp(12px, calc(14 / 393 * 100vw), 18px)",
          fontWeight: 400,
          lineHeight: 1.6,
          color: "#555555",
        }}
      >
        O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e
        aprenda a se entender de um jeito prático — sem julgamentos, sem
        complicação.
      </p>

      {/* ── DOT PEQUENO (Ellipse 5) ─────────────────────────────────────────
          Figma: left=32, top=508, size=14×14 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "calc(32 / 393 * 100%)",
          top: "calc(508 / 852 * 100%)",
          width: "calc(14 / 393 * 100%)",
          height: "calc(14 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-dot-sm.png" alt="" fill className="object-contain" />
      </div>

      {/* ── ÁREA CTA ────────────────────────────────────────────────────────
          Figma Frame3: left=26, top=426, width=340, gap=17
          Botão: h=51, rounded=15, gradient
          Link: font=14px */}
      <div
        className="absolute flex flex-col items-center"
        style={{
          left: "calc(26 / 393 * 100%)",
          top: "calc(426 / 852 * 100%)",
          width: "calc(340 / 393 * 100%)",
          gap: "calc(17 / 393 * 100vw)",
        }}
      >
        {/* Botão "Entre agora" */}
        <Link
          href="/login"
          className="flex items-center justify-center w-full shrink-0"
          style={{
            height: "clamp(44px, calc(51 / 393 * 100vw), 64px)",
            borderRadius: "15px",
            backgroundImage:
              "linear-gradient(68.755deg, rgb(46,130,120) 28.77%, rgb(151,49,161) 193.41%)",
          }}
        >
          <span
            style={{
              fontSize: "clamp(15px, calc(18 / 393 * 100vw), 22px)",
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            Entre agora
          </span>
        </Link>

        {/* "Já tem conta? Faça o Login" */}
        <p
          className="text-center w-full"
          style={{
            fontSize: "clamp(12px, calc(14 / 393 * 100vw), 17px)",
            lineHeight: 1.4,
            color: "#6a6a6a",
            fontWeight: 400,
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

      {/* ── ELLIPSE TEAL (Ellipse 6) ────────────────────────────────────────
          Figma: left=-85, top=566, size=105×105 (parcialmente fora) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "calc(-85 / 393 * 100%)",
          top: "calc(566 / 852 * 100%)",
          width: "calc(105 / 393 * 100%)",
          height: "calc(105 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-ellipse-purple-sm.png" alt="" fill className="object-contain" />
      </div>

      {/* ── ILUSTRAÇÃO CÉREBRO (Group 11:4490) ────────────────────────────
          Figma: top=575 (67.49%), left=21 (5.34%), right=23 (5.75%), bottom=0
          Width=349, Height=277 */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "calc(575 / 852 * 100%)",
          left: "calc(21 / 393 * 100%)",
          right: "calc(23 / 393 * 100%)",
          bottom: 0,
        }}
      >
        <Image
          src="/assets/feva-brain.png"
          alt="Ilustração mente emocional"
          fill
          className="object-contain object-bottom"
        />
      </div>

      {/* ── ELLIPSE ROSA (Ellipse 2) ────────────────────────────────────────
          Figma: left=151, top=686, size=291×291 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "calc(151 / 393 * 100%)",
          top: "calc(686 / 852 * 100%)",
          width: "calc(291 / 393 * 100%)",
          height: "calc(291 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-ellipse-pink.png" alt="" fill className="object-contain" />
      </div>

      {/* ── DOT MÉDIO (Ellipse 3) ───────────────────────────────────────────
          Figma: left=39, top=754, size=23×23 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "calc(39 / 393 * 100%)",
          top: "calc(754 / 852 * 100%)",
          width: "calc(23 / 393 * 100%)",
          height: "calc(23 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-dot-teal.png" alt="" fill className="object-contain" />
      </div>

      {/* ── DOT PEQUENO (Ellipse 4) ─────────────────────────────────────────
          Figma: left=64, top=817, size=14×14 */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "calc(64 / 393 * 100%)",
          top: "calc(817 / 852 * 100%)",
          width: "calc(14 / 393 * 100%)",
          height: "calc(14 / 393 * 100%)",
        }}
      >
        <Image src="/assets/feva-dot-sm.png" alt="" fill className="object-contain" />
      </div>

    </main>
  );
}
