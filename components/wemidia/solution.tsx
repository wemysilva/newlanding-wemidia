import { Search, FileText, Lightbulb, Film, Rocket, Target } from "lucide-react"

const solutions = [
  {
    icon: Search,
    title: "Diagnóstico estratégico",
    description:
      "Análise profunda do cenário atual, público, objetivos e desafios de comunicação da empresa.",
  },
  {
    icon: FileText,
    title: "Estrutura narrativa",
    description:
      "Definição de mensagens-chave, tom de voz e pilares de comunicação alinhados ao posicionamento.",
  },
  {
    icon: Lightbulb,
    title: "Direção criativa",
    description:
      "Concepção visual e narrativa de cada peça, conectando estética e estratégia.",
  },
  {
    icon: Film,
    title: "Produção audiovisual",
    description:
      "Execução com qualidade cinematográfica, desde captação até pós-produção e motion.",
  },
  {
    icon: Rocket,
    title: "Aplicação estratégica",
    description:
      "Distribuição e aplicação dos materiais com foco em gerar resultado mensurável.",
  },
  {
    icon: Target,
    title: "Acompanhamento de impacto",
    description:
      "Mensuração de resultados e ajustes contínuos para garantir retorno sobre o investimento.",
  },
]

export function Solution() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-light tracking-widest uppercase text-[#2DD4BF]">
            A Solução
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Estratégia antes da produção.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            A WeMídia estrutura a comunicação antes de executar qualquer vídeo.
            Clareza estratégica, direção criativa e produção com propósito.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="glow-blue group rounded-xl border border-border bg-card/50 p-8 transition-all glow-blue-hover"
            >
              <div className="mb-5 inline-flex rounded-lg bg-primary/10 p-3">
                <solution.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {solution.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
