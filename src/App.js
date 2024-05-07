import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
    <Router>
      <NavMenu />
      <ScrollToTop />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}
