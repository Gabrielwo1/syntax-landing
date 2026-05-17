import Image from "next/image";

export default function SiteFooter() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-col footer-brand">
            <Image src="/logo.png" alt="Mentoria Exatas" className="footer-logo" width={120} height={48} style={{ height: 48, width: "auto" }} />
            <p>Mentoria online em matemática, física e química — para o ensino fundamental, médio e preparatórios.</p>
            <div className="footer-socials" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3h-3V9.5c0-.3.2-.5.5-.5z"/></svg>
              </a>
              <a href="#" aria-label="Telegram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="m21.6 4.4-3.1 14.7c-.2 1-.9 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.4-.9.4l.3-4.7L18 6.6c.4-.3-.1-.5-.6-.2L7 12.5l-4.5-1.4c-1-.3-1-1 .2-1.5L20 2.6c.8-.3 1.6.2 1.6 1.8z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Conheça</h4>
            <ul>
              <li><a href="#top">Home</a></li>
              <li><a href="#mentorias">Mentorias individuais</a></li>
              <li><a href="#mentorias">Mentoria seriados</a></li>
              <li><a href="#mentorias">Mentoria militares</a></li>
              <li><a href="#mentorias">Mentoria cursos</a></li>
              <li><a href="#como-funciona">Plataforma de ensino</a></li>
              <li><a href="#area-aluno">Área do aluno</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Fale conosco</h4>
            <ul>
              <li><a href="mailto:contato@mentoriaexatas.com.br">contato@mentoriaexatas.com.br</a></li>
              <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer">WhatsApp · seg–sex 8h–18h</a></li>
              <li>Atendimento 100% online</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Redes sociais</h4>
            <ul>
              <li><a href="#">Instagram @mentoriaexatas</a></li>
              <li><a href="#">Facebook /mentoriaexatas</a></li>
              <li><a href="#">Telegram t.me/mentoriaexatas</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-base">
          <div className="container footer-base-inner">
            <span>© 2026 Mentoria Exatas — Todos os direitos reservados.</span>
            <span>Feito com método, paciência e exatas.</span>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/" className="wa-float" aria-label="Fale no WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.1-1.3c1.5.8 3.2 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
        <span className="wa-pulse" aria-hidden="true"></span>
      </a>
    </>
  );
}
