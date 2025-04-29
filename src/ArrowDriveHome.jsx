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
      image: '/images/arrow-thumbnail.png',
      cta: 'Explore Now'
    },
    {
      name: 'Bounce Houses & More',
      path: '/inflatable-business',
      image: '/images/inflatable-thumbnail.jpg',
      cta: 'Visit Page'
    }
  ];

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', padding: '2rem' }}>
      <img
        src="/images/arrow-drive-logo.png"
        alt="Arrow Drive Logo"
        style={{ maxWidth: '300px', marginBottom: '3rem' }}
      />

      <div className="thumbnail-container">
        {businesses.map((biz, idx) => (
          <Link to={biz.path} key={idx} className="thumbnail-link">
            <div className="thumbnail" style={{ backgroundImage: `url(${biz.image})` }}>
              <div className="overlay">
                <h2>{biz.name}</h2>
                <p>{biz.cta}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}