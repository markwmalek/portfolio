import { CONTACT_EMAIL } from '../data/artworks';
import './ArtCard.css';

function ArtCard({ artwork, onClick }) {
  const isSold = artwork.status === 'sold';
  const mailtoLink = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Inquiry: ${artwork.title}`)}&body=${encodeURIComponent(`Hi Mark,\n\nI'm interested in "${artwork.title}" ($${artwork.price.toLocaleString()}). Is it still available?\n\nThanks`)}`;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className={`art-card ${isSold ? 'art-card--sold' : ''}`}>
      <div
        className="art-card-image-wrapper"
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label={`View ${artwork.title} full size`}
      >
        <img
          src={artwork.image}
          alt={artwork.title}
          className="art-card-image"
          loading="lazy"
        />
        {isSold && <span className="art-card-badge">Sold</span>}
        <div className="art-card-zoom-hint">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 7V3H7M11 3H15V7M15 11V15H11M7 15H3V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div className="art-card-info">
        <h3 className="art-card-title">{artwork.title}</h3>
        <div className="art-card-meta">
          <span className="art-card-price">${artwork.price.toLocaleString()}</span>
          {!isSold ? (
            <a href={mailtoLink} className="art-card-inquiry" onClick={(e) => e.stopPropagation()}>
              Inquire
            </a>
          ) : (
            <span className="art-card-sold-label">Sold</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArtCard;
