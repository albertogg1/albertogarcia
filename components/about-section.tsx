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
              <h2 className="font-mono text-sm text-primary">{"// ABOUT"}</h2>
            </div>

            <h3 className="text-3xl font-bold text-foreground sm:text-4xl">
              Engineering solutions at the intersection of{" "}
              <span className="text-primary">hardware and software</span>
            </h3>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Telecommunications Engineer with expertise in embedded systems, real-time software development, 
              and signal processing. I specialize in building robust firmware and software solutions that 
              bridge the gap between complex hardware and intelligent systems.
            </p>

            <div className="space-y-4 pt-4">
              <p className="text-muted-foreground">
                My experience spans radar and electronic systems development at defense industry leaders, 
                where I&apos;ve worked on mission-critical firmware in C, developed Python automation tools for 
                hardware validation, and collaborated across multidisciplinary engineering teams.
              </p>
              <p className="text-muted-foreground">
                I thrive in environments where precision meets innovation — debugging real-time constraints, 
                optimizing embedded algorithms, and ensuring reliability in systems where failure is not an option.
              </p>
            </div>
          </div>

          {/* Right column - Focus areas */}
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Cpu,
                  title: "Embedded Systems",
                  description: "Firmware development, microcontrollers, STM32, real-time operating systems",
                },
                {
                  icon: Radio,
                  title: "Signal Processing",
                  description: "DSP algorithms, radar systems, sensor data acquisition and analysis",
                },
                {
                  icon: Terminal,
                  title: "Software Engineering",
                  description: "C/C++, Python tooling, automation frameworks, Linux systems",
                },
                {
                  icon: Zap,
                  title: "Hardware Integration",
                  description: "HW/SW co-design, communication protocols, instrumentation",
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
                <span className="text-accent">STATUS:</span> Open to new opportunities
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
