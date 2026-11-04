import { Link } from 'react-router-dom'
import Backdrop from '../components/Backdrop.jsx'
import Motes from '../components/Motes.jsx'
import PixelCat from '../components/PixelCat.jsx'
import Typewriter from '../components/Typewriter.jsx'
import ProjectList, { statusOf } from '../components/ProjectList.jsx'
import { projects } from '../data/projects.js'

const INTRO =
  "* A curious mind wanders into the unknown.\n* Exploring, learning, and creating along the way.\n* Collecting ideas, experiences, and a little determination.\n* Despite everything, it's still you."
export default function Home() {
  const wip = projects.filter((p) => statusOf(p) === 'in-progress')
  const featured = projects
    .filter((p) => p.featured && statusOf(p) !== 'in-progress')
    .sort((a, b) => (a.featuredOrder ?? 999) - (b.featuredOrder ?? 999))
  return (
    <>
      <div className="hero">
        <Backdrop />
        <Motes />
        <div className="wrap">
          <h1>Azra<br />Pamuk</h1>
          <div className="dialog">
            <PixelCat variant="tuxedo" size={128} />
            <p><Typewriter text={INTRO} /></p>
          </div>
          <div className="menu">
            <Link className="btn" to="/projects?cat=gamedev">Games</Link>
            <Link className="btn" to="/projects?cat=compsci">Computer science</Link>
            <Link className="btn" to="/about">About</Link>
          </div>
        </div>
      </div>

      <section>
        <div className="wrap">
          <h2>Featured projects</h2>
          <ProjectList items={featured} />
        </div>
      </section>

      {wip.length > 0 && (
        <section className="wip-section">
          <div className="wrap">
            <h2>In progress</h2>
            <div className="wip-list">
              {wip.map((p) => (
                <article className="wip" key={p.slug || p.title}>
                  <h3>{p.slug ? <Link to={`/projects/${p.slug}`}>{p.title}</Link> : p.title}</h3>
                  <p>{p.description}</p>
                  {p.now && <p className="wip-now">* {p.now}</p>}
                  {typeof p.progress === 'number' && (
                    <div className="bar-row">
                      <span>Progress</span>
                      <div className="bar" role="progressbar" aria-label={`${p.title} progress`}
                           aria-valuemin={0} aria-valuemax={100} aria-valuenow={p.progress}>
                        <span style={{ width: `${p.progress}%` }} />
                      </div>
                      <span>{p.progress}%</span>
                    </div>
                  )}
                  <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
