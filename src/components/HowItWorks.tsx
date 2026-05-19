export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Crie sua conta",
      description:
        "Cadastro rápido em menos de 2 minutos. Sem cartão de crédito. Comece gratuitamente e descubra o FEVA no seu ritmo.",
      color: "#2e8278",
    },
    {
      number: "02",
      title: "Registre suas emoções",
      description:
        "Diariamente, anote como você está se sentindo. O FEVA usa perguntas simples e intuitivas para capturar seu estado emocional.",
      color: "#9731a1",
    },
    {
      number: "03",
      title: "Descubra seus padrões",
      description:
        "Com o tempo, o FEVA revela padrões emocionais, gatilhos e ciclos. Você começa a se entender de uma forma completamente nova.",
      color: "#023e44",
    },
    {
      number: "04",
      title: "Quebre ciclos e evolua",
      description:
        "Use os insights para tomar decisões mais conscientes, desenvolver resiliência e construir uma vida emocionalmente mais saudável.",
      color: "#2e8278",
    },
  ];

  return (
    <section
      id="como-funciona"
      className="py-24 font-poppins"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-feva-purple/10 text-feva-purple text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Como funciona
          </div>
          <h2
            className="font-semibold text-feva-dark leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            Sua jornada começa aqui
          </h2>
          <p className="text-feva-gray-dark text-base max-w-xl mx-auto leading-relaxed">
            4 passos simples para transformar a sua relação com suas emoções.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-full w-full h-[2px] z-0"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(46,130,120,0.3) 0%, rgba(151,49,161,0.3) 100%)",
                    width: "calc(100% - 2rem)",
                    left: "calc(50% + 1.5rem)",
                  }}
                />
              )}

              <div className="relative z-10 text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 font-bold text-xl text-white"
                  style={{
                    background:
                      "linear-gradient(68.75deg, rgb(46, 130, 120) 28.77%, rgb(151, 49, 161) 193.41%)",
                    boxShadow: "0 8px 24px rgba(46,130,120,0.25)",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  className="font-semibold text-feva-dark text-lg mb-3"
                  style={{ color: step.color }}
                >
                  {step.title}
                </h3>
                <p className="text-feva-gray text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
