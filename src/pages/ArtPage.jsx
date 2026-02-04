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
          <div className="art-resources">
            <a href="https://www.instagram.com/markwilsonmalek/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Instagram</a>
          </div>
        </div>

        <div className="art-accordions">
          <Accordion title="Bio">
            <p>Mark Wilson Malek is a Durham-based visual artist whose work explores masculinity through the lens of vulnerability and intimacy. Working primarily in monochromatic tones—charcoal, ink, acrylic paint, oil pastels, and embroidery—Malek renders the male figure in moments of solitude, introspection, and unguarded intimacy. These are bodies at rest, in thought, in private spaces where the armor of performance falls away.</p>
            <p>Malek earned his Bachelor of Graphic Design from NC State University in 2015. Since then, he has exhibited throughout the Triangle region, including solo and group exhibitions at the Durham Art Guild, Keel and Company in Raleigh, and numerous curated shows. His work spans multiple media, from gestural paintings to delicate line work and textile arts, each piece an invitation to sit with vulnerability and find beauty in it.</p>
            <p>Beyond his studio practice, Malek is the Creative Director and Curator of Weird Productions, an unconventional art event series in Durham that has presented themed exhibitions including Dollyweird, Prints-4-Prince, Tangled Up in Blue, and Black Velvet. Through Weird Productions, he creates immersive art experiences that blend visual art with food, music, and community, fostering engagement with emerging and established artists in unexpected ways.</p>
            <p>Malek is a member of the Durham Art Guild. His practice is an ongoing investigation of intimacy—with the self, with the body, with the quiet moments we rarely show others. Each piece invites viewers to recognize vulnerability and discover the profound beauty within it.</p>
          </Accordion>

          <Accordion title="Artist Statement">
            <p>The other day I found myself tearing up in my therapist's office. I wasn't prepared to express vulnerability in that way. I immediately clammed up, my arms folded across my chest in a desperate attempt to remain in control. In that moment, it became clear that fear has been the constant hum in my life—a fearful child experiencing punishment when he needed help, becoming a teenager wrestling with his sexuality and the weight of scripture, into an adult terrified of abandonment from both God and those he tries to trust. My work begins in that fear. Working primarily in monochromatic tones—charcoal, ink, paint, oil pastels, embroidery—I render the male figure in moments when the fear attempts to become acceptance: bodies at rest, contemplating, withdrawing. Drawing inspiration from artists like Egon Schiele, I'm interested in the raw honesty of the figure stripped of pretense.</p>
            <p>The monochrome palette is both irony and acceptance. These limited tones strip away distraction, leaving only light, shadow, and the complexity of form. There's a tenderness in this reduction, a softness that runs counter to everything I was taught about being a man, about being right with God, about being worthy of love. My figures recline with reference to classical sculpture and dissolve into their expressionistic forms. Some feel caught between reverence and rawness, between fine art and something more immediate. This is my investigation of uncertainty and loss of control: with the self, with the body, with the quiet moments we rarely show others.</p>
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
          {artworks.map((artwork) => (
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
