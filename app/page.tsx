import { Navbar } from "@/components/wemidia/navbar"
import { Hero } from "@/components/wemidia/hero"
import { Problem } from "@/components/wemidia/problem"
import { TargetAudience } from "@/components/wemidia/target-audience"
import { Solution } from "@/components/wemidia/solution"
import { Process } from "@/components/wemidia/process"
import { WorkModels } from "@/components/wemidia/work-models"
import { Authority } from "@/components/wemidia/authority"
import { CtaFinal } from "@/components/wemidia/cta-final"
import { Footer } from "@/components/wemidia/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <Problem />

      <div id="solucao">
        <TargetAudience />
      </div>

      <Solution />

      <div id="processo">
        <Process />
      </div>

      <div id="modelos">
        <WorkModels />
      </div>

      <Authority />

      <div id="contato">
        <CtaFinal />
      </div>

      <Footer />
    </main>
  )
}
