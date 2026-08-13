import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Article from './pages/Article'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes/dice-loss" element={<Article />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} حسین حیدری</span>
          <span className="eyebrow">Built with React · TypeScript · MDX · KaTeX</span>
        </div>
      </footer>
    </>
  )
}
