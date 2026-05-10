"use client"

import { motion } from "framer-motion"
import { Terminal, Cpu, Radio, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left column - Title and intro */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
              <h2 className="font-mono text-sm text-primary">{"// SOBRE MI"}</h2>
            </div>

            <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
              Soluciones de ingeniería en la intersección de
              <span className="text-primary"> hardware y software</span>
            </h3>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Ingeniero de Telecomunicaciones especializado en sistemas embebidos, desarrollo de software en tiempo real y procesamiento de señal. Me especializo en crear firmware y soluciones software robustas que conectan hardware complejo con sistemas inteligentes.
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-muted-foreground">
                Mi experiencia abarca el desarrollo de sistemas electrónicos y de radar en la industria de defensa, donde he trabajado en firmware crítico en C, desarrollado herramientas de automatización en Python para validación de hardware y colaborado en equipos de ingeniería multidisciplinar.
              </p>
              <p className="text-muted-foreground">
                Disfruto en entornos donde la precisión se une a la innovación: depuración de sistemas en tiempo real, optimización de algoritmos embebidos y asegurando la fiabilidad en sistemas donde el fallo no es una opción.
              </p>
            </div>
          </div>

          {/* Right column - Focus areas */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Cpu,
                  title: "Sistemas Embebidos",
                  description: "Desarrollo de firmware, microcontroladores, STM32, sistemas operativos en tiempo real",
                },
                {
                  icon: Radio,
                  title: "Procesado de Señal",
                  description: "Algoritmos DSP, sistemas radar, adquisición y análisis de datos de sensores",
                },
                {
                  icon: Terminal,
                  title: "Ingeniería de Software",
                  description: "C/C++, herramientas Python, frameworks de automatización, sistemas Linux",
                },
                {
                  icon: Zap,
                  title: "Integración Hardware",
                  description: "Co-diseño HW/SW, protocolos de comunicación, instrumentación",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group rounded-lg border border-border bg-card/50 p-5 transition-all hover:border-primary/50 hover:bg-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded border border-primary/30 bg-primary/10 text-primary transition-all group-hover:border-primary/50 group-hover:bg-primary/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mb-2 font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Status indicator */}
            <motion.div
              className="flex items-center gap-3 rounded border border-border bg-secondary/30 px-4 py-3 font-mono text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-muted-foreground">
                <span className="text-accent">ESTADO:</span> Abierto a nuevas oportunidades
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
