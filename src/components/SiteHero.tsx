export default function SiteHero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true"></div>
      <div className="hero-orbs" aria-hidden="true">
        <div className="orb orb-mint"></div>
        <div className="orb orb-sky"></div>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span className="dot"></span>
            Mentoria online — ensino fundamental e médio
          </div>
          <h1 className="display">
            Aulas de <span className="hl hl-mint">matemática</span>,{" "}
            <span className="hl hl-sky">física</span>{" "}
            e <span className="hl hl-mint">química</span> para quem busca mais confiança nas provas.
          </h1>
          <p className="lede">
            Atendimento online para estudantes do ensino fundamental e médio, com foco na aprendizagem dos conteúdos escolares, na preparação para o exame de acesso ao 6º ano do colégio militar e para provas de vestibulares seriados.
          </p>
          <div className="hero-cta">
            <a href="#contato" className="btn btn-primary btn-lg">
              Quero saber mais
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#como-funciona" className="btn btn-ghost btn-lg">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              Ver como funciona
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-num">+1.200</div>
              <div className="stat-label">alunos acompanhados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">98%</div>
              <div className="stat-label">aprovação em seriados</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <div className="stat-num">10+ anos</div>
              <div className="stat-label">de mentoria em exatas</div>
            </div>
          </div>
        </div>

        <aside className="hero-visual reveal" aria-hidden="true">
          <div className="panel panel-board">
            <div className="panel-head">
              <div className="panel-dots"><span></span><span></span><span></span></div>
              <div className="panel-title">caderno.exatas — bimestre 03</div>
              <div className="panel-tag">live</div>
            </div>
            <div className="board">
              <div className="board-grid"></div>

              <div className="formula f1">
                <span className="mono">x = </span>
                <span className="frac"><span className="num">−b ± √(b² − 4ac)</span><span className="den">2a</span></span>
              </div>

              <div className="formula f2">
                <span className="mono">F = m · a</span>
              </div>

              <svg className="chart" viewBox="0 0 320 140" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#00E0A0" stopOpacity=".35"/>
                    <stop offset="100%" stopColor="#00E0A0" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0,120 C40,100 70,60 120,55 C170,50 210,90 260,40 C290,12 310,18 320,8 L320,140 L0,140 Z" fill="url(#curveFill)"/>
                <path className="curve" d="M0,120 C40,100 70,60 120,55 C170,50 210,90 260,40 C290,12 310,18 320,8" stroke="#00E0A0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                <path d="M0,128 C50,118 90,80 140,90 C190,100 220,60 280,55 C300,53 314,46 320,42" stroke="#10A0F0" strokeWidth="2" fill="none" strokeDasharray="3 4" strokeLinecap="round" opacity=".8"/>
              </svg>

              <div className="chart-meta">
                <span className="legend"><i style={{background:"#00E0A0"}}></i> nota</span>
                <span className="legend"><i style={{background:"#10A0F0"}}></i> meta</span>
                <span className="growth">+34%</span>
              </div>

              <div className="anno a1">
                <span className="anno-dot"></span>
                <span>função do 2º grau</span>
              </div>
              <div className="anno a2">
                <span className="anno-dot dot-sky"></span>
                <span>cinemática</span>
              </div>

              <svg className="hex" viewBox="0 0 60 60" aria-hidden="true">
                <polygon points="30,3 55,17 55,43 30,57 5,43 5,17" fill="none" stroke="#10A0F0" strokeWidth="1.6"/>
                <text x="30" y="36" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="14" fill="#10A0F0">H₂O</text>
              </svg>
            </div>
          </div>

          <div className="float-card">
            <div className="fc-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
            </div>
            <div>
              <div className="fc-title">Próxima aula</div>
              <div className="fc-sub">Funções afins · qua, 19h</div>
            </div>
          </div>

          <div className="badge-card">
            <div className="badge-icon">π</div>
            <div>
              <div className="bc-title">+4,2 na média</div>
              <div className="bc-sub">média dos alunos no 2º bim.</div>
            </div>
          </div>
        </aside>
      </div>

      <div className="container">
        <div className="subjects-strip">
          <span className="strip-label">áreas que dominamos</span>
          <div className="strip-chips">
            <span className="chip">∫ Cálculo</span>
            <span className="chip">Δ Geometria</span>
            <span className="chip">π Trigonometria</span>
            <span className="chip">∑ Estatística</span>
            <span className="chip">F = m·a</span>
            <span className="chip">E = mc²</span>
            <span className="chip">pH</span>
            <span className="chip">Estequiometria</span>
            <span className="chip">Termodinâmica</span>
          </div>
        </div>
      </div>
    </section>
  );
}
