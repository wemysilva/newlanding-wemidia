"use client"

import { useState } from "react"

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
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null

  return (
    <div className="glow-blue group rounded-xl border border-border bg-card/50 overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(45,212,191,0.2),0_0_60px_rgba(45,212,191,0.1)]">
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
            <div className="absolute inset-0 bg-background/20 transition-colors group-hover:bg-background/10" />
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
      </div>
    </div>
  )
}
