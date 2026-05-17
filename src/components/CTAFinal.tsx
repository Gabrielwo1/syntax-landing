export default function CTAFinal() {
  return (
    <section className="section cta-final" id="contato">
      <div className="container">
        <div className="cta-card">
          <div className="cta-grid-bg" aria-hidden="true"></div>
          <div className="cta-orbs" aria-hidden="true">
            <div className="orb orb-mint"></div>
            <div className="orb orb-sky"></div>
          </div>
          <div className="cta-content">
            <div className="eyebrow eyebrow-light">
              <span className="dot"></span>
              Próximo passo
            </div>
            <h2 className="h2 h2-light">Pronto para dar o próximo passo</h2>
            <p>Descubra qual formato de estudo é ideal para seu filho e veja como a Mentoria Exatas pode apoiar sua evolução em exatas.</p>
            <div className="cta-actions">
              <a href="#mentorias" className="btn btn-primary btn-lg">
                Conhecer os planos e mentorias
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </a>
              <a href="https://wa.me/" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.5.8 3.2 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
