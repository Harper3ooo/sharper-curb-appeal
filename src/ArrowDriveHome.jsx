import { Link } from 'react-router-dom';
import './ArrowDriveHome.css';

export default function ArrowDriveHome() {
  const businesses = [
    {
      name: 'Sharper Curb Appeal',
      path: '/sharper-curb-appeal',
      image: '/images/curb-thumbnail.png',
      cta: 'Enter Site'
    },
    {
      name: 'Arrow Drive Shop',
      path: '/arrow-drive',
      image: '/images/arrowdrive-thumbnail.png',
      cta: 'Shop Now'
    },
    {
      name: 'Bounce Houses & More',
      path: '/inflatable-business',
      image: '/images/inflatable-thumbnail.png',
      cta: 'See Inflatables'
    }
  ];

  return (
    <div className="arrowdrive-home">
      <header className="header">
        <img src="/images/arrow-drive-logo.png" alt="Arrow Drive Logo" className="logo" />
      </header>

      <main className="thumbnail-grid">
        {businesses.map((biz, idx) => (
          <Link to={biz.path} key={idx} className="thumbnail-link">
            <div className="thumbnail" style={{ backgroundImage: url(${biz.image}) }}>
              <div className="overlay">
                <h2>{biz.name}</h2>
                <button>{biz.cta}</button>
              </div>
            </div>
          </Link>
        ))}
      </main>

      <footer className="footer">
        © {new Date().getFullYear()} Arrow Drive. All rights reserved.
      </footer>
    </div>
  );
}