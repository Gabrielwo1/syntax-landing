export default function Beneficios() {
  return (
    <section className="section beneficios">
      <div className="container">
        <header className="section-head section-head-center reveal">
          <div className="eyebrow"><span className="dot"></span>Por que Mentoria Exatas</div>
          <h2 className="h2">Educação em exatas pensada para gerar resultados reais</h2>
          <p className="section-sub">Cada aluno aprende de um jeito — nossa mentoria respeita isso.</p>
        </header>

        <div className="benef-grid">
          <article className="benef-card reveal">
            <div className="benef-num">
              <span>01</span>
              <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4"/></svg>
            </div>
            <div className="benef-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            </div>
            <h3>Mais confiança, mais resultado</h3>
            <p>Aqui o aluno aprende com segurança, desenvolve autonomia nos estudos e se sente preparado para enfrentar as provas.</p>
          </article>

          <article className="benef-card reveal">
            <div className="benef-num">
              <span>02</span>
              <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4"/></svg>
            </div>
            <div className="benef-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <h3>Praticidade para estudar de casa</h3>
            <p>O aluno aprende por videochamada, com acompanhamento próximo e atenção individual, sem a necessidade de deslocamentos e com mais conforto no dia a dia.</p>
          </article>

          <article className="benef-card reveal">
            <div className="benef-num">
              <span>03</span>
              <svg viewBox="0 0 80 80" aria-hidden="true"><circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 4"/></svg>
            </div>
            <div className="benef-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/></svg>
            </div>
            <h3>Foco no que realmente importa</h3>
            <p>Estudo orientado, com organização e estratégia, para que o aluno saiba exatamente o que estudar e como se preparar para cada avaliação.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
