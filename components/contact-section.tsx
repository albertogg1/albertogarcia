"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, FileText, Terminal, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function ContactSection() {
  const [terminalText, setTerminalText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const email = "alberto.garcia@example.com"

  const handleTerminalClick = () => {
    const text = `mail -s "Hello" ${email}`
    let i = 0
    setTerminalText("")
    
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setTerminalText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          window.location.href = `mailto:${email}`
        }, 500)
      }
    }, 50)
  }

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
            <h2 className="font-mono text-sm text-primary">{"// CONTACT"}</h2>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
          <h3 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Let&apos;s Connect
          </h3>
          <p className="mx-auto max-w-lg text-muted-foreground">
            Interested in embedded systems, signal processing, or just want to chat about engineering?
            I&apos;m always open to discussing new projects and opportunities.
          </p>
        </motion.div>

        {/* Terminal-style contact */}
        <motion.div
          className="mb-12 overflow-hidden rounded-lg border border-border bg-card/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/50 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-green-500/70" />
            </div>
            <span className="ml-2 font-mono text-xs text-muted-foreground">contact@alberto-garcia ~ </span>
          </div>

          {/* Terminal body */}
          <div className="p-6">
            <div className="font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat contact_info.txt
              </p>
              <div className="mt-4 space-y-2 text-muted-foreground">
                <p>
                  <span className="text-accent">EMAIL:</span> {email}
                </p>
                <p>
                  <span className="text-accent">LINKEDIN:</span> linkedin.com/in/albertogarcia
                </p>
                <p>
                  <span className="text-accent">GITHUB:</span> github.com/albertogarcia
                </p>
                <p>
                  <span className="text-accent">LOCATION:</span> Spain, Open to Remote
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <p className="text-muted-foreground">
                  <span className="text-primary">$</span>{" "}
                  <span className="text-foreground">{terminalText}</span>
                  {showCursor && <span className="animate-pulse text-primary">▋</span>}
                </p>
              </div>
            </div>

            <Button
              onClick={handleTerminalClick}
              className="mt-4 gap-2"
              variant="outline"
            >
              <Terminal className="h-4 w-4" />
              Execute Contact Command
            </Button>
          </div>
        </motion.div>

        {/* Contact links */}
        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            {
              icon: Mail,
              label: "Email",
              value: "Get in touch",
              href: `mailto:${email}`,
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "Connect",
              href: "https://linkedin.com/in/albertogarcia",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "View code",
              href: "https://github.com/albertogarcia",
            },
            {
              icon: FileText,
              label: "CV",
              value: "Download",
              href: "/cv.pdf",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                className="group flex items-center gap-4 rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded border border-border bg-secondary/50 text-muted-foreground transition-all group-hover:border-primary/50 group-hover:bg-primary/10 group-hover:text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="gap-2">
            <Link href={`mailto:${email}`}>
              <Send className="h-4 w-4" />
              Send me a message
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
