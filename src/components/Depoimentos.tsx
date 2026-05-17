"use client";
import { useRef } from "react";

const testimonials = [
  {
    id: "GM",
    text: "Quando buscamos reforço escolar, encontramos no professor muito mais do que aulas de matemática. Além de competente e de confiança, ele transmitia valores que fortaleceram a segurança nos estudos. O resultado foi visível: notas melhores, mais dedicação e entusiasmo para aprender. Nossa gratidão é imensa pelo trabalho realizado.",
    name: "Graciele Mesomo",
    role: "Mãe de aluno",
  },
  {
    id: "MM",
    text: "Minha filha enfrentava uma situação difícil no último bimestre, precisando de uma nota alta na prova substitutiva. Com o apoio do professor, conseguiu revisar a matéria em pouco tempo e alcançar o resultado. Seu empenho e competência fizeram toda a diferença. Somos muito gratos.",
    name: "Michael Miyazaki",
    role: "Pai de aluna",
  },
  {
    id: "OF",
    text: "No início do ano, minha filha estava estressada com matemática, pois não estava entendendo o conteúdo e passou ter problemas na matéria. Tirou nota baixa e acreditava que iria reprovar. Com as aulas, passou a compreender, ganhou confiança e conseguiu seguir em frente. Sou muito grata pelo carinho, paciência e profissionalismo.",
    name: "Oliani Fagundes",
    role: "Mãe de aluna",
  },
  {
    id: "TM",
    text: "Minha filha tinha pavor de matemática e acreditava que nunca iria aprender. Com o acompanhamento do professor, passou a compreender, ganhou confiança e evoluiu não só em matemática, mas também nas outras disciplinas. Hoje, a matéria que ela mais ama é justamente matemática. Sou muito grata pela paciência, dedicação e profissionalismo.",
    name: "Talitha Mello",
    role: "Mãe de aluna",
  },
  {
    id: "OF2",
    text: "No início do ano, minha filha estava estressada com matemática, pois não estava entendendo o conteúdo e passou a detestar a matéria. Tirou nota baixa e acreditava que iria reprovar. Com as aulas, passou a compreender, ganhou confiança e conseguiu seguir em frente. Sou muito grata pelo carinho, paciência e profissionalismo.",
    name: "Oliani Fagundes",
    role: "Mãe de aluna",
  },
  {
    id: "CB",
    text: "Minha filha faz mentoria há 3 anos e a transformação foi clara. Ela travava de nervosismo nas provas, mas com a paciência do professor, ganhou confiança. Saímos das notas vermelhas para a compreensão da matéria, da escola até as provas seriadas. Recomendo muito!",
    name: "Clissia Berndt",
    role: "Mãe de aluna · há 3 anos",
  },
];

export default function Depoimentos() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".depo-card") as HTMLElement;
    const amount = card ? card.getBoundingClientRect().width + 20 : 380;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="section depoimentos" id="depoimentos">
      <div className="container">
        <header className="section-head depo-head">
          <div>
            <div className="eyebrow"><span className="dot"></span>Depoimentos</div>
            <h2 className="h2">Veja o que as famílias têm a dizer</h2>
          </div>
          <div className="depo-controls">
            <button className="depo-arrow" onClick={() => scroll(-1)} aria-label="Anterior">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="depo-arrow" onClick={() => scroll(1)} aria-label="Próximo">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6"/></svg>
            </button>
          </div>
        </header>

        <div className="depo-track" ref={trackRef}>
          {testimonials.map((t) => (
            <article className="depo-card" key={t.id}>
              <div className="depo-quote">&ldquo;</div>
              <p>{t.text}</p>
              <div className="depo-author">
                <div className="depo-avatar">{t.id.slice(0, 2)}</div>
                <div>
                  <div className="da-name">{t.name}</div>
                  <div className="da-role">{t.role}</div>
                </div>
                <div className="depo-stars" aria-label="5 estrelas">★★★★★</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
