"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

export function WaveformBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationId: number
    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw multiple waveforms
      const waves = [
        { amplitude: 30, frequency: 0.008, speed: 0.02, opacity: 0.15, yOffset: 0.3 },
        { amplitude: 20, frequency: 0.012, speed: 0.015, opacity: 0.1, yOffset: 0.5 },
        { amplitude: 40, frequency: 0.006, speed: 0.025, opacity: 0.08, yOffset: 0.7 },
      ]

      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(56, 189, 248, ${wave.opacity})`
        ctx.lineWidth = 1.5

        const yBase = canvas.height * wave.yOffset

        for (let x = 0; x < canvas.width; x++) {
          const y =
            yBase +
            Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude +
            Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 1.3) * (wave.amplitude * 0.5)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      })

      // Draw radar-like circles
      const centerX = canvas.width * 0.85
      const centerY = canvas.height * 0.3
      const maxRadius = 150

      for (let i = 1; i <= 4; i++) {
        const radius = (maxRadius / 4) * i
        const opacity = 0.05 + Math.sin(time * 0.03 + i) * 0.03

        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Radar sweep line
      const sweepAngle = time * 0.02
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(
        centerX + Math.cos(sweepAngle) * maxRadius,
        centerY + Math.sin(sweepAngle) * maxRadius
      )
      ctx.strokeStyle = "rgba(34, 211, 238, 0.2)"
      ctx.lineWidth = 2
      ctx.stroke()

      time++
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}

export function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 grid-pattern opacity-50" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  )
}
