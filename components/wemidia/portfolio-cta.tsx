import { ArrowRight } from "lucide-react"

export function PortfolioCta() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
          Pronto para estruturar a comunicação da sua empresa?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Cada projeto começa com uma conversa estratégica. Fale com um
          especialista e descubra como transformar sua comunicação em resultado.
        </p>
        <div className="mt-10">
          <a
            href="http://wa.me/61981297057"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button group inline-flex items-center gap-2 rounded-lg px-10 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-105"
          >
            Falar com especialista
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">
            Resposta em até 24h úteis.
          </p>
        </div>
      </div>
    </section>
  )
}
