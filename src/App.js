import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
    return (
        <Router>
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs" 
        >
            <main>
            <Header />
            <div className="container app-container">
            <Routes>
                <Route path="/DevPortfolio/" element={<About />} />
                <Route path="/DevPortfolio/projects" element={<Projects />} />
                <Route path="/DevPortfolio/contact" element={<Contact />} />
                <Route path="/DevPortfolio/resume" element={<Resume />} />
            </Routes>
            </div>
            <Footer />
            </main>
        </ThemeProvider>
        </Router>
      );
};

export default App;
