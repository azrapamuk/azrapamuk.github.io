import { useEffect, useState } from 'react'

const CATS = {
  calico: ['/img/cats/calico1.png', '/img/cats/calico2.png'],
  tabby: ['/img/cats/tabby1.png', '/img/cats/tabby2.png'],
  tuxedo: ['/img/cats/grey1.png', '/img/cats/grey2.png'],
}
const FRAME_MS = 800 

export default function PixelCat({ variant = 'tuxedo', size = 64 }) {
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    let id
    const start = setTimeout(() => {
      id = setInterval(() => setFrame((f) => 1 - f), FRAME_MS + Math.random() * 200)
    }, Math.random() * FRAME_MS)
    return () => {
      clearTimeout(start)
      clearInterval(id)
    }
  }, [])

  return (
    <span className="cat" style={{ width: size }}>
      {CATS[variant].map((src, i) => (
        <img key={src} src={src} alt={i === 0 ? `A ${variant} cat` : ''}
             className={i === frame ? '' : 'off'} draggable="false" />
      ))}
    </span>
  )
}