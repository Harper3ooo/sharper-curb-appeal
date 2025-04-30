import { Link } from 'react-router-dom';

export default function ArrowDriveHome() {
  const businesses = [
    {
      name: 'SHARPER CURB APPEAL',
      path: '/sharper-curb-appeal',
      image: '/images/curb-thumbnail.png',
      cta: 'Enter Site'
    },
    {
      name: 'ARROW DRIVE SHOP',
      path: '/arrow-drive',
      image: '/images/arrowdrive-thumbnail.png',
      cta: 'Shop Now'
    },
    {
      name: 'BOUNCE HOUSES & MORE',
      path: '/inflatable-business',
      image: '/images/inflatable-thumbnail.png',
      cta: 'See Inflatables'
    }
  ];

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <img
          src="/images/arrow-drive-logo.png"
          alt="Arrow Drive Logo"
          style={{ height: '100px', marginBottom: '2rem' }}
        />
      </div>

      {/* Business Blocks */}
      <div style={{ maxWidth: '960px', margin: '0 auto', width: '100%', padding: '0 1rem', flexGrow: 1 }}>
        {businesses.map((biz, idx) => (
          <Link
            key={idx}
            to={biz.path}
            style={{
              display: 'block',
              marginBottom: '2rem',
              textDecoration: 'none',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
            }}
          >
            <div style={{ position: 'relative', height: '200px' }}>
              <img
                src={biz.image}
                alt={biz.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '1rem'
              }}>
                <h2 style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '1.8rem',
                  marginBottom: '0.5rem',
                  letterSpacing: '1px'
                }}>{biz.name}</h2>
                <span style={{
                  backgroundColor: '#f6a72d',
                  color: '#fff',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '0.95rem'
                }}>
                  {biz.cta}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0d1b2a',
        color: 'white',
        textAlign: 'center',
        padding: '1rem',
        borderTop: '5px solid limegreen',
        marginTop: 'auto'
      }}>
        © 2025 Arrow Drive. All rights reserved.
      </footer>
    </div>
  );
}