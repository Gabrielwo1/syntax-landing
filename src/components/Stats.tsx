export default function Stats() {
  const stats = [
    { value: "+50mil", label: "Usuários ativos", color: "#2e8278" },
    { value: "4.9★", label: "Avaliação nas lojas", color: "#9731a1" },
    { value: "87%", label: "Relatam melhora em 30 dias", color: "#023e44" },
    { value: "Free", label: "Plano gratuito disponível", color: "#2e8278" },
  ];

  return (
    <section
      className="py-20 font-poppins"
      style={{
        background:
          "linear-gradient(68.75deg, rgb(46, 130, 120) 28.77%, rgb(151, 49, 161) 193.41%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-bold text-white mb-2" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
                {stat.value}
              </div>
              <div className="text-white/80 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
