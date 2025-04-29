import { Link } from 'react-router-dom';
import './ArrowDriveHome.css';

export default function ArrowDriveHome() {
  const businesses = [
    {
      name: 'Sharper Curb Appeal',
      path: '/sharper-curb-appeal',
      image: 'placholder.png',
      cta: 'Enter Site'
    },
    {
      name: 'Arrow Drive Shop',
      path: '/arrow-drive',
      image: 'placholder.png',
      cta: 'Shop Now'
    },
    {
      name: 'Bounce Houses & More',
      path: '/inflatable-business',
      image: 'placholder.png',
      cta: 'See Inflatables'
    }
  ];

  return (
    <div className="arrowdrive-home">
      {/* Logo at top */}
      <header className="header">
        <img src="/images/arrow-drive-logo.png" alt="Arrow Drive Logo" className="logo" />
      </header>

      {/* Thumbnails */}
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

      {/* Footer */}
      <footer className="footer">
        © {new Date().getFullYear()} Arrow Drive. All rights reserved.
      </footer>
    </div>
  );
}