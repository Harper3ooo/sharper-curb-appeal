import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BullcatBrandsHome from './BullcatBrandsHome';
import ArrowDriveShop from './ArrowDriveShop';
import InflatableBusiness from './InflatableBusiness';
import SharperCurbAppeal from './SharperCurbAppeal';
import BullcatBranding from './BullcatBrandsBrandingCo';
import ProductPage from './ProductPage'; // ✅ New import

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<BullcatBrandsHome />} />
        <Route path="/sharper-curb-appeal" element={<SharperCurbAppeal />} />
        <Route path="/arrow-drive" element={<ArrowDriveShop />} />
        <Route path="/inflatable-business" element={<InflatableBusiness />} />
        <Route path="/bullcat-branding" element={<BullcatBranding />} />
        <Route path="/product/:id" element={<ProductPage />} /> {/* ✅ New route */}
      </Routes>
    </Router>
  );
}
