import React from 'react';
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    var is_authenticated = localStorage.getItem('access_token')
    return (
        is_authenticated ? <Outlet /> : <Navigate to="/home" />
    )
};

export default PrivateRoutes;