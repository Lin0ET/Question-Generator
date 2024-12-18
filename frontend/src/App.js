import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'; 
import UploadPage from './pages/UploadPage'; 
import QuestionPage from './pages/QuestionPage'; 
import { Login } from './components/Login';
import { Register } from './components/Register';
import ProtectedRoute from './components/ProtectedRoute'; // 导入 ProtectedRoute 组件


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full mx-0">
        <header className="fixed top-0 left-0 right-0 bg-base-100 z-50 w-full mx-0">
          <div className="navbar w-full">
            <div className="flex-1">
              <Link to="/" className="btn btn-ghost normal-case text-xl">♚題目刷刷刷生成器♚</Link>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal p-0">
                <li><Link to="/upload">生成工具</Link></li>
                <li><Login /></li>
                <li><Register /></li>
              </ul>
            </div>
          </div>
        </header>
        <main className="flex-grow pt-16 w-full mx-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<ProtectedRoute><UploadPage /></ProtectedRoute>} />
            <Route path="/questions" element={<QuestionPage />} />
          </Routes>
        </main>
        <footer className="bg-base-100 text-center py-4 mt-4 w-full mx-0">
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
