'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulse: number
  pulseSpeed: number
}

interface Connection {
  from: number
  to: number
  opacity: number
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const nodesRef = useRef<Node[]>([])
  const connectionsRef = useRef<Connection[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initNodes()
    }

    const initNodes = () => {
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 60)
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      }))

      // Pre-compute connections
      const conns: Connection[] = []
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          if (conns.filter((c) => c.from === i || c.to === i).length < 3) {
            conns.push({ from: i, to: j, opacity: Math.random() * 0.3 + 0.05 })
          }
        }
      }
      connectionsRef.current = conns
    }

    const SYNAPSE_BLUE = '40, 169, 225'
    const MAX_DIST = 180

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const nodes = nodesRef.current

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        node.pulse += node.pulseSpeed
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      })

      // Draw connections
      connectionsRef.current.forEach(({ from, to }) => {
        const a = nodes[from]
        const b = nodes[to]
        if (!a || !b) return
        const dx = b.x - a.x
        const dy = b.y - a.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.25
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(${SYNAPSE_BLUE}, ${alpha})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })

      // Draw nodes
      nodes.forEach((node) => {
        const pulse = (Math.sin(node.pulse) + 1) / 2
        const glow = node.radius + pulse * 3
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glow * 3)
        gradient.addColorStop(0, `rgba(${SYNAPSE_BLUE}, ${0.6 + pulse * 0.4})`)
        gradient.addColorStop(1, `rgba(${SYNAPSE_BLUE}, 0)`)

        ctx.beginPath()
        ctx.arc(node.x, node.y, glow * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${SYNAPSE_BLUE}, ${0.7 + pulse * 0.3})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(draw)
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    resize()
    draw()

    return () => {
      resizeObserver.disconnect()
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
