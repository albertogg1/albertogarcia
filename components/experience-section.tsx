"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2022 — Hoy",
    title: "Ingeniero de Sistemas de Radar",
    company: "Indra Sistemas",
    companyUrl: "https://www.indracompany.com",
    description:
      "Liderando el desarrollo de firmware para sistemas de radar y guerra electrónica. \
      Diseño de arquitecturas software en tiempo real, implementación de protocolos de  \
      comunicación y asegurando la fiabilidad bajo los estándares más exigentes del sector \
      de defensa.",
    highlights: [
      "Integración de cadenas de RF/mmWave",
      "Implementación de protocolos RS422/232 para comunicación con sensores",
      "Desarrollo de firmware crítico en C para microcontroladores",
      "Manejo de instrumentación de laboratorio como osciloscopios y analizadores de espectro",
      "Herramientas de automatización en Python reduciendo el tiempo de validación",
      "Colaboración con equipos de hardware en integración y depuración HW/SW",
    ],
    technologies: ["RF Systems", "C", "Python", "RS422", "RS232", "Git", "MATLAB"],
    type: "full-time",
  },
  {
    period: "2021 — 2022",
    title: "Investigador Asistente",
    company: "Universidad Politécnica",
    companyUrl: "#",
    description:
      "Investigación en procesado de señal y sistemas embebidos. Desarrollo de algoritmos para análisis de datos de sensores y contribución a publicaciones académicas en telecomunicaciones.",
    highlights: [
      "Diseño de algoritmos DSP para aplicaciones de radar",
      "Implementación de sistemas de adquisición de datos en tiempo real con MATLAB",
      "Publicación de investigaciones sobre clasificación de señales",
      "Mentoría a estudiantes en proyectos de sistemas embebidos",
    ],
    technologies: ["MATLAB", "Python", "C", "Procesado de Señal", "LabVIEW"],
    type: "research",
  },
  {
    period: "2019 — 2021",
    title: "Instructor STEM",
    company: "Varias Instituciones",
    companyUrl: "#",
    description:
      "Docencia en programación y electrónica a estudiantes de diferentes edades. Desarrollo de material didáctico para talleres de sistemas embebidos y robótica.",
    highlights: [
      "Creación de talleres prácticos con Arduino y Raspberry Pi",
      "Enseñanza de Python a más de 100 estudiantes",
      "Organización de talleres de electrónica para jóvenes ingenieros",
      "Desarrollo de materiales educativos para microcontroladores",
    ],
    technologies: ["Arduino", "Python", "Raspberry Pi", "Electrónica", "Robótica"],
    type: "teaching",
  },
  {
    period: "2018 — Actualidad",
    title: "Desarrollador Freelance",
    company: "Autónomo",
    companyUrl: "#",
    description:
      "Consultoría en sistemas embebidos y desarrollo de software a medida. Especialista en automatización hardware, visualización de datos y sistemas de control industrial.",
    highlights: [
      "Soluciones de automatización personalizadas para clientes industriales",
      "Dashboards de visualización de datos para equipos industriales",
      "Aplicaciones PyQt para interfaces de control de hardware",
      "Asesoría en arquitectura embebida para startups",
    ],
    technologies: ["Python", "PyQt", "C", "Automatización", "APIs", "Bases de datos"],
    type: "freelance",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <h2 className="font-mono text-sm text-primary">{"// EXPERIENCIA"}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
            Trayectoria Profesional
          </h3>
          <p className="max-w-2xl text-muted-foreground">
            Una línea temporal de mi carrera en ingeniería de sistemas embebidos, investigación y educación.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-border to-transparent md:left-[140px]" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                className="relative pl-8 md:pl-[180px]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 flex h-4 w-4 items-center justify-center md:left-[133px]">
                  <span className="absolute h-4 w-4 rounded-full border-2 border-primary bg-background" />
                  <span className="absolute h-2 w-2 rounded-full bg-primary" />
                </div>

                {/* Period - visible on md+ */}
                <div className="absolute left-8 top-0 hidden text-right md:left-0 md:block md:w-[120px]">
                  <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                </div>

                {/* Content card */}
                <div className="group rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary/30 hover:bg-card">
                  {/* Period - visible on mobile */}
                  <span className="mb-2 block font-mono text-xs text-muted-foreground md:hidden">
                    {exp.period}
                  </span>

                  {/* Header */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-xs ${
                        exp.type === "full-time"
                          ? "border-primary/50 text-primary"
                          : exp.type === "research"
                            ? "border-accent/50 text-accent"
                            : "border-border text-muted-foreground"
                      }`}
                    >
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="mb-4 space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-primary/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
