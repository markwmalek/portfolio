import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import './ProjectPage.css';

function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <article className="project-page">
      <div className="project-hero">
        <div className="container">
          <Link to="/" className="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 10H5M5 10L10 5M5 10L10 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Projects
          </Link>
          <div className="project-hero-content">
            <p className="project-category-label">{project.category}</p>
            <h1 className="project-title">{project.title}</h1>
            <p className="project-summary">{project.summary}</p>
          </div>
        </div>
      </div>

      <div className="project-hero-image">
        <img src={project.heroImage} alt={project.title} />
      </div>

      <div className="container">
        <div className="project-meta">
          <div className="meta-item">
            <span className="meta-label">Date</span>
            <span className="meta-value">{project.date}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Role</span>
            <span className="meta-value">{project.role}</span>
          </div>
          {project.collaborators && (
            <div className="meta-item">
              <span className="meta-label">Collaborators</span>
              <span className="meta-value">{project.collaborators}</span>
            </div>
          )}
          <div className="meta-item">
            <span className="meta-label">Tools</span>
            <span className="meta-value">{project.tools}</span>
          </div>
        </div>

        {(project.externalLink || project.liveLink) && (
          <div className="project-links">
            {project.externalLink && (
              <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {project.externalLinkText || 'Read Article'}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit Live Site
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
        )}

        <div className="project-content">
          {project.sections.map((section, index) => {
            if (section.type === 'text') {
              return (
                <div key={index} className="content-section">
                  <h2 className="section-title">{section.title}</h2>
                  <p className="section-text">{section.content}</p>
                </div>
              );
            }
            if (section.type === 'image') {
              return (
                <figure key={index} className="content-image">
                  <img src={section.url} alt={section.alt} loading="lazy" />
                </figure>
              );
            }
            return null;
          })}
        </div>

        <nav className="project-nav">
          {prev ? (
            <Link to={`/project/${prev.slug}`} className="nav-link nav-prev">
              <span className="nav-direction">Previous Project</span>
              <span className="nav-title">{prev.title}</span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link to={`/project/${next.slug}`} className="nav-link nav-next">
              <span className="nav-direction">Next Project</span>
              <span className="nav-title">{next.title}</span>
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>
    </article>
  );
}

export default ProjectPage;
