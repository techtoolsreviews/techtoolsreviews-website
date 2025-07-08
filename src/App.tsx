import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import FinanceInvesting from './pages/FinanceInvesting';
import LuxuryTravel from './pages/LuxuryTravel';
import HomeImprovement from './pages/HomeImprovement';
import TechnologyTools from './pages/TechnologyTools';
import HealthWellness from './pages/HealthWellness';
import EducationDevelopment from './pages/EducationDevelopment';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/finance-investing" element={<FinanceInvesting />} />
            <Route path="/luxury-travel" element={<LuxuryTravel />} />
            <Route path="/home-improvement" element={<HomeImprovement />} />
            <Route path="/technology-tools" element={<TechnologyTools />} />
            <Route path="/health-wellness" element={<HealthWellness />} />
            <Route path="/education-development" element={<EducationDevelopment />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;