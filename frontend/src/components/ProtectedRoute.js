import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const [showAlert, setShowAlert] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token && !showAlert) {
            setShowAlert(true);
            alert('請先登入!');
        }
    }, [token, showAlert]);

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
