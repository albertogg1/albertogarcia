"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded border border-primary/50 bg-primary/10">
            <span className="font-mono text-sm font-bold text-primary">AG</span>
          </div>
          <span className="hidden font-medium text-foreground sm:block">Alberto García</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="group relative font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {"// "}
                </span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <motion.span
            className="h-0.5 w-6 bg-foreground"
            animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-foreground"
            animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
          />
          <motion.span
            className="h-0.5 w-6 bg-foreground"
            animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        className="border-b border-border bg-background/95 backdrop-blur-lg md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <ul className="flex flex-col gap-4 px-6 py-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="block font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-primary">{"// "}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}
