import { useState } from 'react';
import { artworks, CONTACT_EMAIL } from '../data/artworks';
import ArtCard from '../components/ArtCard';
import Lightbox from '../components/Lightbox';
import './ArtPage.css';

function ArtPage() {
  const [lightboxArt, setLightboxArt] = useState(null);

  return (
    <section className="art-page">
      <div className="container">
        <div className="art-header">
          <h1 className="art-title">Art</h1>
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
