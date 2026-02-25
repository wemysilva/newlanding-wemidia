"use client"

import { useState } from "react"
import { Play, ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  videoUrl: string
}

function getYouTubeId(url: string): string | null {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/
  )
  return match ? match[1] : null
}

export function ProjectCard({ title, description, videoUrl }: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = getYouTubeId(videoUrl)
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : null

  return (
    <div className="glow-blue group rounded-xl border border-border bg-card/50 overflow-hidden transition-all glow-blue-hover">
      {/* Video thumbnail / embed area */}
      <div className="relative aspect-video w-full bg-secondary">
        {isPlaying && videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            aria-label={`Reproduzir ${title}`}
          >
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                alt={`Thumbnail de ${title}`}
                className="absolute inset-0 h-full w-full object-cover"
                crossOrigin="anonymous"
              />
            )}
            <div className="absolute inset-0 bg-background/40 transition-colors group-hover:bg-background/20" />
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
              <Play className="h-6 w-6 ml-0.5" />
            </div>
          </button>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-lg font-bold text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="mt-5">
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/50 px-5 py-2 text-sm font-semibold text-foreground transition-all hover:bg-card hover:scale-105"
          >
            Ver projeto completo
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
