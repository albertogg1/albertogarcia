"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, FileText, Mail, Code } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Terminal-style intro */}
          <motion.div
            className="inline-flex items-center gap-2 rounded border border-border bg-card/50 px-4 py-2 font-mono text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-muted-foreground">systems@engineer</span>
            <span className="text-primary">~</span>
            <span className="text-foreground">$</span>
            <span className="ml-1 text-accent">whoami</span>
          </motion.div>

          {/* Main heading */}
          <div className="space-y-4">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Alberto García
            </motion.h1>
            <motion.p
              className="text-xl font-medium text-primary sm:text-2xl lg:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Embedded Software & Systems Engineer
            </motion.p>
          </div>

          {/* Tagline */}
          <motion.p
            className="max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Building reliable software for real-world systems.{" "}
            <span className="text-accent">Bridging hardware, software, and intelligent systems.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Button asChild size="lg" className="group gap-2">
              <Link href="#projects">
                <Code className="h-4 w-4 transition-transform group-hover:rotate-12" />
                View Projects
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="group gap-2">
              <Link href="/cv.pdf" target="_blank">
                <FileText className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="group gap-2 text-muted-foreground hover:text-foreground">
              <Link href="#contact">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </Button>
          </motion.div>

          {/* Tech stack preview */}
          <motion.div
            className="flex flex-wrap items-center gap-3 pt-8 font-mono text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <span className="text-primary">{"//"}</span>
            {["C/C++", "Python", "Embedded", "RTOS", "Signal Processing", "Linux"].map((tech, i) => (
              <span
                key={tech}
                className="rounded border border-border/50 bg-secondary/30 px-2 py-1 transition-colors hover:border-primary/50 hover:bg-primary/10"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <Link href="#about" className="group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary">
          <span className="font-mono text-xs">scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  )
}
