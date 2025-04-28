import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ArrowDriveHome from './ArrowDriveHome';
import SharperCurbAppeal from './SharperCurbAppeal';
import FAQPage from './FAQPage';
// You'll add AthletePage and InflatablesPage later

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
        <Route path="/" element={<ArrowDriveHome />} />
        <Route path="/curb" element={<SharperCurbAppeal />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* Future expansion */}
        {/* <Route path="/athlete" element={<AthletePage />} /> */}
        {/* <Route path="/inflatables" element={<InflatablesPage />} /> */}
      </Routes>
    </Router>
  );
}