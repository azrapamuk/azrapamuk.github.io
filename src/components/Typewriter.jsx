import { useEffect, useState } from 'react'

export default function Typewriter({ text, speed = 32 }) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [n, setN] = useState(reduce ? text.length : 0)

  useEffect(() => {
    if (reduce) return undefined
    const id = setInterval(() => setN((v) => (v < text.length ? v + 1 : v)), speed)
    return () => clearInterval(id)
  }, [text, speed, reduce])

  return (
    <>
      {text.slice(0, n)}
      {n < text.length && <span className="caret" />}
    </>
  )
}
