"use client";
import { useState } from "react";

const items = [
  {
    q: "Como funcionam as aulas individuais?",
    a: "As aulas individuais podem ser realizadas de forma avulsa ou em acompanhamento contínuo. No acompanhamento contínuo, as aulas acontecem normalmente uma vez por semana, com duração de 1 hora cada.",
  },
  {
    q: "As aulas em grupo acontecem ao vivo ou são gravadas?",
    a: "As aulas em grupo são online e ao vivo, permitindo interação, explicações em tempo real e resolução de dúvidas durante a aula. As aulas não são gravadas, mas os conteúdos podem ser revistos na área de conteúdos gravados da plataforma.",
  },
  {
    q: "O aluno tem acesso a material de apoio ou plataforma?",
    a: "O acesso à plataforma e aos materiais organizados é destinado aos alunos das turmas em grupo ou àqueles que contratarem a plataforma de estudos. As aulas individuais, sejam avulsas ou em acompanhamento, não incluem acesso à plataforma.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number>(0);

  const toggle = (i: number) => setOpen(prev => prev === i ? -1 : i);

  return (
    <section className="section faq" id="faq">
      <div className="container faq-wrap">
        <header className="section-head faq-head">
          <div className="eyebrow"><span className="dot"></span>Entenda se a Mentoria Exatas é a melhor opção para o seu filho</div>
          <h2 className="h2">Ainda ficou alguma dúvida?</h2>
        </header>

        <ul className="faq-list">
          {items.map((item, i) => (
            <li key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <button
                className="faq-trigger"
                aria-expanded={open === i}
                onClick={() => toggle(i)}
              >
                <span className="faq-q">{item.q}</span>
                <span className="faq-plus" aria-hidden="true"></span>
              </button>
              <div className="faq-panel">
                <p>{item.a}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
