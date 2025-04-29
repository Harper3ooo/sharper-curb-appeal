import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArrowDriveHome from './ArrowDriveHome';
import SharperCurbAppeal from './SharperCurbAppeal';
import FAQPage from './FAQPage';

export default function App() {
  return (
    <Router basename="/">
      <nav style={{
        backgroundColor: "#0d1b2a",
        padding: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "2rem"
      }}>
        <Link to="/" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
          Home
        </Link>
        <Link to="/faq" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
          FAQ
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<ArrowDriveHome />} /> {/* Homepage with logo + 3 thumbnails */}
        <Route path="/sharper-curb-appeal" element={<SharperCurbAppeal />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* Add other business pages as needed */}
      </Routes>
    </Router>
  );
}