export default function Features() {
  const features = [
    {
      icon: "🪞",
      title: "Espelho Emocional",
      description:
        "Registre seus estados emocionais diários e veja padrões que antes passavam despercebidos. O FEVA reflete sua mente de volta pra você.",
      color: "#2e8278",
      bg: "rgba(46,130,120,0.08)",
    },
    {
      icon: "🔄",
      title: "Quebre Ciclos",
      description:
        "Identifique gatilhos, comportamentos repetitivos e ciclos emocionais. Com clareza vem a liberdade de escolher respostas diferentes.",
      color: "#9731a1",
      bg: "rgba(151,49,161,0.08)",
    },
    {
      icon: "🧩",
      title: "Autoconhecimento Prático",
      description:
        "Ferramentas simples e sem jargão clínico. Exercícios guiados para você se entender melhor a cada dia — no seu ritmo.",
      color: "#023e44",
      bg: "rgba(2,62,68,0.08)",
    },
    {
      icon: "📊",
      title: "Insights Visuais",
      description:
        "Gráficos e relatórios que mostram sua jornada emocional ao longo do tempo. Veja seu progresso e celebre cada conquista.",
      color: "#2e8278",
      bg: "rgba(46,130,120,0.08)",
    },
    {
      icon: "🎯",
      title: "Metas de Bem-estar",
      description:
        "Defina metas pessoais de saúde emocional e receba lembretes gentis. Pequenos passos diários constroem grandes transformações.",
      color: "#9731a1",
      bg: "rgba(151,49,161,0.08)",
    },
    {
      icon: "🛡️",
      title: "Sem Julgamentos",
      description:
        "Um espaço seguro e completamente privado. Seus dados são seus. Aqui você pode ser honesto consigo mesmo sem qualquer julgamento.",
      color: "#023e44",
      bg: "rgba(2,62,68,0.08)",
    },
  ];

  return (
    <section
      id="funcionalidades"
      className="py-24 font-poppins"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, rgba(37,199,177,0.04) 50%, #ffffff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-feva-teal/10 text-feva-teal text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Funcionalidades
          </div>
          <h2
            className="font-semibold text-feva-dark leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            Tudo que sua mente precisa
          </h2>
          <p className="text-feva-gray-dark text-base max-w-xl mx-auto leading-relaxed">
            O FEVA reúne as ferramentas certas para transformar autoconhecimento
            em prática diária — de forma leve e acessível.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.title}
              className="card-feva p-6 rounded-[20px]"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: feat.bg }}
              >
                {feat.icon}
              </div>
              <h3
                className="font-semibold text-feva-dark text-lg mb-3"
                style={{ color: feat.color }}
              >
                {feat.title}
              </h3>
              <p className="text-feva-gray text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
