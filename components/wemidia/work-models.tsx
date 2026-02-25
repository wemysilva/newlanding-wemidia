import { FileCheck, Repeat, Check } from "lucide-react"

const demandaTopics = [
  "Escopo e orçamento definidos",
  "Cronograma fixo de entrega",
  "Revisões incluídas",
  "Suporte durante o projeto",
]

const recorrenteTopics = [
  "Horas ou entregas mensais",
  "Prioridade no atendimento",
  "Planejamento mensal conjunto",
  "Custos previsíveis",
]

export function WorkModels() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-light tracking-widest uppercase text-[#2DD4BF]">
            Modelos de Trabalho
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Duas formas de trabalhar juntos
          </h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Card 1 - Sob Demanda */}
          <div className="glow-blue group relative rounded-2xl border border-border bg-card/60 p-10 transition-all glow-blue-hover">
            <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3">
              <FileCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Sob Demanda
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Para demandas com escopo definido e aplicação estratégica clara.
              Ideal para campanhas institucionais, vídeos de posicionamento e
              projetos com início, meio e entrega final.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {demandaTopics.map((topic) => (
                <li key={topic} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 - Parceria Recorrente */}
          <div className="glow-teal group relative rounded-2xl border border-[#2DD4BF]/20 bg-card/60 p-10 transition-all">
            <div className="mb-6 inline-flex rounded-lg bg-[#2DD4BF]/10 p-3">
              <Repeat className="h-6 w-6 text-[#2DD4BF]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-foreground">
              Parceria Recorrente
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Atuação contínua como extensão estratégica do time interno.
              Planejamento, produção e acompanhamento recorrente para empresas que
              precisam de consistência na comunicação.
            </p>
            <ul className="mt-6 flex flex-col gap-3">
              {recorrenteTopics.map((topic) => (
                <li key={topic} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <Check className="h-4 w-4 shrink-0 text-[#2DD4BF]" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
