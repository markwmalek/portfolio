import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for work
          </div>
          <h1 className="hero-name">
            Mark Wilson<br />
            <span className="hero-name-accent">Malek</span>
          </h1>
          <p className="hero-title">Product Designer</p>
          <p className="hero-description">
            I design systems and craft thoughtful digital experiences.
            Specializing in design systems, product design, and data visualization.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M8 13L13 8M8 13L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="mailto:hello@example.com" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
