import { Link, NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-fa">حسین حیدری</span>
          <span className="nav-brand-en">Hossein Heydari</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" end>
            صفحه اصلی
          </NavLink>
          <NavLink to="/projects">پروژه‌ها</NavLink>
          <NavLink to="/notes/dice-loss">یادداشت فنی</NavLink>
          <a href="https://github.com/HosseinHeydari2004" target="_blank" rel="noreferrer">
            گیت‌هاب
          </a>
        </nav>
      </div>
    </header>
  )
}
