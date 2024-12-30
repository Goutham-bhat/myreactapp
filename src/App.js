import React from 'react';

import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import AppStore from './components/AppStore';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />


                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/app-store" element={<AppStore />} />
            </Routes>
        </Router>
    );
}

export default App;
