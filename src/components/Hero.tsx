import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(37,199,177,0.06) 0%, rgba(0,101,110,0.05) 48%, rgba(151,49,161,0.06) 100%), #ffffff",
      }}
    >
      {/* Decorative blobs — from Figma */}
      <div
        className="absolute top-0 right-[-60px] w-[340px] h-[340px] rounded-full pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(151,49,161,0.35) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-[-80px] w-[280px] h-[280px] rounded-full pointer-events-none opacity-25"
        style={{ background: "radial-gradient(circle, rgba(37,199,177,0.4) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — copy */}
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-feva-teal/10 text-feva-teal text-xs font-semibold px-4 py-2 rounded-full mb-8 font-poppins">
            <span className="w-1.5 h-1.5 rounded-full bg-feva-teal animate-pulse" />
            Saúde emocional acessível para todos
          </div>

          <h1 className="font-poppins font-semibold text-feva-dark leading-tight mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Conheça a mente que{" "}
            <span className="text-feva-teal">mora em você.</span>
          </h1>

          {/* Underline decoration from Figma */}
          <div className="mb-8">
            <Image
              src="/assets/feva-underline.png"
              alt=""
              width={116}
              height={71}
              className="opacity-80"
            />
          </div>

          <p className="font-poppins text-feva-gray-dark text-base leading-relaxed mb-10 max-w-lg">
            O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e
            aprenda a se entender de um jeito prático — sem julgamentos, sem
            complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12" id="comecar">
            <a
              href="#comecar"
              className="btn-feva inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-[15px] shadow-lg"
              style={{ boxShadow: "0 8px 24px rgba(46,130,120,0.3)" }}
            >
              Entre agora
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-[15px] border-2 text-feva-teal hover:bg-feva-teal/5 transition-colors duration-200 font-poppins"
              style={{ borderColor: "#2e8278" }}
            >
              Saiba mais
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <p className="font-poppins text-sm text-feva-gray">
            Já tem conta?{" "}
            <a href="#login" className="font-semibold text-feva-teal hover:underline">
              Faça o Login
            </a>
          </p>
        </div>

        {/* Right — brain illustration from Figma */}
        <div className="relative flex justify-center items-end">
          <div className="animate-float relative z-10">
            <Image
              src="/assets/feva-brain.png"
              alt="Ilustração da mente emocional FEVA"
              width={380}
              height={340}
              className="w-full max-w-[380px] h-auto drop-shadow-xl"
            />
          </div>

          {/* Floating emotion cards */}
          <div className="absolute top-4 right-0 lg:-right-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 z-20 animate-float-delayed"
            style={{ boxShadow: "0 8px 32px rgba(46,130,120,0.15)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: "rgba(46,130,120,0.1)" }}>
              🧠
            </div>
            <div>
              <p className="text-xs font-semibold text-feva-dark font-poppins">Padrão identificado</p>
              <p className="text-[11px] text-feva-gray font-poppins">Ansiedade reduzida 34%</p>
            </div>
          </div>

          <div className="absolute bottom-12 left-0 lg:-left-8 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 z-20 animate-float"
            style={{ boxShadow: "0 8px 32px rgba(151,49,161,0.12)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: "rgba(151,49,161,0.1)" }}>
              💚
            </div>
            <div>
              <p className="text-xs font-semibold text-feva-dark font-poppins">Ciclo quebrado!</p>
              <p className="text-[11px] text-feva-gray font-poppins">7 dias de autocuidado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
