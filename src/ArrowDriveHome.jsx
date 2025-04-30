import { Link } from 'react-router-dom';
import './ArrowDriveHome.css'; // optional, if you're still using it

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
    <>
      <div style={{ width: "100%", margin: 0, padding: 0 }}>
        <img
          src="/images/arrow-drive-logo.png"
          alt="Arrow Drive Logo"
          style={{
            height: "150px",
            margin: "2rem auto",
            display: "block"
          }}
        />

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
          margin: 0,
          padding: 0
        }}>
          {businesses.map((biz, idx) => (
            <Link
              key={idx}
              to={biz.path}
              style={{
                position: "relative",
                width: "33.333%",
                height: "300px",
                overflow: "hidden",
                display: "block",
                textDecoration: "none"
              }}
            >
              <img
                src={biz.image}
                alt={biz.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "filter 0.3s ease"
                }}
              />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                opacity: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "1.5rem",
                fontWeight: "bold",
                transition: "opacity 0.3s ease"
              }}
              className="thumbnail-overlay"
              >
                {biz.name}
                <br />
                <span style={{
                  fontSize: "1rem",
                  border: "1px solid white",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  marginTop: "0.75rem",
                  display: "inline-block"
                }}>
                  {biz.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style>
        {`
          a:hover .thumbnail-overlay {
            opacity: 1;
          }

          @media (max-width: 768px) {
            a {
              width: 100% !important;
              height: 200px !important;
            }
          }
        `}
      </style>
    </>
  );
}