// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import UploadPage from './pages/UploadPage'; 
import QuestionPage from './pages/QuestionPage'; 
import { fetchQuestions } from './api'; 

function App() {
  const handleFetchQuestions = () => {
    fetchQuestions()
      .then(response => {
        console.log('Questions:', response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
  };

  return (
    <Router>
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">♚題目刷刷刷生成器♚</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <li><Link to="/upload">生成工具</Link></li>
              <li><Link to="/questions">編輯</Link></li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/questions" element={<QuestionPage />} />
        </Routes>
        <button onClick={handleFetchQuestions} className="btn btn-primary mt-4">Load Questions</button>
      </div>
    </Router>
  );
}

export default App;
