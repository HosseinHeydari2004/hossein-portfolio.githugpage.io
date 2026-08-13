import Divider from '../components/Divider'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section className="projects-page">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">آرشیو</span>
          <h2>همه‌ی پروژه‌ها</h2>
          <p>
            از سامانه‌های صنعتی چندبخشی تا نوت‌بوک‌های کوچک روی کگل — هر پروژه سطح تکمیل و پشته‌ی فنی
            خودش را دارد.
          </p>
        </div>
      </div>
      <Divider />
      <div className="container">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
