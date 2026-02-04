import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import WeightedText from './WeightedText';
import './Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2 className="projects-title"><WeightedText text="Selected Work" /></h2>
          <p className="projects-subtitle">
            A collection of projects I've worked on recently
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <Link to={`/project/${project.slug}`} className="project-card" key={project.id}>
              <div className="project-image-wrapper">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <span className="project-view">View Project</span>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-name">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
