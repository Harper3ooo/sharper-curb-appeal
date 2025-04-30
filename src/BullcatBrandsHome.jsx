import { Link } from 'react-router-dom';
import './BullcatBrandsHome.css';

export default function BullcatBrandsHome() {
  const businesses = [
    {
      name: 'Sharper Curb Appeal',
      path: '/sharper-curb-appeal',
      image: '/images/curb-thumbnail.png',
      cta: 'Enter Site'
    },
    {
      name: 'ArrowDrive Shop',
      path: '/arrow-drive',
      image: '/images/arrowdrive-thumbnail.png',
      cta: 'Shop Now'
    },
    {
      name: 'Bounce Houses & More',
      path: '/inflatable-business',
      image: '/images/inflatable-thumbnail.png',
      cta: 'See Inflatables'
    },
    {
      name: 'Bullcat Brands Branding',
      path: '/bullcat-branding',
      image: '/images/branding-thumbnail.png', // placeholder — update image path
      cta: 'See Work'
    }
  ];

  return (
    <div className="bullcat-home">
      <header className="header">
        <img src="/images/bullcat-brands-logo.png" alt="Bullcat Brands Logo" className="logo" />
      </header>

      <main className="thumbnail-grid">
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

      <footer className="footer">
        © {new Date().getFullYear()} Bullcat Brands. All rights reserved.
      </footer>
    </div>
  );
}