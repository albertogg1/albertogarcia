"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "2022 — Present",
    title: "Embedded Software Engineer",
    company: "Indra Sistemas",
    companyUrl: "https://www.indracompany.com",
    description:
      "Leading firmware development for radar and electronic warfare systems. Designing real-time software architectures, implementing communication protocols, and ensuring system reliability under stringent defense industry standards.",
    highlights: [
      "Developed mission-critical firmware in C for ARM Cortex-M processors",
      "Implemented RS422 communication protocols with zero data loss",
      "Created Python automation tools reducing validation time by 60%",
      "Collaborated with hardware teams on HW/SW integration and debugging",
    ],
    technologies: ["C", "C++", "Python", "FreeRTOS", "STM32", "RS422", "Git"],
    type: "full-time",
  },
  {
    period: "2021 — 2022",
    title: "Research Assistant",
    company: "Universidad Politécnica",
    companyUrl: "#",
    description:
      "Conducted research in signal processing and embedded systems. Developed algorithms for sensor data analysis and contributed to academic publications in the field of telecommunications.",
    highlights: [
      "Designed DSP algorithms for radar signal processing applications",
      "Implemented real-time data acquisition systems using MATLAB",
      "Published research on signal classification techniques",
      "Mentored undergraduate students in embedded systems projects",
    ],
    technologies: ["MATLAB", "Python", "C", "Signal Processing", "LabVIEW"],
    type: "research",
  },
  {
    period: "2019 — 2021",
    title: "STEM Instructor",
    company: "Various Institutions",
    companyUrl: "#",
    description:
      "Taught programming and electronics fundamentals to students of various ages. Developed curriculum for embedded systems workshops and robotics programs.",
    highlights: [
      "Created hands-on curriculum for Arduino and Raspberry Pi projects",
      "Taught Python programming to 100+ students",
      "Organized electronics workshops for young engineers",
      "Developed educational materials for microcontroller programming",
    ],
    technologies: ["Arduino", "Python", "Raspberry Pi", "Electronics", "Robotics"],
    type: "teaching",
  },
  {
    period: "2018 — Present",
    title: "Freelance Developer",
    company: "Self-Employed",
    companyUrl: "#",
    description:
      "Providing embedded systems consulting and custom software development services. Specializing in hardware automation, data visualization, and industrial control systems.",
    highlights: [
      "Delivered custom automation solutions for manufacturing clients",
      "Built data visualization dashboards for industrial equipment",
      "Developed PyQt applications for hardware control interfaces",
      "Consulted on embedded architecture decisions for startups",
    ],
    technologies: ["Python", "PyQt", "C", "Automation", "APIs", "Databases"],
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
            <h2 className="font-mono text-sm text-primary">{"// EXPERIENCE"}</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
          </div>
          <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
            Professional Journey
          </h3>
          <p className="max-w-2xl text-muted-foreground">
            A timeline of my career in embedded systems engineering, research, and education.
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
