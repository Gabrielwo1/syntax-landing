import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden bg-bg">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent-blue/10 blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — copy */}
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Disponível para iOS e Android
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-text-dark leading-[1.1] tracking-tight mb-6">
            Transforme sua{" "}
            <span className="text-gradient">leitura</span>{" "}
            em hábito
          </h1>

          <p className="text-lg text-text-muted leading-relaxed mb-10 max-w-lg">
            Rastreie seu progresso, defina metas realistas e organize sua
            biblioteca pessoal. O BookLayer torna cada página uma conquista.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              id="download"
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-7 py-4 rounded-2xl transition-colors duration-200 shadow-lg shadow-primary/30 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.19 1.28-2.17 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.73M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>

            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-text-dark font-semibold px-7 py-4 rounded-2xl transition-colors duration-200 border border-gray-200 text-base"
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M3.18 23.76c.33.18.71.19 1.06.03l13.2-7.41-2.88-2.89-11.38 10.27z" fill="#EA4335" />
                <path d="M22.47 10.25 19.3 8.43l-3.24 2.88 3.24 3.24 3.2-1.8c.91-.52.91-1.96-.03-2.5z" fill="#FBBC05" />
                <path d="M1.64.25C1.3.61 1.1 1.18 1.1 1.93v20.14c0 .75.2 1.32.55 1.68l.09.08 11.28-11.28v-.27L1.73.16l-.09.09z" fill="#4285F4" />
                <path d="M16.06 7.44 4.24.03C3.89-.14 3.51-.12 3.18.05l11.27 11.27 1.61-3.88z" fill="#34A853" />
              </svg>
              Google Play
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              {["#6759B6", "#5B4DA5", "#74B8EF", "#E9A5C6"].map((color, i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: color }}
                >
                  {["A", "B", "C", "D"][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#F8BD00">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-text-muted">
                <span className="font-semibold text-text-dark">4.9</span> · +12.000 leitores
              </p>
            </div>
          </div>
        </div>

        {/* Right — phone mockups */}
        <div className="relative flex justify-center items-center">
          <div className="relative">
            {/* Main phone */}
            <div className="animate-float relative z-10">
              <PhoneMockup variant="dashboard" />
            </div>

            {/* Secondary phone behind */}
            <div className="animate-float-delayed absolute -right-20 top-12 scale-90 opacity-80 z-0 hidden lg:block">
              <PhoneMockup variant="library" />
            </div>
          </div>

          {/* Floating cards */}
          <div className="absolute top-8 -left-4 lg:-left-12 bg-white rounded-2xl p-3.5 shadow-lg shadow-primary/10 flex items-center gap-3 z-20 animate-float-delayed">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6759B6" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-bold text-text-dark">Meta cumprida!</p>
              <p className="text-[10px] text-text-muted">12 dias de sequência 🔥</p>
            </div>
          </div>

          <div className="absolute bottom-16 -left-2 lg:-left-10 bg-white rounded-2xl p-3.5 shadow-lg shadow-primary/10 flex items-center gap-3 z-20 animate-float">
            <div className="w-9 h-9 rounded-xl bg-yellow-50 flex items-center justify-center text-lg">
              📚
            </div>
            <div>
              <p className="text-xs font-bold text-text-dark">Novo livro</p>
              <p className="text-[10px] text-text-muted">O Ego é seu Inimigo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
