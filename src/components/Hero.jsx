import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-name">
            Mark Wilson<br />
            <span className="hero-name-accent">Malek</span>
          </h1>
          <p className="hero-title">Product Designer</p>
          <p className="hero-description">
            Senior product designer with 10 years' experience at SAS Institute. I manage Figma libraries for 70+ designers across 100+ enterprise apps and lead visual design to align brand and product. Skilled in token architecture, design-to-dev handoff, and Agile.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3V13M8 13L13 8M8 13L3 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/Malek-Resume-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Resume</a>
            <a href="https://www.linkedin.com/in/markwilsonmalek/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
