export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Beatriz",
      role: "Designer, 28 anos",
      text: "O FEVA me ajudou a perceber que minha ansiedade tinha padrões claros. Depois de 3 semanas usando, já consegui identificar meus principais gatilhos emocionais.",
      avatar: "AB",
      color: "#2e8278",
    },
    {
      name: "Rafael Mendes",
      role: "Analista, 34 anos",
      text: "Sem julgamentos, sem termos complicados. É exatamente o que precisava para começar a cuidar da minha saúde mental de forma prática no dia a dia.",
      avatar: "RM",
      color: "#9731a1",
    },
    {
      name: "Camila Torres",
      role: "Professora, 31 anos",
      text: "Nunca pensei que registrar minhas emoções poderia ser tão revelador. Em um mês quebrei um ciclo de procrastinação que me acompanhava há anos.",
      avatar: "CT",
      color: "#023e44",
    },
    {
      name: "Lucas Ferreira",
      role: "Empreendedor, 26 anos",
      text: "A interface é incrível — simples e acolhedora. O FEVA realmente parece um espelho que mostra o que eu precisava ver sobre mim mesmo.",
      avatar: "LF",
      color: "#2e8278",
    },
    {
      name: "Marina Oliveira",
      role: "Estudante, 22 anos",
      text: "Comecei a usar na época dos exames e foi transformador. Aprendi a regular minhas emoções de pressão e agora me sinto muito mais no controle.",
      avatar: "MO",
      color: "#9731a1",
    },
    {
      name: "Pedro Nunes",
      role: "Médico, 38 anos",
      text: "Como profissional de saúde, recomendo o FEVA para meus pacientes que querem um apoio acessível entre as sessões. A abordagem é séria e bem-fundamentada.",
      avatar: "PN",
      color: "#023e44",
    },
  ];

  return (
    <section
      id="depoimentos"
      className="py-24 font-poppins"
      style={{ background: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-feva-teal/10 text-feva-teal text-xs font-semibold px-4 py-2 rounded-full mb-6">
            Depoimentos
          </div>
          <h2
            className="font-semibold text-feva-dark leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
          >
            O que dizem nossos usuários
          </h2>
          <p className="text-feva-gray-dark text-base max-w-xl mx-auto leading-relaxed">
            Milhares de pessoas já transformaram sua relação com as emoções usando
            o FEVA.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-feva p-6 rounded-[20px] flex flex-col gap-4"
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#F8BD00">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-feva-gray-dark text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-feva-dark text-sm">{t.name}</p>
                  <p className="text-feva-gray text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
