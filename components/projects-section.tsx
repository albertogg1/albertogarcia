"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
  /* {
    title: "SmartRep",
    category: "Sistemas Embebidos",
    description:
      "Pulsera de actividad inteligente para monitoreo de entrenamientos.",
    challenge:
      "Implementación de restricciones de temporización deterministas manteniendo comunicación fiable sobre RS422 en entornos industriales ruidosos.",
    technologies: ["C", "ESP32", "FreeRTOS", "RS422", "Python"],
    achievements: ["99.9% de disponibilidad", "Respuesta sub-milisegundo", "Diagnóstico remoto"],
    github: "https://github.com/albertogg1/SmartRep",
    featured: true,
    wip: true,
  }, */
  {
    title: "PomoBot",
    category: "Desarrollo Web",
    description:
      "Web para herramienta de productividad Pomodoro.",
    challenge:
      "Diseño y desarrollo de un sitio web para una herramienta de productividad, enfocado en comunicar su propuesta de valor y facilitar la interacción con el usuario.",
    technologies: ["React", "Vite", "Node.js", "Firebase", "Vercel"],
    achievements: ["Alta disponibilidad", "Interfaz intuitiva", "Despliegue automático"],
    github: "https://github.com/albertogg1/PomoBot",
    demo: "https://pomo-bot.vercel.app",
    featured: true,
    wip: true,
  },
  {
    title: "Nova Madrid Toastmasters",
    category: "Desarrollo Web",
    description:
      "Web para club de oratoria con gestión de miembros.",
        technologies: ["WordPress"],
    achievements: ["CMS personalizado", "Diseño responsivo", "SEO optimizado"],
    featured: false
  },
  {
    title: "Julia Castro",
    category: "Desarrollo Web",
    description:
      "Sitio web para artista visual.",
    challenge:
      "Optimización de rendimiento y SEO para portafolio artístico con CMS personalizado.",
    technologies: ["PHP", "HTML5", "CSS3", "JavaScript", "MySQL"],
    achievements: ["CMS personalizado", "Diseño responsivo", "SEO optimizado"],
    demo: "https://juliacastrog.es",
    featured: true,
  },
  /*   {
      title: "Real-Time Hardware Monitoring System",
      category: "Embedded Systems",
      description:
        "Developed a comprehensive monitoring solution for industrial equipment using STM32 microcontrollers. Features real-time data acquisition, fault detection algorithms, and remote telemetry capabilities.",
      challenge:
        "Implementing deterministic timing constraints while maintaining reliable communication over RS422 in noisy industrial environments.",
      technologies: ["C", "STM32", "FreeRTOS", "RS422", "Python"],
      achievements: ["99.9% uptime", "Sub-millisecond response", "Remote diagnostics"],
      github: "#",
      featured: true,
    },
    {
      title: "Signal Acquisition & Visualization Platform",
      category: "Signal Processing",
      description:
        "Built a cross-platform application for real-time signal acquisition, processing, and visualization. Supports multiple input sources and provides advanced DSP analysis tools.",
      challenge:
        "Achieving smooth visualization of high-frequency signals while performing real-time FFT analysis without data loss.",
      technologies: ["Python", "PyQt", "NumPy", "MATLAB", "USB/GPIB"],
      achievements: ["10MS/s throughput", "Real-time FFT", "Multi-channel support"],
      github: "#",
      featured: true,
    },
    {
      title: "Embedded Telemetry Dashboard",
      category: "Hardware Control",
      description:
        "Created a web-based dashboard for monitoring and controlling embedded devices in a test environment. Features live data streaming, command interface, and data logging.",
      challenge:
        "Synchronizing multiple data streams from heterogeneous embedded devices with different sampling rates and protocols.",
      technologies: ["Python", "FastAPI", "WebSocket", "React", "SQLite"],
      achievements: ["100+ devices", "Real-time sync", "Historical analysis"],
      github: "#",
      featured: false,
    },
    {
      title: "RS422 Communication Framework",
      category: "Embedded Systems",
      description:
        "Designed and implemented a robust communication framework for multi-node RS422 networks. Includes error detection, automatic retransmission, and diagnostic capabilities.",
      challenge:
        "Ensuring reliable data transfer in high-EMI environments while maintaining low latency for time-critical commands.",
      technologies: ["C", "ARM Cortex-M", "RS422", "CRC", "Protocol Design"],
      achievements: ["Zero data loss", "10kHz polling", "EMI resistant"],
      github: "#",
      featured: false,
    },
    {
      title: "Radar Simulation Toolkit",
      category: "Signal Processing",
      description:
        "Developed simulation tools for radar signal processing algorithm validation. Enables rapid prototyping and testing of detection algorithms before hardware deployment.",
      challenge:
        "Accurately modeling real-world signal conditions including noise, interference, and multipath effects.",
      technologies: ["Python", "NumPy", "SciPy", "MATLAB", "TensorFlow"],
      achievements: ["95% model accuracy", "10x faster iteration", "GPU acceleration"],
      github: "#",
      featured: true,
    },
    {
      title: "Edge AI Analytics Module",
      category: "AI / Data Projects",
      description:
        "Implemented edge computing solution for real-time sensor data analysis using lightweight ML models. Deployed on resource-constrained embedded platforms.",
      challenge:
        "Optimizing neural network inference to run within strict memory and power constraints of embedded targets.",
      technologies: ["Python", "TensorFlow Lite", "C++", "ARM", "ONNX"],
      achievements: ["<50ms inference", "95% accuracy", "2W power budget"],
      github: "#",
      featured: false,
    }, */
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="relative px-6 py-32">
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
            <h2 className="font-mono text-sm text-primary">{"// PROYECTOS"}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
            Casos prácticos de ingeniería
          </h3>
          <p className="max-w-2xl text-muted-foreground">
            Una selección de proyectos que muestran el desarrollo de sistemas embebidos, procesamiento de señales,
            e integración hardware-software.
          </p>
        </motion.div>

        {/* Featured projects */}
        <div className="mb-16 space-y-8">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-lg border border-border bg-card/50 transition-all hover:border-primary/30 hover:bg-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="grid gap-6 p-6 lg:grid-cols-3 lg:p-8">
                {/* Project info */}
                <div className="space-y-4 lg:col-span-2">

                  {project.wip && (
                    <span className="flex items-center gap-1.5 font-mono text-xs text-yellow-400">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
                      En desarrollo
                    </span>
                  )}

                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">Proyecto Destacado</span>

                  </div>


                  <h4 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="space-y-2 rounded border border-border/50 bg-secondary/30 p-4">
                    <p className="font-mono text-xs text-primary">{"// RETO DE INGENIERÍA"}</p>
                    <p className="text-sm text-muted-foreground">{project.challenge}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-border bg-secondary/50 px-2 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements & links */}
                <div className="flex flex-col justify-between space-y-6 lg:items-end lg:text-right">
                  <div className="space-y-3">
                    <p className="font-mono text-xs text-accent">LOGROS CLAVE</p>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="flex items-center gap-2 text-sm text-muted-foreground lg:justify-end"
                        >
                          <ChevronRight className="h-3 w-3 text-primary" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-row flex-wrap gap-2 lg:justify-end">
                    {project.github && (
                      <Button asChild variant="outline" size="sm" className="w-fit gap-2">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Código Fuente
                        </Link>
                      </Button>
                    )}
                    {project.demo && (
                      <Button asChild variant="outline" size="sm" className="w-fit gap-2">
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/5 blur-3xl transition-all group-hover:bg-primary/10" />
            </motion.article>
          ))}
        </div>

        {/* Other projects grid */}
        <div className="space-y-8">
          <h4 className="font-mono text-sm text-muted-foreground">{"// MÁS PROYECTOS"}</h4>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <motion.article
                key={project.title}
                className="group flex flex-col rounded-lg border border-border bg-card/50 p-5 transition-all hover:border-primary/30 hover:bg-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >

                {project.wip && (
                  <span className="flex items-center gap-1.5 font-mono text-xs text-yellow-400 mb-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
                    En desarrollo
                  </span>
                )}

                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="w-fit border-border text-xs text-muted-foreground">
                    {project.category}
                  </Badge>
                </div>


                <h5 className="mb-2 font-semibold text-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h5>

                <p className="mb-4 flex-1 text-sm text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="font-mono text-xs text-primary/70">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Código Fuente
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Demo
                    </Link>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
