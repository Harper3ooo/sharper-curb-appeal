import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SharperCurbAppeal from './SharperCurbAppeal';
import FAQPage from './FAQPage';

export default function App() {
  return (
    <Router>
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
        <Route path="/" element={<SharperCurbAppeal />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </Router>
  );
}