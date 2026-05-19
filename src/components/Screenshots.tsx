import Image from "next/image";

export default function Screenshots() {
  const screens = [
    {
      title: "Registro Emocional",
      description: "Interface simples para anotar como você está se sentindo a qualquer momento do dia.",
      bg: "rgba(46,130,120,0.06)",
    },
    {
      title: "Mapa de Padrões",
      description: "Visualize seus padrões emocionais ao longo do tempo com gráficos intuitivos.",
      bg: "rgba(151,49,161,0.06)",
    },
    {
      title: "Exercícios Guiados",
      description: "Práticas de autoconhecimento e regulação emocional acessíveis e sem julgamentos.",
      bg: "rgba(2,62,68,0.06)",
    },
  ];

  return (
    <section
      id="app"
      className="py-24 font-poppins overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(37,199,177,0.04) 0%, rgba(151,49,161,0.05) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-feva-dark/10 text-feva-dark text-xs font-semibold px-4 py-2 rounded-full mb-6">
            O Aplicativo
          </div>
          <h2
            className="font-semibold text-feva-dark leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            Designed para a sua mente
          </h2>
          <p className="text-feva-gray-dark text-base max-w-xl mx-auto leading-relaxed">
            Uma experiência cuidadosamente pensada para ser simples, acolhedora e
            poderosa ao mesmo tempo.
          </p>
        </div>

        {/* Phone mockup showcase */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Central phone mockup */}
          <div className="flex-shrink-0 relative animate-float">
            <div
              className="relative mx-auto rounded-[40px] overflow-hidden"
              style={{
                width: 280,
                height: 580,
                background:
                  "linear-gradient(180deg, rgba(37,199,177,0.06) 0%, rgba(0,101,110,0.05) 48%, rgba(151,49,161,0.06) 100%), #ffffff",
                boxShadow:
                  "0 40px 80px rgba(46,130,120,0.2), 0 8px 32px rgba(151,49,161,0.15), inset 0 0 0 1px rgba(46,130,120,0.15)",
              }}
            >
              {/* Phone notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-5 bg-feva-dark/5 rounded-full z-10" />

              {/* App content */}
              <div className="absolute inset-0 flex flex-col pt-14 px-5 pb-8">
                {/* Logo in phone */}
                <Image
                  src="/assets/feva-logo.png"
                  alt="FEVA"
                  width={90}
                  height={30}
                  className="h-7 w-auto object-contain mb-6"
                />

                <h3
                  className="font-semibold text-feva-dark text-xl mb-2 leading-tight"
                  style={{ fontSize: "1.3rem" }}
                >
                  Conheça a mente que{" "}
                  <span className="text-feva-teal">mora em você.</span>
                </h3>

                <p className="text-feva-gray text-xs leading-relaxed mb-6">
                  O FEVA é o seu espelho emocional.
                </p>

                <button
                  className="btn-feva w-full py-3.5 text-sm font-semibold rounded-[15px] mb-3"
                >
                  Entre agora
                </button>

                <p className="text-feva-gray text-xs text-center">
                  Já tem conta?{" "}
                  <span className="text-feva-teal font-semibold">Faça o Login</span>
                </p>

                {/* Brain illustration */}
                <div className="flex-1 flex items-end justify-center pb-2">
                  <Image
                    src="/assets/feva-brain.png"
                    alt="Ilustração"
                    width={240}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-feva-dark/20 rounded-full" />
            </div>
          </div>

          {/* Feature highlights */}
          <div className="flex-1 grid gap-6">
            {screens.map((screen) => (
              <div
                key={screen.title}
                className="card-feva p-6 flex items-start gap-5"
                style={{ background: screen.bg }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(68.75deg, rgb(46, 130, 120) 28.77%, rgb(151, 49, 161) 193.41%)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-feva-dark text-base mb-2">
                    {screen.title}
                  </h4>
                  <p className="text-feva-gray text-sm leading-relaxed">
                    {screen.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
