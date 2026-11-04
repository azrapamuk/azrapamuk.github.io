import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="gamedev" element={<Navigate to="/projects?cat=gamedev" replace />} />
        <Route path="compsci" element={<Navigate to="/projects?cat=compsci" replace />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  )
}