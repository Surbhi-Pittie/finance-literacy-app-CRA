import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import NewsSection from './NewsSection';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<NewsSection />} />
          {/* Define routes for other sections */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
