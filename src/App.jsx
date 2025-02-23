import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Resources from './pages/Resources';
import Features from './pages/Features';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
    <Navigation />  {/* Navigation should be placed here */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/resources" element={<Resources />} />
    </Routes>
    <Footer />
</Router>
  )
}

export default App
