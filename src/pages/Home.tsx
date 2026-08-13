import { Link } from 'react-router-dom'
import GirihMotif from '../components/GirihMotif'
import Divider from '../components/Divider'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

const skillGroups = [
  {
    title: 'بینایی کامپیوتر',
    items: ['YOLOv8', 'PyTorch', 'OpenCV', 'MONAI', 'U-Net / U-Net++'],
  },
  {
    title: 'مهندسی مدل‌های زبانی',
    items: ['Qwen2.5', 'Prompt Engineering', 'Jinja2', 'Pydantic', 'RAG'],
  },
  {
    title: 'MLOps و زیرساخت',
    items: ['FastAPI', 'Docker', 'Gradio', 'Streamlit', 'Git'],
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <GirihMotif className="hero-motif" opacity={0.16} />
        <div className="container hero-inner">
          <span className="eyebrow">ML · CV · LLM Engineer</span>
          <h1>
            حسین حیدری
            <span className="hero-sub">در تقاطع بینایی کامپیوتر، مهندسی مدل‌های زبانی و MLOps</span>
          </h1>
          <p className="hero-lede">
            سرپرست تیم در <strong>AI Builders Iran</strong>، در حال ساخت سامانه‌های هوش مصنوعی کاربردی
            برای حوزه‌ی صنعتی و ایمنی — از تشخیص اشیا با YOLO تا تولید گزارش فارسی با مدل‌های زبانی
            محلی. هدف بلندمدت: تأسیس یک شرکت هوش مصنوعی با محصولی واقعی در بازار صنعت.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              مشاهده‌ی پروژه‌ها
            </Link>
            <a
              href="https://github.com/HosseinHeydari2004"
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost"
            >
              گیت‌هاب ↗
            </a>
          </div>
        </div>
      </section>

      <Divider />

      <section className="about" id="about">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">درباره</span>
            <h2>از الگوریتم تا خط تولید</h2>
          </div>
          <p className="about-body">
            کار من از یک بردینگ‌باکس روی تصویر شروع نمی‌شود، به یک تصمیم عملیاتی ختم می‌شود. تیمی که
            رهبری می‌کنم سامانه‌ی پایش ایمنی انبار را ساخته: تشخیص اشیا با YOLOv8، یک موتور قانون برای
            تبدیل تشخیص به رخداد، و یک مدل زبانی که آن رخداد را به گزارش HSE فارسیِ قابل‌فهم برای انسان
            تبدیل می‌کند. در کنار کار تیمی، پروژه‌های شخصی در بینایی کامپیوتر و طبقه‌بندی تصویر را هم به
            ‌عنوان مسیر یادگیری و نمونه‌کار پیش می‌برم.
          </p>
        </div>
      </section>

      <section className="skills">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">ابزارها</span>
            <h2>پشته‌ی فنی</h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      <section className="featured">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">منتخب</span>
            <h2>پروژه‌های شاخص</h2>
          </div>
          <div className="project-grid">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
          </div>
          <Link to="/projects" className="see-all">
            مشاهده‌ی همه‌ی پروژه‌ها ←
          </Link>
        </div>
      </section>

      <Divider />

      <section className="contact" id="contact">
        <div className="container contact-inner">
          <div className="section-head">
            <span className="eyebrow">تماس</span>
            <h2>گفت‌وگو را شروع کنیم</h2>
          </div>
          <p>برای همکاری، سوال فنی یا فرصت کاری، از هر کدام از راه‌های زیر در دسترسم:</p>
          <ul className="contact-links">
            <li>
              <a href="mailto:hosseinheydari992020@gmail.com">ایمیل ↗</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/hossein-heydari-1195602b6" target="_blank" rel="noreferrer">
                لینکدین ↗
              </a>
            </li>
            <li>
              <a href="https://www.kaggle.com/mrhosseinheydari" target="_blank" rel="noreferrer">
                کگل ↗
              </a>
            </li>
            <li>
              <a href="https://t.me/Hossein_h830" target="_blank" rel="noreferrer">
                تلگرام ↗
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
