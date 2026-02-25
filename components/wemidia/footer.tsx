import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          {/* Logo */}
          <Image
            src="/images/logo-wemidia.png"
            alt="WeMídia"
            width={220}
            height={60}
            className="h-14 w-auto"
          />

          {/* Tagline */}
          <p className="text-sm text-muted-foreground">
            Comunicação Corporativa Estratégica
          </p>

          {/* Contact links */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="mailto:contato@wemidia.com.br"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
              <span>contato@wemidia.com.br</span>
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              aria-label="WhatsApp"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-6 w-full">
            <p className="text-xs text-muted-foreground/60">
              {new Date().getFullYear()} WeMídia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
