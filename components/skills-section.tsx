"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const skillCategories = [
  {
    name: "Embebido",
    color: "primary",
    skills: [
      { name: "C", level: 90 },
      { name: "MIPS32®", level: 80 },
      { name: "FreeRTOS", level: 45 },
    ],
  },
  {
    name: "Software",
    color: "accent",
    skills: [
      { name: "Python", level: 95 },
      { name: "PyQt", level: 85 },
      { name: "MATLAB", level: 90 },
      { name: "Git", level: 90 },
      { name: "Linux", level: 70 },
    ],
  },
  {
    name: "Hardware",
    color: "primary",
    skills: [
      { name: "Modbus RTU (RS-232/422/485)", level: 95 },
      { name: "UART", level: 75 },
      { name: "GPIB", level: 80 },
      { name: "Osciloscopios", level: 85 },
      { name: "Analizador de espectro", level: 90 },
    ],
  },
  {
    name: "Procesado de Señal",
    color: "accent",
    skills: [
      { name: "DSP", level: 85 },
      { name: "Análisis FFT", level: 90 },
      { name: "Filtrado", level: 85 },
      { name: "Sistemas Radar", level: 80 },
      { name: "NumPy/SciPy", level: 90 },
    ],
  },
  {
    name: "Cloud & DevOps",
    color: "primary",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 60 },
      { name: "AWS", level: 65 },
      { name: "Azure", level: 60 },
      { name: "CI/CD", level: 85 },
      { name: "Terraform", level: 60 },
    ],
  },
  {
    name: "Herramientas",
    color: "accent",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "LabVIEW", level: 80 },
      { name: "Wireshark", level: 75 },
    ],
  },
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <h2 className="font-mono text-sm text-primary">{"// HABILIDADES"}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
            Competencias técnicas
          </h3>
          <p className="max-w-2xl text-muted-foreground">
            Una visión general de mis habilidades técnicas en sistemas embebidos, desarrollo de software e integración de hardware.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="group relative overflow-hidden rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            >
              {/* Category header */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded border ${
                    category.color === "primary"
                      ? "border-primary/50 bg-primary/10 text-primary"
                      : "border-accent/50 bg-accent/10 text-accent"
                  }`}
                >
                  <HexIcon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground">{category.name}</h4>
              </div>

              {/* Skills list */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="space-y-1.5"
                    onMouseEnter={() => setHoveredSkill(`${category.name}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span
                        className={`font-mono text-xs transition-opacity ${
                          hoveredSkill === `${category.name}-${skill.name}`
                            ? "opacity-100"
                            : "opacity-0"
                        } ${category.color === "primary" ? "text-primary" : "text-accent"}`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className={`h-full rounded-full ${
                          category.color === "primary" ? "bg-primary" : "bg-accent"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-primary/5 blur-2xl transition-all group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>

        {/* Additional tools */}
        <motion.div
          className="mt-12 rounded-lg border border-border bg-card/30 p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="mb-4 font-mono text-sm text-muted-foreground">
            {"// TAMBIÉN EXPERIENCIA CON"}
          </h4>
          <div className="flex flex-wrap gap-2">
            {[
              "TensorFlow",
              "SPICE",
              "Jenkins",
              "GitLab CI",
              "Bash",
            ].map((tool) => (
              <span
                key={tool}
                className="rounded border border-border bg-secondary/30 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HexIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}
