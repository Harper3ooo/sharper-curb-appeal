import { Link } from 'react-router-dom';
import './ArrowDriveHome.css';

export default function ArrowDriveHome() {
  const businesses = [
    {
      name: 'Bounce Houses & More',
      path: '/inflatable-business',
      image: '/images/placeholder-1.jpg',
      cta: 'See Inflatables'
    },
    {
      name: 'Arrow Drive Shop',
      path: '/arrow-drive',
      image: '/images/arrow-thumbnail.png',
      cta: 'Shop Now'
    },
    {
      name: 'Sharper Curb Appeal',
      path: '/sharper-curb-appeal',
      image: '/images/curb-thumbnail.png',
      cta: 'Enter Site'
    }
  ];

  return (
    <div className="arrowdrive-home">
      {/* Logo at Top */}
      <header className="header">
        <img src="/images/arrow-drive-logo.png" alt="Arrow Drive Logo" className="logo" />
      </header>

      {/* Thumbnails Full Width */}
      <main className="thumbnail-container">
        {businesses.map((biz, idx) => (
          <Link to={biz.path} key={idx} className="thumbnail-link">
            <div className="thumbnail" style={{ backgroundImage: `url(${biz.image})` }}>
              <div className="overlay">
                <h2>{biz.name}</h2>
                <button>{biz.cta}</button>
              </div>
            </div>
          </Link>
        ))}
      </main>

      {/* Footer Matching Sharper Curb Appeal */}
      <footer className="footer">
        <img src="/images/logo-white.png" alt="Arrow Drive Footer Logo" className="footer-logo" />
        <div className="footer-links">
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">Instagram</a>
        </div>
        <div className="footer-contact">
          arrowdriveinfo@gmail.com | (601) 123-4567
        </div>
        <div className="footer-nav">
          <a href="/faq" className="footer-link">FAQ</a>
        </div>
        <div className="footer-copy">
          © {new Date().getFullYear()} Arrow Drive. All rights reserved.
        </div>
      </footer>
    </div>
  );
}