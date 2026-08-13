import { Link } from 'react-router-dom'
import DiceLoss, { meta } from '../content/articles/dice-loss.mdx'

export default function Article() {
  return (
    <section className="article-page">
      <div className="container container-narrow">
        <Link to="/" className="back-link">
          ← بازگشت
        </Link>
        <span className="eyebrow">{meta.date} · یادداشت فنی</span>
        <h1 className="article-title">{meta.title}</h1>
        <p className="article-title-en">{meta.titleEn}</p>
        <ul className="article-tags">
          {meta.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>
        <div className="article-body">
          <DiceLoss />
        </div>
      </div>
    </section>
  )
}
