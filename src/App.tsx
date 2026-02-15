import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import PricingPage from './pages/PricingPage';
import GeoServices from './pages/GeoServices';
import NotFound from './pages/NotFound';
import ScrollToTop from '../components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/education" element={<Article />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/geo-services" element={<GeoServices />} />
        <Route path="/contact" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
