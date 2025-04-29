import './InflatableBusiness.css';

export default function InflatableBusiness() {
  return (
    <div className="inflatable-business-page">
      {/* Logo at Top */}
      <header className="header">
        <img src="/images/logo-white.png" alt="Bounce Houses & More Logo" className="logo" />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <img src="/images/bowser-inflatable.png" alt="Bowser Inflatable" className="hero-image" />
        <h1 className="hero-title">Reserve the Epic Bowser Inflatable!</h1>
        <p className="hero-subtitle">We’re bringing this one-of-a-kind inflatable to Clinton! Reserve your event date now before spots fill up!</p>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>About This Inflatable</h2>
        <p>This massive, custom-designed Bowser inflatable will be the centerpiece of any party or event. Great for birthdays, school events, festivals, and more!</p>
      </section>

      {/* Booking Instructions */}
      <section className="booking-instructions">
        <h2>How to Book</h2>
        <ol>
          <li>Reserve your spot with a $175 deposit.</li>
          <li>Pick your event date (available dates will be confirmed after launch).</li>
          <li>Celebrate big once the inflatable arrives!</li>
        </ol>
      </section>

      {/* Pricing and Details */}
      <section className="pricing-section">
        <h2>Pricing & Details</h2>
        <p><strong>Rental Price:</strong> $175 (Deposit secures your spot!)</p>
        <p><strong>Size:</strong> Approximately 16 ft tall — perfect for outdoor events!</p>
        <p><strong>Service Area:</strong> Clinton, Mississippi and surrounding areas.</p>
      </section>

      {/* Book Now Button */}
      <section className="cta-section">
        <a href="https://yourpaymentlink.com" className="book-now-button" target="_blank" rel="noopener noreferrer">
          BOOK NOW
        </a>
      </section>

      {/* Footer - Matching Sharper Curb Appeal Footer */}
      <footer className="footer">
        <img src="/images/logo-white.png" alt="Bounce Houses & More Logo" className="footer-logo" />
        <div className="footer-links">
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">Instagram</a>
        </div>
        <div className="footer-contact">
          bouncehousesandmore@gmail.com | (601) 123-4567
        </div>
        <div className="footer-nav">
          <a href="/faq" className="footer-link">FAQ</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Bounce Houses & More. All rights reserved.
        </div>
      </footer>
    </div>
  );
}