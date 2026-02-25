const steps = [
  {
    number: "01",
    title: "Diagnóstico estratégico",
    description:
      "Entendemos o cenário, os objetivos e os desafios de comunicação da empresa para definir o caminho mais eficiente.",
  },
  {
    number: "02",
    title: "Estrutura narrativa",
    description:
      "Construímos a base de mensagens, tom de voz e pilares que vão guiar toda a produção com coerência.",
  },
  {
    number: "03",
    title: "Produção audiovisual",
    description:
      "Executamos com direção criativa, qualidade técnica e foco total na estratégia definida.",
  },
  {
    number: "04",
    title: "Aplicação estratégica",
    description:
      "Entregamos os materiais com orientação clara de uso e distribuição para gerar resultado real.",
  },
]

export function Process() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_rgba(30,58,95,0.15)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="text-sm font-light tracking-widest uppercase text-[#2DD4BF]">
            Processo
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Método estruturado para{" "}
            <span className="highlight-gradient">evitar retrabalho.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Uma metodologia clara para transformar comunicação em resultado.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent lg:left-1/2 lg:-translate-x-px" />

          <div className="flex flex-col gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-8 lg:gap-16 ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse lg:text-right"
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-6 top-6 -translate-x-1/2 lg:left-1/2">
                  <div className="timeline-glow h-3 w-3 rounded-full bg-primary" />
                </div>

                {/* Content card */}
                <div
                  className={`ml-14 lg:ml-0 lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  }`}
                >
                  <div className="glow-teal rounded-xl border border-[#2DD4BF]/15 bg-card/50 p-6 transition-all">
                    <span className="font-serif text-sm font-bold tracking-widest text-[#2DD4BF]">
                      {step.number}
                    </span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternate sides */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
