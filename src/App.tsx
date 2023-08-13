import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'; // Correct the import path for HomePage
import PortfolioPage from './Pages/PortfolioPage'; // Correct the import path for PortfolioPage
import "./App.css"

const App: React.FC = () => {
  return (
    <Router>
      <div id='App'>
        <nav className='navbar'>
          
          <ul id='nav-list'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/portfolio" className='nav-link'>Portfolio</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
