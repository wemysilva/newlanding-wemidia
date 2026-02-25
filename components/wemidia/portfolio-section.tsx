import { ProjectCard } from "@/components/wemidia/project-card"

interface Project {
  title: string
  description: string
  videoUrl: string
}

interface PortfolioSectionProps {
  id: string
  label: string
  title: string
  description?: string
  projects: Project[]
}

export function PortfolioSection({
  id,
  label,
  title,
  description,
  projects,
}: PortfolioSectionProps) {
  return (
    <section id={id} className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-light tracking-widest uppercase text-[#2DD4BF]">
            {label}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              videoUrl={project.videoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
