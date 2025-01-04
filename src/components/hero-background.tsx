'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Theme-based colors
    const colors = {
      dark: {
        bg: 'hsl(196, 85%, 6%)',
        primary: 'hsla(189, 83%, 72%, 0.6)',
        secondary: 'hsla(324, 82%, 60%, 0.6)',
        accent: 'hsla(12, 83%, 55%, 0.6)'
      },
      light: {
        bg: 'hsl(196, 85%, 99%)',
        primary: 'hsla(189, 83%, 50%, 0.6)',
        secondary: 'hsla(324, 82%, 50%, 0.6)',
        accent: 'hsla(12, 83%, 50%, 0.6)'
      }
    }

    const currentColors = theme === 'dark' ? colors.dark : colors.light

    // Particle system
    const particles: { x: number; y: number; vx: number; vy: number; size: number }[] = []
    const particleCount = 100
    const connectionDistance = 150

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      })
    }

    // Animation
    function animate() {
      if (!ctx) return
      if (!canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = currentColors.primary
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            const opacity = (1 - distance / connectionDistance) * (theme === 'dark' ? 0.1 : 0.15)
            ctx.strokeStyle = currentColors.primary.replace('0.6)', `${opacity})`)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
    }
  }, [theme, mounted])

  if (!mounted) {
    return (
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background transition-colors duration-300" />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 -z-10">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 transition-colors duration-300"
        style={{ 
          backgroundColor: theme === 'dark' 
            ? 'hsl(196, 85%, 6%)' 
            : 'hsl(196, 85%, 99%)',
          zIndex: -1
        }}
      />
    </div>
  )
} 