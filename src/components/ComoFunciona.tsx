export default function ComoFunciona() {
  return (
    <section className="section como-funciona" id="como-funciona">
      <div className="container">
        <header className="section-head reveal">
          <div className="eyebrow eyebrow-light"><span className="dot"></span>Estrutura da mentoria</div>
          <h2 className="h2 h2-light">Como funcionam as aulas na Mentoria Exatas</h2>
          <p className="section-sub" style={{color:"rgba(255,255,255,.65)"}}>Quatro formatos pensados para cada momento do estudante.</p>
        </header>

        <div className="how-grid">
          <article className="how-card reveal">
            <div className="how-head">
              <span className="how-num">01</span>
              <span className="how-pill">individual</span>
            </div>
            <h3>Aulas individuais</h3>
            <p>Mentoria personalizada em matemática, física ou química, focada nas dificuldades e objetivos de cada aluno.</p>
            <div className="how-meta">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <span>4º ano ao 3º ano do EM</span>
            </div>
            <a className="how-cta" href="#contato">Agendar aula
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </article>

          <article className="how-card reveal">
            <div className="how-head">
              <span className="how-num">02</span>
              <span className="how-pill">turma reduzida</span>
            </div>
            <h3>Aulas em grupo</h3>
            <p>Aulas online ao vivo em turmas reduzidas, focadas na preparação para provas seriadas, com estudo dos conteúdos de cada série e resolução de questões e provas anteriores.</p>
            <div className="how-meta">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <span>Ao vivo · cronograma seriado</span>
            </div>
            <a className="how-cta" href="#contato">Participar da turma
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </article>

          <article className="how-card reveal">
            <div className="how-head">
              <span className="how-num">03</span>
              <span className="how-pill">6º ano militar</span>
            </div>
            <h3>Preparação militar</h3>
            <p>Aulas online ao vivo em turmas reduzidas, voltadas à preparação para o exame de acesso ao 6º ano do Colégio Militar, com estudo direcionado dos conteúdos e resolução de questões.</p>
            <div className="how-meta">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              <span>Questões de provas anteriores</span>
            </div>
            <a className="how-cta" href="#contato">Participar da turma
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </article>

          <article className="how-card how-card-platform reveal">
            <div className="how-head">
              <span className="how-num">04</span>
              <span className="how-pill how-pill-light">plataforma 24/7</span>
            </div>
            <h3>Plataforma de aulas</h3>
            <p>Acesso a aulas gravadas, organizadas por série e conteúdo, para apoiar o aprendizado contínuo e permitir que o aluno estude no próprio ritmo.</p>
            <div className="how-meta">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3z"/></svg>
              <span>Estude no seu ritmo</span>
            </div>
            <a className="how-cta" href="#contato">Conhecer a plataforma
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
