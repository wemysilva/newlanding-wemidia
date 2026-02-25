"use client"

import Image from "next/image"

const logos = [
  { name: "Ubisoft", src: "/images/logos/ubisoft.png" },
  { name: "Nuvemshop", src: "/images/logos/nuvemshop.png" },
  { name: "Governo de SP", src: "/images/logos/sp.png" },
  { name: "Netshoes", src: "/images/logos/netshoes.png" },
  { name: "Depyl", src: "/images/logos/depyl.png" },
  { name: "Magalu", src: "/images/logos/magalu.png" },
  { name: "União", src: "/images/logos/uniao.png" },
  { name: "Sebrae", src: "/images/logos/sebrae.png" },
  { name: "Sony", src: "/images/logos/sony.png" },
]

function LogoItem({ logo }: { logo: { name: string; src: string } }) {
  return (
    <div className="flex h-32 w-48 shrink-0 items-center justify-center px-2">
      <Image
        src={logo.src}
        alt={logo.name}
        width={220}
        height={100}
        className="object-contain opacity-50 transition-opacity hover:opacity-80"
        style={{ width: "auto", height: "auto", maxHeight: "6rem" }}
      />
    </div>
  )
}

export function Authority() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(30,58,95,0.12)_0%,_transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-light tracking-widest uppercase text-[#2DD4BF]">
            Autoridade
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Empresas que confiam na{" "}
            <span className="highlight-gradient font-serif font-black">WeMídia</span>
          </h2>
        </div>

        {/* Infinite carousel */}
        <div className="relative mt-16">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="overflow-hidden">
            <div className="animate-scroll-left flex items-center gap-3" style={{ width: "max-content" }}>
              {[...logos, ...logos].map((logo, index) => (
                <LogoItem key={`${logo.name}-${index}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-muted-foreground">
          Comunicação estruturada para marcas que valorizam clareza e
          posicionamento.
        </p>
      </div>
    </section>
  )
}
