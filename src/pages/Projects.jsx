import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProjectList, { statusOf } from '../components/ProjectList.jsx'
import { projects } from '../data/projects.js'

const CATEGORIES = [
  { id: 'all', label: 'All categories' },
  { id: 'gamedev', label: 'Game Development' },
  { id: 'compsci', label: 'Computer Science' },
]

const STATUSES = [
  { id: 'all', label: 'Any status' },
  { id: 'finished', label: 'Finished' },
  { id: 'in-progress', label: 'In progress' },
]

const SORT_OPTIONS = [
  { id: 'newest', label: 'Newest first' },
  { id: 'oldest', label: 'Oldest first' },
  { id: 'az', label: 'Name A to Z' },
]

const SORTS = {
  newest: (a, b) => (b.date || '').localeCompare(a.date || ''),
  oldest: (a, b) => (a.date || '').localeCompare(b.date || ''),
  az: (a, b) => a.title.localeCompare(b.title),
}

function Select({ label, value, options, onPick }) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={(e) => onPick(e.target.value)}>
        {options.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
      </select>
    </label>
  )
}

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const [q, setQ] = useState('')
  const cat = params.get('cat') || 'all'
  const status = params.get('status') || 'all'
  const sort = params.get('sort') || 'newest'

  const update = (key, value, fallback) => {
    const next = new URLSearchParams(params)
    if (value === fallback) next.delete(key)
    else next.set(key, value)
    setParams(next, { replace: true })
  }

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase()
    return projects
      .filter((p) => cat === 'all' || p.category === cat)
      .filter((p) => status === 'all' || statusOf(p) === status)
      .filter((p) => !term || [p.title, p.description, ...p.tags].join(' ').toLowerCase().includes(term))
      .sort(SORTS[sort] || SORTS.newest)
  }, [cat, status, sort, q])

  return (
    <section>
      <div className="wrap">
        <h2>Projects</h2>

        <div className="filters">
          <label className="field">
            <span>Search</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Name, tag or keyword" />
          </label>
          <Select label="Category" value={cat} options={CATEGORIES} onPick={(v) => update('cat', v, 'all')} />
          <Select label="Status" value={status} options={STATUSES} onPick={(v) => update('status', v, 'all')} />
          <Select label="Sort" value={sort} options={SORT_OPTIONS} onPick={(v) => update('sort', v, 'newest')} />
        </div>

        <p className="count">{shown.length} of {projects.length} files</p>

        {shown.length > 0 ? (
          <ProjectList items={shown} />
        ) : (
          <div className="dialog empty">
            <p>{'* No files match your search.\n* You feel nothing in particular.'}</p>
          </div>
        )}
      </div>
    </section>
  )
}