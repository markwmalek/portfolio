import { Link } from 'react-router-dom';
import { brandProjects } from '../data/brandProjects';
import WeightedText from '../components/WeightedText';
import './BrandPage.css';

function BrandPage() {
  return (
    <section className="brand-page">
      <div className="container">
        <div className="brand-header">
          <h1 className="brand-title"><WeightedText text="Brand Design" /></h1>
          <p className="brand-subtitle">
            Identity systems, illustrations, and visual storytelling for startups, festivals, and enterprises.
          </p>
        </div>
        <div className="brand-grid">
          {brandProjects.map((project) => (
            <Link to={`/brand/${project.slug}`} className="brand-card" key={project.id}>
              <div className="brand-card-image-wrapper">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="brand-card-image"
                  loading="lazy"
                />
                <div className="brand-card-overlay">
                  <span className="brand-card-view">View Project</span>
                </div>
              </div>
              <div className="brand-card-info">
                <h3 className="brand-card-name">{project.title}</h3>
                <p className="brand-card-category">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandPage;
