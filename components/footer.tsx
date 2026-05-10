"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/30 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/50 bg-primary/10">
                <span className="font-mono text-sm font-bold text-primary">AG</span>
              </div>
              <span className="font-medium text-foreground">Alberto García</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Ingeniero de Software y Sistemas Embebidos construyendo soluciones confiables para sistemas del mundo real.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-primary">{"// CONTENIDOS"}</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                { label: "Sobre mi", href: "#about" },
                { label: "Proyectos", href: "#projects" },
                { label: "Habilidades", href: "#skills" },
                { label: "Experiencia", href: "#experience" },
                { label: "Contacto", href: "#contact" },
                { label: "CV", href: "/cv.pdf" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-mono text-sm text-primary">{"// CONECTAR"}</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: "https://github.com/albertogg1", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/alberto-garciagarcia", label: "LinkedIn" },
                { icon: Mail, href: "mailto:alberto.garc.garc@gmail.com", label: "Email" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded border border-border bg-secondary/30 text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">©</span> {currentYear} Alberto García. All rights reserved.
          </p>
          <motion.p
            className="font-mono text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">{"<"}</span>
            <span className="text-accent">/</span>
            <span className="text-primary">{">"}</span> with passion for engineering
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
