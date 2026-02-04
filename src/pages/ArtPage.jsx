import { useState, useRef, useEffect } from 'react';
import { artworks, CONTACT_EMAIL } from '../data/artworks';
import ArtCard from '../components/ArtCard';
import Lightbox from '../components/Lightbox';
import WeightedText from '../components/WeightedText';
import './ArtPage.css';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={`accordion ${isOpen ? 'accordion--open' : ''}`}>
      <button
        className="accordion-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="accordion-title">{title}</span>
        <svg
          className="accordion-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        className="accordion-panel"
        style={{ height }}
        ref={contentRef}
      >
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
}

function ArtPage() {
  const [lightboxArt, setLightboxArt] = useState(null);

  return (
    <section className="art-page">
      <div className="container">
        <div className="art-header">
          <div className="art-header-top">
            <div className="art-header-text">
              <h1 className="art-title"><WeightedText text="Art" /></h1>
              <p className="art-subtitle">
                Original works available for purchase.
                Interested in a piece?{' '}
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Art%20Inquiry`}
                  className="art-contact-link"
                >
                  Get in touch
                </a>
                .
              </p>
            </div>
            <a href="https://www.instagram.com/markwilsonmalek/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Follow on Instagram</a>
          </div>
        </div>

        <div className="art-accordions">
          <Accordion title="Artist Bio">
            <p>Mark Wilson Malek is a visual artist based in Durham, North Carolina. Working in charcoal, ink, acrylic, oil pastels, and embroidery, he renders the male figure in moments of solitude, introspection, and quiet vulnerability.</p>
            <p>He holds a BFA in Graphic Design from NC State University and has exhibited throughout the Triangle, including at the Durham Art Guild and Keel and Company in Raleigh.</p>
            <p>Malek is also the Creative Director of Weird Productions, a Durham art event series known for themed exhibitions like Dollyweird, Prints-4-Prince, Tangled Up in Blue, and Black Velvet.</p>
          </Accordion>

          <Accordion title="Artist Statement">
            <p>I found myself tearing up in my therapist's office. My arms folded across my chest, a reflex to stay in control. In that moment I realized fear has been the constant hum of my life: a child punished when he needed help, a teenager wrestling with sexuality and scripture, an adult terrified of abandonment.</p>
            <p>My work starts there. In charcoal, ink, paint, and oil pastels, I render the male figure in moments when fear tries to become acceptance. Bodies at rest, contemplating, withdrawing. I'm drawn to the raw honesty of the figure stripped bare.</p>
            <p>The monochrome palette strips away distraction, leaving light, shadow, and form. There's a tenderness in this reduction that runs counter to everything I was taught about being a man, about being worthy of love. This is my investigation of uncertainty and loss of control: with the self, with the body, with the quiet moments we rarely show others.</p>
          </Accordion>

          <Accordion title="CV">
            <h3>Education</h3>
            <p>Bachelors of Graphic Design, NC State University, 2015</p>

            <h3>Exhibitions</h3>
            <div className="cv-year-group">
              <h4>2025</h4>
              <p>Durham Art Guild Members Showcase, Durham Art Guild, Durham, NC</p>
              <p>Dollyweird 2025, Weird Productions, Durham, NC</p>
            </div>
            <div className="cv-year-group">
              <h4>2024</h4>
              <p>Tangled Up in Blue, Weird Productions, Durham, NC</p>
              <p>Black Velvet, Weird Productions, Durham, NC</p>
            </div>
            <div className="cv-year-group">
              <h4>2023</h4>
              <p>Dollyweird 2023, Weird Productions, Durham, NC</p>
            </div>
            <div className="cv-year-group">
              <h4>2022</h4>
              <p>Keel and Company, Raleigh, NC</p>
            </div>
            <div className="cv-year-group">
              <h4>2019</h4>
              <p>The Art of Style, Raleigh, NC</p>
            </div>

            <h3>Professional Experience</h3>
            <p><strong>Creative Director &amp; Curator</strong></p>
            <p>Weird Productions, Durham, NC</p>
            <ul>
              <li>Founded and lead curatorial vision for Weird Productions, organizing curated art events and exhibitions</li>
              <li>Develop and execute unconventional art experiences that foster community engagement</li>
              <li>Select and showcase emerging and established artists through themed programming</li>
            </ul>

            <h3>Artistic Practice</h3>
            <p><strong>Media:</strong> Charcoal, ink, acrylic paint, oil pastels, embroidery, mixed media, drawing</p>
            <p><strong>Focus:</strong> Figurative work exploring masculinity, vulnerability, and the human form through monochromatic compositions</p>

            <h3>Professional Affiliations</h3>
            <p>Durham Art Guild, Member</p>
          </Accordion>
        </div>
        <div className="art-gallery">
          {[...artworks].sort((a, b) => (a.status === 'sold') - (b.status === 'sold')).map((artwork) => (
            <ArtCard
              key={artwork.id}
              artwork={artwork}
              onClick={() => setLightboxArt(artwork)}
            />
          ))}
        </div>
      </div>
      {lightboxArt && (
        <Lightbox
          artwork={lightboxArt}
          onClose={() => setLightboxArt(null)}
        />
      )}
    </section>
  );
}

export default ArtPage;
