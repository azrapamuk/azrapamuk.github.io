const LAYERS = [{ src: '/img/bg/far.png', depth: 0.4 },]

export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      {LAYERS.map((l) => (
        <div key={l.src} className="layer" style={{ backgroundImage: `url(${l.src})`, '--d': l.depth }} />
      ))}
    </div>
  )
}
