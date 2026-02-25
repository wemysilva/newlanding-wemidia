import { Building2, Users, TrendingUp, Shield } from "lucide-react"

const audiences = [
  {
    icon: Building2,
    text: "Empresas com produtos ou serviços complexos que precisam de clareza.",
  },
  {
    icon: Users,
    text: "Times de marketing estruturados que buscam execução estratégica.",
  },
  {
    icon: TrendingUp,
    text: "Empresas em crescimento que precisam padronizar narrativa.",
  },
  {
    icon: Shield,
    text: "Negócios que querem fortalecer posicionamento institucional.",
  },
]

export function TargetAudience() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,95,0.12)_0%,_transparent_70%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="text-center">
          <span className="text-sm font-light tracking-widest uppercase text-[#2DD4BF]">
            Pra Quem É
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-tight text-balance">
            Para empresas que já entenderam que{" "}
            <span className="highlight-gradient">comunicação é estratégia.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Trabalhamos com organizações que entendem que cada peça de
            comunicação precisa servir a um objetivo maior.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {audiences.map((audience) => (
            <div
              key={audience.text}
              className="glow-blue group flex items-start gap-4 rounded-xl border border-border bg-card/60 p-5 transition-all glow-blue-hover"
            >
              <div className="mt-0.5 shrink-0 rounded-lg bg-primary/10 p-2.5">
                <audience.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm leading-relaxed text-secondary-foreground">
                {audience.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
