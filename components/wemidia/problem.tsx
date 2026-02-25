import { AlertTriangle, GitBranch, BarChart3 } from "lucide-react"

const problems = [
  {
    icon: AlertTriangle,
    title: "Comunicação sem direção",
    description:
      "Vídeos isolados que não se conectam ao posicionamento ou aos objetivos da empresa.",
  },
  {
    icon: GitBranch,
    title: "Desalinhamento interno",
    description:
      "Marketing, comercial e liderança comunicando mensagens diferentes.",
  },
  {
    icon: BarChart3,
    title: "Produção sem impacto estratégico",
    description:
      "Conteúdo visualmente bonito que não fortalece marca nem acelera negócios.",
  },
]

export function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-light tracking-widest uppercase text-[#2DD4BF]">
            O Problema
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Sua comunicação gera percepção{" "}
            <span className="highlight-gradient">ou gera resultado?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground text-lg leading-relaxed">
            A maioria das empresas investe em comunicação sem uma estrutura clara.
            O resultado: esforço sem retorno.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="glow-red group relative rounded-xl border border-[var(--problem-red-muted)] bg-card/50 p-8 transition-all"
            >
              <div className="mb-5 inline-flex rounded-lg bg-[var(--problem-red-muted)] p-3">
                <problem.icon className="h-5 w-5 text-[var(--problem-red)]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">
                {problem.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
