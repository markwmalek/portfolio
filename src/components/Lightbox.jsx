import { useEffect } from 'react';
import { CONTACT_EMAIL } from '../data/artworks';
import './Lightbox.css';

function Lightbox({ artwork, onClose }) {
  const isSold = artwork.status === 'sold';
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Inquiry: ${artwork.title}`)}&body=${encodeURIComponent(`Hi Mark,\n\nI'm interested in "${artwork.title}" ($${artwork.price.toLocaleString()}). Is it still available?\n\nThanks`)}`;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <img
          src={artwork.image}
          alt={artwork.title}
          className="lightbox-image"
        />
        <div className="lightbox-info">
          <div className="lightbox-details">
            <h2 className="lightbox-title">{artwork.title}</h2>
            <span className="lightbox-price">${artwork.price.toLocaleString()}</span>
          </div>
          {!isSold ? (
            <a href={mailtoLink} className="lightbox-cta">
              Contact to Purchase
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H5.5M11 3V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ) : (
            <span className="lightbox-sold">Sold</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
