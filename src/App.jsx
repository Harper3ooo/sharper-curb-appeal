import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import BullcatBrandsHome from './BullcatBrandsHome';
import ArrowDriveShop from './ArrowDriveShop';
import InflatableBusiness from './InflatableBusiness';
import SharperCurbAppeal from './SharperCurbAppeal';
import FAQPage from './FAQPage';
import PrintfulStore from './components/PrintfulStore'; // ✅ New import

function Navigation() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  if (isHome) return null; // 👈 hides nav on homepage

  return (
    <nav style={{
      backgroundColor: "#0d1b2a",
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      gap: "2rem"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
        Home
      </Link>
      <Link to="/faq" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
        FAQ
      </Link>
      <Link to="/inflatable-business" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
        Inflatables
      </Link>
      <Link to="/shop" style={{ color: "white", textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
        Shop
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router basename="/">
      <Navigation />
      <Routes>
        <Route path="/" element={<BullcatBrandsHome />} />
        <Route path="/sharper-curb-appeal" element={<SharperCurbAppeal />} />
        <Route path="/arrow-drive" element={<ArrowDriveShop />} />
        <Route path="/inflatable-business" element={<InflatableBusiness />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/shop" element={<PrintfulStore />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}