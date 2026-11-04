import { Link } from 'react-router-dom'

export const LABEL = { gamedev: 'Game dev', compsci: 'Comp sci' }
export const STATUS = { finished: 'Finished', 'in-progress': 'In progress' }
export const statusOf = (p) => (p.status === 'in-progress' ? 'in-progress' : 'finished')
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function filed(date) {
  if (!date) return ''
  const [y, m] = date.split('-')
  return m ? `${MONTHS[Number(m) - 1]} ${y}` : y
}

export function StatusTag({ project }) {
  const s = statusOf(project)
  return <span className={`state state-${s}`}>{STATUS[s]}</span>
}

export default function ProjectList({ items }) {
  return (
    <div className="projects">
      {items.map((p) => (
        <article className="project" key={p.slug || p.title}>
          <span className="stamp">{LABEL[p.category]}</span>
          <div className="shot">
            {p.image ? <img src={p.image} alt={`Screenshot of ${p.title}`} /> : <div className="ph">Screenshot</div>}
          </div>
          <div>
            <div className="card-meta">
              {p.date && <span className="filed">Filed {filed(p.date)}</span>}
              <StatusTag project={p} />
            </div>
            <h3>{p.slug ? <Link to={`/projects/${p.slug}`}>{p.title}</Link> : p.title}</h3>
            <p>{p.description}</p>
            <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="links">
              {p.links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
            </div>
            {p.slug && <span className="open" aria-hidden="true">Open file</span>}
          </div>
        </article>
      ))}
    </div>
  )
}