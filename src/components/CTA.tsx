import Image from "next/image";

export default function CTA() {
  return (
    <section
      id="comecar"
      className="py-24 font-poppins relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(37,199,177,0.06) 0%, rgba(0,101,110,0.05) 48%, rgba(151,49,161,0.06) 100%), #ffffff",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(151,49,161,0.5) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(37,199,177,0.5) 0%, transparent 70%)" }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <Image
          src="/assets/feva-logo.png"
          alt="FEVA"
          width={140}
          height={48}
          className="h-11 w-auto object-contain mx-auto mb-8"
        />

        <h2
          className="font-semibold text-feva-dark leading-tight mb-6"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
        >
          Comece sua jornada de{" "}
          <span className="text-feva-teal">autoconhecimento</span> hoje
        </h2>

        <p className="text-feva-gray-dark text-base leading-relaxed mb-10 max-w-lg mx-auto">
          O FEVA é o seu espelho emocional. Reconheça padrões, quebre ciclos e
          aprenda a se entender de um jeito prático — sem julgamentos, sem
          complicação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#"
            className="btn-feva inline-flex items-center justify-center px-10 py-4 text-base font-semibold rounded-[15px] shadow-lg"
            style={{ boxShadow: "0 8px 24px rgba(46,130,120,0.3)" }}
          >
            Entre agora — é grátis
          </a>
        </div>

        <p className="text-feva-gray text-sm">
          Já tem conta?{" "}
          <a href="#" className="font-semibold text-feva-teal hover:underline">
            Faça o Login
          </a>
        </p>
      </div>
    </section>
  );
}
