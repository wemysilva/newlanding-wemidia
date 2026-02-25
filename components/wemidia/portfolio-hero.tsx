export function PortfolioHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
      {/* Gradient background matching landing hero */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,95,0.3)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(30,58,95,0.15)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]" />
          <span className="text-sm font-light text-[#2DD4BF]">
            Portfolio
          </span>
        </div>

        <h1 className="font-serif text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Projetos com{" "}
          <span className="highlight-gradient">Direção Estratégica</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/70 lg:text-xl">
          Casos reais onde estruturamos narrativa, posicionamento e execução
          audiovisual para empresas em crescimento.
        </p>

        <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <span>Institucional Estratégico</span>
          <span className="text-border">&#x2022;</span>
          <span>Treinamento Corporativo</span>
          <span className="text-border">&#x2022;</span>
          <span>Motion Branding</span>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
