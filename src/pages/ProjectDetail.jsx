import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects.js'
import { LABEL, filed, STATUS, statusOf } from '../components/ProjectList.jsx'

const zoomable = (m) => !m.type || m.type === 'image' || m.type === 'loop'

function Paragraphs({ text }) {
  return text.split(/\n\s*\n/).map((t, i) => <p key={i}>{t}</p>)
}

function Picture({ item }) {
  if (item.type === 'loop') return <video src={item.src} autoPlay muted loop playsInline />
  return <img src={item.src} alt={item.caption || ''} loading="lazy" />
}

function Media({ item, onZoom }) {
  let body
  if (item.type === 'youtube') {
    body = (
      <div className="embed">
        <iframe src={`https://www.youtube-nocookie.com/embed/${item.id}`} title={item.caption || 'Video'}
          loading="lazy" allowFullScreen />
      </div>
    )
  } else if (item.type === 'video') {
    body = <video src={item.src} controls preload="metadata" playsInline />
  } else {
    body = (
      <button type="button" className="zoom" onClick={onZoom} aria-label={`Enlarge: ${item.caption || 'image'}`}>
        <Picture item={item} />
      </button>
    )
  }
  return (
    <figure className={`media${item.wide ? ' wide' : ''}`}>
      {body}
      {item.caption && <figcaption>{item.caption}</figcaption>}
    </figure>
  )
}

function Lightbox({ slides, index, onClose, onMove }) {
  const item = slides[index]

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onMove(-1)
      if (e.key === 'ArrowRight') onMove(1)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose, onMove])

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={onClose}>
      <button type="button" className="lb-close" onClick={onClose} aria-label="Close" autoFocus>Close</button>
      {slides.length > 1 && (
        <>
          <button type="button" className="lb-nav prev" aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); onMove(-1) }}>&lt;</button>
          <button type="button" className="lb-nav next" aria-label="Next"
            onClick={(e) => { e.stopPropagation(); onMove(1) }}>&gt;</button>
        </>
      )}
      <figure className="lb-figure" onClick={(e) => e.stopPropagation()}>
        <Picture item={item} />
        <figcaption>
          {item.caption}
          {slides.length > 1 && <span className="lb-count"> ({index + 1}/{slides.length})</span>}
        </figcaption>
      </figure>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(null)
  const p = projects.find((x) => x.slug === slug)

  const goBack = () => (location.key !== 'default' ? navigate(-1) : navigate('/projects'))

  if (!p) {
    return (
      <section>
        <div className="wrap">
          <button className="choice back" onClick={goBack}>Back</button>
          <div className="dialog empty">
            <p>{'* This file does not exist.\n* Maybe it was moved.'}</p>
          </div>
        </div>
      </section>
    )
  }

  const slides = (p.media || []).filter(zoomable)
  const move = (d) => setOpen((i) => (i === null ? i : (i + d + slides.length) % slides.length))

  const meta = [
    ['Role', p.role],
    ['Team', p.team],
    ['Duration', p.duration],
    ['Filed', filed(p.date)],
    ['Tools', p.tags.join(', ')],
    ['Status', STATUS[statusOf(p)]],
  ].filter(([, v]) => v)

  return (
    <section>
      <div className="wrap">
        <button className="choice back" onClick={goBack}>Back to projects</button>

        <article className="doc">
          <span className="stamp">{LABEL[p.category]}</span>
          <h1 className="doc-title">{p.title}</h1>

          <dl className="meta">
            {meta.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>

          <Paragraphs text={p.overview || p.description} />
          {p.now && <p className="now">Right now: {p.now}</p>}

          {p.contributions?.length > 0 && (
            <>
              <h3>What I did</h3>
              <ul className="did">{p.contributions.map((c) => <li key={c}>{c}</li>)}</ul>
            </>
          )}

          {p.sections?.map((s) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              {s.text && <Paragraphs text={s.text} />}
              {s.subsections?.map((sub) => (
                <div className="subsection" key={sub.heading}>
                  <h4>{sub.heading}</h4>
                  <Paragraphs text={sub.text} />
                </div>
              ))}
            </div>
          ))}

          {p.media?.length > 0 && (
            <>
              <h3>Evidence</h3>
              <div className="gallery">
                {p.media.map((m, i) => (
                  <Media key={i} item={m} onZoom={() => setOpen(slides.indexOf(m))} />
                ))}
              </div>
            </>
          )}

          {p.links?.length > 0 && (
            <div className="links">
              {p.links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
            </div>
          )}
        </article>
      </div>

      {open !== null && slides[open] && (
        <Lightbox slides={slides} index={open} onClose={() => setOpen(null)} onMove={move} />
      )}
    </section>
  )
}