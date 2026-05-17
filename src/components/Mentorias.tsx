export default function Mentorias() {
  return (
    <section className="section mentorias" id="mentorias">
      <div className="container">
        <header className="section-head reveal">
          <div className="eyebrow"><span className="dot"></span>Mentorias online individual</div>
          <h2 className="h2">Por matéria ou por objetivo — escolha o caminho do seu filho.</h2>
        </header>

        <div className="mentorias-grid">
          <div className="mentorias-col">
            <div className="col-label">
              <span className="label-num">01</span>
              <span>Por matéria</span>
            </div>
            <ul className="mentoria-list">
              <li className="mentoria-card reveal">
                <div className="mc-icon mc-mint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16"/><path d="M4 12h10"/><path d="M14 17l3-3 3 3"/><path d="M4 17h6"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Matemática</h3>
                  <p>Da álgebra à geometria, foco em raciocínio lógico e resolução de provas.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
              <li className="mentoria-card reveal">
                <div className="mc-icon mc-sky">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Física</h3>
                  <p>Mecânica, ondas, eletricidade — com bastante exercício comentado.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
              <li className="mentoria-card reveal">
                <div className="mc-icon mc-mint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3v6L4 19a2 2 0 0 0 1.7 3h12.6a2 2 0 0 0 1.7-3L15 9V3"/><path d="M8 3h8"/><path d="M7 14h10"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Química</h3>
                  <p>Estequiometria, soluções, físico-química — passo a passo até a prova.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
            </ul>
          </div>

          <div className="mentorias-col">
            <div className="col-label">
              <span className="label-num">02</span>
              <span>Por objetivo</span>
            </div>
            <ul className="mentoria-list">
              <li className="mentoria-card reveal">
                <div className="mc-icon mc-sky">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h7v7H3z"/><path d="M14 3h7v7h-7z"/><path d="M3 14h7v7H3z"/><path d="M14 14h7v7h-7z"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Vestibular Seriado</h3>
                  <p>Preparação contínua por série, com revisão e simulados periódicos.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
              <li className="mentoria-card reveal">
                <div className="mc-icon mc-mint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Colégio Militar <span className="tag">acesso ao 6º ano</span></h3>
                  <p>Aulas dirigidas ao conteúdo do exame, com questões de provas anteriores.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
              <li className="mentoria-card reveal">
                <div className="mc-icon mc-sky">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h12l-1 6h-10z"/><path d="M9 10v3"/><path d="M15 10v3"/><path d="M6 20h12"/><path d="M8 20l1-7"/><path d="M16 20l-1-7"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Concursos</h3>
                  <p>Foco em editais com exatas — método de estudo e resolução por banca.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
              <li className="mentoria-card reveal">
                <div className="mc-icon mc-mint">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Matemática — Anos Iniciais <span className="tag">teoria à prática</span></h3>
                  <p>Da contagem à álgebra inicial, com material lúdico e progressão clara.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
              <li className="mentoria-card mentoria-card-featured reveal">
                <div className="mc-icon mc-grad">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div className="mc-body">
                  <h3>Mentoria Medicina</h3>
                  <p>Trilha intensiva em exatas para vestibulares de medicina mais concorridos.</p>
                </div>
                <span className="mc-arrow" aria-hidden="true">→</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
