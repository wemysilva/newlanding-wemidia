import type { Metadata } from "next"
import { Navbar } from "@/components/wemidia/navbar"
import { PortfolioHero } from "@/components/wemidia/portfolio-hero"
import { PortfolioSection } from "@/components/wemidia/portfolio-section"
import { PortfolioCta } from "@/components/wemidia/portfolio-cta"
import { Footer } from "@/components/wemidia/footer"

export const metadata: Metadata = {
  title: "Portfolio | WeMídia - Projetos com Direção Estratégica",
  description:
    "Casos reais onde estruturamos narrativa, posicionamento e execução audiovisual para empresas em crescimento.",
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: "Portfolio | WeMídia - Projetos com Direção Estratégica",
    description:
      "Casos reais onde estruturamos narrativa, posicionamento e execução audiovisual para empresas em crescimento.",
    url: 'https://wemidia.com.br/portfolio',
    type: 'website',
  },
}

const institucionalProjects = [
  {
    title: "Turbine \u2013 Sebrae",
    description:
      "Estruturamos o posicionamento do programa Turbine em um vídeo institucional estratégico, alinhando narrativa, proposta de valor e percepção de excelência no setor de turismo.",
    videoUrl: "https://youtu.be/ge88-IppHiM",
  },
  {
    title: "LinkedIn Foco Tech \u2013 Nuvemshop",
    description:
      "Desenvolvemos a comunicação audiovisual para fortalecer o posicionamento da marca no mercado latino-americano, destacando inovação, escalabilidade e apoio ao crescimento de empresas digitais.",
    videoUrl: "https://youtu.be/yDtIGaufiNo",
  },
  {
    title: "Hazlo App \u2013 Tiendanube",
    description:
      "Estruturamos o vídeo corporativo para consolidar o posicionamento da plataforma como solução estratégica para empreendedores digitais no mercado latino-americano.",
    videoUrl: "https://youtu.be/4UherpuFWPI",
  },
]

const treinamentosProjects = [
  {
    title: "Qualidade em Movimento \u2013 Magalu",
    description:
      "Treinamento audiovisual estruturado para fortalecer a cultura de qualidade no atendimento, alinhar critérios operacionais e reduzir inconsistências na experiência do cliente.",
    videoUrl: "https://youtu.be/PozxVF8k12g",
  },
  {
    title: "Código de Ética \u2013 Magalu",
    description:
      "Comunicação interna estratégica desenvolvida para traduzir diretrizes de conduta e integridade em uma narrativa visual clara e acessível aos colaboradores.",
    videoUrl: "https://youtu.be/SrtmHBkZKQk",
  },
  {
    title: "Jornada de Excelência \u2013 Magalog",
    description:
      "Treinamento interno estruturado para padronizar processos logísticos, alinhar equipes operacionais e fortalecer eficiência nas etapas de entrega.",
    videoUrl: "https://youtu.be/vEieRT9YQr4",
  },
]

const motionProjects = [
  {
    title: "Logo Reveal \u2013 Vaio",
    description:
      "Projeto de motion aplicado à identidade visual da marca, estruturando uma assinatura animada consistente para uso institucional e campanhas.",
    videoUrl: "https://youtu.be/1bz48CITIa8",
  },
  {
    title: "Logo Reveal \u2013 Sebrae",
    description:
      "Identidade animada desenvolvida para reforçar consistência visual e presença institucional da marca em múltiplos canais.",
    videoUrl: "https://youtu.be/BU2kalwyXWI",
  },
  {
    title: "Logo Reveal \u2013 União na Câmara",
    description:
      "Projeto de motion branding estruturado para consolidar presença visual do programa em comunicações institucionais e digitais.",
    videoUrl: "https://youtu.be/R_gCExibZmo",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PortfolioHero />

      <PortfolioSection
        id="institucional"
        label="Institucional"
        title="Institucional Estratégico"
        description="Vídeos que traduzem posicionamento, proposta de valor e identidade corporativa em narrativas claras e memoráveis."
        projects={institucionalProjects}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border" />
      </div>

      <PortfolioSection
        id="treinamentos"
        label="Treinamentos"
        title="Comunicação Interna e Treinamentos Corporativos"
        description="Materiais audiovisuais que alinham equipes, padronizam processos e fortalecem a cultura organizacional."
        projects={treinamentosProjects}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border" />
      </div>

      <PortfolioSection
        id="motion"
        label="Motion"
        title="Motion Branding e Identidade Animada"
        description="Assinaturas visuais em movimento que reforçam presença de marca e consistência institucional."
        projects={motionProjects}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border" />
      </div>

      <PortfolioCta />

      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-border" />
      </div>

      <Footer />
    </main>
  )
}
