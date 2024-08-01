// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import UploadPage from './pages/UploadPage'; 
import QuestionPage from './pages/QuestionPage'; 
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost normal-case text-xl">♚題目刷刷刷生成器♚</Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li><Link to="/upload">生成工具</Link></li>
                <li><Link to="/questions">編輯</Link></li>
                <li><Login /></li>
                <li><Register /></li>
              </ul>
            </div>
          </div>
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/questions" element={<QuestionPage />} />
          </Routes>
        </main>
        <footer className="bg-base-100 text-center py-4 mt-4">
          <p>© 2024 題目刷刷刷生成器</p>
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/privacy">Privacy policy</Link></li>
            <li><Link to="/terms">Terms of service</Link></li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

export default App;
