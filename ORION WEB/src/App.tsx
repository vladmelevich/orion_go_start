import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import SeaDetailPage from './pages/SeaDetailPage';
import AirFreightDetailPage from './pages/AirFreightDetailPage';
import RailFreightDetailPage from './pages/RailFreightDetailPage';
import CustomsDetailPage from './pages/CustomsDetailPage';
import MarkingDetailPage from './pages/MarkingDetailPage';
import ContactPage from './pages/ContactPage';
import FeedbackPage from './pages/FeedbackPage';
import NotFoundPage from './pages/NotFoundPage';
import WarehouseDetailPage from './pages/WarehouseDetailPage';
import OutsourcingDetailPage from './pages/OutsourcingDetailPage';
import RoadDetailPage from './pages/RoadDetailPage';

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServiceDetailPage />} />
        <Route path="/services/sea-freight" element={<SeaDetailPage />} />
        <Route path="/services/air-freight" element={<AirFreightDetailPage />} />
        <Route path="/services/rail-freight" element={<RailFreightDetailPage />} />
        <Route path="/services/road-freight" element={<RoadDetailPage />} />
        <Route path="/services/customs" element={<CustomsDetailPage />} />
        <Route path="/services/marking" element={<MarkingDetailPage />} />
        <Route path="/services/warehouse" element={<WarehouseDetailPage />} />
        <Route path="/services/outsourcing" element={<OutsourcingDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;