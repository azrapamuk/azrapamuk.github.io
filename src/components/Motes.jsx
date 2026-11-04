import { useEffect, useRef } from 'react'

export default function Motes() {
  const ref = useRef(null)

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    const hero = c.parentElement
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let dust = [], w = 0, h = 0, raf = 0, t = 0

    const resize = () => {
      w = c.width = c.offsetWidth
      h = c.height = c.offsetHeight
      const n = Math.min(90, Math.floor((w * h) / 12000))
      dust = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h, s: Math.random() < 0.7 ? 2 : 3,
        v: 0.15 + Math.random() * 0.35, ph: Math.random() * 6.28, a: 0.25 + Math.random() * 0.45,
      }))
    }
    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      t += 0.01
      ctx.fillStyle = '#b9ccd9'
      for (const p of dust) {
        if (!reduce) { p.y -= p.v; p.x += Math.sin(t + p.ph) * 0.3 }
        if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w }
        ctx.globalAlpha = p.a
        ctx.fillRect(Math.round(p.x), Math.round(p.y), p.s, p.s)
      }
      raf = requestAnimationFrame(draw)
    }
    const move = (e) => {
      const r = hero.getBoundingClientRect()
      hero.style.setProperty('--mx', e.clientX - r.left + 'px')
      hero.style.setProperty('--my', e.clientY - r.top + 'px')
      hero.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
    }

    hero.addEventListener('mousemove', move)
    window.addEventListener('resize', resize)
    resize()
    draw()
    return () => {
      cancelAnimationFrame(raf)
      hero.removeEventListener('mousemove', move)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <canvas id="sky" ref={ref} aria-hidden="true" />
      <div className="flash" aria-hidden="true" />
    </>
  )
}
