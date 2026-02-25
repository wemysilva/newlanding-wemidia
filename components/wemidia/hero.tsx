"use client"

import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,95,0.3)_0%,_transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(30,58,95,0.15)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#2DD4BF]" />
          <span className="text-sm font-light text-[#2DD4BF]">
            Comunicação Corporativa Estratégica
          </span>
        </div>

        <h1 className="font-serif text-5xl font-black leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          <span className="highlight-gradient">Comunicação Corporativa</span>{" "}
          <br />
          com Direção.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
          Criamos vídeos institucionais, treinamentos e motion graphics que
          fortalecem a comunicação interna e externa de empresas.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="glow-button group inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105">
            Entrar em contato
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-card hover:scale-105"
          >
            <Play className="h-4 w-4" />
            Ver projetos
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
