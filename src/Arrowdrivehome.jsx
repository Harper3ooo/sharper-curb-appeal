import { Link } from 'react-router-dom';

export default function ArrowDriveHome() {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      {/* Arrow Drive Logo */}
      <img
        src="/images/arrow-drive-logo.png"
        alt="Arrow Drive Logo"
        style={{ height: "150px", marginBottom: "2rem" }}
      />

      {/* Thumbnails Grid */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        flexWrap: "wrap"
      }}>
        {/* Sharper Curb Appeal */}
        <div style={{ position: "relative", width: "300px", height: "200px", overflow: "hidden" }}>
          <Link to="/curb" style={{ display: "block", width: "100%", height: "100%", textDecoration: "none" }}>
            <img
              src="/images/curb-thumbnail.jpg"
              alt="Sharper Curb Appeal"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.3s ease"
              }}
            />
            <div style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              opacity: 0,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "opacity 0.3s ease"
            }}
            className="hover-overlay"
            >
              <h2 style={{ margin: "0 0 0.5rem 0" }}>Sharper Curb Appeal</h2>
              <span style={{ border: "1px solid white", padding: "0.5rem 1rem", borderRadius: "4px" }}>Enter ➔</span>
            </div>
          </Link>
        </div>

        {/* Athlete Support */}
        <div style={{ position: "relative", width: "300px", height: "200px", overflow: "hidden" }}>
          <Link to="/athlete" style={{ display: "block", width: "100%", height: "100%", textDecoration: "none" }}>
            <img
              src="/images/athlete-thumbnail.jpg"
              alt="Athlete Support"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.3s ease"
              }}
            />
            <div style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              opacity: 0,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "opacity 0.3s ease"
            }}
            className="hover-overlay"
            >
              <h2 style={{ margin: "0 0 0.5rem 0" }}>Athlete Support</h2>
              <span style={{ border: "1px solid white", padding: "0.5rem 1rem", borderRadius: "4px" }}>Enter ➔</span>
            </div>
          </Link>
        </div>

        {/* Inflatables */}
        <div style={{ position: "relative", width: "300px", height: "200px", overflow: "hidden" }}>
          <Link to="/inflatables" style={{ display: "block", width: "100%", height: "100%", textDecoration: "none" }}>
            <img
              src="/images/inflatables-thumbnail.jpg"
              alt="Inflatables Rentals"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.3s ease"
              }}
            />
            <div style={{
              position: "absolute",
              top: 0, left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              opacity: 0,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              transition: "opacity 0.3s ease"
            }}
            className="hover-overlay"
            >
              <h2 style={{ margin: "0 0 0.5rem 0" }}>Inflatables Rentals</h2>
              <span style={{ border: "1px solid white", padding: "0.5rem 1rem", borderRadius: "4px" }}>Enter ➔</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Hover effect */}
      <style>
        {`
          .hover-overlay:hover {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
}