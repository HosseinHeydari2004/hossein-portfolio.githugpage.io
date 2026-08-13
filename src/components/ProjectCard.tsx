import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="eyebrow">{project.status}</span>
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer" className="project-card-link">
            مشاهده مخزن ↗
          </a>
        )}
      </div>
      <h3>{project.title}</h3>
      <p className="project-card-en">{project.titleEn}</p>
      <p>{project.description}</p>
      <ul className="project-card-tags">
        {project.stack.map((tech) => (
          <li key={tech} className="chip">
            {tech}
          </li>
        ))}
      </ul>
    </article>
  )
}
